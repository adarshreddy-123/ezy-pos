<template>
  <div>
    <v-carousel width="500" class="mb-5">
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
      <template v-slot:prev="{props}">
          <v-btn v-bind="props">prev</v-btn>
      </template>
      <template v-slot:next="{props}">
      <v-btn v-bind="props">next</v-btn>
     </template>
    </v-carousel>

    <v-carousel width="500" class="mb-5" hide-delimiters>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
    </v-carousel>

    <v-carousel width="500" show-arrows="hover">
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
    </v-carousel>
  </div>


</template>
<style scoped>
.v-carousel {
  width: 50%;
}
</style>