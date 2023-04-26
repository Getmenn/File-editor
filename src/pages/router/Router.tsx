import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FileBlockArray } from "../../modules/fileBlockArray/FileBlockArray";
import { FilePage } from "../../modules/filePage/FilePage";

const Router: React.FC = () => {
    
    const router = createBrowserRouter([
        {
            path: "/File-editor",
            element: <FileBlockArray />,
            errorElement: <h1>404 Error!</h1>,
        },
        {
            path: "/File-editor/file/:id",
            element: <FilePage />,
            errorElement: <h1>404 Error!</h1>,
        },
        {
            path: "*",
            element: <h1>Oops! There is no such page</h1>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export {Router}