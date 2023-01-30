import { useEffect, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components"
import Editor from './editor/editor';

function BlogRegister() {
   

   return (
      <S.Wrapper>
         <S.Container>
            <S.Title>
               <input placeholder='제목을 입력해주세요.'></input>
            </S.Title>
            <Editor/>
            <button>제출</button>
         </S.Container>
      </S.Wrapper>
   )
}

export default BlogRegister

const Wrapper = styled.div`
   background-color: #fff;
   min-height: 100%;

`
const Container = styled.div`
   min-height: 100%;

`


const Title = styled.div`
   width: 100%;
   padding : 2.5rem;
   
   & input {
      width: 100%;
      height: 56px;
      min-height: 56px;
      line-height: 44px;
      box-shadow: none;
      padding-left: 16px;
      padding-right: 52px;
      border: 1px solid #e1e3e8;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 500;
      color: #333;
      border: 1px solid #e1e3e8;
   }

`

const S = {
   Wrapper,
   Container,
   Title
}