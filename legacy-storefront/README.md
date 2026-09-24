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

### 🧪 ກຽມໃຫ້ລູກຄ້າຈິງທົດລອງ — khaiyluam.touktashop.online (2026-09-24)

Tar ຕັດສິນໃຈໃຫ້ລູກຄ້າຈິງເຂົ້າທົດລອງໜ້າຮ້ານອອນລາຍ ແລະໃຫ້ feedback. ເພີ່ມ/ແກ້ໄຂດັ່ງນີ້:

- **`dev-database-setup.sql`** (ໄຟລ໌ໃໝ່): ສະຄຣິບ SQL ຄົບຊຸດ — ສ້າງ 10 ຕາຕະລາງ (`pos_shops`, `pos_products`, `couriers`, `online_orders`, `online_order_items`, `shipping_labels`, `chat_customers`, `chat_conversations`, `chat_messages`, `link_page_settings`), function `get_next_online_order_no()`, ເປີດ Realtime, ຕັ້ງ RLS ໃຫ້ anon key ໃຊ້ໄດ້ຄືລະບົບຈິງ (ບໍ່ມີ login), ສ້າງ storage bucket 2 ອັນ (`online-payment-slips`, `customer-chat-media`) + ໃສ່ຂໍ້ມູນຕົວຢ່າງ (ຮ້ານ + ສິນຄ້າຈິງ 3 ອັນ ທີ່ Tar ຢືນຢັນ). ໂຄງສ້າງທັງໝົດອີງຈາກການອ່ານໂຄດ `*.html` ໃນໂຟນເດີ້ນີ້ເທົ່ານັ້ນ — **ບໍ່ໄດ້ອ່ານຖານຂໍ້ມູນຈິງເລີຍ** (ຫ້າມແຕະຕາມທີ່ເນັ້ນຢ້ຳໄວ້). ວິທີໃຊ້: ວາງໄຟລ໌ນີ້ທັງໝົດໃສ່ Supabase SQL Editor ຂອງ project ພັດທະນາ ແລ້ວ Run (ຮັນຊ້ຳໄດ້ປອດໄພ).
- **`product-images/`** (ໂຟນເດີ້ໃໝ່): ຮູບສິນຄ້າຕົວຢ່າງ 3 ອັນ (ໃຊ້ລິ້ງແບບ `/product-images/xxx.png` ໃນຖານຂໍ້ມູນ — ຈະໃຊ້ໄດ້ເມື່ອ deploy ໂຟນເດີ້ `legacy-storefront/` ນີ້ເປັນ site root ຂອງ Cloudflare Pages ໂດຍກົງ, ບໍ່ແມ່ນຜ່ານ `npm run dev` ຫຼາຍລະບົບພ້ອມກັນ)
- **`checkout.html`**: ປ່ຽນຂໍ້ຄວາມ "ຍັງບໍ່ໄດ້ຕັ້ງຄ່າ QR..." (ເຄີຍອ້າງອີງຊື່ Tar ແລະ column database ໂດຍກົງ, ບໍ່ເໝາະໃຫ້ລູກຄ້າເຫັນ) ເປັນຂໍ້ຄວາມທົ່ວໄປ "🧪 ນີ້ແມ່ນເວີຊັນທົດລອງ..." — dev DB ບໍ່ໃສ່ `bcel_qr_payload` ຈິງໄວ້ໂດຍເຈດຕະນາ (ກັນລູກຄ້າສະແກນຈ່າຍເງິນຈິງເຂົ້າຜິດບັນຊີ), ລູກຄ້າຍັງອັບໂຫຼດຮູບຫຍັງກໍໄດ້ເພື່ອທົດລອງຂັ້ນຕອນຕໍ່ໄດ້ (ຮູບອັບໂຫຼດຈິງ ໄປຢູ່ bucket dev ເທົ່ານັ້ນ)
- **ທຸກ 5 ໜ້າ** (`links/store/checkout/orders/chat.html`): ເພີ່ມແຖບເຫຼືອງນ້ອຍໆເທິງສຸດ "🧪 ນີ້ແມ່ນເວີຊັນທົດລອງ..." ໃຫ້ລູກຄ້າຮູ້ຈາກຕົ້ນ — ຈະລຶບອອກຕອນອອກສູ່ຈິງ (ເຟດ 6)

**ຂໍ້ຈຳກັດທີ່ຮູ້ຢູ່ແລ້ວ (ບໍ່ແມ່ນ bug):** `shipping_labels` ວ່າງເປົ່າໃນ dev (ບໍ່ມີ POS ຂຽນໃສ່ນຳ) — ໜ້າ `orders.html` ຈະສະແດງແຕ່ "⏳ ກຳລັງກວດສະລິບ" ບໍ່ໄປເຖິງສະຖານະຂົນສົ່ງ. ການແຊັດ (`chat.html`) ລູກຄ້າສົ່ງໄດ້ ແຕ່ຍັງບໍ່ມີໃຜຕອບຝັ່ງຮ້ານ (ບໍ່ມີໜ້າ admin ໃນ dev round ນີ້).
