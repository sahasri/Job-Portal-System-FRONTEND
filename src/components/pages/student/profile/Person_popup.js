import React from "react";

export default function PersonalInfo() {
  function handleSave(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    // Add your save logic here
  }

  return (
    <div className="container1-flex-item2">
      <div className="sub-flex-container">
        <div className="sub-flex-item1">
          <label className="label-title">Name</label>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
            ></input>
          </div>
          <div className="text-center">
            <label className="hint-title">
              First Name<span className="asterisk-mark">*</span>
            </label>
          </div>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <input
              type="text"
              className="form-control"
              placeholder="Middle Name"
            ></input>
          </div>
          <div className="text-center">
            <label className="hint-title">Middle Name</label>
          </div>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
            ></input>
          </div>
          <div className="text-center">
            <label className="hint-title">
              Last Name<span className="asterisk-mark">*</span>
            </label>
          </div>
        </div>
      </div>
      <div className="sub-flex-container">
        <div className="sub-flex-item1">
          <label className="label-title">
            Index Number<span className="asterisk-mark">*</span>
          </label>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <input
              type="text"
              className="form-control"
              placeholder="Index Number"
              required
            ></input>
          </div>
        </div>
        <div className="sub-flex-item2"></div>
        <div className="sub-flex-item2"></div>
      </div>
      <div className="sub-flex-container">
        <div className="sub-flex-item1">
          <label className="label-title">
            Date of Birth<span className="asterisk-mark">*</span>
          </label>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <input
              type="date"
              className="form-control"
              placeholder="DOB"
              required
            ></input>
          </div>
        </div>
        <div className="sub-flex-item2"></div>
        <div className="sub-flex-item2"></div>
      </div>
      <div className="sub-flex-container">
        <div className="sub-flex-item1">
          <label className="label-title">
            Gender<span className="asterisk-mark">*</span>
          </label>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <select className="form-select" name="gender" id="gender">
              <option selected disabled>
                Select your Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="sub-flex-item2"></div>
        <div className="sub-flex-item2"></div>
      </div>
      <div className="sub-flex-container">
        <div className="sub-flex-item1">
          <label className="label-title">
            Phone Number<span className="asterisk-mark">*</span>
          </label>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number 1"
              required
            ></input>
          </div>
          <div className="text-center">
            <label className="hint-title">
              Phone Number 1<span className="asterisk-mark">*</span>
            </label>
          </div>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number 2"
              required
            ></input>
          </div>
          <div className="text-center">
            <label className="hint-title">
              Phone Number 2<span className="asterisk-mark">*</span>
            </label>
          </div>
        </div>
        <div className="sub-flex-item2"></div>
      </div>
      <div className="sub-flex-container">
        <div className="sub-flex-item1">
          <label className="label-title">
            References<span className="asterisk-mark">*</span>
          </label>
        </div>
        <div className="sub-flex-item2">
          <div className="input-filed">
            <input
              type="text"
              className="form-control"
              placeholder="References"
              required
            ></input>
          </div>
        </div>
        <div className="sub-flex-item2"></div>
        <div className="sub-flex-item2"></div>
      </div>
      <div style={{ marginBottom: "1rem" }}></div>
      <button type="Submit" class="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
