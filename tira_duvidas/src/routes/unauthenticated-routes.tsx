import React from "react";
import {
  ActionFunction,
  LazyRouteFunction,
  LoaderFunction,
  RouteObject,
  ShouldRevalidateFunction,
  createBrowserRouter,
} from "react-router-dom";
import { ChartLine } from "@phosphor-icons/react";

import { SignUp } from "../screens/login/signup";
import { RootUnauthenticatedLayout } from "../layouts/root-unauthenticated-layout";
import { DefaultErrorElement } from "../screens/error/default-error";

export declare type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};

export type Children = {
  icon?: React.ReactElement;
  type?: string;
  name?: string;
  key?: string;
  hidden?: boolean;
  index?: boolean;
  path?: string;
  element?: React.ReactNode | null;
  loader?: LoaderFunction;
};

export interface CustomRouteProps {
  path?: string;
  type?: string;
  name?: string;
  key?: string;
  icon?: React.ReactNode;
  hidden?: boolean;
  index?: boolean;
  children?: Children[];
  checkPermission?: boolean;
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  errorElement?: React.ReactNode | null;
  ErrorBoundary?: React.ComponentType | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>;
}

export const unauthenticatedRoutes = [
  {
    type: "internal",
    name: "singup",
    index: true,
    icon: <ChartLine weight="bold" size={20} />,
    element: <SignUp />,
    hidden: true,
  },
];

const unauthenticatedRoutesWithLayout = [
  {
    path: "/",
    element: <RootUnauthenticatedLayout />,
    children: unauthenticatedRoutes,
    errorElement: <DefaultErrorElement />,
  },
];

export const unauthenticatedRouter = createBrowserRouter(
  unauthenticatedRoutesWithLayout
);
