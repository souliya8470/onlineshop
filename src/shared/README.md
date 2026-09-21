# shared/

**ໜ້າທີ່:** ຝັງຊັນລວມ (Supabase client, format helpers, UI components)

**ອີງຈາກໂຄດເກົ່າ:** ຝັງຊັນຊ່ວຍທົ່ວໄປ ໃນ `legacy/index.html`

**ສະຖານະ:**
- `supabase-client.js` — Supabase client config (URL + anon key, dev project)
- `row-mappers.js` — `rowToProduct`, `rowToChatMsg`, `rowToContent`, `rowToCost`, `rowToProductEconomics`, `rowToAdmin`, `rowToInsight`, `rowToReport`, `rowToFeedback`, `rowToAttendance` — **ຄັດລອກ** ມາຈາກ legacy (ຍັງບໍ່ໄດ້ໃຊ້ຈິງ, ຄັດລອກແມ່ນເພື່ອກຽມໄວ້)
- `pricing-economics.js` — `computeBreakevenAcos`, `computeBreakevenRoas`, `computeProfitAtAcos` — **ຄັດລອກ** ມາຈາກ legacy
- `geo-helpers.js` — `distanceMeters`, `mapThumbnail` — **ຄັດລອກ** ມາຈາກ legacy (pure function ເທົ່ານັ້ນ; `isOutsideShopRadius`/`outOfRangeBadge` ອີງ STATE ຮ່ວມ ຍັງບໍ່ໄດ້ຍົກມາ)

ທຸກໄຟລ໌ຂ້າງເທິງນີ້ **ຍັງບໍ່ໄດ້ເຊື່ອມເຂົ້າກັບແອັບຈິງ** — `legacy/index.html` ຍັງໃຊ້ຝັງຊັນຂອງມັນເອງຄືເກົ່າ 100%. ການ "ສະຫຼັບ" ໃຫ້ແອັບໃຊ້ໄຟລ໌ໃໝ່ເຫຼົ່ານີ້ແທນ ຈະເຮັດໃນຮອບຕໍ່ໄປ ພ້ອມໃຫ້ Tar ທົດສອບຄລິກໃຊ້ຈິງຫຼັງແຕ່ລະການປ່ຽນແປງ.
