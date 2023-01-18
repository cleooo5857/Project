import { flexAlignCenter, flexCenter } from "libs/styles/common"
import styled from "styled-components"

function Header() {
   return (
      <S.Wrapper>
         <div>일정관리/상세페이지</div>

         <div>
            <div>프로필</div>
            <div>로그아웃 </div>
         </div>
      </S.Wrapper>
   )
}

export default Header

const Wrapper = styled.div`
   ${flexAlignCenter}
   max-width: 100vw;
   background: white;
   user-select: none;
   padding: 0 12px;
   height: 58px;

`

const S = { 
   Wrapper,
}