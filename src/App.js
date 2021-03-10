import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MessageContainer from './components/MessageContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockData from "./mock_channels.json";
function App() {
  const [ activeChannel, setActiveChannel ] = useState('');
  return (
    <>
      <Navigation
        channels={mockData}
        setActiveChannel={setActiveChannel}
      />
      <MessageContainer messages={mockData[activeChannel]} />
    </>
  );
}

export default App;
