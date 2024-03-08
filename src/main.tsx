import React from 'react'
import ReactDOM from 'react-dom/client'
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/react"
import '@/common/styles/entrance.scss'
import {ConfigProvider} from "antd";
import {RouterProvider} from "react-router-dom";
import router from "@/router/router.tsx";
import zhCN from 'antd/locale/zh_CN'
import {config} from "@/common/config/antdTheme.ts";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import store, {persist} from "@/store/store.ts";

dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <ConfigProvider locale={zhCN} theme={config}>
                    <RouterProvider router={router}/>
                </ConfigProvider>
            </PersistGate>
        </Provider>
        <Analytics/>
        <SpeedInsights/>
    </React.StrictMode>,
)
