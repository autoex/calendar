import Login from "../pages/Login";
import Calendar from "../pages/Calendar";

export interface IRoutes {
    path: string
    component: React.ComponentType
    exact: boolean

}

export enum RouteNames {
    LOGIN = '/login',
    CALENDAR ='/'
}


export const publicRoutes: IRoutes[] = [
    {path: RouteNames.LOGIN, component: Login, exact: true}
];

export const privateRoutes: IRoutes[] = [
    {path: RouteNames.CALENDAR, component: Calendar, exact: true}
];