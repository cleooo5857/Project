import { Link } from "react-router-dom";
import styled from "styled-components";
import common, { flexAlignCenter } from "libs/styles/common"

function SidebarItme({menu}) {
   

   return (
      <S.li>
         <S.Item>
            {menu.icon}
            <Link to={menu.path}>{menu.name}</Link>
         </S.Item>
      </S.li>
   )
}

export default SidebarItme

const li = styled.li`
   width: 100%;
   padding: 15px 0;
   ${flexAlignCenter}

   &:hover {
      background-color: rgb(215,138,74);
      border-radius: 5px;
   }
   &:hover a {
      color: #fff;

   }

   & a {
      width: 100%;
      color: ${({theme}) => theme.palette.fontColor};
      font-size: ${({theme}) => theme.fontSize.xLarge};
      padding-left: 5px;
      
   }
`
const Item = styled.div`
   padding-left: 8px;
` 

const S ={ 
   li,
   Item,
}