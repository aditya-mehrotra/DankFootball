import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Header } from "./Components/Header";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { useState } from "react";
import { LatestTab } from "./Components/Tabs/LatestTab";
import { TopTab } from "./Components/Tabs/TopTab";
import { TransfersTab } from "./Components/Tabs/TransfersTab";
import { MatchesTab } from "./Components/Tabs/MatchesTab";
import { ContactUsTab } from "./Components/Tabs/ContactUsTab";
import { AboutTab } from "./Components/Tabs/AboutTab";
import AuthContext from "./contexts";


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [avatarName,setAvatarName] = useState('');

  const handleLogIn = (name)=>{
    setLoggedIn(true);
    setAvatarName(name)
  }
  const handleLogOut = ()=>{
    setLoggedIn(false);
  }

  fetch('/api/isauth')
    .then(res=>res.json()).then((body)=>{
      if(body.authenticated){
        handleLogIn(body.avatarName)
      }
      else{
        handleLogOut()
      }
    })
  
  const [tabSelected, settabSelected] = useState(0);
  const tabValues = (val) => {
    settabSelected(val);
  };
  const testCards = [{imageLink:'/',title:'abc',body:'derf'},{imageLink:'/',title:'def',body:'derf'},{imageLink:'/',title:'hij',body:'derf'},{imageLink:'/',title:'kl',body:'derf'}]
  return (
    <>
    <AuthContext.Provider value={{avatarName:avatarName,loggedIn:loggedIn,handleLogIn:handleLogIn,handleLogOut:handleLogOut}}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header tabValues={tabValues} />
        <Container>
          {tabSelected === 0 && <LatestTab Cards={testCards}/>}
          {tabSelected === 1 && <TopTab Cards={testCards}/>}
          {tabSelected === 2 && <TransfersTab />}
          {tabSelected === 3 && <MatchesTab />}
          {tabSelected === 4 && <ContactUsTab />}
          {tabSelected === 5 && <AboutTab />}
        </Container>
      </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
