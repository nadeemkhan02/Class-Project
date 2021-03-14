import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Questions from "./Questions";
import MainNavBar from "./MainNavBar"
import Pages from "./Pages";
import { Paginate } from "./Paginate";
import Footer from "./Footer";
import {IFrame} from "./Test";


const FixedFormate = (props) => {

  // Quetions Modal
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


  // all local json data
  let phySub = require("../LocalService/AllSubject/PhySub.json");
  let bioSub = require("../LocalService/AllSubject/BioSub.json");
  let chemSub = require("../LocalService/AllSubject/ChemSub.json");
  const pageSize = 10;
  const pageChange = (page) => {
    Ucurrent(page);
  };
  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/")
  };

  const [sub, setSub] = useState({ subject: "phy" });
  const [current, Ucurrent] = useState(1);
  const [subject, setSubject] = useState(phySub);

  const handleChange = ({ currentTarget: input }) => {
    const data = { ...sub };
    data[input.name] = input.value;
    setSub(data);
    if (data.subject === "bio") {
      setSubject(bioSub)
    }
    if (data.subject === "phy") {
      setSubject(phySub)
    }
    if (data.subject === "chem") {
      setSubject(chemSub)
    }
  };
  const finalSubject = Paginate(subject, current, pageSize)
  return (
    <>
      <MainNavBar logoutHandle={handleLogout} />
      <hr style={{ width: "90%", margin: "auto", marginTop: "5px" }} />
      <form id="FixedForm">
        <div id="container">
          <div>
            <div id="FixedInput" class="form-group">
              <label for="papername">Paper Name</label>
              <input
                type="text"
                class="form-control"
                id="papername"
                placeholder="Enter Paper Name..."
              />
            </div>
            <div id="FixedInput" class="form-group">
              <label for="chapterdetails">Chapter Details</label>
              <input
                type="text"
                class="form-control"
                id="chapterdetails"
                placeholder="Enter Chapter Details..."
              />
            </div>
            <p style={{textAlign:"center"}}><strong>Total Question Selected:{totalQuestion}</strong></p>
          </div>
        </div>
        <div id="container1">
          <div>
            <div id="FixedInput" class="form-group">
              <label htmlFor="selectsubjec">Select Subject</label>
              <select
                name="subject"
                value={sub.subject}
                onChange={handleChange}
                id="selectsubjec"
                class="form-control"
              >
                <option value="phy" selected>
                  Physics
                </option>
                <option value="bio" selected>
                  Biology
                </option>
                <option value="chem" selected>
                  Chemistry
                </option>
              </select>
            </div>
            <div id="FixedInput" class="form-group">
              <label for="test">Exam / Test</label>
              <select id="test" class="form-control">
                <option selected>UT I</option>
                <option selected>UT II</option>
                <option selected>SEM I</option>
                <option selected>SEM II</option>
                <option selected>FINAL</option>
              </select>
            </div>
            <p style={{textAlign:"center"}}><strong>Total Marks:{totalQuestion}</strong></p>
          </div>
        </div>
        <div id="container2">
          <label for="time">Time</label>
          <select id="time" class="form-control">
            <option selected>Hours</option>
            <option selected>Minuts</option>
          </select>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            placeholder="Time..."
          />
          <div class="my-2">
            <div id="FixedInput">
              <input type="radio" id="allchapter" name="formate" value="Word" />
              <label className="p-2" htmlFor="allchapter">
                All Chapter
              </label>
              <input type="radio" id="chapterwise" name="formate" value="PDF" />
              <label className="p-2" htmlFor="chapterwise">
                Chapter Wise
              </label>
            </div>
          </div>
        </div>
        <div className="container3">
          <div id="FixedInput">
            <label htmlFor="data">Select Date</label>
            <input id="date" class="form-control" type="date" />
          </div>
          <div id="FixedInput" class="form-group">
            <label for="instruction">Instructions</label>
            <textarea class="form-control" id="instruction" rows="3"></textarea>
          </div>
        </div>
      </form>
      <hr style={{ width: "90%", margin: "auto" }} />

      {/* Table start */}
      <div>
        <div id="Table">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">chapter name</th>
                <th scope="col">Availabel Questions</th>
                <th scope="col">Show</th>
              </tr>
            </thead>
            <tbody>
              {finalSubject.map((chep) => (
                <>
                  <tr>
                    <td>{chep.no}</td>
                    <td>{chep.ChapterName}</td>
                    <td>20</td>
                    <td>
                      <Link
                        to="/fixedformate"
                        data-toggle="modal"
                        data-target="#exampleModalCenter3"
                      >
                        View
                        </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <Pages
            count={subject.length}
            pageSize={pageSize}
            onpageChange={pageChange}
            currentPage={current}
          />
        </div>
      </div>
      {/* <Questions /> */}
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
      <Footer />
    </>
  );
};

export default FixedFormate;
