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

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN} theme={config}>
            <RouterProvider router={router}/>
        </ConfigProvider>
        <Analytics/>
        <SpeedInsights/>
    </React.StrictMode>,
)
