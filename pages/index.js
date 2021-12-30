import Header from '../src/components/Header.js'
import BestTechs from '../src/components/BestTechs.js'
import Techs from '../src/components/Techs.js'
import Discord from '../src/components/Discord.js'
import Partners from '../src/components/Partners.js'
import Contact from '../src/components/Contact.js'
import Footered from '../src/components/Footered.js'

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