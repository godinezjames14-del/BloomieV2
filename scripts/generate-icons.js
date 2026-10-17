import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

function drawFlowerIcon(size, isMaskable = false) {
  const png = new PNG({ width: size, height: size });
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * (isMaskable ? 0.38 : 0.44);

  // Background teal: #0D9488 (13, 148, 136)
  const bgR = 13, bgG = 148, bgB = 136;
  // Petal white: #FAF6F4 (250, 246, 244)
  const petR = 250, petG = 246, petB = 244;
  // Core gold: #F59E0B (245, 158, 11)
  const goldR = 245, goldG = 158, goldB = 11;
  // Center light: #FCD34D (252, 211, 77)
  const coreR = 252, coreG = 211, coreB = 77;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (size * y + x) << 2;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Default background
      let r = bgR, g = bgG, b = bgB, a = 255;

      // Soft rounded container corner for regular icons
      if (!isMaskable) {
        const cornerR = size * 0.22;
        const qx = Math.max(Math.abs(dx) - (size / 2 - cornerR), 0);
        const qy = Math.max(Math.abs(dy) - (size / 2 - cornerR), 0);
        if (qx * qx + qy * qy > cornerR * cornerR) {
          a = 0;
        }
      }

      if (a > 0) {
        // Draw 8 flower petals
        const angle = Math.atan2(dy, dx);
        const petalDist = Math.abs(Math.sin(angle * 4)) * (radius * 0.72) + (radius * 0.28);
        if (dist < petalDist) {
          r = petR;
          g = petG;
          b = petB;
        }

        // Draw flower center
        const centerR = radius * 0.32;
        if (dist < centerR) {
          r = goldR;
          g = goldG;
          b = goldB;
          if (dist < centerR * 0.45) {
            r = coreR;
            g = coreG;
            b = coreB;
          }
        }
      }

      png.data[idx] = r;
      png.data[idx + 1] = g;
      png.data[idx + 2] = b;
      png.data[idx + 3] = a;
    }
  }

  return PNG.sync.write(png);
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), drawFlowerIcon(192, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), drawFlowerIcon(512, false));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), drawFlowerIcon(512, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), drawFlowerIcon(180, false));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), drawFlowerIcon(48, false));

console.log('All PWA PNG icons generated successfully!');
