// shared/pricing-economics.js
//
// ຄັດລອກມາຈາກ legacy/index.html (v7.81) ຄຳຕໍ່ຄຳ — ຍັງບໍ່ໄດ້ໃຊ້ໃນແອັບຈິງ, ພຽງແຕ່ຄັດລອກມາໄວ້ກ່ອນ.
//
// Shared breakeven-economics math — used by both the "💰 ຄິດໄລ່ກຳໄລ" page and the
// "📥 ໃຊ້ຄ່າຄຸ້ມທຶນ" autofill button on the Campaign Control Rule form, so the two places can
// never drift out of sync with each other.
//   ຈຸດຄຸ້ມທຶນ ACOS = (ລາຄາຂາຍ - ຕົ້ນທຶນ - ຕົ້ນທຶນແຝງ - ຄ່າຂົນສົ່ງ - (ລາຄາຂາຍ×ຄ່າທຳນຽມ%)) ÷ ລາຄາຂາຍ
//   ROAS ຄຸ້ມທຶນ = 1 ÷ ຈຸດຄຸ້ມທຶນ ACOS

export function computeBreakevenAcos(p){
  if(!p || !p.price) return null;
  const fee = p.price * (p.feePct||0);
  const acos = (p.price - p.cost - p.hiddenCost - (p.shippingCost||0) - fee) / p.price;
  return acos;
}

export function computeBreakevenRoas(p){
  const acos = computeBreakevenAcos(p);
  if(acos==null || acos<=0) return null;
  return 1/acos;
}

// v5.93: "what-if" profit at an arbitrary ACOS% (typed/preset by Tar), for the ຕາຕະລາງ's live
// "ກຳໄລ @X%" column — mirrors the old Excel sheet's 20/30/35/40% scenario columns, but as one
// live-editable % instead of four fixed ones.
export function computeProfitAtAcos(p, acosPct){
  if(!p) return null;
  const acos = (Number(acosPct)||0)/100;
  const fee = p.price * (p.feePct||0);
  const adCost = p.price * acos;
  return p.price - p.cost - p.hiddenCost - (p.shippingCost||0) - fee - adCost;
}
