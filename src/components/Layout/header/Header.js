import { flexAlignCenter, flexCenter } from "libs/styles/common"
import styled from "styled-components"
import { AiOutlineLeft ,AiOutlineRight} from 'react-icons/ai';
import { BsLayoutSidebarInset } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toggle } from "libs/styles/keyframe";
import { sidebarToggleAtom } from "atoms/sidebarToggle/Toggle";
import { useRecoilState } from "recoil";


function Header() {
   const history = useNavigate();
   const location = useLocation();
   const decoding = decodeURI(location.pathname.slice(1))
   const replace = decoding.replace(/-/gi,' ')
   const [toggle,settoggle] = useRecoilState(sidebarToggleAtom);


   const ontoggle = () => {
      if(!toggle) return settoggle(true);
      settoggle(false);
   }
   

   const onPageBack = () => {
      history(-1)
   }
   
   const onPageFront = () => {
      history(+1)
   }

   return (
      <S.Wrapper>
         <S.ToggleBtn>
            <BsLayoutSidebarInset onClick={ontoggle}></BsLayoutSidebarInset>
         </S.ToggleBtn>
         <S.LeftItem>
            <button onClick={onPageBack}>
               <AiOutlineLeft/>
            </button>
            <button onClick={onPageFront}>
               <AiOutlineRight/>
            </button>
            <div><p>{replace === '' ? 'Manage-schedules' : replace }</p></div>
         </S.LeftItem>
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
   min-height: 58px;
   box-shadow: 5px 3px 10px rgb(0 0 0 / 5%);

   & svg{
      
   }
`
const ToggleBtn = styled.button`
   margin: 5px 5px 0 10px;
   font-size: 20px;
   cursor: pointer;
   background: none;
`  

const LeftItem = styled.div`

   ${flexAlignCenter}

   & button{
      background: none;
      font-size: ${({ theme }) => theme.fontSize.xLarge};
      color: ${({ theme }) => theme.palette.subColor};
      line-height: 15px;
      cursor: pointer;
   }
`

const S = { 
   Wrapper,
   LeftItem,
   ToggleBtn,
}