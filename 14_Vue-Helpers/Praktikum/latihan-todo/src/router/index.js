import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "@/views/TodoList.vue";
import DescriptionTodo from "@/views/Description.vue";
// import DefaultTodo from "@/views/DefaultTodo.vue";
// import DefaultLayout from "@/layout/DefaultLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
    // children: [
    //   {
    //     path: "",
    //     component: DefaultTodo,
    //     children: [
    //       {
    //         path: "",
    //         name: "TodoList",
    //         component: TodoList,
    //       },
    //       {
    //         path: "/deskripsi",
    //         name: "Deskripsi",
    //         component: DeskripsiTodo,
    //       },
    //     ],
    //   },
    // ],
  },
  {
    path: "/deskripsi/:id",
    name: "Deskripsi",
    component: DescriptionTodo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
