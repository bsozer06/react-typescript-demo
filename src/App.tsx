import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';


function App() {
  const personName = {
    first: "Burhan",
    last: "Sözer"
  }

  const nameList = [
    {
      first: "Ali",
      last: "Kalpak"
    },
    {
      first: "Ayşe",
      last: "Dumrul"
    },
    {
      first: "Faruk",
      last: "Yılan"
    }
  ]

  return (
    <div className="App">
      {/* <Greet name="Burhan" messageCount={15} isLoggedIn={true} />
      <Status status='loading' />
      <Oscar>
        <Heading>Placeholder Text</Heading>
      </Oscar> */}
      <Button
        handleClick={(event, id) => {
          console.log("button clicked !", event, id);
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
