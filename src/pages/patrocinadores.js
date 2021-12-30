import Header from '../components/Header.js'
import Techs from '../components/Techs.js'

const patrocinadores = () => {
    return (
        <>
            <Header/>

            <section id="tecnologia">
                <div className="content-page">
                    <h1>Patrocinadores</h1>
                    <p>
                        Ao longo do tempos tivemos vários patrocinadores, membros que ajudaram de forma financeira nossa comunidade, seja através
                        de uma doação, seja através de um Nitro Boost no Discord - que ajuda muito na divulgação e status do servidor, seja uma 
                        hospedagem paga de algum projeto, independente, esses membros estão eternizados em nossos corações e também nessa página.
                    </p>

                    <p>
                        A equipe da Kalify Inc, Aperture Laboratories e Aperture Science Innovators agradece o apoio de vocês nessa caminhada que
                        andamos tendo diariamente, muito obrigado pelo carinho e pela ajuda que vocês nos deram e dão todos os dias.
                    </p>

                    <p>Obrigado!</p>

                    <hr />

                    <ul>
                        <li>LawL#0003</li>
                        <li>Unsolved Explorer#5450</li>
                        <li>Zuckonit#2077</li>
                        <li>Alexandrino#1989</li>
                        <li>Nira#8054</li>
                        <li>! 𝒄𝒂𝒓𝒊𝒐𝒄𝒂 !#0001</li>
                        <li>hahuma#5624</li>
                        <li>MuriloAlmeida#7051</li>
                        <li>Enzo Albornoz#5231</li>
                    </ul>

                    <hr />
                </div>
            </section>

            <Techs/>
        </>
    )
}

export default patrocinadores
