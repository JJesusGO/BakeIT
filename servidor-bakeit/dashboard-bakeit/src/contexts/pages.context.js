import { createContext } from "react";


export const pagesInit = [
    {
        id: "pages-1",
        title: "Usuarios",
        url: "/users",
        icon: "fa-table",
    },
    {
        id: "pages-2",
        title: "Productos",
        url: "/products",
        icon: "fa-table",
    }
]
export const PagesContext = createContext(pagesInit);