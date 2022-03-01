import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context)

        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link prefetch="true" href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link prefetch="true" type="text/css" rel="stylesheet" href="/styles/materialize/css/materialize.min.css" media="screen,projection" />
                    <script prefetch="true" type="text/javascript" src="/styles/materialize/js/materialize.min.js" />

                </Head>

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument