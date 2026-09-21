import { defineConfig } from 'vite';

// v0.0.1 SaaS-fork ONLY (2026-09-21): ທິດທາງໂປເຈັກປ່ຽນ -- ອີງໂຄດ POS (souliya8470/sykhai-pos)
// + ໜ້າຮ້ານອອນລາຍ ແທນ Marketing Studio (ເຫດຜົນ: ລູກຄ້າສົນໃຈໜ້າຮ້ານອອນລາຍຫຼາຍກວ່າ). ວຽກເກົ່າອີງ
// Marketing Studio (legacy-marketing-studio/) ຢຸດພັກໄວ້ຊົ່ວຄາວ -- ຍັງເກັບໄວ້ໃນ git history.
// ຊົ່ວຄາວນີ້ຍັງໃຫ້ Vite ຮັບໃຊ້ໄຟລ໌ Marketing Studio (ເກົ່າ) ຢູ່ ເພື່ອ `npm run dev` ຍັງໃຊ້ການໄດ້
// ບໍ່ຜິດພາດ ຂະນະລໍຖ້າໄຟລ໌ຕົ້ນສະບັບ POS/ໜ້າຮ້ານ ເພື່ອວາງໂຄງສ້າງໃໝ່ໃຫ້ຖືກຕ້ອງ.
export default defineConfig({
  root: 'legacy-marketing-studio',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
