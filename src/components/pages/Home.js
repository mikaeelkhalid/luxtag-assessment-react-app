import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parser from "html-react-parser";

import Container from "../layouts/Container";
import EditorContainer from "../layouts/EditorContainer";
import IphoneContainer from "../layouts/IphoneContainer";

import Arrow from "../../assets/images/Arrow.png";
import IphoneCase from "../../assets/images/IphoneCase.png";

function Home() {
  const [editorData, setEditorData] = useState("");
  const [selectOption, setSelectOption] = useState("Text");
  return (
    <>
      <Container>
        <EditorContainer>
          <div className="editor">
            <div>
              <h1 id="heading-text">Customisation</h1>
              <p id="sub-heading-text">The text will reflect mobile view</p>
            </div>
            <div>
              <select
                className="select-box"
                onChange={(event) => {
                  setSelectOption(event.target.value);
                }}
              >
                <option value="Text">Text</option>
                <option value="Text 2">Text 2</option>
              </select>
            </div>
            <CKEditor
              editor={ClassicEditor}
              data={editorData}
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditorData(data);
              }}
            />
            <button className="pub-button">
              Publish <img className="arrow" src={Arrow} alt="Arrow" />
            </button>
          </div>
        </EditorContainer>
        <IphoneContainer>
          <div className="iphone-case">
            <img className="img-hide" src={IphoneCase} alt="Iphone Case" />
            <div className="text-box">
              <h4>{selectOption}</h4>
              <div style={{ textAlign: "left" }}>{parser(editorData)}</div>
            </div>
          </div>
        </IphoneContainer>
      </Container>
      ;
    </>
  );
}

export default Home;
