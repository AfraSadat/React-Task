import React, { useEffect } from "react";

const ApiTask =() => {
    let API ="https://hn.algolia.com/api/v1/search?query=html"
    const fetchApiData= async (url) => {
        try {
            const res =await fetch(url);
            const data = await res.json();
            console.log(data);
        }
        catch(error){
            console.log(error)
        }
    };

    useEffect(() =>{
        fetchApiData(API);
    },[]
    );
    return(
    <>
    <h2> Calling API Task</h2>
    </>
    );
};

export default ApiTask;