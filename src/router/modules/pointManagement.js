import Layout from "@/layout";
export default {
  path: "",
  component: Layout,
  meta: { title: "点位管理", icon: "el-icon-s-help" },
  children: [
    {
      path: "regionalManagement",
      name: "regionalManagement",
      component: () => import("@/views/regionalManagement/index"),
      meta: { title: "区域管理" },
    },
    {
      path: "pointManagement",
      name: "pointManagement",
      component: () => import("@/views/pointManagement/index"),
      meta: { title: "点位管理"},
    },
    {
      path: "partnerManagement",
      name: "partnerManagement",
      component: () => import("@/views/partnerManagement/index"),
      meta: { title: "合作商管理"},
    },
  ],
};
