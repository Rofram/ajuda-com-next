import Image from 'next/image'

const Techs = () => {
    return (
        <section id="tecnologia">
            <div className="content">
                <Image src="/images/trophy.png" alt="Troféu com logo da Rocketseat" layout='fill'/>
                <div className="container">
                    <h2>
                    As mesmas tecnologias utilizadas por empresas como:
                    </h2>
                    <h3>Nubank, Netflix, Uber, Instagram e Airbnb</h3>
                    <p>Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações
                    de alta performance e se destacando entre os maiores programadores com a ajuda da nossa comunidade.</p>
                </div>
            </div>
        </section>
    )
}

export default Techs
