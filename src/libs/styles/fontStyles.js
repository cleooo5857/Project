import { createGlobalStyle } from "styled-components";
import PretendardBold from "../font/PretendardBlack.otf";
import PretendardBlack from "../font/PretendardBold.otf";
import PretendardRegular from "../font/Pretendard-Regular.otf";
import PretendardMedium from "../font/Pretendard-Medium.otf";
import PretendardLight from "../font/Pretendard-Light.otf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Pretendard';
  src: 
  url(${PretendardMedium}) format('otf'),
  url(${PretendardLight}) format('otf'),
  url(${PretendardRegular}) format('otf'),
  
}
`;

export default FontStyles;