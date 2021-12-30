import React from 'react'
import Header from '../src/components/Header.js'
import Contact from '../src/components/Contact.js'

const asi = () => {
    return (
        <>
            <Header/>

            <section id="tecnologia">
                <div className="content-page">
                    <h1>Aperture Science Innovators</h1>
                    <p>
                        Você é um desenvolvedor, certo? Independente do seu nível de conhecimento, você quer ajudar a comunidade?
                    </p>

                    <p>
                        Essa é a resposta que você tem que fazer a si mesmo antes de continuar. Independente se você possui experiência ou não, aqui,
                        a gente te ensina do começo ao fim, todo o caminho que você deve trilhar e o que é necessário para estar junto com a gente.
                    </p>

                    <p>
                        Você tem uma ideia de projeto? Não tem problema, deixe na mão da ASI e estaremos mudando o futuro com o mercado de código aberto.
                        Mas não pense que iremos usufruir do seu código, negativo. O espaço todo será seu, a administração do projeto será sua - se caso aprovado -
                        e você terá todo o crédito e reconhecimento que merece em nossa comunidade pela brilhante ideia e quem sabe ainda ser patrocinado?
                    </p>

                    <p>Seria simplesmente demais, imagine ser o dono do SeoRosa, iFood, Netflix, essas ideias podem estar a algumas teclas de você, com
                        uma equipe que não quer saber de remuneração agora, mas quer participar e ajudar a desenvolver. Então não deixe essa oportunidade passar.
                        Converse com um dos membros da diretoria da Aperture Laboratories, apresente seu projeto e vamos fazer a diferença. Seja membro da ASI!
                    </p>

                    <p>Todos os projetos seguiram a licença do MIT e caso a proposta seja alterada, tudo será documentado e esclarecido antes, durante e após o
                        desenvolvimento do projeto. A Aperture Laboratories é uma porta de entrada para novas ideias e novos desenvolvedores.
                    </p>
                </div>
            </section>

            <Contact/>
        </>
    )
}

export default asi
