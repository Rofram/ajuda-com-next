import Link from 'next/link'
import Image from 'next/image'

function Discord() {
    window.open("https://discord.gg/nyTRNSV", "_blank")
}

const Header = () => {
    return (
        <header id="main-header">
            <div className="content">
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                                <Image src="/images/logo.png" alt="Logo da Aperture Laboratories" layout='fill'/>
                            </a>
                        </Link>
                    </li>

                    <div className="separator"></div>

                    <li><Link href="/"><a>INÍCIO</a></Link></li>
                    <li><Link href="/sobrenos"><a>SOBRE NÓS</a></Link></li>
                    <li><Link href="/patrocinadores"><a>PATROCINADORES</a></Link></li>
                    <li><Link href="/desafios"><a>DESAFIOS</a></Link></li>
                    <li><Link href="/asi"><a>ASI</a></Link></li>
                    <li><a href='https://yagasaki.vercel.app/blog'>BLOG</a></li>
                </ul>
            </nav>

            <div className="side">
                <button onClick={Discord}>Discord</button>
            </div>
            </div>
        </header>
    )
}

export default Header
