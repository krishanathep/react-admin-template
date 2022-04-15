import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blank from "./pages/Blank";
import Repairs from "./pages/Repairs";
import CreateNew from "./pages/CreateNew";
import UpdateRepair from "./pages/UpdateRepair";
import Create from "./pages/board/Create";
import Show from "./pages/board/Show";
import Edit from "./pages/board/Edit";
import Board from "./pages/board/List";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StudentLlist from "./pages/students/StudnetList";
import StudentCreate from "./pages/students/StudentCreate";
import StudentEdit from "./pages/students/StudentEdit";
import StudentView from "./pages/students/StudentView";

import HelpdeskList from './pages/helpdesk/List'
import HelpdeskCreate from './pages/helpdesk/Create'
import HelpdeskView from './pages/helpdesk/View'
import HelpdeskEdit from './pages/helpdesk/Edit'

import ProfilesList from './pages/profiles/List'

import SignIn from "./pages/login/SignIn";
import SignUp from './pages/login/SiginUp'
import AllReport from "./pages/report/AllReport";

function App() {
  return (
    <div className="wrapper">
      <Router>
        {window.location.pathname !== '/' && <Navbar/>}
        {window.location.pathname !== '/' && <Sidebar/>}
        <Routes>
          
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/students" element={<StudentLlist />} />
          <Route path="/student-create" element={<StudentCreate />} />
          <Route path="/student-edit/:id" element={<StudentEdit />} />
          <Route path="/student-view/:id" element={<StudentView />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/create" element={<CreateNew />} />
          <Route path="/update" element={<UpdateRepair />} />
          <Route path="/boards/create" element={<Create />} />
          <Route path="/boards/show/:id" element={<Show />} />
          <Route path="/boards/edit/:id" element={<Edit />} />
          <Route path="/boards/list" element={<Board />} />
          
          <Route path="/helpdesk/list" element={<HelpdeskList />} />
          <Route path="/helpdesk/create" element={<HelpdeskCreate />} />
          <Route path="/helpdesk/view/:id" element={<HelpdeskView />} />
          <Route path="/helpdesk/edit/:id" element={<HelpdeskEdit />} />

          <Route path="/profiles/list" element={<ProfilesList />} />
          <Route path="/report/allreport" element={<AllReport/>} />
        </Routes>
        {window.location.pathname !== '/' && <Footer/>}
      </Router>
    </div>
  );
}

export default App;
