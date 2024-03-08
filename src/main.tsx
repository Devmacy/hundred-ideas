import React from 'react'
import ReactDOM from 'react-dom/client'
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/react"
import '@/common/styles/entrance.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Analytics/>
        <SpeedInsights/>
    </React.StrictMode>,
)
