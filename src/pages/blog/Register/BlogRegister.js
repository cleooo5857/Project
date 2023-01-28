import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components"

function BlogRegister() {
   // const toolbarOptions = [
   //    ["link", "image", "video"],
   //    [{ header: [1, 2, 3, false] }],
   //    ["bold", "italic", "underline", "strike"],
   //    ["blockquote"],
   //    [{ list: "ordered" }, { list: "bullet" }],
   //    [{ color: [] }, { background: [] }],
   //    [{ align: [] }],
   //  ];

   const [value, setValue] = useState('');

   useEffect((e) => {
      console.log(value);
   },[value])

   return (
      <S.Wrapper>
         <ReactQuill theme="snow" value={value} onChange={setValue} />
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