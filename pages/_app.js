import './styles.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>AI Tweeter</title>
        <meta name='description' content='Write Viral Tweet Threads Using AI'/>
      </Head>
     <Component {...pageProps} />
    </>
  )
}
export default App;
