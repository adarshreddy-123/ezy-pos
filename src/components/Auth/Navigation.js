export default function isAuthenticated() {
   return localStorage.getItem("LoginData") !== null;
}