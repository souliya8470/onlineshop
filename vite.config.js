import { defineConfig } from 'vite';
import { resolve } from 'path';

// v0.0.1 SaaS-fork ONLY (2026-09-21): ອັບເດດ -- Vite ຮັບໃຊ້ຈາກ repo root ແລ້ວ (ບໍ່ແມ່ນຊີ້ໃສ່
// ໂຟນເດີ້ດຽວອີກຕໍ່ໄປ) ເພື່ອໃຫ້ທົດສອບໄດ້ທັງ 3 ລະບົບເກົ່າ (legacy-marketing-studio, legacy-pos,
// legacy-storefront) ພ້ອມກັນໃນ `npm run dev` ດຽວ -- ແຕ່ລະລະບົບເປີດຜ່ານທາງ URL ຂອງຕົນເອງ:
//   http://localhost:5173/                                   → ໜ້າລິ້ງລວມສຳລັບພັດທະນາ (index.html)
//   http://localhost:5173/legacy-marketing-studio/index.html → Marketing Studio (⏸ ຢຸດພັກ)
//   http://localhost:5173/legacy-pos/index.html               → POS
//   http://localhost:5173/legacy-storefront/links.html        → ໜ້າຮ້ານອອນລາຍ (link-in-bio)
//   http://localhost:5173/legacy-storefront/store.html        → ໜ້າຮ້ານອອນລາຍ (ເລືອກສິນຄ້າ)
//   http://localhost:5173/legacy-storefront/checkout.html     → ໜ້າຮ້ານອອນລາຍ (ຊຳລະ)
//   http://localhost:5173/legacy-storefront/orders.html       → ໜ້າຮ້ານອອນລາຍ (ກວດອໍເດີ)
//   http://localhost:5173/legacy-storefront/chat.html         → ໜ້າຮ້ານອອນລາຍ (ແຊັດ)
// ນີ້ແມ່ນແກ້ແຕ່ config ຂອງ repo ໃໝ່ນີ້ເທົ່ານັ້ນ -- ບໍ່ກະທົບລະບົບຈິງ (marketing/pos/shop.touktashop.online)
// ເພາະລະບົບຈິງເຫຼົ່ານັ້ນ deploy ຈາກ repo/ໂຟນເດີ້ຄົນລະບ່ອນ, ບໍ່ໄດ້ໃຊ້ Vite config ນີ້ເລີຍ.
export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // multi-page build: ລະບຸທຸກ .html ທີ່ຕ້ອງການໃຫ້ build ໄດ້ (ສຳລັບກວດ `npm run build` ບໍ່ໃຫ້ error ເທົ່ານັ້ນ,
      // ລະບົບຈິງແຕ່ລະອັນຍັງ deploy ແຍກກັນຄືເກົ່າ, ບໍ່ໄດ້ໃຊ້ dist/ ນີ້)
      input: {
        dev: resolve(process.cwd(), 'index.html'),
        'marketing-studio': resolve(process.cwd(), 'legacy-marketing-studio/index.html'),
        pos: resolve(process.cwd(), 'legacy-pos/index.html'),
        'storefront-index': resolve(process.cwd(), 'legacy-storefront/index.html'),
        'storefront-links': resolve(process.cwd(), 'legacy-storefront/links.html'),
        'storefront-store': resolve(process.cwd(), 'legacy-storefront/store.html'),
        'storefront-checkout': resolve(process.cwd(), 'legacy-storefront/checkout.html'),
        'storefront-orders': resolve(process.cwd(), 'legacy-storefront/orders.html'),
        'storefront-chat': resolve(process.cwd(), 'legacy-storefront/chat.html'),
      },
    },
  },
  server: {
    port: 5173,
  },
});
