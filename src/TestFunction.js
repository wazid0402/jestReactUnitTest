import { useState } from "react";
import HandleOtherFunction from './helper'
function TestFunction(){
    const [data, setData] = useState('');
    const handleData = () => {
        setData('Set Data is called')
    }
   return(
    <div>
        <h1>This is Test Function Component</h1>
        <button data-testid='btn1' onClick={handleData}>Update Data</button><br></br>
        <button onClick={HandleOtherFunction}>Print</button>
        <h2>{data}</h2>
    </div>
   )
}
export default TestFunction;