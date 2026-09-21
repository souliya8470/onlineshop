# shared/

**ໜ້າທີ່:** ຝັງຊັນລວມ (Supabase client, format helpers, UI components)

**ອີງຈາກໂຄດເກົ່າ:** ຝັງຊັນຊ່ວຍທົ່ວໄປ ໃນ `legacy/index.html`

**ສະຖານະ:**
- `supabase-client.js` — Supabase client config (URL + anon key, dev project)
- `row-mappers.js` — `rowToProduct`, `rowToChatMsg`, `rowToContent`, `rowToCost`, `rowToProductEconomics`, `rowToAdmin`, `rowToInsight`, `rowToReport`, `rowToFeedback`, `rowToAttendance` — **ຄັດລອກ** ມາຈາກ legacy (ຍັງບໍ່ໄດ້ໃຊ້ຈິງ, ຄັດລອກແມ່ນເພື່ອກຽມໄວ້)
- `pricing-economics.js` — `computeBreakevenAcos`, `computeBreakevenRoas`, `computeProfitAtAcos` — **ຄັດລອກ** ມາຈາກ legacy
- `geo-helpers.js` — `distanceMeters`, `mapThumbnail` — ✅ **ເຊື່ອມແລ້ວ** (round 4, 2026-09-21): `legacy/index.html` now `import`s both functions from this file instead of defining its own copies. `isOutsideShopRadius`/`outOfRangeBadge` (which depend on shared `STATE`) still live in `legacy/index.html` unchanged — they now simply call the imported `distanceMeters`/`mapThumbnail`.

ໄຟລ໌ `row-mappers.js` ແລະ `pricing-economics.js` ຍັງ **ບໍ່ໄດ້ເຊື່ອມເຂົ້າກັບແອັບຈິງ** — `legacy/index.html` ຍັງໃຊ້ຝັງຊັນຂອງມັນເອງຄືເກົ່າ 100% ສຳລັບສອງໄຟລ໌ນີ້. ການ "ສະຫຼັບ" ໃຫ້ແອັບໃຊ້ໄຟລ໌ໃໝ່ເຫຼົ່ານີ້ແທນ ຈະເຮັດໃນຮອບຕໍ່ໄປ ພ້ອມໃຫ້ Tar ທົດສອບຄລິກໃຊ້ຈິງຫຼັງແຕ່ລະການປ່ຽນແປງ.
