import { useState } from "react";

function Card(props){

    const[test,setTest] = useState("");
    

    function handle(event){
        setTest(event.target.value)
    }
    return(
        <>
        <label>This is the label for Text</label>
        <input value ={test} onChange={handle}/>
        <p>{test}</p>
       </>
    );
}

export default Card