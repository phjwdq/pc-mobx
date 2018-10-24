/**
 * @file indexRoutes
 * @author luwenlong(zuiwosuifeng@gmail.com)
 */

/* eslint-disable */
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {hot} from 'react-hot-loader'
import Loadable from 'react-loadable'
import PageLoading from '@components/PageLoading'

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '@views/home'),
    loading: PageLoading
})

const NotFound = Loadable({
    loader: () => import(/* webpackChunkName: "notfound" */ '@views/notfound'),
    loading: PageLoading
})

const AppRouter = (
    <Router>
        <Route path="/" component={(props) => (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notfound" component={NotFound} />
                <Redirect to="/notfound" />
            </Switch>
        )}/>
    </Router>
)

export default hot(module)(AppRouter)
