<template>
  <v-layout>
    <v-app-bar color="white" density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Ezy Pos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn class="Log-out-btn" v-bind="props" icon>L</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-btn @click="LogOut()">LogOut</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer permanent>
      <v-list density="compact" nav>
        <v-list-item to="/HomePage/DashBoard" prepend-icon="mdi-view-dashboard" title="Dashboard"
          value="Dashboard"></v-list-item>
        <v-list-item to="/HomePage/UploadPage" prepend-icon="mdi-upload" title="Uploads" value="Uploads"></v-list-item>
        <v-list-item to="/HomePage/DiscountReport" prepend-icon="mdi-sale" title="Discount Report"
          value="Discount Report"></v-list-item><v-list-item to="/HomePage/OcReport" prepend-icon="mdi-bag-checked"
          title="OC-ENT Report" value="OC-ENT Report"></v-list-item>
        <v-list-item to="/HomePage/VoidReport" prepend-icon="mdi-forum" title="Void Report"
          value="Void Report"></v-list-item>
        <v-list-item to="/HomePage/PocCheck" prepend-icon="mdi-check-circle" title="Pos Checks"
          value="Pos Checks"></v-list-item>
        <v-list-item>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                Settings
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list density="compact" nav>
                  <v-list-item to="/SettingPage/PrintSetting" prepend-icon="mdi-cog" title="Print Setting"
                    value="Print Setting"></v-list-item>
                  <v-list-item to="/SettingPage/OutletsPage" prepend-icon="mdi-office-building-outline" title="Outlets"
                    value="Outlets"></v-list-item>
                  <v-list-item to="/SettingPage/PosPrinters" prepend-icon="mdi-printer" title="Pos Printer"
                    value="Pos Printer"></v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="m-2">
      <router-view></router-view>
    </v-main>

  </v-layout>
</template>
<script setup>
function LogOut() {
  localStorage.removeItem("LoginData")
  window.location.reload()
}
</script>