import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Components/Header';
import { ThemeProvider } from '@emotion/react';
import {theme} from './theme';
import { DisplayCards } from './Components/DisplayCards';


function App() {
  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
      <Header/>
      <Container >
        <DisplayCards/>
        <DisplayCards/>
      </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
