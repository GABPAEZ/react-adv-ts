import { lazy, LazyExoticComponent } from "react";
import { LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    //Component: (React.LazyExoticComponent<() => JSX.Element>) | (() => JSX.Element);
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: "/lazyload",
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'lazyLayout-Dash',
    },
    {
        to: "/no-lazy",
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy',
    }
]