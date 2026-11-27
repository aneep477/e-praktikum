/* Konfigurasi aplikasi — satu fail untuk mod tempatan dan mod dalam talian.
 * Semua pemboleh ubah dibungkus dalam fungsi supaya tidak bertembung dengan skrip halaman. */
(function () {
  const API_TEMPATAN = "http://127.0.0.1:8787";
  const API_ONLINE = "https://script.google.com/macros/s/AKfycbw5BhqYvFkgG4uHFhomVCyudv83FcCLm0XxCt7f-hpHWq_3OouSocZ8LcMOSt7Kr1A7/exec";
  const KUNCI = "";                    /* sama dengan Script Property KUNCI_ADMIN dalam Apps Script */
  const tempatan = location.hostname === "127.0.0.1" || location.hostname === "localhost" || location.hostname === "";
  window.KONFIG = {
    API_URL: tempatan ? API_TEMPATAN : API_ONLINE,
    KUNCI: KUNCI,
    GEO_RADIUS_M: 300,
    MOD: tempatan ? "tempatan" : (API_ONLINE ? "online" : "csv"),
  };
})();
