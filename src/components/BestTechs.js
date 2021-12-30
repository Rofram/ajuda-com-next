import Image from 'next/image'

const BestTechs = () => {
    return (
        <section id="description">
            <div className="content">
                <div className="container">
                    <h2>
                    As melhores tecnologias em programação, direto ao ponto e do jeito certo.
                    </h2>
                    <p>No meio de tanta informação e da quantidade de ferramentas que surgem 
                        todos os dias, você precisa de uma comunidade que te leve na direção certa
                    </p>
                    <button>Quero embarcar nesse foguete</button>
                </div>
            <Image src="/images/developer.svg" alt="Melhores tecnologias" width={350} height={350} />
            </div>
        </section>
    )
}

export default BestTechs
