import { redirect } from '@sveltejs/kit';

// URL dasar (Base URL) untuk server Backend (ElysiaJS)
// Gunakan URL absolute ini karena Hooks berjalan di server dan tidak menggunakan Vite Proxy.
const BACKEND_URL = 'http://localhost:3001';

// Daftar rute yang HANYA boleh diakses setelah login
const protectedRoutes = [
    '/behind', 
    '/front', 
    '/settings' 
    // Tambahkan semua rute terproteksi di sini
];

// Helper untuk memeriksa apakah path adalah rute terproteksi
const isProtectedRoute = (path) => {
    return protectedRoutes.some(route => path.startsWith(route));
};

// Fungsi Handle SvelteKit, dijalankan sebelum rute apa pun diproses
export const handle = (async ({ event, resolve }) => {
    const path = event.url.pathname;
    
    // 1. Lewati rute publik (misalnya /) dan semua rute yang tidak terproteksi.
    if (path === '/' || !isProtectedRoute(path)) {
        return resolve(event);
    }

    // 2. Ambil token JWT dari cookie
    const jwt = event.cookies.get('jwt');
    
    if (!jwt) {
        // Jika tidak ada token, langsung redirect ke halaman login
        throw redirect(302, '/');
    }

    // 3. Verifikasi Token ke Backend (ElysiaJS)
    try {
        const verificationResponse = await fetch(`${BACKEND_URL}/verifyToken`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Mengirim token yang diambil dari cookie
            body: JSON.stringify({ token: jwt })
        });

        // 4. Evaluasi Respons
        if (!verificationResponse.ok) {
            // Jika status 401 atau lainnya, asumsikan token invalid/expired
            event.cookies.delete('jwt', { path: '/' }); // Hapus cookie yang rusak
            throw redirect(302, '/'); 
        }
        
    } catch (error) {
        // Jika terjadi error jaringan (BE mati atau tidak bisa dijangkau)
        console.error('Authentication check failed:', error);
        event.cookies.delete('jwt', { path: '/' }); 
        throw redirect(302, '/'); 
    }
    
    // 5. Jika token valid dan otorisasi berhasil, lanjutkan rendering halaman
    return resolve(event);
});
