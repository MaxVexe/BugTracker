import { colors } from "@mui/material"


function Header(){
    const buttonStyle = {
        backgroundColor: "#FFDE59",
        border: "none",
        color: "white",
        padding: "15px 23px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
    }


    const root = {
        backgroundColor:"#0763A5",
        height: '50vh',
        padding: '20px',
        borderRadius: '5px',
    }
    const title = {
        fontSize:"125px",
        color:"#FFDE59",
        textAlign: "center",
    }
    const ul = {
        paddingLeft:"0",
    }
    const ulli = {
        display: "inline", /* Displays list items inline */
        marginRight: "20px",
    }

    
    return( <h1>
        <div className="title" style={root}>
        <header>
            <nav>
                <ul style={ul}>
                    <div style={ulli}>
                    <li style={ulli} > 
                        <input style ={buttonStyle} type="button" onClick="location.href='/';" value="Home" />
                    </li>
                    <li style={ulli}> 
                        <button style={buttonStyle}>Profile</button>
                    </li>
                    </div>
                </ul>
            </nav>
            </header>
       
            
            <h1 style={title}>Welcome Home</h1>
            </div>
            
        </h1>
    )
}

export default Header