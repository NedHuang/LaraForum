import React from "react";
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {Login,Register} from "../componnets/auth";
import {About} from "../componnets/utils"
import {CreatePost} from "../componnets/post";

import {HomeLayout,MainPageLayout,PostPageLayout} from '../layouts'

const defaultLayout = ({route}) => (
    <div>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
);


const routes = [
    {
        component: defaultLayout,
        routes: [
            {
                path: '/',
                // TODO figure it out why the nested route
                // cannot work when `exactRoute` is true
                exact: true,
                component: HomeLayout,
                routes: [
                    {
                        path: '/',
                        exact: true,
                        component: MainPageLayout
                    },
                    {
                        path: '/post',
                        exact: true,
                        component: PostPageLayout
                    },
                    {
                        path: '/edit',
                        exact:true,
                        component: CreatePost
                    }
                ]
            },
            {
                path: '/login',
                exact: true,
                component: Login,
            },
            {
                path: '/register',
                exact: true,
                component: Register,
            },
            {
                // TODO use carousel to show the stack
                path: '/about',
                exact: true,
                component: About
            },


        ]
    }
]

export {routes}
