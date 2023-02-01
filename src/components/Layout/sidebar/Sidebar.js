import { Link } from "react-router-dom";
import styled from "styled-components"
import SidebarItme from "./SidebarItem";
import { FcAddressBook,FcBusinessman,FcDataConfiguration} from 'react-icons/fc';
import { CiMemoPad } from "react-icons/ci";
import { GrSchedules } from "react-icons/gr";
import Profile from "../header/Profile";
import { sidebarToggleAtom } from "atoms/sidebarToggle/Toggle";
import { onToggle,offToggle } from "libs/styles/keyframe";
import { useRecoilState } from "recoil";

function Sidebar(){

   const [toggle,settoggle] = useRecoilState(sidebarToggleAtom);

   const menus = [
      { name: "Manage schedules", path: "/" ,icon: <GrSchedules/>},
      { name: "Yearly Goals", path: "/Yearly-Goals" , icon: <FcAddressBook/>},
      { name: "Memo", path: "/Memo" , icon: <GrSchedules/>},
      { name: "Blog", path: "/Blog" , icon: <FcBusinessman/>},
      { name: "Resume", path: "/Resume" , icon: <FcDataConfiguration/>},
   ];

   return(
      <S.Wrapper toggle={toggle}>
         <Profile/>
         <S.Nav>
            <ul>
               {menus.map((menu,index) => 
                  <SidebarItme key={index} menu={menu} />
               )}
            </ul>
         </S.Nav>
      
      </S.Wrapper>
   )
}

export default Sidebar



const Wrapper = styled.div`
   position: sticky;
   top: 0px;
   left: 0px;
   width : 300px;
   background: rgb(243,244,246);
   height: 100vh;
   padding: 25px 10px;
   transition: all 0.2s ease;
   display: ${({toggle}) => (toggle ? `none` : 'block')};

`


const Nav = styled.nav `
   padding: 25px 0px;
   
`

const S = {
   Wrapper,
   Nav
}