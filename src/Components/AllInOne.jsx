import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../index.css";
const AllInOne = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModalCenter2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
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
              <form id="form" style={{ width: "90%", margin: "auto" }}>
                <h3 style={{ marginBottom: "10px" }}>All In One</h3>
                <div
                  id="AllFields"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "30px",
                  }}
                >
                  <label htmlFor="exam">Select Exam:</label>
                  <select id="exam" class="form-control">
                    <option>JEE</option>
                    <option>MHT CET</option>
                    <option>NEET</option>
                  </select>
                  <label htmlFor="data">Select Exam Date:</label>
                  <input id="date" class="form-control" type="date" />
                  <label htmlFor="page">Select Total Page No:</label>
                  <div id="page" className="form-group">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div id="SelectFormate">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label" for="inlineCheckbox1">
                        Select Formate:
                    </label>
                      <input type="radio" id="formate" name="formate" value="Word" />
                      <label for="female">WORD</label>
                      <input type="radio" id="formate" name="formate" value="PDF" />
                      <label for="female">PDF</label>
                    </div>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                    type="submit"
                    class="btn btn-success"
                  >
                    Next &gt;&gt;&gt;
                  </button>
                </div>
              </form>
            </div>
            <div style={{ border: "none" }} class="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllInOne;
