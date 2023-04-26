import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FileBlockArray } from "../../modules/fileBlockArray/FileBlockArray";
import { FilePage } from "../../modules/filePage/FilePage";

const Router: React.FC = () => {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <FileBlockArray />,
            errorElement: <h1>404 Error!</h1>,
        },
        {
            path: "file/:id",
            element: <FilePage />,
            errorElement: <h1>404 Error!</h1>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export {Router}