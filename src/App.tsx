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
import Container from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';


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
      {/* <Container styles={{border: "1px solid black", padding: "1rem"}} /> */}

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

    </div>
  );
}


export default App;
