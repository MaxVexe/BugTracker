import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Card from "../componets/Card";
import AchieveCard from "../componets/AchieveCard"



function Home(){
    return(<>
        <Header />
        <Card cardCom = {<AchieveCard name = "bounty"/>}/>
        
        </>
    )
}

export default Home