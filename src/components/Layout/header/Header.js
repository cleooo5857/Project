import { flexAlignCenter, flexCenter } from "libs/styles/common"
import styled from "styled-components"
import { AiOutlineLeft ,AiOutlineRight} from 'react-icons/ai';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
   const history = useNavigate();
   const location = useLocation();
   const decoding = decodeURI(location.pathname.slice(1))
   const replace = decoding.replace(/-/gi,' ')

   useEffect(() => {
      
   },[location])
   
   const onPageBack = () => {
      history(-1)
   }
   
   const onPageFront = () => {
      history(+1)
   }

   return (
      <S.Wrapper>
         <S.LeftItem>
            <button onClick={onPageBack}>
               <AiOutlineLeft/>
            </button>
            <button onClick={onPageFront}>
               <AiOutlineRight/>
            </button>
            <div><p>{replace === '' ? 'Manage-schedules' : replace }</p></div>
         </S.LeftItem>

         {/* <div>
            <div>로그아웃 </div>
         </div> */}
      </S.Wrapper>
   )
}

export default Header

const Wrapper = styled.div`
   ${flexAlignCenter}
   max-width: 100vw;
   background: white;
   position: relative;
   padding: 0 12px;
   height: 58px;
   box-shadow: 5px 3px 10px rgb(0 0 0 / 5%);
`
const LeftItem = styled.div`

   ${flexAlignCenter}

   & button{
      background: none;
      font-size: ${({ theme }) => theme.fontSize.xLarge};
      color: ${({ theme }) => theme.palette.subColor};
      line-height: 15px;
   }

`

const S = { 
   Wrapper,
   LeftItem,
}