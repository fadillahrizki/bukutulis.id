<template>
  <div>

    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li :class="{ active: activeMenu === 'dashboard' }"><router-link to="/dashboard"><i
                  data-feather="grid"></i><span>Dashboard</span></router-link></li>
            <li class="submenu-open">
              <h6 class="submenu-hdr">Masters</h6>
              <ul>
                <li><a href=""><i data-feather="box"></i><span>Data Config (Perusahaan)</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Cabang / Outlet</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Jenis Customer</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Customer</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Supplier</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Karyawan</span></a></li>
                <li :class="{ active: activeMenu === 'category' }"><router-link to="/category"><i
                      data-feather="box"></i><span>Data Kategori</span></router-link></li>
                <li><a href=""><i data-feather="box"></i><span>Data Jenis Satuan</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Rak</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Produk</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Satuan Produk</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Bank</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Biaya</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Cara Bayar</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Data Lokasi</span></a></li>
              </ul>
            </li>
            <li class="submenu-open">
              <h6 class="submenu-hdr">Transaksi</h6>
              <ul>
                <li><a href=""><i data-feather="box"></i><span>Pembelian + Cetak</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Retur Pembelian</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Pelunasan Hutang + Cetak</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Penjualan POS / Retail + Cetak</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Penjualan Grosir + Cetak</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Retur Penjualan</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Pembayaran Piutang + Cetak</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Adjust / Penyesuaian Stok</span></a></li>
              </ul>
            </li>
            <li class="submenu-open">
              <h6 class="submenu-hdr">Laporan</h6>
              <ul>
                <li><a href=""><i data-feather="bar-chart-2"></i><span>Soon</span></a></li>
              </ul>
            </li>
            <li class="submenu-open">
              <h6 class="submenu-hdr">Utility</h6>
              <ul>
                <li><a href=""><i data-feather="box"></i><span>Cancel / Batal Transaksi</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Closing / Tutup Harian</span></a></li>
              </ul>
            </li>
            <li class="submenu-open">
              <h6 class="submenu-hdr">Operator</h6>
              <ul>
                <li><a href=""><i data-feather="box"></i><span>Data Menu</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Group User (Role)</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data User</span></a></li>
                <li><a href=""><i data-feather="box"></i><span>Data Akses</span></a></li>
              </ul>
            </li>
            <li class="submenu-open">
              <h6 class="submenu-hdr">Profile</h6>
              <ul>
                <li><a href="users.html"><i data-feather="user-check"></i><span>Ubah Profile</span></a></li>
                <li><a href="roles-permissions.html"><i data-feather="shield"></i><span>Ubah Password</span></a>
                </li>
                <li><a href="delete-account.html"><i data-feather="lock"></i><span>Logout</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Sidebar -->

  </div>
</template>

<script>
export default {
  props: {
    activeMenu: {
      type: String,
      required: true
    },
  },
}
</script>

<style></style>
