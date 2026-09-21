# Marketing Studio SaaS (multi-tenant)

ລະບົບ SaaS ຫຼາຍຮ້ານ ພັດທະນາຕໍ່ຍອດຈາກ [Marketing Studio](https://marketing.touktashop.online) ຂອງ ຮ້ານຕຸກຕາສີໄຄ (Sykhai Shop) — ໃຫ້ຮ້ານອື່ນເຊົ່າໃຊ້ໄດ້ນຳ.

**ໂປເຈັກນີ້ແຍກອອກຈາກລະບົບ Sykhai Shop ປັດຈຸບັນທັງໝົດ** (repo ໃໝ່, domain ໃໝ່, ຖານຂໍ້ມູນໃໝ່) — ລະບົບຂາຍຈິງຂອງ Sykhai Shop ຈະບໍ່ຖືກແຕະຕ້ອງ ຫຼືມີຄວາມສ່ຽງໃດໆລະຫວ່າງພັດທະນາ.

ແຜນພັດທະນາລະອຽດ (ຫຼັກການອອກແບບ, ໂຄງສ້າງໂຄດ, ການອອກແບບຖານຂໍ້ມູນ multi-tenant+RLS, ຂັ້ນຕອນ 6 ເຟດ, ຄວາມສ່ຽງ): ເບິ່ງ [ແຜນພັດທະນາລະບົບ SaaS ຫຼາຍຮ້ານ](https://claude.ai/artifact/ApQDeFuq6QzZ41xmqDTUJX)

## ໂຄງສ້າງໂຟນເດີ້

```
src/
  auth/             Login, ສິດຜູ້ໃຊ້, ເລືອກຮ້ານ (tenant switch)
  orders/           ອອນລາຍ, ຍືນຍັນອອເດີ, ປະຫວັດອອເດີ
  shipping-labels/  ສ້າງ/ພິມໃບບິນ, ປະຫວັດພິມ
  courier-bills/    ນຳເຂົ້າ/ຈັບຄູ່ບິນຂົນສົ່ງ (OCR)
  pos/              ຂາຍໜ້າຮ້ານ, ສະຕັອກ
  marketing/        ໂຄສະນາ Facebook, CRM
  shop-settings/    ຕັ້ງຄ່າສະເພາະຮ້ານ (ໃໝ່ທັງໝົດ)
  shared/           ຝັງຊັນລວມ (Supabase client, format, UI components)
legacy/
  index.html        ໂຄດ Marketing Studio ເກົ່າ (2.7MB, v7.37) — ຈຸດເລີ່ມຕົ້ນ, ຍັງບໍ່ໄດ້ແກ້ໄຂ
  sw.js             Service Worker ເກົ່າ
```

## ສະຖານະ

- [x] **ເຟດ 1 — ຕັ້ງໂຄງລ່າງ**: git repo ໃໝ່, ໂຄງສ້າງໂຟນເດີ້, ຄັດລອກໂຄດເກົ່າເຂົ້າມາ
- [ ] **ເຟດ 2 — ແຍກໂມດູນ**: ຕັດ index.html ອອກເປັນໄຟລ໌ຕາມໂມດູນ, ຕັ້ງ build tool (Vite)
- [ ] **ເຟດ 3 — ເຮັດເປັນ multi-tenant**: ຕາຕະລາງ shops/shop_settings, RLS ທຸກຕາຕະລາງ
- [ ] **ເຟດ 4 — ໜ້າສະໝັກ/ຕັ້ງຄ່າຮ້ານໃໝ່**: onboarding wizard
- [ ] **ເຟດ 5 — ທົດສອບ**: ຂໍ້ມູນຈຳລອງຫຼາຍຮ້ານ, ກວດ RLS
- [ ] **ເຟດ 6 — ອອກສູ່ຈິງ**: Supabase project ຈິງ + domain ຈິງ, pilot 1-2 ຮ້ານ

## ສະພາບແວດລ້ອມພັດທະນາ

ໃຊ້ Supabase project free-tier ຊົ່ວຄາວ (ບັນຊີແຍກຕ່າງຫາກ, ອົງກອນ `chandom`, region Singapore) ສຳລັບເຟດ 1-5 — **ບໍ່ແມ່ນ ແລະບໍ່ກ່ຽວຂ້ອງກັບ project ຂອງ Sykhai Shop ຈິງເລີຍ**. ຄ່າ URL + anon key ຢູ່ໃນ `src/shared/supabase-client.js`.

ຕອນເຟດ 6 (ອອກສູ່ຈິງ) ຈະສ້າງ project ຈິງໃນອົງກອນ Toukta Shop (Pro) ແລ້ວປ່ຽນ 2 ຄ່ານີ້, ພ້ອມຍ້າຍ schema+ຂໍ້ມູນ.
