import React from "react";
import Toolbar from "./components/toolbar";
import "./styles.less";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/navbar/footer";
import ContactPage from "./components/contact-page";
import DocumentPage from "./components/documents-page";
import AboutPage from "./components/about-page";
import HomePage from "./components/home-page";
import CommitteePage from "./components/committee-page";
import ToolsPage from "./components/tools-page";
import WIP from "./components/widgets/wip";
import IndivualCommitteePage from "./components/indivual-committee-page";

const App = () => {
  return (
    <div>
      <Toolbar />
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/committees" element={<CommitteePage />} />
            <Route exact path="/tools" element={<ToolsPage />} />
            <Route exact path="/documents" element={<DocumentPage />} />
            <Route exact path="/contact" element={<ContactPage />} />

            <Route exact path="/committees/the-board" element={
              <IndivualCommitteePage text={require("../Content/committees/the-board.md")["default"]} />
            } />
            <Route exact path="/committees/dvrk" element={
              <IndivualCommitteePage text={require("../Content/committees/dvrk.md")["default"]} />
            } /><Route exact path="/committees/board-of-studies" element={
              <IndivualCommitteePage text={require("../Content/committees/board-of-studies.md")["default"]} />
            } /><Route exact path="/committees/mega6" element={
              <IndivualCommitteePage text={require("../Content/committees/mega6.md")["default"]} />
            } /><Route exact path="/committees/concats" element={
              <IndivualCommitteePage text={require("../Content/committees/concats.md")["default"]} />
            } /><Route exact path="/committees/femmepp" element={
              <IndivualCommitteePage text={require("../Content/committees/femmepp.md")["default"]} />
            } /><Route exact path="/committees/dv_ops" element={
              <IndivualCommitteePage text={require("../Content/committees/dv_ops.md")["default"]} />
            } /><Route exact path="/committees/dvarm" element={
              <IndivualCommitteePage text={require("../Content/committees/dvarm.md")["default"]} />
            } /><Route exact path="/committees/mega7" element={
              <IndivualCommitteePage text={require("../Content/committees/mega7.md")["default"]} />
            } />
          </Routes>
        </main>
      </Router>
      <Footer />
      <WIP />
    </div>
  );
};

export default App;
