import { Fragment } from "react"


const Tab = ({activeTab,setActiveTab}) => {
    return (
        <Fragment>
            <button onClick={() =>setActiveTab("NightLife")}>Click</button>
            </Fragment>
    )
};

export default Tab;