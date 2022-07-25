import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const Tabs = (props) => {
    const {tab1, tab2, tab3} = props;
    const [tabArr, setTabArr] = useState([tab1, tab2, tab3]);
    //The default Tab 1 is set here
    const [currentTab, setCurrentTab] = useState(tab1);
    // console.log(tabArr)
    // console.log(currentTab.tabName);

    return(
        <div>
            {
                tabArr.map((tab, index)=>{
                    return <Button variant='light m-2' key={index} value={tab} onClick={ () => setCurrentTab(tab)}>{tab.tabLabel}</Button>
                })
            }
            <Card className="col-4 mx-auto">
                <h3>{currentTab.tabLabel}</h3>
                <p>{currentTab.tabContent}</p>
            </Card>
        </div>
    );
}

export default Tabs;