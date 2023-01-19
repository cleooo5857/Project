import { flexAlignCenter } from "libs/styles/common"
import styled from "styled-components"

function Profile(){
   
   return (
      
      <S.Wrapper>
         <div>
            <img></img>
            <p>황순욱</p>
         </div>
      </S.Wrapper>
   )
}

export default Profile

const Wrapper = styled.div`
   padding-left: 5px;
   & div{
      ${flexAlignCenter}
      
   }
   & img{
      border-radius: 50%;
      background-color: blue;
      width: 30px;
      height: 30px;
   }

   & p {
      padding-left: 10px;
   }

`

const S = {
   Wrapper
}