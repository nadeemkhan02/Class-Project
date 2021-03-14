import React,{useState} from "react";
import {IFrame} from "./Test";

const Questions = (props) => {
    const [count, setCount] = useState(0);
    const [totalQuestion, setTotalQuestion] = useState(0);
    const handleCheck = (e) =>{
      if(e.target.checked){
        setCount(count+1);
      }else{
        setCount(count-1);
      }
    }
    const handleClicked = () =>{
      setTotalQuestion((e)=>e+count)
      document.getElementById("close").click();
      setCount(0)
      console.log(totalQuestion)
    }
    const Question = require("../LocalService/AllQuestion/FakeQuestions.json")
  return (
    <>
      <div
       
        class="modal fade"
        id="exampleModalCenter3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div  class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div style={{ border: "none" }} class="modal-header">
              <button
                id="close"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <h5><strong>You have selected total {count} Questions</strong></h5>
              <IFrame style={{width:"100%", height:"500px"}}>
                  {Question.map((qus)=>
                  <>
                  <strong><p>Question No:{Question.indexOf(qus)+1}</p></strong>
                  <input id="myCheck" type="checkbox" onClick={handleCheck} name="Question" value={Question.indexOf(qus)+1} /><p style={{display:"inline"}}> {qus.Question}</p>
                  <p>A){qus.Option1}</p>
                  <p>B){qus.Option2}</p>
                  <p>C){qus.Option3}</p>
                  <p>D){qus.Option4}</p>
                  <br /><br /> 
                  </>
                  )}
              </IFrame>

              <br/>
              <button onClick={handleClicked} type="submit" class="btn btn-success">
                Submit
              </button>
            </div>
            <div style={{ border: "none" }} class="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
