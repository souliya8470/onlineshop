# Online Shop + POS SaaS (multi-tenant)

ລະບົບ SaaS ຫຼາຍຮ້ານ — ໃຫ້ຮ້ານອື່ນເຊົ່າໃຊ້ໄດ້ນຳ.

**ໂປເຈັກນີ້ແຍກອອກຈາກລະບົບ Sykhai Shop ປັດຈຸບັນທັງໝົດ** (repo ໃໝ່, domain ໃໝ່, ຖານຂໍ້ມູນໃໝ່) — ລະບົບຂາຍຈິງຂອງ Sykhai Shop ຈະບໍ່ຖືກແຕະຕ້ອງ ຫຼືມີຄວາມສ່ຽງໃດໆລະຫວ່າງພັດທະນາ.

## ⚠️ ປ່ຽນທິດທາງ (2026-09-21)

ໂປເຈັກນີ້ເລີ່ມຕົ້ນອີງໂຄດຈາກ **Marketing Studio** (ແຜນເດີມ: [ແຜນພັດທະນາລະບົບ SaaS ຫຼາຍຮ້ານ](https://claude.ai/artifact/ApQDeFuq6QzZ41xmqDTUJX)). ຫຼັງຈາກ 4 ຮອບພັດທະນາ (ເຟດ 1 ສຳເລັດ, ເຟດ 2 ເລີ່ມຕົ້ນແຍກໂມດູນ), Tar ຕັດສິນໃຈປ່ຽນທິດທາງ: ລູກຄ້າສົນໃຈ **ໜ້າຮ້ານອອນລາຍ** ຫຼາຍກວ່າ Marketing Studio (ເຄື່ອງມືບໍລິຫານຫຼັງບ້ານທີ່ຊັບຊ້ອນ+ຜູກກັບ Sykhai Shop ສະເພາະ) — ດັ່ງນັ້ນລະບົບ SaaS ໃໝ່ຈະອີງໃສ່:

- **POS** ([souliya8470/sykhai-pos](https://github.com/souliya8470/sykhai-pos), pos.touktashop.online)
- **ໜ້າຮ້ານອອນລາຍ** (shop.touktashop.online — checkout.html/store.html/links.html/orders)

ວາງແຜນຂາຍເປັນແພັກເກັດ:
- **ແພັກເກັດ 1**: ໜ້າຮ້ານອອນລາຍທັງໝົດຢ່າງດຽວ
- **ແພັກເກັດ 2**: POS + ໜ້າຮ້ານອອນລາຍທັງໝົດ

ວຽກເກົ່າອີງ Marketing Studio ຢຸດພັກໄວ້ຊົ່ວຄາວ (ບໍ່ລຶບ — ຍ້າຍໄປ `legacy-marketing-studio/`, ຍັງເກັບໄວ້ໃນ git history ທັງໝົດ, ເອົາມາໃຊ້ຄືນພາຍຫຼັງໄດ້ຖ້າຕ້ອງການ).

**ວັດຖຸດິບຄົບແລ້ວ (2026-09-21):** ໄດ້ຮັບໄຟລ໌ຕົ້ນສະບັບໜ້າຮ້ານອອນລາຍ (index/links/store/checkout/orders/chat.html) ຈາກ Tar ແລ້ວ — ເກັບໄວ້ໃນ `legacy-storefront/`.

**ຂັ້ນຕອນທຳອິດ — ປ່ຽນເປັນ ES module (2026-09-21):** ທັງ 5 ໄຟລ໌ໃນ `legacy-storefront/` ປ່ຽນ `<script>` → `<script type="module">` ແລ້ວ (ລາຍລະອຽດ: `legacy-storefront/README.md`). ອັບເດດ `vite.config.js` ໃຫ້ຮັບໃຊ້ຈາກ repo root ແລ້ວ (ບໍ່ໄດ້ຊີ້ໃສ່ໂຟນເດີ້ດຽວອີກຕໍ່ໄປ) — ທົດສອບໄດ້ທັງ 3 ລະບົບເກົ່າ (Marketing Studio, POS, ໜ້າຮ້ານອອນລາຍ) ພ້ອມກັນຜ່ານ `npm run dev` ດຽວ, ແຕ່ລະລະບົບເປີດຜ່ານທາງ URL ຂອງຕົນເອງ. ເພີ່ມ `index.html` ໃໝ່ຢູ່ root (ໜ້າລິ້ງລວມສຳລັບພັດທະນາເທົ່ານັ້ນ, ບໍ່ແມ່ນລະບົບຈິງ). ທົດສອບແລ້ວ: `npm run build` ຜ່ານ 0 error, ທຸກໜ້າ (9 ໜ້າ) ໄດ້ HTTP 200 ຜ່ານ `npm run dev`.

**ຂັ້ນຕໍ່ໄປ:** ວາງແຜນໂຄງສ້າງໂຟນເດີ້ `src/` ໃໝ່ (ຮ່ວມ POS+ໜ້າຮ້ານ) ໃຫ້ Tar ຢືນຢັນ ແລ້ວເລີ່ມແຍກໂຄດຮ່ວມອອກ (shop-config, cart) ອອກຈາກແຕ່ລະໄຟລ໌ເທື່ອລະໜ້ອຍ.

### 🧪 ກຽມໃຫ້ລູກຄ້າຈິງທົດລອງ — khaiyluam.touktashop.online (2026-09-24)

Tar ຕັດສິນໃຈໃຫ້ລູກຄ້າຈິງເຂົ້າທົດລອງໜ້າຮ້ານອອນລາຍ (ບໍ່ແມ່ນ localhost) ເພື່ອເກັບ feedback. ລາຍລະອຽດ+ໄຟລ໌ທີ່ເພີ່ມ: ເບິ່ງ `legacy-storefront/README.md`. ສະຫຼຸບສັ້ນໆ:

- ເລືອກ URL ສາທາລະນະ: `khaiyluam.touktashop.online` (subdomain ໃໝ່, Cloudflare Pages project ໃໝ່ຄົນລະອັນກັບ production — ບໍ່ກະທົບ `shop.`/`pos.`/`marketing.` ເລີຍ)
- ສ້າງ `legacy-storefront/dev-database-setup.sql` — ສະຄຣິບຕັ້ງຕາຕະລາງ+ຂໍ້ມູນຕົວຢ່າງຄົບຊຸດ ໃນຖານຂໍ້ມູນ dev (ອ່ານໂຄງສ້າງຈາກໂຄດເທົ່ານັ້ນ, ບໍ່ໄດ້ແຕະຖານຂໍ້ມູນຈິງ) — Tar ຕ້ອງຮັນເອງໃນ Supabase SQL Editor ຂອງ project dev
- ໃສ່ສິນຄ້າຕົວຢ່າງ 3 ອັນ (ຊື່/ລາຄາ/ຮູບຈິງ ທີ່ Tar ຢືນຢັນ): ປິດຈຸກບູມ, ມາກໜ້າໄຮໂດເຈວຜິວເດັກກັບມ່ວງ, ສະເປອິງຟ້າ
- QR ຊຳລະເງິນ **ບໍ່ໃສ່ຄ່າຈິງ** ໃນ dev ໂດຍເຈດຕະນາ — ກັນລູກຄ້າສະແກນຈ່າຍເງິນຈິງເຂົ້າຜິດບັນຊີ, ໜ້າຊຳລະຈະສະແດງຂໍ້ຄວາມ "ເວີຊັນທົດລອງ" ແທນ ແລະລູກຄ້າຍັງອັບໂຫຼດຮູບຫຍັງກໍໄດ້ເພື່ອທົດລອງຂັ້ນຕອນຕໍ່ໄດ້
- ເພີ່ມແຖບ "🧪 ເວີຊັນທົດລອງ" ເທິງທຸກໜ້າ ໃຫ້ລູກຄ້າຮູ້ຈາກຕົ້ນ (ລຶບອອກກ່ອນອອກສູ່ຈິງ, ເຟດ 6)
- ວິທີ deploy: ອັບໂຟນເດີ້ `legacy-storefront/` ຂຶ້ນ Cloudflare Pages project ໃໝ່ (Direct Upload) + ຕໍ່ domain `khaiyluam.touktashop.online` ເຂົ້ານຳ — ຂັ້ນຕອນລະອຽດ ຂ້ອຍພາ Tar ເຮັດເທື່ອລະຂັ້ນຕອນໃນແຊັດ

### ⚠️ ພົບ+ແກ້ບັນຫາຄວາມປອດໄພ (2026-09-21)

ຕອນກວດໄຟລ໌ຕົ້ນສະບັບທັງໝົດ (Marketing Studio, POS, ໜ້າຮ້ານ) ພົບວ່າ **ທຸກໄຟລ໌ຍັງຜູກຢູ່ກັບ project Supabase ຈິງຂອງ Sykhai Shop** (`swrijpkkufarddsyqhrh`) — ນີ້ແມ່ນຄວາມຜິດພາດຕົກຄ້າງແຕ່ Phase 1 (ຕອນຄັດລອກໄຟລ໌ Marketing Studio ເຂົ້າມາຄັ້ງທຳອິດ, ບໍ່ໄດ້ປ່ຽນ URL Supabase ນຳ). ໄດ້ແກ້ໄຂໝົດແລ້ວ — ທັງ 3 ລະບົບ (`legacy-marketing-studio/`, `legacy-pos/`, `legacy-storefront/`) ຕອນນີ້ຊີ້ໃສ່ project ພັດທະນາ/ທົດສອບແຍກຕ່າງຫາກ (`mjbhgtjnxcflqzmcfnyv`) ໝົດແລ້ວ, ບໍ່ມີຄວາມສ່ຽງຕໍ່ຂໍ້ມູນຈິງອີກຕໍ່ໄປ.

ແຜນພັດທະນາລະອຽດ (ຫຼັກການອອກແບບ, ການອອກແບບຖານຂໍ້ມູນ multi-tenant+RLS, ຂັ້ນຕອນ 6 ເຟດ, ຄວາມສ່ຽງ) — ຫຼັກການທົ່ວໄປຍັງໃຊ້ໄດ້ (multi-tenant, RLS, git ແທ້, ແຍກໂມດູນ), ພຽງແຕ່ໂຄດຕົ້ນສະບັບປ່ຽນ: ເບິ່ງ [ແຜນພັດທະນາລະບົບ SaaS ຫຼາຍຮ້ານ](https://claude.ai/artifact/ApQDeFuq6QzZ41xmqDTUJX)

## ວິທີເປີດທົດສອບ (ຫຼັງມີ Node.js ຕິດຕັ້ງໃນເຄື່ອງ)

```
npm install
npm run dev
```

ຈະເປີດເວັບຢູ່ `http://localhost:5173` — ໜ້າທຳອິດແມ່ນລິ້ງລວມໄປຫາທັງ 3 ລະບົບເກົ່າ (Marketing Studio ⏸, POS, ໜ້າຮ້ານອອນລາຍ), ກົດເລືອກລະບົບທີ່ຕ້ອງການທົດສອບໄດ້ເລີຍ.

## ໂຄງສ້າງໂຟນເດີ້ (ປັດຈຸບັນ, ລະຫວ່າງປ່ຽນທິດທາງ)

```
index.html                 ໜ້າລິ້ງລວມສຳລັບພັດທະນາ/ທົດສອບເທົ່ານັ້ນ (ບໍ່ແມ່ນລະບົບຈິງ)
src/shared/               ຝັງຊັນລວມ — ອີງ Marketing Studio ເດີມ, ຕ້ອງທົບທວນຄືນ (ໂຄງສ້າງໃໝ່ຍັງບໍ່ວາງແຜນ)
legacy-marketing-studio/  ໂຄດ Marketing Studio ເກົ່າ (v7.81) — ⏸ ຢຸດພັກ
legacy-pos/                ໂຄດ POS ຕົ້ນສະບັບ (v2.39, ຈາກ souliya8470/sykhai-pos) — ຄັດລອກ+ແກ້ Supabase URL, ຍັງບໍ່ໄດ້ຕໍ່ Vite
legacy-storefront/         ໂຄດໜ້າຮ້ານອອນລາຍຕົ້ນສະບັບ (index/links/store/checkout/orders/chat.html) — ຄັດລອກ+ແກ້ Supabase URL, ປ່ຽນເປັນ ES module ແລ້ວ
package.json               Vite + npm scripts (dev/build/preview)
vite.config.js              ຕັ້ງ Vite (ຮັບໃຊ້ຈາກ repo root, ທົດສອບໄດ້ທັງ 3 ລະບົບພ້ອມກັນ)
```

ໂຄງສ້າງ `src/` ໃໝ່ (ໂມດູນຕາມ POS + ໜ້າຮ້ານ) — ວັດຖຸດິບຄົບແລ້ວ, ກຳລັງວາງແຜນ, ຈະນຳສະເໜີໃຫ້ Tar ຢືນຢັນກ່ອນລົງມືແຍກໂມດູນແທ້.

## ສະຖານະ

- [x] **ເຟດ 1 — ຕັ້ງໂຄງລ່າງ**: git repo ໃໝ່, Vite, Supabase dev project — ສຳເລັດ (ອີງ Marketing Studio, ຍັງໃຊ້ໂຄງລ່າງນີ້ຄືເກົ່າ)
- [~] **ເຟດ 2 — ແຍກໂມດູນ**: ⏸ ວຽກອີງ Marketing Studio ຢຸດພັກ (round 1-4 ສຳເລັດ ແລະເກັບໄວ້ໃນ `legacy-marketing-studio/`) — ວັດຖຸດິບ POS ✅ + ໜ້າຮ້ານອອນລາຍ ✅ ຄົບແລ້ວ (ທັງໝົດແກ້ Supabase URL ໃຫ້ປອດໄພແລ້ວ) — ຂັ້ນຕໍ່ໄປ: ວາງແຜນໂຄງສ້າງ `src/` ໃໝ່ ໃຫ້ Tar ຢືນຢັນ ກ່ອນເລີ່ມແຍກໂມດູນອັນໃໝ່
- [ ] **ເຟດ 3 — ເຮັດເປັນ multi-tenant**: ຕາຕະລາງ shops/shop_settings, RLS ທຸກຕາຕະລາງ
- [ ] **ເຟດ 4 — ໜ້າສະໝັກ/ຕັ້ງຄ່າຮ້ານໃໝ່**: onboarding wizard
- [ ] **ເຟດ 5 — ທົດສອບ**: ຂໍ້ມູນຈຳລອງຫຼາຍຮ້ານ, ກວດ RLS
- [ ] **ເຟດ 6 — ອອກສູ່ຈິງ**: Supabase project ຈິງ + domain ຈິງ, pilot 1-2 ຮ້ານ

## ສະພາບແວດລ້ອມພັດທະນາ

ໃຊ້ Supabase project free-tier ຊົ່ວຄາວ (ບັນຊີແຍກຕ່າງຫາກ, ອົງກອນ `chandom`, region Singapore) ສຳລັບເຟດ 1-5 — **ບໍ່ແມ່ນ ແລະບໍ່ກ່ຽວຂ້ອງກັບ project ຂອງ Sykhai Shop ຈິງເລີຍ**. ຄ່າ URL + anon key ຢູ່ໃນ `src/shared/supabase-client.js`.

ຕອນເຟດ 6 (ອອກສູ່ຈິງ) ຈະສ້າງ project ຈິງໃນອົງກອນ Toukta Shop (Pro) ແລ້ວປ່ຽນ 2 ຄ່ານີ້, ພ້ອມຍ້າຍ schema+ຂໍ້ມູນ.

## ໝາຍເຫດ: minify ຕອນ build

`npm run build` (production) ຈະ minify ໂຄດ ແລະ **ລຶບ comment ທັງໝົດ** (ລວມທັງ comment ປະຫວັດ APP_VERSION) — ອັນນີ້ປົກກະຕິສຳລັບ production build ແຕ່ຍັງບໍ່ໄດ້ຕັ້ງຄ່າໃຫ້ຮັກສາ comment ໄວ້. ຈະແກ້ກ່ອນອອກສູ່ຈິງແທ້ (ເຟດ 6). ຕອນນີ້ໃຊ້ `npm run dev` ສຳລັບພັດທະນາ/ທົດສອບ (ບໍ່ minify, ຄືໄຟລ໌ເດີມ 100%).
