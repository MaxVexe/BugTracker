import BountyInfo from "./BountyInfo";
import { useState } from "react";

function AchieveCard(props){
    const boxS = {
        
        background: "Yellow",
        borderRadius: "10px",
        width: "160px",
        height: "150px",
        display: "flex",
        textColor:"black",
    }


    const [bountyInfoVisible,setbountyInfoVisible] = useState(false)


   function handleClick(){
     let change = bountyInfoVisible? false : true
     setbountyInfoVisible(change)
   }

    return(
        <>
        <button onClick={handleClick} style={boxS}>
            <h1>{props.name}</h1>

        </button>
        {bountyInfoVisible && <BountyInfo />}
        </>
    );
}

export default AchieveCard