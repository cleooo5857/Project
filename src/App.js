import Layout from "components/Layout";
import GlobalStyles from "libs/styles/global";
import Routing from "routes/Routing";
import { ThemeProvider } from 'styled-components';
import { theme } from "libs/styles/theme";
import FontStyles from "libs/styles/fontStyles";
import { RecoilRoot } from "recoil";


function App() {
  return (
    <>
      {/* <Routing/> */}
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <FontStyles/>
          <Routing/>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
