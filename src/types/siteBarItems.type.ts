import { ReactNode } from "react";

export type TAdminSideBar = {
    key: string;
    label: ReactNode;
    children?: TAdminSideBar[];
};

export type TItems = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TItems[];
};