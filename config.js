/* Konfigurasi aplikasi — satu fail untuk mod tempatan dan mod dalam talian.
 * 1) Uji di komputer:  buka http://127.0.0.1:8787/  (mula.bat) — pelayan Node tempatan.
 * 2) Selepas terbit:   isi API_ONLINE dengan URL /exec Apps Script (lihat panduan-publish.md).
 * Jika API_URL kosong, borang & admin berjalan dalam mod CSV (tanpa pangkalan data). */
const API_TEMPATAN = "http://127.0.0.1:8787";
const API_ONLINE = "https://script.google.com/macros/s/AKfycbw5BhqYvFkgG4uHFhomVCyudv83FcCLm0XxCt7f-hpHWq_3OouSocZ8LcMOSt7Kr1A7/exec";
const KUNCI_ADMIN = "";                /* pilihan: sama dengan Script Property 'kunciAdmin' */

window.KONFIG = (function () {
  const tempatan = location.hostname === "127.0.0.1" || location.hostname === "localhost" || location.hostname === "";
  return {
    API_URL: tempatan ? API_TEMPATAN : API_ONLINE,
    KUNCI: KUNCI_ADMIN,
    GEO_RADIUS_M: 300,
    MOD: tempatan ? "tempatan" : (API_ONLINE ? "online" : "csv"),
  };
})();
