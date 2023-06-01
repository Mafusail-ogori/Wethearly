import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Header from '../components/Header';

const RootLayout = () => {
    return <>
        <Header/>
        <div id = "modal"></div>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}

export default RootLayout