import Link from 'next/link'
import Header from '../components/Header.js'
import BestTechs from '../components/BestTechs.js'

const sobrenos = () => {
    return (
        <>
            <Header/>

            <section id="comunity">
                <div className="content-page">
                    <h1>Sobre nós</h1>
                    <p>
                        A <strong>Aperture Laboratories</strong> foi fundada em Setembro de 2020 em Campinas, interior de São Paulo pela Kalify Inc, 
                        uma empresa de desenvolvimento em soluções digitais, fundada por Anderson {`"`}Yagasaki{`"`} Marlon. 
                        Eis que Yagasaki, junto de {`"`}Fukubi{`"`}, tiveram juntos a ideia de reunir pessoas inexperientes em projetos 
                        já existentes ou de produção da comunidade com finalidades para ajudar a sociedade num todo, 
                        seja fazendo uma calculadora, um projeto de contabilidade, aplicativo de mapa ou até mesmo uma lista de tarefas.
                    </p>

                    <p>
                        A intenção era e é adicionar desenvolvedores sem experiência em projetos que poderiam de fato fosse similar
                        a um ambiente profissional, metas, scrum, kabam, trabalhar em conjunto com uma equipe,
                        com uma responsabilidade de peso e que agregasse no portfólio de forma significativa e sem fins lucrativos seria
                        algo extremamente significativo para qualquer um, inclusive para quem está começando.
                    </p>

                    <p>Isso de fato acontece, mas atualmente por debaixo dos panos, já que não são todos os membros interessados em
                        participar, se esforçar e estar garantindo a experiência de estar em um projeto. Essa equipe reservada, 
                        nós os apelidamos de Aperture Science Innovators (ASI).
                        Você pode saber mais sobre eles através <Link href="/asi"><a>deste link de acesso</a></Link>, o grupo é livre para qualquer 
                        um que tenha ideias, tenha força de vontade e queira ajudar a sociedade com ideias inovadoras.
                    </p>
                </div>
            </section>

            <BestTechs/>
        </>
    )
}

export default sobrenos
