/**
 * @file 定义路由匹配，渲染对应的 UI 组件
 * @author  chris<wfsr@foxmail.com>
 */
/* eslint-disable fecs-valid-jsdoc */
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from 'page/Home';

import AsyncRoute from 'ui/AsyncRoute';
const routeConfig = [
    {
        title: '首页',
        path: '/home',
        component: Home, // 首页不拆分打包
    },
    {
        title: '我的',
        path: '/my',
        component: 'My',
    },
    {
        title: '阅读',
        path: '/reading',
        component: 'Reading',
    },
];

export default function() {
    return (
        <Switch>
            {routeConfig.map(
                ({
                    title,
                    path,
                    component,
                    sync = typeof component !== 'string',
                }) => (
                    <AsyncRoute
                        exact
                        key={component}
                        data={{ title }}
                        path={path}
                        sync={sync}
                        component={
                            sync ? component : () => import(`page/${component}`)
                        }
                    />
                )
            )}

            <Route>
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
}
