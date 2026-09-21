import { defineConfig } from 'vite';

// ຂັ້ນຕອນນີ້ (ເຟດ 2 ຮອບ 1): ໃຫ້ Vite ຮັບໃຊ້ໄຟລ໌ legacy/index.html ຊື່ໆ ໂດຍບໍ່ແກ້ໄຂ
// logic ພາຍໃນຫຍັງເລີຍ — ຈຸດປະສົງແມ່ນພິສູດວ່າ build tool ໃຊ້ການໄດ້ຈິງ ໂດຍທີ່ແອັບຍັງເຮັດວຽກ
// ຄືເກົ່າ 100% ກ່ອນ, ແລ້ວຈຶ່ງແຍກ index.html ອອກເປັນໂມດູນ (src/auth, src/pos, ...) ເທື່ອລະໜ່ວຍ
// ໃນຮອບຕໍ່ໆໄປ, ພ້ອມທົດສອບທຸກຮອບ.
export default defineConfig({
  root: 'legacy',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
