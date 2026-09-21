# legacy-storefront/

**ໜ້າທີ່:** ໂຄດໜ້າຮ້ານອອນລາຍຕົ້ນສະບັບ — ຮັບຈາກ Tar ໂດຍກົງ (ໂຟນເດີ້ທີ່ໃຊ້ອັບ Cloudflare Pages ຈິງ), ບໍ່ແມ່ນ GitHub repo (ໂຄງການນີ້ບໍ່ມີ git repo ມາກ່ອນ — ອັບແບບ direct upload ຕະຫຼອດ).

**ໄຟລ໌:**
| ໄຟລ໌ | ໜ້າທີ່ | ຮຸ່ນ (APP_VERSION) |
|---|---|---|
| `index.html` | ໜ້າ redirect ໄປ `links.html` (ໜ້າຫຼັກ shop.touktashop.online/) | — |
| `links.html` | ລິ້ງລວມ (link-in-bio): WhatsApp, ໜ້າຮ້ານ, Facebook, TikTok | v1.09 |
| `store.html` | ເລືອກສິນຄ້າ+ກະຕ່າ (ດຶງຈາກ `pos_products`, ຂຽນ `localStorage["sykhai_cart"]`) | v1.03 |
| `checkout.html` | ຊຳລະສັ່ງຊື້ (BCEL QR, ອັບໂຫຼດສະລິບ) | — (ຍັງບໍ່ພົບ header ວັນທີ ໃນໄຟລ໌ນີ້) |
| `orders.html` | ລູກຄ້າກວດອໍເດີດ້ວຍເບີໂທ | — |
| `chat.html` | ແຊັດກັບຮ້ານ (ລູກຄ້າ↔ຮ້ານ) | — |

**⚠️ ແກ້ໄຂຄວາມປອດໄພກ່ອນເອົາເຂົ້າ repo (2026-09-21):** ໄຟລ໌ຕົ້ນສະບັບທັງ 5 ໄຟລ໌ (ຍົກເວັ້ນ `index.html`) ຜູກຢູ່ກັບ **project Supabase ຈິງຂອງ Sykhai Shop** (`swrijpkkufarddsyqhrh`) — ຄືກັນກັບທີ່ພົບໃນ `legacy-marketing-studio/` ແລະ `legacy-pos/`. ໄດ້ປ່ຽນທັງ 5 ໄຟລ໌ໃຫ້ຊີ້ໃສ່ project ພັດທະນາ/ທົດສອບ (`mjbhgtjnxcflqzmcfnyv`, ບັນຊີແຍກຕ່າງຫາກ) ກ່ອນເອົາເຂົ້າ repo ນີ້ — ບໍ່ມີຄວາມສ່ຽງໃດໆຕໍ່ຂໍ້ມູນຈິງ.

**ສະຖານະ:** ຄັດລອກ+ແກ້ Supabase URL ເທົ່ານັ້ນ — ຍັງບໍ່ໄດ້ຕໍ່ Vite, ຍັງບໍ່ໄດ້ວາງແຜນແຍກໂມດູນ. ໄຟລ໌ພວກນີ້ແຕກຕ່າງຈາກ Marketing Studio/POS ຢ່າງໜຶ່ງ: ມັນແຍກເປັນຫຼາຍໄຟລ໌ນ້ອຍໆຢູ່ແລ້ວ (255-791 ແຖວຕໍ່ໄຟລ໌) ບໍ່ແມ່ນໄຟລ໌ດຽວໃຫຍ່ໆ — ອາດຈະບໍ່ຈຳເປັນຕ້ອງແຍກໂມດູນຫຼາຍເທົ່າ Marketing Studio/POS.

### ⚙️ ປ່ຽນເປັນ ES module (2026-09-21)

ທັງ 5 ໄຟລ໌ (ຍົກເວັ້ນ `index.html` ທີ່ບໍ່ມີ script) ປ່ຽນ `<script>` → `<script type="module">` ແລ້ວ (ຂັ້ນຕອນທຳອິດ ກ່ອນຈະແຍກໂຄດອອກເປັນໄຟລ໌ນ້ອຍໆ import/export ໄດ້ຈິງ):

- **`links.html`**, **`checkout.html`**: ມີ inline `onclick="ຊື່ຟັງຊັນ()"` ອ້າງອີງຟັງຊັນພາຍໃນໄຟລ໌ (ເຊັ່ນ `copyWaNumber`, `changeQty`, `submitOrder`) — ເພີ່ມ `window.ຊື່ຟັງຊັນ = ຊື່ຟັງຊັນ;` ຫຼັງນິຍາມແຕ່ລະຟັງຊັນ ກ່ອນປ່ຽນ script ເປັນ module (ຖ້າບໍ່ເຮັດແບບນີ້ ປຸ່ມຈະກົດແລ້ວ error "X is not defined"). `checkout.html` ຍັງມີ script ທີສອງ (QRCode library, minified) ທີ່ **ເຈດຕະນາປະໄວ້ເປັນ script ທຳມະດາ** (ບໍ່ປ່ຽນເປັນ module) ເພາະຕ້ອງໂຫຼດກ່ອນ ແລະ script ຫຼັກຕ້ອງອ່ານ global `QRCode` ຂອງມັນໄດ້.
- **`store.html`**, **`orders.html`**, **`chat.html`**: ກວດແລ້ວປອດໄພ (ບໍ່ມີ onclick ອ້າງອີງຟັງຊັນພາຍໃນ) — ປ່ຽນເປັນ module ໄດ້ເລີຍ ບໍ່ຕ້ອງແກ້ຫຍັງເພີ່ມ.

ທົດສອບແລ້ວ: `npm run build` ຜ່ານ 0 error, ທຸກໜ້າເປີດຜ່ານ `npm run dev` ໄດ້ HTTP 200, ບໍ່ມີ URL Supabase ຈິງຫຼົງເຫຼືອ.
