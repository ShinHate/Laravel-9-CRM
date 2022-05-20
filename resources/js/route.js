import { createRouter,createWebHistory } from "vue-router"

/*Pages*/
import AdminPage from "./pages/AdminPage";
import UsersList from "./pages/UsersList";
import UserPage from "./pages/UserPage";

const router = createRouter({
    history:createWebHistory(),
    routes: [
        { path: '/admin', component: AdminPage},
        { path: '/users', component: UsersList},
        { path: '/users/:id', component: UserPage},
    ],
});
export default router;

