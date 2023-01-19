import { Link } from "react-router-dom";
import styled from "styled-components"
import SidebarItme from "./SidebarItem";
import { FcAlarmClock,FcAddressBook,FcBarChart,FcBusinessman,FcDataConfiguration} from 'react-icons/fc';
import Profile from "../header/Profile";
import { sidebarToggleAtom } from "atoms/sidebarToggle/Toggle";
import { onToggle,offToggle } from "libs/styles/keyframe";
import { useRecoilState } from "recoil";

function Sidebar(){

   const [toggle,settoggle] = useRecoilState(sidebarToggleAtom);

   const menus = [
      { name: "Manage schedules", path: "/" ,      icon: <FcAlarmClock/>},
      { name: "Yearly Goals", path: "/Yearly-Goals" , icon: <FcAddressBook/>},
      { name: "Memo", path: "/Memo" ,      icon: <FcBarChart/>},
      { name: "Blog", path: "/Blog" , icon: <FcBusinessman/>},
      { name: "Resume", path: "/Resume" , icon: <FcDataConfiguration/>},
   ];
console.log(toggle);
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
   max-width: 500px;
   width : 300px;
   background: rgb(243,244,246);
   height: 100vh;
   position: relative;
   padding: 25px 10px;
   transition: all 0.2s ease;
   display: ${({toggle}) => (toggle ? `block` : 'none')};
`


const Nav = styled.nav `
   padding: 25px 0px;
   
`

const S = {
   Wrapper,
   Nav
}