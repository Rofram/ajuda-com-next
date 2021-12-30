import Header from '../components/Header.js'
import BestTechs from '../components/BestTechs.js'
import Techs from '../components/Techs.js'
import Discord from '../components/Discord.js'
import Partners from '../components/Partners.js'
import Contact from '../components/Contact.js'
import Footered from '../components/Footered.js'

function Home() {
    return (
        <>
            <Header/>
            <BestTechs/>
            <Techs/>
            <Discord/>
            {/* <Partners/> */}
            <Contact/>
            <Footered/>
        </>
    )
}

export default Home