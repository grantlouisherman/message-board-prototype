import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MessageContainer from './components/MessageContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockData from "./mock_channels.json";
function App() {
  const [ messages, updateMessages ] = useState('');

  const handleNewPostSubmission = comment => {
    updateMessages([comment, ...messages]);
  }
  const handleActiveSectionUpdate = e => {
    updateMessages(mockData[e.target.innerText]);
  }
  return (
    <>
      <Navigation
        channels={mockData}
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
