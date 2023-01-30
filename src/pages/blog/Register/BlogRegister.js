import { useEffect, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components"
import Editor from './editor/editor';

function BlogRegister() {
   

   return (
      <S.Wrapper>
        <Editor/>
      </S.Wrapper>
   )
}

export default BlogRegister

const Wrapper = styled.div`
   min-height: 100%;
   background-color: #fff;
`


const S = {
   Wrapper

}