import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const ForgotPassword = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModalCenter1"
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
                <h3 style={{ marginBottom: "10px" }}>Forgot Password</h3>
                <div
                  style={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "30px",
                  }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Username"
                    />
                    <small>Please enter your username. You will receive a reset password link via e-mail</small>
                  </div>

                  <button
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                    type="submit"
                    class="btn btn-success">
                    Retrieve Password
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
}

export default ForgotPassword;