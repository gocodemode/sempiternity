import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./view-components/Home'))
const Events = lazy(() => import('./view-components/Events'))
const LoadingMessage = () => `loading...`