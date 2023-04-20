import React,{useState, useEffect} from "react";
const SamplePage2 = () => {
    const [counter1, setCounter1] =useState(0);
    const [counter2, setCounter2] =useState(0);

    const handleClick1 =() => setCounter1(counter1+1);
    const handleClick2 =() => setCounter2(counter2+1);

    useEffect( ()=> {console.log('inside UseEffect')
    },[counter1]) ;
    return(
        <>
    <button style = {{marginTop: '50px'}} onClick={handleClick1}>Click Me 1 </button>
    <button style = {{marginTop: '50px'}} onClick={handleClick2}>Click Me 2</button>
        <div style={{marginYop: '50px'}}>{ `counter1 is : ${counter1}`}</div>
        <div style={{marginYop: '50px'}}>{ `counter2 is : ${counter2}`}</div>
        </>
    )
}
export default SamplePage2;