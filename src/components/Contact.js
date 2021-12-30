import Image from 'next/image'

const Contact = () => {
    return (
        <>
        <section id="contact">
            <div className="content">
                <div className="container">
                <Image className="img_lateral filtered-side" src="/images/techs-1.svg" alt="Logo do Electron, Graphql e JavaScript" layout='fill'/>
                <div>
                    <Image src="/images/yoda.svg" alt="Yoda" className="yodaBrightness" layout='fill'/>
                </div>
                <Image className="img_lateral filtered-side" src="/images/techs-2.svg" alt="Logo do Node, React e Git" layout='fill'/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact
