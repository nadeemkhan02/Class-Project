import React from "react";
import Nav from "./Nav";
import exam from "../Images/EXAM.jpg";
import { Link } from "react-router-dom";

const Exam = () => {
  return (
    <>
      <div id="examPage">
        <Nav />
        <img src={exam} alt="Exam" />
        <div id="exam">
          <label  forHtml="examSelect">Select Exam</label>
          <select id="examSelect" class="form-control">
            <option>NEET</option>
            <option>JEET</option>
            <option>MHT CET</option>
          </select>
          <button className="btn btn-success"><Link id="allLink" to="/dashboard">Next &gt;&gt;&gt;</Link> </button>
        </div>
      </div>
    </>
  );
};

export default Exam;
