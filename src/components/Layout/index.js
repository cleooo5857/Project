import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"

function Layout() {
   return (
      <S.Wrapper>
         <Sidebar/>
         <S.Container>
            <Header/>
            <Outlet />
         </S.Container>
      </S.Wrapper>
   )
}

export default Layout

const Wrapper = styled.div`
   display: flex;
`

const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   overflow: hidden;
`

const S = {
   Wrapper,
   Container
}