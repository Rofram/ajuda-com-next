import React from 'react'
import Discord from '../components/Discord.js'
import Header from '../components/Header.js'

const desafios = () => {
    return (
        <>
            <Header/>

            <section id="comunity">
                <div className="content-page">
                    <h1>Desafios // Challenges</h1>
                    <p>
                        Chegou a hora dos desafios 🏆
                    </p>

                    <p>
                        Imagine que você quer ser desafiado com projetos interessantes, projetos que engajam a comunidade a tirar dúvidas, ajudar uns
                        aos outros, incentivar o desenvolvimento e acima de tudo, sempre estar aprendendo com isso. Interessante, não?
                    </p>

                    <p>
                        A equipe da Aperture Science Innovators imaginou isso e está agora selecionando você para participar junto com a gente lá na
                        nossa comunidade. Como funciona? Todas as segundas-feira deixaremos um desafio para vocês que irá tanto agregar aos olhos,
                        quanto ao portfólio, então você não precisa se preocupar com estética não, a ideia é fazer acontecer.
                    </p>

                    <p>
                        Com o projeto em mãos, vamos tentar codar ele durante uma semana, nas cegas, tirando dúvidas, ajudando uns aos outros e 
                        ouvindo sugestões de melhorias, isso lá na nossa comunidade. Em uma data marcada (evento no servidor), nós faremos uma chamada
                        para todos os envolvidos, assim todo mundo tira a dúvida, fala o que foi mais difícil de desenvolver e compartilha as experiências.
                    </p>

                    <p>
                        Após isso tudo ter acontecido, você poderá ter acesso ao código fonte do projeto que deixaremos bem aqui embaixo. Assim você
                        poderá ter aquela sensação de code review e ver o que de fato era melhor ter feito, melhor ter aplicado e alguns conceitos de
                        boas práticas para melhorar a legibilidade do código, interessante, não?
                    </p>

                    <p>
                        Então não perca seu tempo. Entre em nossa comunidade <a href="#" target="_blank">através desse link</a>, vá na aba de desafios e
                        escolha um que te favorece, passe uma semana tentando desenvolver por conta, peça ajuda na comunidade e depois compartilhe com a
                        gente qual foi sua experiência. Isso se já não estivermos com um desafio acontecendo, aí tu pode pegar o desafio e se juntar a nós.
                    </p>

                    <p>
                        Então não perca tempo e junte-se a nós!
                    </p>

                    <p>E por enquanto, essa é a lista de desafios que a gente já teve em nossa comunidade e que você poderá estar conferindo o código fonte.
                        Não esqueça de dar uma olhada em nosso Discord para ter certeza do que deve ser feito e evite ao máximo o famoso copy and paste, caso
                        ao contrário, não estará aprendendo nada.
                    </p>

                    <p>Segue a lista de desafios que já aconteceram anteriormente ou estão acontecendo no momento:</p>

                    <hr />

                    <ul>
                        <li><a href="https://github.com/ApertureLaboratory/aperture-challenge01">Challenge #01 : Menu I/O</a></li>
                    </ul>

                    <hr />
                </div>
            </section>

            <Discord/>
        </>
    )
}

export default desafios
