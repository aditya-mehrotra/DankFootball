import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Components/Header';
import { ThemeProvider } from '@emotion/react';
import {theme} from './theme';


function App() {
  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
      <Header/>
      </ThemeProvider>
      <Container>
      </Container>
    </>
  );
}

export default App;
