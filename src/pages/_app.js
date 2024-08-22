import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../styles/globals.css';
import Layout from '@/components/layouts/Layout';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NinjaTech - Your Technology Partner</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="NinjaTech provides high-quality IT services to enhance business processes." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
            <Script src="/assets/lib/wow/wow.min.js" strategy="beforeInteractive" />
            <Script src="/assets/lib/easing/easing.min.js" strategy="beforeInteractive" />
            <Script src="/assets/lib/waypoints/waypoints.min.js" strategy="beforeInteractive" />
            <Script src="/assets/lib/counterup/counterup.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/main.js" strategy="beforeInteractive" />
        </div>
    );
}

export default appWithTranslation(MyApp);
