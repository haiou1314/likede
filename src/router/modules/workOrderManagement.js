import Layout from "@/layout";
export default {
  path: "/example",
  component: Layout,
  name: "Example",
  meta: { title: "工单管理", icon: "el-icon-s-help" },
  children: [
    {
      path: "table",
      name: "Table",
      component: () => import("@/views/table/index"),
      meta: { title: "运营工单" },
    },
    {
      path: "tree",
      name: "Tree",
      component: () => import("@/views/tree/index"),
      meta: { title: "运维工单" },
    },
  ],
};
