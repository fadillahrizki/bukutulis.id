<template>
  <div>
    <!-- Main Wrapper -->
    <div class="main-wrapper">

      <layout-header />
      <layout-sidebar :active-menu="$route.path" />

      <div class="page-wrapper">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>

    </div>
    <!-- /Main Wrapper -->
  </div>
</template>