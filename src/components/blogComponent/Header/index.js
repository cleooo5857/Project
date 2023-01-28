import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

function BlogHeaderComponent() {

   const tablist = [{name: "전체"},{name: "오늘"},{name: "이번주"},{name: "이번 달"},{name: "올 해"}]
   const navigate = useNavigate();

   return (
      <S.Wrapper>
         <S.HeaderContainer>
            <S.Ul>
               {
                  tablist.map((item)=>(
                     <li>
                        {item.name}
                     </li>
                  ))
               }
            </S.Ul>
            <button onClick={() => {
               navigate(`/Blog/register`);
            }}>새 글 작성</button>
         </S.HeaderContainer>
      </S.Wrapper>
   )
}

export default BlogHeaderComponent

const Wrapper = styled.div`
   width: 1200px;
   margin: 0 auto;
`
const HeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding-bottom: 20px;
   padding-top: 30px;

   & button{
   height: 2rem;
   padding-left: 1rem;
   padding-right: 1rem;
   font-size: 1rem;
   border-radius: 1rem;
   outline: none;
   font-weight: bold;
   word-break: keep-all;
   background: rgb(248,249,250);
   border: 1px solid rgb(33,37,41);
   color: rgb(33,37,41);
   transition: all 0.125s ease-in 0s;
   cursor: pointer;
   margin-right: 2rem;

   &:hover{
      color: rgb(252,182,123);
   }

   }
`

const Ul = styled.ul`
   display: flex;
   grid-gap: 50px;
   gap: 50px;
   padding-left: 16px;

   & li {
    font-weight: 700;
    font-size: 26px;
    line-height: 126.5%;
    color: #848484;
    cursor: pointer;
    position: relative;
   }
`

const S = {
   Wrapper,
   Ul,
   HeaderContainer,
}