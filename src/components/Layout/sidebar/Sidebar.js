import { Link } from "react-router-dom";
import styled from "styled-components"
import SidebarItme from "./SidebarItem";
import { FcAlarmClock,FcAddressBook,FcBarChart,FcBusinessman,FcDataConfiguration} from 'react-icons/fc';


function Sidebar(){
   const menus = [
      { name: "Manage schedules", path: "/" ,      icon: <FcAlarmClock/>},
      { name: "Yearly Goals", path: "/Yearly-Goals" , icon: <FcAddressBook/>},
      { name: "Memo", path: "/Memo" ,      icon: <FcBarChart/>},
      { name: "Blog", path: "/Blog" , icon: <FcBusinessman/>},
      { name: "Resume", path: "/Resume" , icon: <FcDataConfiguration/>},
   ];


   return(
      <S.Wrapper>
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
`


const Nav = styled.nav `
   padding: 70px 12px;
   
`

const S = {
   Wrapper,
   Nav
}