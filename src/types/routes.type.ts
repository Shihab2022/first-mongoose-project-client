import { ReactNode } from "react";

export type TPath = {
    path: string;
    element: ReactNode;
};
export type TItems = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TItems[]
};