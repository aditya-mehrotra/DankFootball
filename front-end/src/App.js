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

function App() {
  const [tabSelected, settabSelected] = useState(0);
  const tabValues = (val) => {
    settabSelected(val);
  };
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header tabValues={tabValues} />
        <Container>
          {tabSelected === 0 && <LatestTab />}
          {tabSelected === 1 && <TopTab />}
          {tabSelected === 2 && <TransfersTab />}
          {tabSelected === 3 && <MatchesTab />}
          {tabSelected === 4 && <ContactUsTab />}
          {tabSelected === 5 && <AboutTab />}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
