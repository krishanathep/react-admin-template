import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Blank from "./pages/Blank";
import Repairs from "./pages/Repairs";
import CreateNew from "./pages/CreateNew";
import UpdateRepair from "./pages/UpdateRepair";
import Create from "./pages/board/Create";
import Show from "./pages/board/Show";
import Edit from "./pages/board/Edit";
import Board from "./pages/board/List";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/create" element={<CreateNew />} />
          <Route path="/update" element={<UpdateRepair />} />
          <Route path="/boards/create" element={<Create />} />
          <Route path="/boards/show/:id" element={<Show />} />
          <Route path="/boards/edit/:id" element={<Edit />} />
          <Route path="/boards/list" element={<Board />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
