import { TItems, TPath } from "../types/routes.type";


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