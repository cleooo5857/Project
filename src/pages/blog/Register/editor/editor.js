import { editorcontent } from "atoms/sidebarToggle/Toggle";
import useInput from "hooks/useInput";
import { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import styled from "styled-components";

function Editor() {
   const [editorValue, seteditorValue] = useInput("");



// 새글 작성 시 
// 게시물 id 저장
// content 내용 저장
/*
   -------------
   title 입력 , 입력 안할시 err 핸들
   content 입력 입력 안할시 err 핸들
*/
   useEffect(() => {
   },[])
   
   const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: ["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466","custom-color",
            ],
          },
          { background: [] },
        ],
        ["image", "video"],
        ["clean"],
      ],
    },
  };
  useEffect(() => {
  })
//   const formats = ["header","bold","italic","underline","strike","blockquote","list","indent","link",];
  
  
  return (
   <S.Wrapper>
      <ReactQuill style={{  height: '100%' }}
         theme="snow"
         value={editorValue}
         placeholder="내용을 입력해주세요"
         onChange={seteditorValue}
         modules={modules}
         />
   </S.Wrapper>
  );
}

export default Editor;


const Wrapper = styled.div`
   height: 100%;
   
   & .ql-toolbar {
   }
   & .ql-container{
      
   }
   & .ql-editor{
      min-height: 380px;
   }
`

const S = {
   Wrapper,
}