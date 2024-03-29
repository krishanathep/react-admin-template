import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function StudentCreate() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");

  function handleUpload(event) {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "tutorial");
    data.append("cloud_name", "fullstack-solurions");

    fetch("https://api.cloudinary.com/v1_1/fullstack-solurions/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setFile(data.url);
      });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      course,
      email,
      phone,
      file,
    };

    console.log(data);

    const resuestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    await fetch(
      "https://www.full-stack-app.com/services/public/api/add-student",
      resuestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success",
            text: "Your work has been created",
            showConfirmButton: false,
            timer: 1500,
          });
          history("/students");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Dangerous",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });

          // setName("");
          // setCourse("");
          // setEmail("");
          // setPhone("");
        }
      });
  }

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Students</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/Students">Students</Link>
                  </li>
                  <li className="breadcrumb-item active">Create</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Student Create</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                      title="Remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            value={name}
                            className="form-control"
                            placeholder="Student name"
                            onChange={(event) => setName(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="course">Course</label>
                          <input
                            type="text"
                            value={course}
                            className="form-control"
                            placeholder="Student course"
                            onChange={(event) => setCourse(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            value={email}
                            className="form-control"
                            placeholder="Student email"
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input
                            type="text"
                            value={phone}
                            className="form-control"
                            placeholder="Student phone"
                            onChange={(event) => setPhone(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="image">Image</label>
                          <br />
                          <input
                            className="form-control-file"
                            onChange={handleUpload}
                            type="file"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                      <img
                            src={file}
                            class="img-thumbnail"
                            width={100}
                          />
                      </div>
                      <div className="col-md-12">
                        <div className="form-group float-right">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>{" "}
                          <Link to="/students" className="btn btn-danger">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
