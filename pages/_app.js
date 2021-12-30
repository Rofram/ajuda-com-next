import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Aperture Labs™ • Developer{`'`}s Hall</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Comunidade brasileira de programação" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Component {...pageProps} />
        </>
    )}

export default MyApp