import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Bold.ttf"
                        as="font"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Regular.ttf"
                        as="font"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Semibold.ttf"
                        as="font"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
