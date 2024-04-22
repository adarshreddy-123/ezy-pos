// import DashBoard from "./DashBoard.vue";
// import DiscountReport from "./DiscountReport.vue";
// import HomePage from "./HomePage.vue";
// import OcReport from "./OcReport.vue";
// import PocCheck from "./PocCheck.vue";
// import UploadPage from "./UploadPage.vue";
// import VoidReport from "./VoidReport.vue";

const DashBoard=()=>import('./DashBoard.vue');
const DiscountReport=()=>import('./DiscountReport.vue');
const HomePage=()=>import('./HomePage.vue');
const OcReport=()=>import('./OcReport.vue');
const PocCheck=()=>import('./PocCheck.vue');
const UploadPage=()=>import('./UploadPage.vue');
const VoidReport=()=>import('./VoidReport.vue');

const HomeRoutes=[
    {
        path:'/HomePage',
        name:'HomePage',
        component:HomePage,
        redirect:'/HomePage/DashBoard',

        children:[
            {
                path:'DashBoard',
                component:DashBoard
            },
            {
                path:'UploadPage',
                component:UploadPage,
            },
            {
                path:'DiscountReport',
                component:DiscountReport
            },
            {
                path:'OcReport',
                component:OcReport
            },
            {
                path:'VoidReport',
                component:VoidReport
            },
            {
                path:'PocCheck',
                component:PocCheck
            }
        ]
    }
]
export default HomeRoutes