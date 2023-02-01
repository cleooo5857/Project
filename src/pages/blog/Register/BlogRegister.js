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
            <S.Btnwrap>
               <button>글 등록</button>
            </S.Btnwrap>
         </S.Container>
      </S.Wrapper>
   )
}

export default BlogRegister

const Wrapper = styled.div`
   background-color: #fff;
   min-height: 100%;
   padding : 2.5rem;


`
const Container = styled.div`
   min-height: 100%;
   
`


const Title = styled.div`
   width: 100%;
   padding : 0 0 2.5rem 0;
   
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

const Btnwrap = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 1rem;

   & button{
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 0 1.25rem;
      height: 2rem;
      font-size: 1rem;
      font-weight: 700;
      background-color: #262626;
      color: #fff;
   }
`

const S = {
   Wrapper,
   Container,
   Title,
   Btnwrap
}