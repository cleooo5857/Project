import Layout from "components/Layout";
import GlobalStyles from "libs/styles/global";
import Routing from "routes/Routing";
import { ThemeProvider } from 'styled-components';
import { theme } from "libs/styles/theme";
import FontStyles from "libs/styles/fontStyles";


function App() {
  return (
    <>
      {/* <Routing/> */}
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <FontStyles/>
        <Routing/>
      </ThemeProvider>
    </>
  );
}

export default App;
