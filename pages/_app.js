import './styles.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>AI Tweeter</title>
       
      </Head>
     <Component {...pageProps} />
    </>
  )
}
export default App;
