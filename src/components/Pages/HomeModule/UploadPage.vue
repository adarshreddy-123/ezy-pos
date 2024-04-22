<template>
  <div>
    <div class="d-flex justify-content-between mt-2 mb-2">
      <h6>Uploads Page</h6>
      <v-btn>Action</v-btn>
    </div>
    <!-- <p v-for="{item, index} in response" :key="index">{{ item.response }}</p> -->
  </div>
</template>
//  <script>
// import axiosInstance from '@/intercepters.js'
// export default {
//   return: {
//     responseData: [],
//   },
//   mounted() {
//     this.getData();
//   },
//   methods: {
//     getData() {
//       axiosInstance.get('https://dummyjson.com/todos')
//         .then(response => {
//           this.responseData = response
//           console.log('data:', response);
//           console.log(this.responseData);

//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     },

//   }
// }
// </script>
