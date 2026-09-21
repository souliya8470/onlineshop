// shared/geo-helpers.js
//
// ຄັດລອກມາຈາກ legacy/index.html (v7.81) ຄຳຕໍ່ຄຳ — ຍັງບໍ່ໄດ້ໃຊ້ໃນແອັບຈິງ, ພຽງແຕ່ຄັດລອກມາໄວ້ກ່ອນ.
// ໝາຍເຫດ: ຄັດລອກສະເພາະ pure function (ຮັບພາລາມິເຕີເຂົ້າ, ບໍ່ອີງ STATE ຮ່ວມ) — ຝັງຊັນ
// isOutsideShopRadius()/outOfRangeBadge() ໃນໄຟລ໌ຕົ້ນສະບັບ ອີງ STATE.data.shopLocation ໂດຍກົງ
// ບໍ່ໄດ້ຄັດລອກມານຳຮອບນີ້ (ຈະຍົກໄປຮອບອື່ນ ພ້ອມກັບ state ທີ່ກ່ຽວຂ້ອງ).

export function distanceMeters(lat1, lng1, lat2, lng2){
  if(lat1==null||lng1==null||lat2==null||lng2==null) return null;
  const R = 6371000;
  const toRad = (v)=> v*Math.PI/180;
  const dLat = toRad(lat2-lat1), dLng = toRad(lng2-lng1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLng/2)**2;
  return R * 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// Small map thumbnail — click still opens full Google Maps. Renders a single raw satellite
// imagery tile (Esri World Imagery — free, no API key, no usage cap like OSM's raster tiles)
// cropped/positioned with plain CSS, plus a CSS-drawn pin. Esri's tile path order is
// {z}/{y}/{x} (row before column) rather than the {z}/{x}/{y} used by OSM/Google slippy maps.
export function mapThumbnail(lat, lng, size){
  if(lat==null||lng==null) return "";
  const s = size||90;
  const zoom = 17;
  const n = Math.pow(2, zoom);
  const latRad = lat * Math.PI/180;
  const xPixel = (lng+180)/360*n*256;
  const yPixel = (1 - Math.log(Math.tan(latRad) + 1/Math.cos(latRad))/Math.PI)/2*n*256;
  const xTile = Math.floor(xPixel/256);
  const yTile = Math.floor(yPixel/256);
  const xOffsetInTile = xPixel - xTile*256;
  const yOffsetInTile = yPixel - yTile*256;
  const tileSrc = `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${yTile}/${xTile}`;
  const imgLeft = (s/2 - xOffsetInTile).toFixed(1);
  const imgTop = (s/2 - yOffsetInTile).toFixed(1);
  return `<a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" title="ກົດເພື່ອເບິ່ງແຜນທີ່ເຕັມ">
    <div style="position:relative; width:${s}px; height:${s}px; overflow:hidden; border-radius:8px; border:1px solid #E0DACB; background:#EDEAE0;">
      <img src="${tileSrc}" width="256" height="256" style="position:absolute; left:${imgLeft}px; top:${imgTop}px;" loading="lazy"/>
      <div style="position:absolute; left:50%; top:50%; width:12px; height:12px; margin:-16px 0 0 -6px; background:#FF3B30; border:2px solid #fff; border-radius:50% 50% 50% 0; transform:rotate(-45deg); box-shadow:0 1px 3px rgba(0,0,0,.45);"></div>
    </div>
  </a>`;
}
