import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PretendardBold from "../font/PretendardBlack.otf";
import PretendardBlack from "../font/PretendardBold.otf";
import PretendardRegular from "../font/Pretendard-Regular.otf";
import PretendardMedium from "../font/Pretendard-Medium.otf";
import PretendardLight from "../font/Pretendard-Light.otf";

const GlobalStyles = createGlobalStyle`


    ${reset}
    *{  
        box-sizing: border-box;
    }
    body {
        font-family: 'Pretendard';
        min-height: 100%;
    }
    button {
        border: none;
    }
    a {
        text-decoration: none;
    }



`;
export default GlobalStyles;
