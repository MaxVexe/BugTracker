import React from 'react';


function BountyInfo(){
    const boxS = {
        position: "fixed",
        top: "0",
        left:"0",
        justifyContent:"center",
        background: "Grey",
        borderRadius: "10px",
        width: "500px",
        height: "500px",
        display: "flex",
        textColor:"black",
    }

    return(
        <>
        <span style={boxS}> Info </span>
        
        </>
    )
}

export default BountyInfo