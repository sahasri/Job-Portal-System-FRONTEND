import React, { useState } from "react";
import "./VacancySection.css";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Popup from "../../../../../popup/popup";
import Card from "@mui/material/Card";
import JobDetails from "./JobDetailPopup";
import FlyerPopup from "./flyerPopup";
import JobInfo from "./JobInfoPopup";
const VacancySection = (props) => {
  const [file, setFile] = useState(
    "https://png2.cleanpng.com/sh/bd00f43347e646f0e4b5ec81464f300b/L0KzQYm3VcEzN6N4fZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfJzd5RtjeRuLXbvibb5TgBieJZ3RadqZka7SIq3gsY3PmI5Rqc7OES0Q4aBUcUzPmI1TqQANke3R4K1kP5o/kisspng-computer-icons-brochure-flyer-paper-5af68890b66614.5284135815261062567471.png"
  );
  const [disabled, setDisabled] = useState(true);
  function handleEdit() {
    setDisabled(false);
  }

  const [openFlyerPopup, setOpenFlyerPopup] = useState(false);
  function handleSave() {
    setDisabled(true);
    // Perform any save operations here
  }
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const Alert = () => {
    Swal.fire("Posted", "Succesfully", "success");
  };


  const handleFlyerPopup = (data1) => {
    setFile(data1);
  };

  const [openJobPopup, setOpenJobPopup] = useState(false);
  const handleJobDetailsInfo = (data2) => {
    setFile(data2);
  };
  const [openJobinfoPopup, setOpenJobInfoPopup] = useState(false);
  const handleJobInfo = (data3) => {
    setFile(data3);
  };

  //   console.log(props.data[0].jobPosition)
  return (
    <div>
      <div className="container mt-3">
        <form>
          <div className="flex-container1">
            <div
              className="container1-flex-item"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "25px",
              }}
            >
              <img className="profile-photo-3"  src={file} alt="Flyer Image" />
              <label for="flyer" className="label-title">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Job Vacancy Flyer
                <Button onClick={() => setOpenFlyerPopup(true)}>
                  {" "}
                  <EditIcon style={{ color: "#808080", marginRight: "8px" }} />
                </Button>
                {openFlyerPopup && (
                  <Popup
                    title="Insert the new Flyer "
                    openPopup={openFlyerPopup}
                    setOpenPopup={setOpenFlyerPopup}
                  >
                    <FlyerPopup sendData={handleFlyerPopup} />
                  </Popup>
                )}
              </label>

              <div className="file-in">
                <input
                  type="file"
                  className=" form-control"
                  onChange={handleChange}
                  disabled={props.disabled && disabled}
                />
              </div>
            </div>
          </div>
          <h4 className="sub-headings">Job Details: </h4>
          <Card
            style={{ marginBottom: "25px", marginTop: "25px", padding: "25px" }}
          >
            <div className="flex-container1">
              <div className="container1-flex-item">
                <label for="jobtitle" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Job Title
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="text"
                    className="form-control"
                    id="jobtitle"
                    placeholder="Job Title"
                    // required
                    //   value={"HandJob"}
                    disabled={props.disabled && disabled}
                  ></input>
                </div>

                <label for="Workplace-Type" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Workplace Type
                </label>
                <div
                  className="input-filed input-filed-cls"
                  style={{ flexDirection: "row" }}
                >
                  <select
                    className="form-select"
                    name="WorkplaceType"
                    id="background"
                    disabled={props.disabled && disabled}
                  >
                    <option selected disabled>
                      Select the Workplace Type
                    </option>
                    <option value="1">On-site</option>
                    <option value="2">Hybrid</option>
                    <option value="3">Online</option>
                  </select>
                </div>
                <label for="Location" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Job Location
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="tel"
                    className="form-control"
                    id="Location"
                    placeholder="Job Location"
                    // required
                    disabled={props.disabled && disabled}
                  ></input>
                </div>

                {/* </div>
              <label for="background" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Background
              </label>
              <div
                className="input-filed input-filed-cls"
                style={{ flexDirection: "row" }}
              >
                <select
                  className="form-select"
                  name="background"
                  id="background"
                  disabled={props.disabled && disabled}
                >
                  <option selected disabled>
                    Select the requiring Background
                  </option>
                  <option value="Background1">Electrical Engineer</option>
                  <option value="Background2">Civil Engineer</option>
                  <option value="Background3">Software Engineer</option>
                  <option value="Background4">Accounting</option>
                  <option value="Background4">Doctor</option>
                </select>
              </div> */}
                {/* <label for="flyer" className="">
                    <span className="asterisk-mark">*</span>Flyer
                  </label>
                  <div className="input-filed input-filed-cls">
                    <input
                      type="file"
                      className=" form-control"
                      onChange={handleChange}
                      disabled={props.disabled && disabled}
                    />
                  </div> */}
              </div>
              <div className="container1-flex-item">
                <label for="Job-Type" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Job Type
                </label>
                <div
                  className="input-filed input-filed-cls"
                  style={{ flexDirection: "row" }}
                >
                  <select
                    className="form-select"
                    name="JobType"
                    id="background"
                    disabled={props.disabled && disabled}
                  >
                    <option selected disabled>
                      Job Type
                    </option>
                    <option value="1">Full-time</option>
                    <option value="2">Part-Time</option>
                    <option value="3">Internship</option>
                    <option value="4">Temporary</option>
                    <option value="5">Volunteer</option>
                    <option value="6">Other</option>
                  </select>
                </div>
                <label for="salaryRange" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Salary Range
                </label>
                <div
                  className="input-filed input-filed-cls"
                  style={{ display: "flex", flex: "row", columnGap: "20px" }}
                >
                  <input
                    type="number"
                    className="form-control"
                    id="salaryRange salaryRangeMin"
                    placeholder="Min"
                    // required
                    style={{ width: "50%" }}
                    min="0"
                    disabled={props.disabled && disabled}
                  ></input>
                  <input
                    type="number"
                    className="form-control"
                    id="salaryRange salaryRangeMax"
                    placeholder="Max"
                    // required
                    style={{ width: "50%" }}
                    min="0"
                    disabled={props.disabled && disabled}
                  ></input>
                </div>
                <label for="Near-Town" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Nearest Town
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="text"
                    className="form-control"
                    id="Near-Town"
                    placeholder="Nearest Town"
                    // required
                    disabled={props.disabled && disabled}
                  ></input>
                </div>
                {/* <label for="levelOfEducation" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Level of Education
              </label>
              <div className="input-filed input-filed-cls">
                <select
                  className="form-select"
                  name="levelOfEducation"
                  id="levelOfEducation"
                  disabled={props.disabled && disabled}
                >
                  <option selected disabled>
                    Requiring Level of Education
                  </option>
                  <option value="Background1">Associate Degree</option>
                  <option value="Background2">Bachelor</option>
                  <option value="Background3">High School</option>
                  <option value="Background4">Masters</option>
                  <option value="Background4">Other Tertiary Education</option>
                </select>
              </div> */}
              </div>

              <div className="container1-flex-item">
                <label for="companyEmail" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Company Email
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="text"
                    className="form-control"
                    id="companyEmail"
                    placeholder="Company Email"
                    disabled={props.disabled && disabled}
                    // required
                  ></input>
                </div>
                <label for="ContactNumber" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Contact Number{" "}
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="tel"
                    className="form-control"
                    id="ContactNumber"
                    placeholder=" Contact Number"
                    disabled={props.disabled && disabled}
                    // required
                  ></input>
                </div>
                <label for="dueDate" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Due Date
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Due Date"
                    disabled={props.disabled && disabled}
                    // required
                  ></input>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setOpenJobPopup(true)}
              style={{ marginBottom: "-10px", marginLeft: "auto" }}
            >
              Edit
            </button>
            {openJobPopup && (
              <Popup
                title="Edit Job Details Info"
                openPopup={openJobPopup}
                setOpenPopup={setOpenJobPopup}
              >
                <JobDetails sendData={handleJobDetailsInfo} />
              </Popup>
            )}
            {/* </div>
          </div> */}
          </Card>
          <h4 className="sub-headings">About the job </h4>
          <Card
            style={{ marginBottom: "25px", marginTop: "25px", padding: "25px" }}
          >
            <div className="flex-container1">
              {/* <div className="flex-container2"> */}
              <div className="container1-flex-item ">
                <label for="jobDescription" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Job Description
                </label>
                <div className="input-filed input-filed-cls">
                  <textarea
                    type="text"
                    className="form-control"
                    style={{ height: "100px" }}
                    id="jobDescription"
                    placeholder="Job Description"
                    disabled={props.disabled && disabled}
                    // required
                  ></textarea>
                  {/* </div> */}
                </div>

                <label for="skills" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Skills and Experiences Required
                </label>
                <div className="input-filed input-filed-cls">
                  <textarea
                    type="text"
                    className="form-control"
                    style={{ height: "80px" }}
                    id="skills"
                    placeholder="Skills"
                    disabled={props.disabled && disabled}
                    // required
                  ></textarea>
                </div>
              </div>
            </div>
            <button
            type="button"
            className="btn btn-primary"
            onClick={() => setOpenJobInfoPopup(true)}
            style={{ marginBottom: "-10px", marginLeft: "auto" }}
          >
            Edit
          </button>
          {openJobinfoPopup && (
            <Popup
              title="Edit Job Info"
              openPopup={openJobinfoPopup}
              setOpenPopup={setOpenJobInfoPopup}
            >
              <JobInfo sendData={handleJobInfo} />
            </Popup>
          )}
          </Card>

          <div className={`${props.disabled && "d-none"}`}>
            <div className="input-filed input-filed-cls">
              <button type="submit" className="btn btn-primary" onClick={Alert}>
                Post the Job
              </button>
            </div>
          </div>
        </form>
      </div>
      <p></p>
    </div>
  );
};

export default VacancySection;
