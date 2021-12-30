import Image from 'next/image'

function DiscordBtn() {
    window.open("https://discord.gg/nyTRNSV", "_blank")
}

const Discord = () => {
    return (
        <section id="comunity">
            <div className="content">
            <div className="container">
                <h2>
                Acelere a sua evolução. Participe da nossa comunidade no Discord.
                </h2>
                <p>
                Potencialize o seu aprendizado, destaque-se entre os programadores e seja reconhecido!
                </p>
                <button onClick={DiscordBtn}>Acessar comunidade</button>
            </div>
            <Image src="/images/discord-content.svg" alt="Logo do Discord" layout='fill'/>
            </div>
        </section>
    )
}

export default Discord
