import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const inputDir = './static'; // ganti sesuai kebutuhan

fs.readdirSync(inputDir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(
        inputDir,
        path.basename(file, ext) + '.webp'
    );

    sharp(inputPath)
        .webp({ quality: 3 })
        .toFile(outputPath)
        .then(() => {
            console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`);
        })
        .catch(err => {
            console.error(`❌ Failed to convert ${file}:`, err.message);
        });
});