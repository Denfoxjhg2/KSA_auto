import Home from "../pages/Main.vue";
import detailing from "../pages/detailing.vue";
import dryclean from "../pages/chemistry.vue";
import polish from "../pages/polish.vue";
import protection from "../pages/protect.vue";
import enginewash from "../pages/enginewash.vue";
import antisound from "../pages/sound.vue";
import fogclean from "../pages/fog.vue";
import music from "../pages/music.vue";
import antichrome from "../pages/antichrome.vue";
import order from "../pages/order.vue";
import lk from "../pages/lk.vue";

const routes = [
  { name: "Homepage", path: "/", component: Home },
  { name: "Detailing", path: "/detailing", component: detailing },
  { name: "Dryclean", path: "/dryclean", component: dryclean },
  { name: "Polish", path: "/polish", component: polish },
  { name: "Protection", path: "/protection", component: protection },
  { name: "Enginewash", path: "/enginewash", component: enginewash },
  { name: "Antisound", path: "/antisound", component: antisound },
  { name: "Fogclean", path: "/fogclean", component: fogclean },
  { name: "Music", path: "/music", component: music },
  { name: "Antichrome", path: "/antichrome", component: antichrome },
  { name: "Order", path: "/order", component: order },
  { name: "Profile", path: "/lk", component: lk },
];

export default routes;
