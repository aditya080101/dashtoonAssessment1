import Header from './components/Header';
import Form from './components/Form';
import StoryBoard from './components/StoryBoard';
import './App.css';
import { useState } from 'react';

function App() {

  const [prompts, setPrompts] = useState([]);

  return (

    <div className='app-container'>

      <Header />

      <div className='content-container'>
        <Form setPrompts={setPrompts}/>
        <StoryBoard prompts = {prompts}/>
      </div>

    </div>

  );
}

export default App;
