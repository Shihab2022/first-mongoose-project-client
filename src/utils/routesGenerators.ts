import { ReactNode } from "react";

type TPath = {
    path: string;
    element: ReactNode;
};
type TItems = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TItems[]
};
export const routesGenerators = (items: TItems[]) => {
    const routes = items.reduce((acc: TPath[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            });
        }
        if (item.children) {
            item.children.forEach((child) =>
                acc.push({
                    path: child.path!,
                    element: child.element,
                })
            );
        }
        return acc;
    }, []);

    return routes
}