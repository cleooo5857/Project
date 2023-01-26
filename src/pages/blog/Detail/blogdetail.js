import { useLocation } from "react-router-dom"
import styled from "styled-components";

function BlogDetail(){
   const location = useLocation()
   const {content,id,img,title} = location.state.data
   console.log(content);


   return (
      <S.Wrapper>
         <S.Container>
            <S.Headtitle>
               <h1>{title}</h1>
            </S.Headtitle>
               <img src={img}></img>
            <S.BodyContent>
               {content}
            </S.BodyContent>
         </S.Container>
      </S.Wrapper>
   )
}

export default BlogDetail

const Wrapper = styled.div`
background-color: #fff;
height: 100%;
   

`;

const Container = styled.div`
   padding: 30px 0;
   width: 872px;
   margin: 0 auto;
   & img{
      max-height: 100vh;
    max-width: 100%;
    width: auto;
    margin: 2rem auto 0px;
    height: auto;
    object-fit: contain;
    display: block;
   }
`;


const Headtitle = styled.div`
   & h1{
      font-size: 3rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    margin-top: 0px;
    font-weight: 800;
    margin-bottom: 2rem;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;
   }
`;

const BodyContent = styled.div`

`


const S = {
    Wrapper,
    Container,
    Headtitle,
    BodyContent
};
