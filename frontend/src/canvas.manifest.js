export const manifest = {
  screens: {
    scr_ndpe5e: { name: "Home", route: "/", position: { "x": 160, "y": 1820 } },
    scr_at61n7: { name: "Services", route: "/services", position: { "x": 1560, "y": 1820 } },
    scr_drmpg2: { name: "Products", route: "/products", position: { "x": 2960, "y": 1820 } },
    scr_wx00cb: { name: "News & Updates", route: "/news", position: { "x": 4360, "y": 1820 } },
    scr_ws6m93: { name: "About Elvions", route: "/about", position: { "x": 5760, "y": 1820 } },
    scr_z0xw88: { name: "Contact", route: "/contact", position: { "x": 160, "y": 3800 } },
    scr_lzh2sp: { name: "Contact confirmation", route: "/contact", state: { "status": "success" }, position: { "x": 1560, "y": 3800 } },
    scr_ahqtks: { name: "Not found", route: "/not-found", position: { "x": 0, "y": 0 }, isDefaultRow: true }
  },
  sections: {
    sec_np0nu2: { name: "Main Navigation", x: 0, y: 1600, width: 7120, height: 1180 },
    sec_ibnxxe: { name: "Contact Flow", x: 0, y: 3580, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "screen", id: "scr_ahqtks" },
  { kind: "section", id: "sec_np0nu2", children: [
    { kind: "screen", id: "scr_ndpe5e" },
    { kind: "screen", id: "scr_at61n7" },
    { kind: "screen", id: "scr_drmpg2" },
    { kind: "screen", id: "scr_wx00cb" },
    { kind: "screen", id: "scr_ws6m93" }]
  },
  { kind: "section", id: "sec_ibnxxe", children: [
    { kind: "screen", id: "scr_z0xw88" },
    { kind: "screen", id: "scr_lzh2sp" }]
  }]

};