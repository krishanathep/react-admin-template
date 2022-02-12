import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import ReactDatatable from "@ashvin27/react-datatable";
import Swal from "sweetalert2";

export default function StudnetList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const config = {
    pagination: "advance",
  };

  const columns = [
    {
      key: "id",
      text: "ID",
    },
    {
      key: "name",
      text: "Name",
    },
    {
      key: "course",
      text: "Course",
    },
    {
      key: "email",
      text: "Email",
    },
    {
      key: "phone",
      text: "Phone",
    },
    {
      key: "actions",
      text: "Actions",
      cell: (students) => {
        return (
          <Fragment>
            <Link to={"/student-view/" + students.id} className="btn btn-info">
              <i class="fas fa-eye"></i>
            </Link>{" "}
            <Link
              to={"/student-edit/" + students.id}
              className="btn btn-primary"
            >
              <i class="fas fa-edit"></i>
            </Link>{" "}
            <button
              onClick={(event) => deleteStudnet(event, students.id)}
              className="btn btn-danger"
            >
              <i class="fas fa-trash"></i>
            </button>
          </Fragment>
        );
      },
    },
  ];

  async function deleteStudnet(event, id) {
    event.preventDefault();

    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://www.full-stack-app.com/services/public/api/delete-student/${id}`,
          { method: "DELETE" }
        )
          .then((res) => res.json())
          .then((res) => console.log(res.student));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
        });
        setTimeout(function () {
          window.location.reload();
        }, 1500);
      } else {
        console.log(error);
      }
    });
  }

  async function getData() {
    try {
      setLoading(true);
      await fetch("https://www.full-stack-app.com/services/public/api/students")
        .then((res) => res.json())
        .then((res) => setStudents(res.students));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="mt-5" align="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-5" align="center">
        <p>Server Errors!</p>
      </div>
    );
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
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Students</li>
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
                  <h3 className="card-title">Student List</h3>
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
                  <Link
                    to="/student-create"
                    className="btn btn-success float-right"
                  >
                    + Student
                  </Link>
                  <div>
                    <ReactDatatable
                      columns={columns}
                      records={students}
                      config={config}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
