// shared/row-mappers.js
//
// ຄັດລອກມາຈາກ legacy/index.html (v7.81) ຄຳຕໍ່ຄຳ — ຍັງບໍ່ໄດ້ໃຊ້ໃນແອັບຈິງ, ພຽງແຕ່ຄັດລອກມາໄວ້ກ່ອນ.
// ຝັງຊັນ rowTo*(): ແປງແຖວຈາກຕາຕະລາງ Supabase (snake_case) ໃຫ້ເປັນ object ໃນແອັບ (camelCase).
// ເປັນ pure function ທັງໝົດ — ຮັບແຖວ r ເຂົ້າ, ສົ່ງ object ອອກ, ບໍ່ອີງຕົວແປຮ່ວມ (global state) ໃດໆ.

export function rowToProduct(r){ return {id:r.id, name:r.name, category:r.category, price:r.price, costPrice:r.costprice, desc:r.description, painPoints:r.painpoints, imageUrl:r.image_url||"", highlights:r.highlights||"", benefits:r.benefits||"", usage:r.usage_info||""}; }
export function rowToChatMsg(r){ return {id:r.id, productId:r.product_id, role:r.role, message:r.message, createdAt:r.created_at||""}; }
export function rowToContent(r){ return {id:r.id, type:r.type, productName:r.productname, content:r.content, date:r.date, createdAt:r.created_at||""}; }
export function rowToCost(r){ return {id:r.id, label:r.label, revenue:r.revenue, productCost:r.productcost, adCost:r.adcost, opCost:r.opcost}; }

// v5.92: owner-only product economics row <-> app object — see product_economics table.
// v5.93: added shippingCost (ຄ່າຂົນສົ່ງ, defaults 0 — only filled in when a product ships free).
export function rowToProductEconomics(r){
  return {
    id:r.id, name:r.name||"", cost:Number(r.cost)||0, hiddenCost:Number(r.hidden_cost)||0,
    shippingCost: r.shipping_cost!=null ? Number(r.shipping_cost) : 0,
    price:Number(r.price)||0, feePct: r.fee_pct!=null ? Number(r.fee_pct) : 0.03, note:r.note||"",
    createdAt:r.created_at||"", createdBy:r.created_by||"", updatedAt:r.updated_at||"", updatedBy:r.updated_by||""
  };
}

export function rowToAdmin(r){ return {id:r.id, name:r.name, role:r.role, status:r.status, visibleToAll: !!r.visible_to_all}; }
export function rowToInsight(r){ return {id:r.id, question:r.question, answer:r.answer, productRelated:r.productrelated, date:r.date, adminName:r.adminname||"", imageUrl:r.image_url||"", readByOwner: !!r.read_by_owner}; }
export function rowToReport(r){ return {id:r.id, adminName:r.adminname||"", category:r.category||"", detail:r.detail||"", imageUrl:r.image_url||"", createdAt:r.created_at||"", accusedName:r.accused_name||"", readByOwner: !!r.read_by_owner}; }
export function rowToFeedback(r){ return {id:r.id, adminName:r.adminname||"", category:r.category||"", detail:r.detail||"", imageUrl:r.image_url||"", createdAt:r.created_at||"", readByOwner: !!r.read_by_owner}; }
export function rowToAttendance(r){ return {id:r.id, adminName:r.adminname||"", clockIn:r.clock_in||null, clockOut:r.clock_out||null, date:r.date||"", clockInLat:r.clock_in_lat, clockInLng:r.clock_in_lng, clockOutLat:r.clock_out_lat, clockOutLng:r.clock_out_lng, clockInAccuracy:r.clock_in_accuracy, clockOutAccuracy:r.clock_out_accuracy, manualEntry: !!r.manual_entry, addedBy: r.added_by||"", manualNote: r.manual_note||""}; }
