import { useState } from 'react';
import styled from 'styled-components';
import BlogCard from 'components/blogComponent/Card/BlogCard';
import BlogHeaderComponent from 'components/blogComponent/Header';



function BlogList(){

   
   const [testData,setTestData] = useState([
      {
        id: 1,
        title: 'wecode',
        content: 'Welcome to world best coding bootcamp!',
        img:'https://velog.velcdn.com/images/hyounglee/post/82e541ba-1a54-42df-ba84-cc13fd4ae60e/image.jpg'
      },
      {
        id: 2,
        title: 'joonsikyang',
        content: 'Hi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi there.',
        img: 'https://velog.velcdn.com/images/bepyan/post/3048dbfd-0d2b-4aa5-9649-f853f23a7a36/image.gif'
      },
      {
         id: 3,
         title: 'test3',
         content: 'Hi there.',
         img: 'https://velog.velcdn.com/images/bepyan/post/3048dbfd-0d2b-4aa5-9649-f853f23a7a36/image.gif'
       },
       {
         id: 4,
         title: 'test4',
         content: 'Hi there.',
         img: 'https://velog.velcdn.com/images/bepyan/post/3048dbfd-0d2b-4aa5-9649-f853f23a7a36/image.gif'
       },
       {
         id: 5,
         title: 'test5',
         content: 'Hi there.',
         img: 'https://velog.velcdn.com/images/bepyan/post/3048dbfd-0d2b-4aa5-9649-f853f23a7a36/image.gif'
       },
       {
         id: 6,
         title: 'test6',
         content: 'Hi there.',
         img: 'https://velog.velcdn.com/images/bepyan/post/3048dbfd-0d2b-4aa5-9649-f853f23a7a36/image.gif'
       },
    ]);
   
   
   return (
      <S.Wrapper>
         <S.Innerwrap>
            <BlogHeaderComponent/>
            <S.Container>
            {
               testData.map((data) => (
                  <BlogCard data={data} />
            ))}
            </S.Container>
         </S.Innerwrap>
      </S.Wrapper>
     
   )
}


export default BlogList


const Wrapper = styled.div`
   background-color: #fff;
   
`;

const Innerwrap = styled.div`
   margin-left: auto;
   margin-right: auto;
   width: 1200px;
`

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   padding: 30px 0;
   
`;

const S = {
   Wrapper,
   Innerwrap,
   Container,
};
