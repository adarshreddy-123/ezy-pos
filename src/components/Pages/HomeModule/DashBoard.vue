<template>
  <div>
    <div v-if="isLoading">
      <LoaderComp />
    </div>
    <div v-else>
      <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
        <h6>Dashboard Page</h6>
        <v-btn >Action</v-btn>
      </div>
      <div class="bg-white">
        <div class=" d-flex gap-3">
          <input type="date" class="input-date form-control mt-3 ms-3" />
          <input type="search" class="input-date form-control mt-3" placeholder="Search" />
        </div>

        <table class="w-100">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Id</th>
              <th>Email</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.full_name }}</td>
              <td>{{ item.employee_number }}</td>
              <td>{{ item.personal_email }}</td>
              <td>Active</td>
              <td>{{ item.mobile }}</td>
              <td><button type="button" class="file-upload">
                  <i class="ri-upload-2-fill me-2"></i>Upload<input type="file" /></button></td>
            </tr>
          </tbody>
        </table>

        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>{{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>

      </div>
    </div>
  </div>

</template>
<script>
import axiosInstance from "@/intercepters.js";
import { ApiUrls, Doctypes } from "../../shared/apiUrls";
import LoaderComp from '../../Loader/LoaderComp';
export default {
  components: {
    LoaderComp
  },
  data() {
    return {
      data: [],
      currentPage: 1,
      itemsPerPage: 5,
      isLoading: true,
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(["*"]);
      axiosInstance
        .get(ApiUrls.resouce + "/" + Doctypes.employee, {
          params: queryParams
        })
        .then(response => {
          this.data = response.data;
          console.log("Employee Data", this.data);
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        })

        .catch(error => {
          console.error("Error fetching data:", error);
        });
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.data.slice(startIndex, endIndex);
    },
  },
}
</script>
