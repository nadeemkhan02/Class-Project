import React from "react";

const FianalQustionPaper = (props) => {
    return (
        <>
            <div
                class="modal fade"
                id="exampleModalCenter4"
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
                            <h5 style={{ textAlign: "center" }}><strong>Question Paper</strong></h5>
                            <div>
                                {
                                    props.details.map((D) =>
                                        <>
                                            <form id="FixedForm1">
                                                <div id="container4">
                                                    <p><strong>PaperName:</strong>{D.paperName}</p>
                                                    <p><strong>Details:</strong>{D.chapterDetails}</p>
                                                    <p><strong>Total Qustions:</strong>{D.totalQuestions}</p>
                                                </div>
                                                <div id="container4">
                                                    <p><strong>Date:</strong>{D.data}</p>
                                                    <p><strong>Exam Name:</strong>{D.examName}</p>
                                                    <p><strong>Exam Time:</strong>{D.examTime}&nbsp;&nbsp;{D.time}</p>
                                                </div>
                                            </form>
                                            <p><strong>Instruction:</strong>{D.instructions}</p>
                                        </>
                                    )
                                }
                            </div>
                            <hr />
                            <div>
                                {
                                    props.questions.map((qus) =>
                                        <>
                                        <div>
                                              <label htmlFor={props.questions.indexOf(qus) + 1}>
                                                    <div>
                                                        QNo:{props.questions.indexOf(qus)+1}) {qus.Question}
                                                            <p style={{ marginBottom: "0px" }}>A){qus.Option1} &nbsp; &nbsp; B){qus.Option2}</p>
                                                            <p style={{ marginTop: "3px" }}>C){qus.Option3} &nbsp; &nbsp; D){qus.Option4}</p>
                                                        </div>
                                                </label>
                                            </div>
                                            <hr />
                                        </>

                                    )
                                }
                            </div>
                            <br />
                            <button type="submit" class="btn btn-success">
                                Get Print &gt;&gt;&gt;
                            </button>
                        </div>
                        <div style={{ border: "none" }} class="modal-footer"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FianalQustionPaper;






