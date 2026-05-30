import AdminDashboard from "@/views/pages/dashboard/admin-dashboard.vue";
import category from "./pages/category.js";
import bank from "./pages/bank.js";
import biaya from "./pages/biaya.js";
import jeniscust from "./pages/jeniscust.js";
import satuan from "./pages/satuan.js";
import carabayar from "./pages/carabayar.js";
import cabang from "./pages/cabang.js";
import grupuser from "./pages/grupuser.js";
import akses from "./pages/akses.js";
import karyawan from "./pages/karyawan.js";
import supplier from "./pages/supplier.js";
import rak from "./pages/rak.js";

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
pages.push(cabang)
pages.push(grupuser)
pages.push(akses)
pages.push(karyawan)
pages.push(supplier)
pages.push(rak)

export default pages