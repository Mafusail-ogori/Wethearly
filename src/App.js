import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AuthContextProvider from "./storage/AuthContext";
import DataContextProvider from "./storage/DataStorage";

const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout/>,
    children: [
        {path: '', element: <Home/>}
    ]
}])

const App = () => {
    return <AuthContextProvider>
        <DataContextProvider>
            <RouterProvider router={router}/>
        </DataContextProvider>
    </AuthContextProvider>
}

export default App;
