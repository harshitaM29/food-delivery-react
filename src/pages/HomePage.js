import Header from "../components/Layout/Header";
import Tab from "../components/Layout/Tab";
import Footer from "../components/Layout/Footer";
import { Fragment, useState } from "react";
import Delivery from '../components/Delivery/Delivery';
import DiningOut from '../components/Delivery/DiningOut';
import NightLife from '../components/Delivery/NightLife';

const HomePage = () => {
    const [activeTab,setActiveTab] = useState("Delivery");
    
    return <Fragment>
        <Header />
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getScreen(activeTab)}
        <Footer />
    </Fragment>
};
const getScreen = (tab) => {
    switch(tab) {
        case "Delivery" :
            return <Delivery />
        case "DiningOut":
            return <DiningOut />
        case "NightLife":
            return <NightLife />
        default:
            return <Delivery />
    }
}

export default HomePage;