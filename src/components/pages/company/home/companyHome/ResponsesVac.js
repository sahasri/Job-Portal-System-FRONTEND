import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";
import axios from "axios";
import {URL} from "../../../../../env";
import { Card } from "@mui/material";
import "../companyHome/ResponsesVac.css";
import { BorderColor } from "@mui/icons-material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import StreetviewOutlinedIcon from "@mui/icons-material/StreetviewOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import Swal from "sweetalert2";
export default function ResponseVac({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company-HomePage">Company Home</Link>
        <Link to="/company-profile">Profile</Link>
    </>
  );
  const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
  const [responses, setResponses] = useState([]);
  const [jobpool, setJobpool] = useState(JSON.parse(localStorage.getItem('jbvacancies') || '{}'));
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const navigate = useNavigate();
  const jobVUrl = URL +`/api/vacancies/${user._id}`;
  const rUrl = URL +`/api/responses/${user._id}`;

    useEffect(() => {
        console.log(user);
        // Fetch job vacancies
        axios.get(jobVUrl)
            .then(response => {
                setJobpool(response.data);
            })
            .catch(error => {
                console.log("Failed to fetch job vacancies");
                console.error('Failed to fetch job vacancies:', error);
            });

        // Fetch responses
        axios.get(rUrl)
            .then(response => {
                setResponses(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch responses:', error);
            });
    }, []);

    const deleteVacancy= (vacancyId) => {
        const url = URL +`/api/vacancies/${user._id}/${vacancyId}`;
        axios.delete(url)
            .then(response => {
                console.log('Vacancy deleted successfully');
                // Update the jobpool state by filtering out the deleted vacancy
                setJobpool(prevJobpool => prevJobpool.filter(vacancy => vacancy._id !== vacancyId));
            })
            .catch(error => {
                console.log("Failed to delete vacancy");
                console.error('Failed to delete vacancy:', error);
            });
    };

    const Alert = () =>{
      Swal.fire('Deleted', 'Succesfully', 
      'Delete')
    }
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
          <section className="container" >
            <div >
              <h4
                style={{
                  fontFamily: "Georgia",
                  marginTop: "2%",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Posted Applications
              </h4>
              <div className="jobpoolm responses">
                
                  <div class="row">
                    <div>
                      <div class="container card_nw"
                      style={{justifyContent:"flex-start",columnGap:"15px",rowGap:"20px"}}>
                      {jobpool.map((response, i) => (
                        <div key={i}>
                          <div
                            class="card-horizontal"
                            style={{
                              backgroundColor: "D9ECE4",
                              marginTop: "10px",
                              position: "relative",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                              display: "flex",
                              padding:"20px"
                              
                            }}
                          >
                            {/* <div style={{ flex: "0 0 250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <div style={{ fontSize: "72px", fontWeight: "bold" , justifyContent: "center"}}>
                                7 {/* Replace this with your desired digit */}
                              {/* </div>
                              Number of Applications
                            </div> */} 
                            <div style={{ flex: "1" }}>
                            <h4
                                  className="container2-flex-item1 job-pool-card-title"
                                  style={{ fontSize: "20px" }}
                                >
                                  {response.jobPosition}
                                </h4>
                                <div style={{ display: "flex", alignItems: "center" }}>
                            <CalendarMonthOutlinedIcon style={{ marginRight: "5px" }} />
                            <small className="text-muted">
                              Date: {response.dueDate}
                            </small>
                          </div>
                          <div className="vacancy-count" style={{ display: "flex", alignItems: "center" }}>
                            <FilePresentOutlinedIcon style={{ marginRight: "5px" }} />
                            <span>Number of Applications: {response.vacancies}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <BusinessOutlinedIcon style={{ marginRight: "5px" }} />
                            <span>Location: {response.companyLocation}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <PersonPinOutlinedIcon style={{ marginRight: "5px" }} />
                            <span>Background: {response.background}</span>
                          </div>
                              <div
                                  className="button-div"
                                  style={{
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0",
                                    margin: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end", // Align buttons vertically
                                  }}
                                >
                                  <button
                                    className="btn btn-primary butdet"
                                    onClick={() => {
                                      navigate("/company-job-pool");
                                    }}
                                    style={{
                                      background: "#2B547E",
                                      border: "none",
                                      marginRight: "5px",
                                      marginBottom: "2px",
                                      width: "180px "
                                    }}
                                  >
                                    Edit
                                   < BorderColorOutlinedIcon/>
                                  </button>

                                  <button
                                    className="btn btn-primary butdet"
                                    onClick={() => {
                                      navigate(`/all-student-responses/${response._id}`);
                                    }}
                                    style={{
                                      background: "#2B547E",
                                      border: "none",
                                      marginRight: "5px",
                                      width: "180px "
                                    }}
                                  >
                                    View Applications
                                    <StreetviewOutlinedIcon/>
                                  </button>
                                  <button
                                      onClick={() => {
                                          deleteVacancy(response._id);
                                          Alert();
                                      }}

                                    className="btn btn-primary reject butdet"
                                    style={{
                                      //color: "darkred",
                                    //  marginRight: "5px",
                                      marginRight: "5px",
                                    //  background: "white",
                                     // borderRadius: "0",
                                      background: "#2B547E",
                                    marginTop:"2px",
                                    border: "none",
                                     width: "180px "
                                    }}
                                  >
                                    Delete
                                    <DeleteOutlinedIcon style={{ marginLeft: "5px" }} />
                                  </button>
                               
       
                              </div>
                            </div>
                          </div>

                          <div class="card-footer">
                            <small class="text-muted">Posted on {response.dueDate}</small>
                          </div>
                        </div>
                      ))}

                      </div>
                    </div>
                  </div>
              
              </div>
            </div>
            {/* </div> */}
          </section>
       
      <Footer />
    </div>
  );
}
