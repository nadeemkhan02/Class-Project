import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Questions from "./Questions";
import MainNavBar from "./MainNavBar"
import Pages from "./Pages";
import { Paginate } from "./Paginate";
import Footer from "./Footer";
import { IFrame } from "./Test";
import "../index.css"
import File from "../Images/file.png"
import FianalQustionPaper from "./FinalQustionPaper"

const FixedFormate = (props) => {

  const Question = require("../LocalService/AllQuestion/FakeQuestions.json")

  // Quetions Modal
  const [count, setCount] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [inputData, setInputData] = useState({});
  const [finalQustions, setFinalQuestions] = useState([])




  // Question Adding and Deleting Handle
  const handleAdd = (input) => {
    setCount(count + 1);
    const FinalQustions = [...finalQustions]
    FinalQustions.push(Question[input.target.value])
    setFinalQuestions(FinalQustions);
  }
  const handleDelete = (input) => {
    const FinalQustions = [...finalQustions]
    const deleteQustion = Question[input.target.value];
    FinalQustions.splice(FinalQustions.indexOf(deleteQustion), 1)
    setFinalQuestions(FinalQustions)
  }

  // OnClick function for check Box
  const handleCheck = (e) => {
    if (inputData.totalQuestions) {
      if (totalQuestion + count <= parseInt(inputData.totalQuestions) - 1) {
        if (e.target.checked) {
          handleAdd(e)
        } else {
          handleDelete(e)
        }
      } else {
        if (!e.target.checked) {
          handleDelete(e)
        } else {
          alert("Question Limit Reached")
          e.target.checked = false;
        }
      }
    } else {
      if (e.target.checked) {
        handleAdd(e)
      } else {
        handleDelete(e)
      }
    }
  }
  const handleClicked = () => {
    setTotalQuestion((e) => e + count)
    document.getElementById("close").click();
    setCount(0)
  }


  const handleSubmit = () => {
    console.log(">>PAPER HEADER")
    let FinalDetails = [inputData]
    console.log(FinalDetails)
    console.log(">>PAPER BODY")
    console.log(finalQustions)
  }


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



  // handle change in any input field
  const changeHandle = ({ currentTarget: input }) => {
    const InputData = { ...inputData }
    InputData[input.name] = input.value;
    setInputData(InputData)
  }


  const finalSubject = Paginate(subject, current, pageSize)
  return (
    <>
      <MainNavBar logoutHandle={handleLogout} />
      <form id="FixedForm">
        <div id="container">
          <div>
            <div id="FixedInput" class="form-group">
              <label for="papername">Paper Name</label>
              <input
                onChange={changeHandle}
                value={inputData.paperName}
                name="paperName"
                type="text"
                class="form-control"
                id="papername"
                placeholder="Enter Paper Name..."
              />
            </div>
            <div id="FixedInput" class="form-group">
              <label for="chapterdetails">Chapter Details</label>
              <input
                onChange={changeHandle}
                value={inputData.chapterDetails}
                name="chapterDetails"
                type="text"
                class="form-control"
                id="chapterdetails"
                placeholder="Enter Chapter Details..."
              />
            </div>
            <p style={{ textAlign: "center" }}><strong>Total Question Selected:{totalQuestion}</strong></p>
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
              <input
                onChange={changeHandle}
                value={inputData.examName}
                name="examName"
                type="text"
                class="form-control"
                id="papername"
                placeholder="Enter Exam/Test....."
              />
            </div>
            <p style={{ textAlign: "center" }}><strong>Total Marks:{(inputData.totalQuestions) && parseInt(inputData.totalQuestions) * 4}</strong></p>
          </div>
        </div>
        <div id="container2">
          <label style={{ display: "block" }} for="time">Time</label>
          <select
            onChange={changeHandle}
            value={inputData.time}
            name="time"
            style={{ width: "90px", display: "inline", borderRadius: "5px 0px 0px 5px" }}
            id="time"
            class="form-control">
            <option value="Hours" selected>Hours</option>
            <option value="Minuts" selected>Minuts</option>
          </select>
          <input
            onChange={changeHandle}
            value={inputData.examTime}
            name="examTime"
            style={{ width: "110px", display: "inline", borderRadius: "0px 5px 5px 0px" }}
            type="number"
            class="form-control"
            id="inputPassword4"
            placeholder="Time..."
          />
          <div class="my-2">
            <label htmlFor="qustioNumber">Total Number of Questions:</label>
            <input
              onChange={changeHandle}
              value={inputData.totalQuestions}
              name="totalQuestions"
              type="number"
              class="form-control"
              id="totalQuestions"
              placeholder="Enter Total Question Number..."
            />
          </div>
        </div>
        <div className="container3">
          <div id="FixedInput">
            <label htmlFor="data">Select Date</label>
            <input
              onChange={changeHandle}
              value={inputData.date}
              name="data"
              id="date" class="form-control" type="date" />
          </div>
          <div id="FixedInput" class="form-group">
            <label for="instruction">Instructions</label>
            <textarea
              onChange={changeHandle}
              value={inputData.instructions}
              name="instructions"
              style={{ resize: "none" }} class="form-control" id="instruction" rows="3"></textarea>
          </div>
        </div>
      </form>


      {/* Table start */}
      <div>
        <div id="Table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Chapter Name</th>
                <th scope="col">Availabel Questions</th>
                <th scope="col">Show</th>
              </tr>
            </thead>
            <tbody>
              {finalSubject.map((chep) => (
                <>
                  <tr id="row">
                    <td>{chep.no}</td>
                    <td><strong>{chep.ChapterName}</strong></td>
                    <td> &nbsp; &nbsp;&nbsp; &nbsp;20</td>
                    <td>
                      <Link
                        to="/customizedformat"
                        data-toggle="modal"
                        data-target="#exampleModalCenter3"
                      >
                        <img src={File} alt="View" style={{ width: "30px" }} />
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div id="paginate">
          <Pages
            count={subject.length}
            pageSize={pageSize}
            onpageChange={pageChange}
            currentPage={current}
          />
        </div>

      </div>

      {/* Questions view section */}
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
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
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
            <div style={{ paddingTop: "0px" }} class="modal-body">
              <h5><strong>Select Your Questions Here...</strong></h5>
              <IFrame style={{ width: "100%", height: "550px" }}>
                {Question.map((qus) =>
                  <>
                    <div>
                      <label htmlFor={Question.indexOf(qus) + 1}>
                        <div id="Question">
                          <div><input id={Question.indexOf(qus) + 1} type="checkbox" onClick={handleCheck} name="Question" value={Question.indexOf(qus)} />
                            QNo:{Question.indexOf(qus)}) {qus.Question}
                            <p style={{ marginBottom: "0px" }}>A){qus.Option1} &nbsp; &nbsp; B){qus.Option2}</p>
                            <p style={{ marginTop: "3px" }}>C){qus.Option3} &nbsp; &nbsp; D){qus.Option4}</p>
                          </div>
                        </div>
                      </label>
                    </div>

                    <hr />
                  </>
                )}
              </IFrame>
              <br />
              <button onClick={handleClicked} type="submit" class="btn btn-success">
                Next &gt;&gt;&gt;
              </button>
            </div>
            <div style={{ border: "none" }} class="modal-footer"></div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button data-toggle="modal" data-target="#exampleModalCenter4" className="btn btn-success" onClick={handleSubmit}>Generate Paper</button>
      </div>
      <Footer />
      <FianalQustionPaper questions={finalQustions} details={[inputData]} />
    </>
  );
};

export default FixedFormate;
