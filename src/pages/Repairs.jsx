import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ReactDatatable from "@ashvin27/react-datatable";

export default class Repairs extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        key: "id",
        text: "ID",
      },
      {
        key: "name",
        text: "Name",
      },
      {
        key: "mobile",
        text: "Mobile",
      },
      {
        key: "equip",
        text: "Equip",
      },
      {
        key: "date_start",
        text: "Start",
      },
      {
        key: "date_finish",
        text: "Finish",
      },
      {
        key: "staff",
        text: "Staff",
      },
      {
        key: "status",
        text: "Status",
      },
      {
        key: "actions",
        text: 'Actions',
        cell: (repairs)=>{
          return(
            <Fragment>
              <Link to='/update' className='btn btn-info btn-sm mr-1'>
              <i class="fas fa-edit"></i>
              </Link>
              <button className='btn btn-danger btn-sm'>
              <i class="fas fa-trash"></i>
              </button>
            </Fragment>
          )
        }
      }
    ];
    this.state = {
      repairs: [
        {
          id: "JOB-001",
          name: "Narumon P.",
          mobile: "087-324-3929",
          equip: "Computer",
          date_start: "17-08-20",
          date_finish: "29-08-20",
          staff: "Krishanathep J.",
          status: "Waiting",
        },
        {
          id: "JOB-002",
          name: "Duangport S.",
          mobile: "087-324-3929",
          equip: "Notebook",
          date_start: "18-08-20",
          date_finish: "29-08-20",
          staff: "Krishanathep J.",
          status: "Waiting",
        },
        {
          id: "JOB-003",
          name: "Tony J.",
          mobile: "087-324-3929",
          equip: "Printer",
          date_start: "19-08-20",
          date_finish: "29-08-20",
          staff: "Krishanathep J.",
          status: "Waiting",
        },
        {
          id: "JOB-004",
          name: "Roboto C.",
          mobile: "087-324-3929",
          equip: "Computer",
          date_start: "20-08-20",
          date_finish: "29-08-20",
          staff: "Krishanathep J.",
          status: "Waiting",
        },
        {
          id: "JOB-005",
          name: "Iron M.",
          mobile: "087-324-3929",
          equip: "Macbook",
          date_start: "21-08-20",
          date_finish: "29-08-20",
          staff: "Krishanathep J.",
          status: "Waiting",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Repair List</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Repair</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-header">
                    <h3 className="card-title">
                        Repair List
                    </h3>
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
                    <ReactDatatable
                      columns={this.columns}
                      records={this.state.repairs}
                    ></ReactDatatable>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
