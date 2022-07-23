
import { useState } from 'react';
import { Component } from 'react';
import styles from './BoxForm.module.css';


const BoxForm = () => {
    
    //This code is a work in progress for setting a height and width to the boxes
    // const [colorhwArr, setColorHWArr] = useState([]);
    // const [colorhwObj, setColorHWObj] = useState({});
    // const [hwArr, setHwArr] = useState([]);
    // const [heightwidth, setHeightWidth] = useState('')
    const [colorArr, setColorArr] = useState([]);
    const [backgroundColor, setBackgroundcolor] = useState('');
    
    
    const createBox = (e) => {
        
        
        e.preventDefault();

        setColorArr([...colorArr, backgroundColor]);
        
        //This code is part of the height and width feature
        // setColorHWObj({...colorhwObj, color : backgroundColor, ...colorhwObj, hw : heightwidth });
        // setColorHWArr([...colorhwArr, colorhwObj]);
        // setHwArr([...hwArr, heightwidth]);
        // console.log(colorhwArr)
    };

    
    return (
            <div>
                <form className="formBlock" onSubmit={ createBox }>
                    <div>
                        <label>Color:</label>
                        <input type="color" onChange={(e) => setBackgroundcolor(e.target.value)}/>
                    </div>
                    {/* <div>
                        <label>Height and Width:</label>
                        <input type="number" onChange={(e) => setHeightWidth(e.target.value)}/>
                    </div> */}
                    <button type="submit">Add</button>
                </form>
                <div className={styles.boxContainer}>
                    {
                        colorArr.map( (color) => {
                            return <div key="{index}" style={{margin:"10px", backgroundColor: color, boxSizing:'border-box', width: "100px", height: "100px" }}></div>
                        })
                    }

                    {/* This code is part of the height and width feature */}
                    {/* {
                        colorhwArr.map( (colorHW, index) => {
                            console.log(index);
                            return <div key="{index}" style={{margin:"10px", backgroundColor: colorHW.color, width: colorHW.hw + "px", height: colorHW.hw + "px" }}></div>
                        })
                    } */}
                </div>
            </div>
    )
}

export default BoxForm;