-- ==========================================================================
-- dev-database-setup.sql
-- v0.0.1 SaaS-fork ONLY (2026-09-24)
--
-- ໄຟລ໌ນີ້ໃຊ້ຮັນຢູ່ Supabase SQL Editor ຂອງ project ພັດທະນາ/ທົດສອບ ເທົ່ານັ້ນ
-- (mjbhgtjnxcflqzmcfnyv.supabase.co) — ບໍ່ແມ່ນ project ຈິງຂອງ Sykhai Shop ເລີຍ.
-- ສ້າງໂຄງສ້າງຕາຕະລາງ (ອີງຈາກການອ່ານໂຄດ legacy-storefront/*.html ເທົ່ານັ້ນ, ບໍ່ໄດ້ອ່ານ
-- ຖານຂໍ້ມູນຈິງ) + ໃສ່ຂໍ້ມູນຕົວຢ່າງ 3 ສິນຄ້າຈິງ (ຊື່/ລາຄາທີ່ Tar ຢືນຢັນ) ເພື່ອໃຫ້ລູກຄ້າ
-- ທົດລອງໜ້າຮ້ານອອນລາຍ khaiyluam.touktashop.online.
--
-- ວິທີໃຊ້: ເປີດ Supabase dashboard ຂອງ project ພັດທະນາ → SQL Editor → New query →
-- ວາງໄຟລ໌ນີ້ທັງໝົດ → Run. ປອດໄພ ຮັນຊ້ຳໄດ້ (ໃຊ້ IF NOT EXISTS / ON CONFLICT ທົ່ວທັງໄຟລ໌).
-- ==========================================================================

create extension if not exists pgcrypto;

-- --------------------------------------------------------------------------
-- 1) pos_shops — ຂໍ້ມູນຮ້ານ (1 ແຖວ ຕໍ່ 1 ຮ້ານ, ລະບົບປັດຈຸບັນຍັງເປັນ single-tenant)
-- --------------------------------------------------------------------------
create table if not exists public.pos_shops (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  theme_color   text,
  logo_url      text,
  bcel_qr_payload text,  -- ປະໄວ້ຫວ່າງໂດຍເຈດຕະນາ ໃນ dev — ເບິ່ງ comment ຢູ່ seed data ຂ້າງລຸ່ມ
  created_at    timestamptz not null default now()
);

-- --------------------------------------------------------------------------
-- 2) pos_products
-- --------------------------------------------------------------------------
create table if not exists public.pos_products (
  id               uuid primary key default gen_random_uuid(),
  shop_id          uuid not null references public.pos_shops(id),
  name             text not null,
  category         text,
  price_1          numeric not null default 0,
  online_price_kip numeric,
  image_url        text,
  stock_qty        numeric not null default 0,
  is_active        boolean not null default true,
  show_online      boolean not null default true,
  created_at       timestamptz not null default now()
);
create index if not exists idx_pos_products_shop on public.pos_products(shop_id);

-- --------------------------------------------------------------------------
-- 3) couriers
-- --------------------------------------------------------------------------
create table if not exists public.couriers (
  id   uuid primary key default gen_random_uuid(),
  name text not null
);

-- --------------------------------------------------------------------------
-- 4) online_orders
-- --------------------------------------------------------------------------
create table if not exists public.online_orders (
  id                     uuid primary key default gen_random_uuid(),
  shop_id                uuid not null references public.pos_shops(id),
  order_no               text not null unique,
  customer_name          text not null,
  phone                  text not null,
  courier_id             uuid references public.couriers(id),
  province               text,
  district               text,
  address_detail         text,
  notes                  text,
  subtotal_kip           numeric not null default 0,
  shipping_fee_kip       numeric not null default 0,
  discount_kip           numeric not null default 0,
  total_kip              numeric not null default 0,
  payment_method         text,
  payment_slip_url       text,
  status                 text not null default 'pending_review',
  cancel_reason          text,
  is_test                boolean not null default false,
  shipping_label_id      uuid,
  shipping_label_number  text,
  created_at             timestamptz not null default now()
);
create index if not exists idx_online_orders_phone on public.online_orders(phone);

-- --------------------------------------------------------------------------
-- 5) online_order_items
-- --------------------------------------------------------------------------
create table if not exists public.online_order_items (
  id             uuid primary key default gen_random_uuid(),
  order_id       uuid not null references public.online_orders(id) on delete cascade,
  product_id     uuid,
  product_name   text not null,
  qty            numeric not null default 1,
  unit_price_kip numeric not null default 0,
  line_total_kip numeric not null default 0
);
create index if not exists idx_online_order_items_order on public.online_order_items(order_id);

-- --------------------------------------------------------------------------
-- 6) shipping_labels (ຕາຕະລາງນີ້ POS/Marketing Studio ເປັນຄົນຂຽນ, ໜ້າຮ້ານອອນລາຍອ່ານຢ່າງດຽວ
--    ໃນ dev ຍັງບໍ່ມີ POS ຂຽນໃສ່ນຳ ຈຶ່ງເປັນຕາຕະລາງຫວ່າງ — ໜ້າກວດອໍເດີຈະບໍ່ສະແດງສະຖານະຂົນສົ່ງ,
--    ອັນນີ້ປົກກະຕິ, ບໍ່ແມ່ນ bug)
-- --------------------------------------------------------------------------
create table if not exists public.shipping_labels (
  id            uuid primary key default gen_random_uuid(),
  status        smallint not null default 0,
  courier_name  text,
  label_number  text,
  updated_at    timestamptz not null default now()
);

-- --------------------------------------------------------------------------
-- 7) chat_customers / chat_conversations / chat_messages
-- --------------------------------------------------------------------------
create table if not exists public.chat_customers (
  id            uuid primary key default gen_random_uuid(),
  wa_phone      text not null,
  display_name  text,
  is_verified   boolean not null default false,
  last_seen_at  timestamptz,
  created_at    timestamptz not null default now()
);
create unique index if not exists idx_chat_customers_phone on public.chat_customers(wa_phone);

create table if not exists public.chat_conversations (
  id                 uuid primary key default gen_random_uuid(),
  customer_id        uuid not null references public.chat_customers(id),
  status             text not null default 'open',
  unread_by_admin    integer not null default 0,
  unread_by_customer integer not null default 0,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);
create index if not exists idx_chat_conversations_customer on public.chat_conversations(customer_id);

create table if not exists public.chat_messages (
  id               uuid primary key default gen_random_uuid(),
  conversation_id  uuid not null references public.chat_conversations(id) on delete cascade,
  sender_type      text not null, -- 'customer' | 'admin'
  sender_name      text,
  content          text,
  media_url        text,
  created_at       timestamptz not null default now()
);
create index if not exists idx_chat_messages_conv on public.chat_messages(conversation_id);

-- --------------------------------------------------------------------------
-- 8) link_page_settings (1 ແຖວດຽວ, id = 1)
-- --------------------------------------------------------------------------
create table if not exists public.link_page_settings (
  id                     int primary key,
  shop_name              text,
  tagline                text,
  cover_image_url        text,
  profile_image_url      text,
  promo_line1            text,
  promo_code             text,
  store_url              text,
  whatsapp_number        text,
  whatsapp_message       text,
  facebook_shop_url      text,
  tiktok_shop_url        text,
  facebook_personal_url  text,
  tiktok_personal_url    text,
  footer_text            text
);

-- --------------------------------------------------------------------------
-- 9) get_next_online_order_no() — ອອກເລກອໍເດີແບບ "Lxxxxx" (ຄືຮູບແບບໃນລະບົບຈິງ)
-- --------------------------------------------------------------------------
create sequence if not exists public.online_order_no_seq start 1;

create or replace function public.get_next_online_order_no()
returns text
language sql
as $$
  select 'L' || lpad(nextval('public.online_order_no_seq')::text, 5, '0');
$$;

-- --------------------------------------------------------------------------
-- 10) Realtime — ເປີດໃຫ້ 2 ຕາຕະລາງນີ້ສົ່ງ event ສົດ (chat.html ແລະ orders.html ໃຊ້)
-- --------------------------------------------------------------------------
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and tablename = 'chat_messages'
  ) then
    alter publication supabase_realtime add table public.chat_messages;
  end if;
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and tablename = 'shipping_labels'
  ) then
    alter publication supabase_realtime add table public.shipping_labels;
  end if;
end $$;

-- --------------------------------------------------------------------------
-- 11) RLS — dev project ນີ້ບໍ່ມີຂໍ້ມູນຈິງ/ລູກຄ້າຈິງເລີຍ, ໃຊ້ policy ແບບກວ້າງໆໃຫ້ກົງກັບ
--     ວິທີເຮັດວຽກປັດຈຸບັນຂອງໜ້າຮ້ານ (anon key ໂດຍກົງ, ບໍ່ມີ login) — ຮັດແໜ້ນກວ່ານີ້ຕອນ
--     ເຮັດ multi-tenant ແທ້ (ເຟດ 3)
-- --------------------------------------------------------------------------
alter table public.pos_shops enable row level security;
alter table public.pos_products enable row level security;
alter table public.couriers enable row level security;
alter table public.online_orders enable row level security;
alter table public.online_order_items enable row level security;
alter table public.shipping_labels enable row level security;
alter table public.chat_customers enable row level security;
alter table public.chat_conversations enable row level security;
alter table public.chat_messages enable row level security;
alter table public.link_page_settings enable row level security;

drop policy if exists anon_all on public.pos_shops;
create policy anon_all on public.pos_shops for select to anon using (true);

drop policy if exists anon_all on public.pos_products;
create policy anon_all on public.pos_products for select to anon using (true);

drop policy if exists anon_all on public.couriers;
create policy anon_all on public.couriers for select to anon using (true);

drop policy if exists anon_select on public.online_orders;
create policy anon_select on public.online_orders for select to anon using (true);
drop policy if exists anon_insert on public.online_orders;
create policy anon_insert on public.online_orders for insert to anon with check (true);

drop policy if exists anon_select on public.online_order_items;
create policy anon_select on public.online_order_items for select to anon using (true);
drop policy if exists anon_insert on public.online_order_items;
create policy anon_insert on public.online_order_items for insert to anon with check (true);

drop policy if exists anon_all on public.shipping_labels;
create policy anon_all on public.shipping_labels for select to anon using (true);

drop policy if exists anon_select on public.chat_customers;
create policy anon_select on public.chat_customers for select to anon using (true);
drop policy if exists anon_insert on public.chat_customers;
create policy anon_insert on public.chat_customers for insert to anon with check (true);
drop policy if exists anon_update on public.chat_customers;
create policy anon_update on public.chat_customers for update to anon using (true);

drop policy if exists anon_select on public.chat_conversations;
create policy anon_select on public.chat_conversations for select to anon using (true);
drop policy if exists anon_insert on public.chat_conversations;
create policy anon_insert on public.chat_conversations for insert to anon with check (true);
drop policy if exists anon_update on public.chat_conversations;
create policy anon_update on public.chat_conversations for update to anon using (true);

drop policy if exists anon_select on public.chat_messages;
create policy anon_select on public.chat_messages for select to anon using (true);
drop policy if exists anon_insert on public.chat_messages;
create policy anon_insert on public.chat_messages for insert to anon with check (true);

drop policy if exists anon_all on public.link_page_settings;
create policy anon_all on public.link_page_settings for select to anon using (true);

-- --------------------------------------------------------------------------
-- 12) Storage buckets — ໃຊ້ໂດຍ checkout.html (ອັບໂຫຼດສະລິບ) ແລະ chat.html (ອັບໂຫຼດຮູບແຊັດ)
-- --------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('online-payment-slips', 'online-payment-slips', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('customer-chat-media', 'customer-chat-media', true)
on conflict (id) do nothing;

drop policy if exists anon_upload_slips on storage.objects;
create policy anon_upload_slips on storage.objects for insert to anon
  with check (bucket_id = 'online-payment-slips');
drop policy if exists anon_read_slips on storage.objects;
create policy anon_read_slips on storage.objects for select to anon
  using (bucket_id = 'online-payment-slips');

drop policy if exists anon_upload_chat on storage.objects;
create policy anon_upload_chat on storage.objects for insert to anon
  with check (bucket_id = 'customer-chat-media');
drop policy if exists anon_read_chat on storage.objects;
create policy anon_read_chat on storage.objects for select to anon
  using (bucket_id = 'customer-chat-media');

-- --------------------------------------------------------------------------
-- 13) Seed data — ຮ້ານ + ສິນຄ້າຕົວຢ່າງ 3 ອັນ (ຊື່/ລາຄາຈິງ ທີ່ Tar ຢືນຢັນ 2026-09-24) +
--     link_page_settings 1 ແຖວ + ຂົນສົ່ງຕົວຢ່າງ 1 ອັນ
--     SHOP_ID ໃຊ້ຄ່າດຽວກັນກັບທີ່ hardcode ຢູ່ໃນ legacy-storefront/*.html ແລະ legacy-pos/index.html
-- --------------------------------------------------------------------------
insert into public.pos_shops (id, name, theme_color, logo_url, bcel_qr_payload)
values (
  '584156a3-cf33-4f1a-be2a-b24346631674',
  'ຮ້ານຕຸກຕາສີໄຄ (ເວີຊັນທົດລອງ)',
  '#a8385d',
  null,
  null -- ບໍ່ໃສ່ QR ຈິງໃນ dev ໂດຍເຈດຕະນາ — ໜ້າຊຳລະຈະສະແດງຂໍ້ຄວາມ "ຍັງບໍ່ໄດ້ຕັ້ງຄ່າ QR"
       -- ແທນ (ອອກແບບໄວ້ຢູ່ແລ້ວໃນໂຄດ) — ກັນລູກຄ້າທົດລອງສະແກນຈ່າຍເງິນຈິງເຂົ້າບັນຊີຈິງໂດຍບໍ່ຕັ້ງໃຈ
)
on conflict (id) do update set
  name = excluded.name, theme_color = excluded.theme_color;

insert into public.pos_products (id, shop_id, name, category, price_1, online_price_kip, image_url, stock_qty, is_active, show_online)
values
  ('a1000000-0000-4000-8000-000000000001', '584156a3-cf33-4f1a-be2a-b24346631674',
   'ປິດຈຸກບູມ', 'ເຄື່ອງສຳອາງ', 50000, 50000, '/product-images/pid-chuk-boom.png', 47, true, true),
  ('a1000000-0000-4000-8000-000000000002', '584156a3-cf33-4f1a-be2a-b24346631674',
   'ມາກໜ້າໄຮໂດເຈວຜິວເດັກກັບມ່ວງ', 'ເຄື່ອງສຳອາງ', 199000, 199000, '/product-images/mak-na-baby-bright.png', 20, true, true),
  ('a1000000-0000-4000-8000-000000000003', '584156a3-cf33-4f1a-be2a-b24346631674',
   'ສະເປອິງຟ້າ', 'ເຄື່ອງສຳອາງ', 23000, 23000, '/product-images/spray-ingfa.png', 16, true, true)
on conflict (id) do update set
  name = excluded.name, price_1 = excluded.price_1, online_price_kip = excluded.online_price_kip,
  image_url = excluded.image_url, stock_qty = excluded.stock_qty;

insert into public.couriers (id, name)
values ('c1000000-0000-4000-8000-000000000001', 'Anousith Express')
on conflict do nothing;

insert into public.link_page_settings (id, shop_name, tagline, store_url, footer_text)
values (
  1,
  'ຮ້ານຕຸກຕາສີໄຄ (ເວີຊັນທົດລອງ)',
  'ເຄື່ອງສຳອາງ · ອາຫານເສີມ · ຄວາມງາມ',
  'https://khaiyluam.touktashop.online/store.html',
  '© 2026 ຮ້ານຕຸກຕາສີໄຄ — ເວີຊັນທົດລອງ'
)
on conflict (id) do update set
  shop_name = excluded.shop_name, tagline = excluded.tagline,
  store_url = excluded.store_url, footer_text = excluded.footer_text;

-- ສຳເລັດ — ກັບໄປ Table Editor ເບິ່ງໄດ້ວ່າມີ 10 ຕາຕະລາງ + ສິນຄ້າ 3 ອັນຂຶ້ນແລ້ວ
