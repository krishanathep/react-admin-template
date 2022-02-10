import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import firebase from "../../database/firebase";
import ReactDatatable from "@ashvin27/react-datatable";
import Moment from "react-moment";
import "moment-timezone";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("boards");
    this.unsubscribe = null;
    this.columns = [
      {
        key: "id",
        text: "ID",
        cell: () => {
          return <Fragment>{this.state.id++}</Fragment>;
        },
      },
      { key: "title", text: "Title" },
      { key: "description", text: "Description" },
      { key: "author", text: "Author" },
      {
        key: 'createdAt', text: 'Created At',
        cell: (board)=>{
          return (
            <Fragment>
              <Moment local>
                {board.createdAt}
              </Moment>
            </Fragment>
          )
        }
      },
      {
        key: "actions",
        text: "Actions",
        cell: (board) => {
          return (
            <Fragment>
              <Link
                to={`/boards/show/${board.key}`}
                className="btn btn-success"
              >
                <i class="fas fa-eye"></i>
              </Link>

              <Link
                to={`/boards/edit/${board.key}`}
                className="btn btn-primary ml-1 mr-1"
              >
                <i class="fas fa-edit"></i>
              </Link>

              <button
                onClick={this.delete.bind(this, board.key)}
                className="btn btn-danger"
              >
                <i class="fas fa-trash"></i>
              </button>
            </Fragment>
          );
        },
      },
    ];
    this.state = {
      id: 1,
      boards: [],
    };
    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      show_filter: true,
      show_pagination: true,
      pagination: "advance",
      button: {
        excel: false,
        print: false,
      },
    };
  }

  conCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author, createdAt } = doc.data();
      boards.push({
        key: doc.id,
        doc,
        title,
        description,
        author,
        createdAt,
      });
    });
    this.setState({
      boards
    });
    console.log(this.state.boards);
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.conCollectionUpdate);
  }

  delete(id) {
    if (window.confirm("Are You Sure?")) {
      firebase
        .firestore()
        .collection("boards")
        .doc(id)
        .delete()
        .then(() => {})
        .catch((error) => {
          console.error("Error removing document : ", error);
        });
    }
  }

  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>BOARDS LIST</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Boards</li>
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
                    <h3 className="card-title">BOARDS LIST</h3>
                    <div className="card-tools">
                      <Link to='/boards/create' className='btn btn-primary btn-sm'><i className='fas fa-plus'></i></Link>
                    </div>
                  </div>
                  <div className="card-body">
                  <div class="table-responsive">
                    <ReactDatatable
                      columns={this.columns}
                      records={this.state.boards}
                      config={this.config}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
