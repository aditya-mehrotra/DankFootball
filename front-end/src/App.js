import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Components/Header';
import { ThemeProvider } from '@emotion/react';
import {theme} from './theme';
import { DisplayCards } from './Components/DisplayCards';


function App() {
  const tabValues = (val)=>{
    console.log(val);
  }
  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
      <Header tabValues={tabValues}/>
      <Container >
        <DisplayCards/>
        <DisplayCards/>
      </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
