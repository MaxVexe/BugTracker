function AchieveCard(){
    const boxS = {
        
        background: "Yellow",
        borderRadius: "10px",
        width: "160px",
        height: "150px",
        display: "flex",
        textColor:"black",
    }

    const popUp = {
        position: "fixed",
        zIndex: "1",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        overflow:"auto",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "none",
    }

   function handleClick(){
        console.log("Temp Give more Detail")

   }

    return(
        <>
        <button onClick={handleClick} style={boxS}>
            <h1>Hello</h1>
        </button>
        </>
    );
}

export default AchieveCard