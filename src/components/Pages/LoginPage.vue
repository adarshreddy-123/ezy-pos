<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema" class="mx-auto" width="300" v-slot="{ errors }">
      <label>Email</label>
      <Field type="text" name="Email" :class="{ 'is-invalid': errors.Email }" class="form-control"
        placeholder="Enter Email" v-model="formdata.usr" />
      <ErrorMessage name="Email" />
      <br />
      <label>Password</label>
      <Field type="password" name="password" :class="{ 'is-invalid': errors.password }" class="form-control"
        placeholder="Enter password" v-model="formdata.pwd" />
      <ErrorMessage color="red lighten-5" name="password" />
      <br />
      <v-btn type="submit">Sign in</v-btn>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ApiUrls, } from "../shared/apiUrls";
import axiosInstance from "../../../src/intercepters";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import router from "../../router";

const formdata = {
  usr: '',
  pwd: ''
}
const schema = yup.object({
  Email: yup.string().required(),
  password: yup.string().required()
});
function onSubmit() {
  axiosInstance.post(ApiUrls.login, formdata)
    .then((response) => {
      console.log("Login Data", response);
      localStorage.setItem("LoginData", JSON.stringify(formdata))
      toast.success("Login Successful");
      setTimeout(() => {
        router.push({ name: 'HomePage', })
      }, 1000)
    })
    .catch((errors) => {
      console.log(errors);
    })
}
</script>