import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import ReactDatatable from "@ashvin27/react-datatable";

export default function List() {
  const [error, setError] = useState(null);
  const [problems, setProblems] = useState([]);

  async function getData() {
    try {
      await fetch('http://127.0.0.1:8000/api/problems')
        .then((res)=>res.json())
        .then((res)=>setProblems(res.problems))
    }catch(error){
      setError(error)
    }finally{
  
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const columns = [
    {
      key: "id",
      text: "ID",
    },
    // {
    //   key: "image",
    //   text: "Image",
    //   cell: (students) => {
    //     return (
    //       <Fragment>
    //         {(() => {
    //           if (students.file === null) {
    //             return (
    //               <img
    //                 src="https://www.tyithailand.or.th/images/nopic.png"
    //                 class="img-thumbnail"
    //                 width={100}
    //               />
    //             );
    //           } else {
    //             return (
    //               <img src={students.file} class="img-thumbnail" width={100} />
    //             );
    //           }
    //         })()}
    //       </Fragment>
    //     );
    //   },
    // },
    {
      key: "name",
      text: "Problem Name",
      align: "center",
    },
    {
      key: "detail",
      text: "Problem Detail",
    },
    {
      key: 'country',
      text:'Country'
    },
    {
      key: "status",
      text: "Status",
    },
    {
      key: "email",
      text: "Email",
    },
    {key: 'created_at',text: 'Create At',
    cell: (problems)=>{
      return (
        <Fragment>
          <Moment format="DD/MM/YYYY">
            {problems.createdAt}
          </Moment>
        </Fragment>
      )
    }
    },
    {
      key: "actions",
      text: "Actions",
      cell: (problems) => {
        return (
          <Fragment>
            <Link to={"/helpdesk/view/" + problems.id} className="btn btn-info btn-sm mb-1">
              <i class="fas fa-eye"></i>
            </Link>{" "}
            <Link
              to={"/helpdesk/edit/" + problems.id}
              className="btn btn-primary btn-sm"
            >
              <i class="fas fa-edit"></i>
            </Link>{" "}
            {/* <button
              // onClick={(event) => deleteStudnet(event, problems.id)}
              onClick={()=>window.confirm('Are your sure you want to Delete ?')}
              className="btn btn-danger btn-sm"
            >
              <i class="fas fa-trash"></i>
            </button> */}
          </Fragment>
        );
      },
    },
  ];

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Helpdesk</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Helpdesk</li>
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
                  <h3 className="card-title">Helpdesk List</h3>
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
                    to="/helpdesk/create"
                    className="btn btn-success float-right"
                  >
                    + Problem
                  </Link>
                  <ReactDatatable
                    columns={columns}
                    records={problems}
                    //config={config}
                  />
                </div>
                {/* <div className="card-footer">Footer</div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
