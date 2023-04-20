import React,{useState} from "react";
const SamplePage = () => {
    const [counter, setCounter] =useState(0);
    const handleClick =() => setCounter(counter+1);
    return(
        <>
    <button style = {{marginTop: '50px'}} onClick={handleClick}>Click Me </button>
        <div style={{marginYop: '50px'}}>{counter}</div>
        </>
    )
}
export default SamplePage;