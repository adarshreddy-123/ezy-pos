import PrintSetting from "./PrintSetting.vue";
import SettingPage from "./SettingPage.vue";
import PosPrinters from "./PosPrinters.vue";
import OutletsPage from "./OutletsPage.vue";

const SettingRoutes=[
    {
        path:'/SettingPage',
        component:SettingPage,

        children:[
            {
                path:'PrintSetting',
                component:PrintSetting
            },
            {
                path:'OutletsPage',
                component:OutletsPage
            },
            {
                path:'PosPrinters',
                component:PosPrinters
            }
        ]
    }
]
export default SettingRoutes