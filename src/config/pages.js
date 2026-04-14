import AdminDashboard from "@/views/pages/dashboard/admin-dashboard.vue";
import category from "./pages/category.js";
import bank from "./pages/bank.js";
import biaya from "./pages/biaya.js";
import jeniscust from "./pages/jeniscust.js";
import satuan from "./pages/satuan.js";
import carabayar from "./pages/carabayar.js";

const pages = [
    {
        path: 'dashboard',
        component: AdminDashboard,
        title: 'Dashboard'
    },
]

pages.push(category)
pages.push(bank)
pages.push(biaya)
pages.push(jeniscust)
pages.push(satuan)
pages.push(carabayar)

export default pages