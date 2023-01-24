import { useEffect } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Moment from 'react-moment';

function BlogCard({data}) {
   
   return(
      <S.Wrapper>
         <Link>
            <S.ImgContainer>
               <img src={data.img}/>
            </S.ImgContainer>
            <S.BodyContainer>
               <strong>
                  {data.title}
               </strong>
               <span>
                  {data.content}
               </span>
            <S.Timetitle >
               저장 한 날짜 표시
            </S.Timetitle>
            </S.BodyContainer>
         </Link>
      </S.Wrapper>
   )
}

export default BlogCard


const Wrapper = styled.div`
   width: 20rem;
   background: #fff;
   border-radius: 4px;
   box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
   transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
   margin: 1rem;
   overflow: hidden;
   display: flex;
   border: 2px solid #212529;
   flex-direction: column;
  

   &:hover{
      transform: translateY(-10px);
   }
`

const ImgContainer = styled.div`
   padding-top: 52%;
   width: 100%;
   position: relative;

   & img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
   }
`

const BodyContainer = styled.div`
   padding: 1rem;
   display: flex;
   flex: 1 1 0%;
   flex-direction: column;

   & strong {
      font-size: 1rem;
      margin: 0px 0px 0.25rem;
      line-height: 1.5;
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #212529;
      font-weight: ${({theme}) => theme.fontWeight.bold};
   }

   & span {
      margin: 0px 0px 1.5rem;
      word-break: break-word;
      overflow-wrap: break-word;
      font-size: 0.875rem;
      line-height: 1.5;
      height: 3.9375rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #495057;
   }
`
const Timetitle = styled.div`
   font-size: 0.75rem;
   line-height: 1.5;
   color: rgb(134,142,150)
`

const S = {
   Wrapper,
   ImgContainer,
   BodyContainer,
   Timetitle,
}