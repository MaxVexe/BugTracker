

function Card(props){

 
    let bountyKey = 0

    const box = {
            width: "700px",
            height: "500px",
            backgroundColor: "#f0f0f0",
            border: "2px solid #333",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",

            // position: "absolute",
            // top: "85%",
            // left: "80%",
            // transform: "translate(-50%, -50%)",
    }  
    const textColors = {
        fontSize:"45px",
        color:"#0763A5",
       }


    return(
        <>
            <div className="Bottom Halve" style={{ display: 'inline-block' }}>
            <h1>Whats New</h1>
                <div className="Box" style={box}>
                    <h1 style={textColors}>This will be all the updates that have been added to this page</h1>
                </div>
            </div>
            <div style={{ display: 'inline-block' , margin  :"20px"}}>
            <h1>Bounty Board</h1>
            <p></p>
                
            <ul style={{ display: 'flex', listStyleType: 'none', margin: "20px", padding: "0" }}>
                <li  key = {bountyKey += 1} style={{ marginLeft: "20px" }}>
                    {props.cardCom}
                    
                </li>
                <li key = {bountyKey += 1} style={{ marginLeft: "20px" }}>
                    {props.cardCom}
                </li>
                </ul>
                
            </div>
          

    </>
    );
}

export default Card