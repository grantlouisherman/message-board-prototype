import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navigation from './components/Navigation';
import MessageContainer from './components/MessageContainer';
import { GetData } from './hooks';
const HOST = 'http://localhost:8080'


function App() {
  const channels = GetData('channels');
  const [activeChannel, setActiveChannel] = useState('');
  const [ messages, updateMessages ] = useState('');

  const handleNewPostSubmission = comment => {
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({comment})
      };
    updateMessages([comment, ...messages]);
    fetch(`${HOST}/channels/${activeChannel}`, requestOptions)
  }
  const handleActiveSectionUpdate = e => {
    fetch(`${HOST}/channels/${e.target.innerText}`)
    .then(res => res.json())
    .then(messages => {
      updateMessages(messages);
      setActiveChannel(e.target.innerText);
    })

  }
  return (
    <>
      <Navigation
        channels={channels}
        setActiveChannel={handleActiveSectionUpdate}
      />
      <MessageContainer
        messages={messages}
        handleNewPostSubmission={handleNewPostSubmission}
      />
    </>
  );
}

export default App;
