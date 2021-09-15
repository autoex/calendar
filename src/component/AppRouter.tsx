import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../routes";

const AppRouter: React.FC = () => {
    const auth = true;
    return (
        <div>
            {auth ?
                <Switch>
                    {privateRoutes.map(route => <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />)}
                    <Redirect to={RouteNames.CALENDAR} />
                </Switch>
                :
                <Switch>
                    {publicRoutes.map(route => <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />)}
                    <Redirect to={RouteNames.LOGIN} />
                </Switch>
            }


        </div>
    );
};

export default AppRouter;