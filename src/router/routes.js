import Vue from "vue";
import VueRouter from "vue-router";
import AddTeam from "../views/AddTeam.vue";
import RegistePage from "../views/RegistePage.vue";
import artPage from "../views/ArticlePage.vue";
import articles from "../views/Arcticles.vue";
import article from "../views/ArticlePage.vue";
import myteams from "../views/myTeams.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: RegistePage,
  },
  {
    path: "/articles",
    name: "articles",
    component: articles,
  },
  {
    path: "/article/:id",
    name: "article",
    component: article,
  },
  {
    path: "/teams",
    name: "AddTeam",
    component: AddTeam,
  },
  {
    path: "/article",
    name: "article",
    component: artPage,
  },
  {
    path: "/myteams",
    name: "myteams",
    component: myteams,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
