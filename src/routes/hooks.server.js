// src/hooks.server.js
import { redirect } from '@sveltejs/kit';

const BACKEND_URL = 'http://localhost:3001';

// Semua route yang perlu autentikasi
const protectedRoutes = ['/behind', '/front', '/front/waiters', '/settings', '/cpanels'];

// Hak akses berdasarkan role
const rolePermissions = {
	users: ['/behind', '/front', '/settings'],
	admin: '*', 
	super: '*' 
};

const adminBlacklist = ['/cpanels'];

function isProtectedRoute(path) {
	return protectedRoutes.some((route) => path.startsWith(route));
}

// Fungsi bantu: verifikasi dan ambil user dari backend via cookie
async function getUserFromBackend(event) {
	try {
		const response = await fetch(`${BACKEND_URL}/verifyToken`, {
			method: 'GET',
			headers: {
				cookie: event.request.headers.get('cookie') // forward cookies ke BE
			},
			credentials: 'include'
		});

		if (!response.ok) return null;

		const data = await response.json();
		return data.user; // { role: 'users' | 'admin' | 'super' }
	} catch (err) {
		console.error('Gagal verifikasi ke backend:', err);
		return null;
	}
}

function isAccessAllowed(role, path) {
	if (role === 'super') return true;
	if (role === 'admin') {
		return !adminBlacklist.some((black) => path.startsWith(black));
	}
	if (role === 'users') {
		return rolePermissions.users.some((route) => path.startsWith(route));
	}
	return false;
}

export const handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	if (!isProtectedRoute(pathname)) {
		return resolve(event);
	}

	// Verifikasi user via backend
	const user = await getUserFromBackend(event);

	if (!user) {
		// Kalau tidak valid, redirect ke login
		throw redirect(302, '/');
	}

	event.locals.user = user;

	const allowed = isAccessAllowed(user.role, pathname);
	if (!allowed) {
		throw redirect(302, '/unauthorized');
	}

	return resolve(event);
};
