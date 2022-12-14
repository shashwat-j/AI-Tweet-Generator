import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import buildspaceLogo from '../assets/buildspace-logo.png';
import twitterLogo from '../assets/twitter-logo.png';

const Home = () => {

  const [userInput, setUserInput] = useState('');

  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>AI Tweeter</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Viral Tweet Generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>Just give a topic and get a twitter thread bound to go viral!</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea placeholder="building in public" className="prompt-box" value={userInput} onChange={onUserChangedText} />
          <div className="prompt-buttons">
  <a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span className="loader"></span> : (apiOutput==="") ? <p>Generate</p> : <p>Regenerate</p>}
    </div>
  </a>
</div>
  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Your Viral Thread</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
        </div>
      </div>
      <div class="grow-containers">
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
      <div className="badge-container-2 grow">
        <a
          href="https://twitter.com/whatshashwhat"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image className='twitter-img' src={twitterLogo} alt="Twitter logo" />
            <p>@WhatShashwhat</p>
          </div>
        </a>
      </div>
      </div>
    <div class="extension">
      <p>Like this tool?</p>
      <div class="extension-link-container">
      <a className="extension-link" href="#">Download the Extension</a>
      <p>and use directly in Twitter</p>
      </div>
    </div>  
    </div>
  );
};

export default Home;
