import { useEffect, useState } from "react";

const Compoprops = (props) => {
    const [apidata, setApiData] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async () => {
        let result = await fetch('https://dummyjson.com/products/1');
        result = await result.json();
        setApiData(result)
    }
    console.log(apidata);
    return (
        <div>
            <h3>Testing Compinent props</h3>
            Welcome to : {props.city}
            <br></br>
            <h3>Functional props testing and mocking</h3>
            <button onClick={props.testFunction}>Functional props</button>
            <h3>Debugging in React testing library - 5 ways</h3>
            <ul>
                <li>Automatic Debugging</li>
                <li>prettyDOM</li>
                <li>debug</li>
                <li>DEBUG_PRINT_LIMIT=10000 npm test (By default react testing library debug till 7000 lines)</li>
                <li>logRoles</li>
            </ul>
            <div>
                <h4>Heading 2</h4>
                <h4>Heading 5</h4>
            </div>
            <h3>Mocking and Testing Rest API</h3>
            <ul>
                <li>{apidata.title}</li>
                <li>{apidata.brand}</li>
                <li>{apidata.description}</li>
            </ul>
        </div>

    )
}
export default Compoprops;