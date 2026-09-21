// shared/supabase-client.js
//
// Supabase client ດຽວ ໃຫ້ທຸກໂມດູນນຳໄປໃຊ້ຮ່ວມກັນ (import ຈາກທີ່ນີ້ ບໍ່ໃຫ້ສ້າງ client ຊ້ຳຫຼາຍບ່ອນ)
//
// ຄ່າ URL + anon key ຂ້າງລຸ່ມນີ້ ແມ່ນຂອງ project Supabase "ພັດທະນາ/ທົດສອບ" (free-tier,
// ບັນຊີແຍກຕ່າງຫາກ) — ບໍ່ແມ່ນ project ຂອງ Sykhai Shop ຈິງ. ປອດໄພທີ່ຈະໃສ່ໄວ້ໃນໂຄດ client-side
// ເພາະ anon key ຖືກອອກແບບມາໃຫ້ເປີດເຜີຍໄດ້ — ຄວາມປອດໄພແທ້ຢູ່ທີ່ RLS policy ໃນຖານຂໍ້ມູນ (ເຟດ 3).
//
// ຕອນຍ້າຍໄປ project ຈິງ (ເຟດ 6) ໃຫ້ປ່ຽນ 2 ຄ່ານີ້ເທົ່ານັ້ນ.

export const SUPABASE_URL = 'https://mjbhgtjnxcflqzmcfnyv.supabase.co';
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qYmhndGpueGNmbHF6bWNmbnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5NzgxNzUsImV4cCI6MjEwNTU1NDE3NX0.JUl2LxbzHCOOISIL9YJNjgJT23LN0jLmQhn4vojXtEA';

// ໃຊ້ຮ່ວມກັບ supabase-js (ຕິດຕັ້ງຕອນເຟດ 2 ເມື່ອມີ build tool/package.json ແລ້ວ)
// import { createClient } from '@supabase/supabase-js';
// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
