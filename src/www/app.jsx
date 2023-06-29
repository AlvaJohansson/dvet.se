import React from "react";
import Toolbar from "./components/toolbar";
import "./styles.less";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/navbar/footer";
import ContactPage from "./components/contact-page";
import DVRKRoute from "./components/dvrk-page";
import DocumentPage from "./components/documents-page";
import AboutPage from "./components/about-page";
import HomePage from "./components/home-page";
import CommitteePage from "./components/committee-page";
import ToolsPage from "./components/tools-page";
import PhotosPage from "./components/photos-page";
import Schedule from "./components/widgets/schedule";
// import WIP from "./components/widgets/wip";
import IndividualCommitteePage from "./components/individual-committee-page";
import { getLanguageCookie } from "./util";

const LanguageSelector = () => {
  return <main>
    <div className="language-picker page">
      <h1>Hi - language selection!</h1>
      <p>Before you can proceed we have to ask you which language you prefer!</p>
      <form id="language-form">
        <input type="radio" name="langauge" id="langauge-se" defaultChecked={true} />
        <label htmlFor="language-se">Svenska</label>
        <br />
        <input type="radio" name="langauge" id="langauge-en" />
        <label htmlFor="language-se">English</label>
        <br /><br />
        <i>By clicking <b>Ok</b>, you are alright with us saving a cookie on your device, which saves your language preference accross sessions.
          <br />
          This is required for site functionallity, and it is the only cookie used on this website.
        </i>
        <br /><br />
      </form>
      <button className="kickoff-info-button" onClick={() => {
        let english = document.getElementById("langauge-en");
        if (english.checked) {
          document.cookie = "language=en";
        } else {
          document.cookie = "language=se";
        }
        location.reload();
      }}>Ok</button>
    </div>
  </main>;
};

const App = () => {
  return (
    <div>
      {getLanguageCookie() ? <>
        {"Lang " + (getLanguageCookie() ?? "not set")}
        <Router>
          <Routes>
            {DVRKRoute()}
            <Route element={
              <>
                <Toolbar />
                <Navbar />
                <main>
                  <Outlet />
                </main>
              </>
            }>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/committees" element={<CommitteePage />} />
              <Route exact path="/tools" element={<ToolsPage />} />
              <Route exact path="/documents" element={<DocumentPage />} />
              <Route exact path="/contact" element={<ContactPage />} />
              <Route exact path="/photos" element={<PhotosPage />} />
              <Route exact path="/schedule" element={
                <div className="page">
                  <h1>Event</h1>
                  <Schedule full={true} />
                </div>
              } />

              <Route exact path="/committees/the-board" element={
                <IndividualCommitteePage text={require("../../content/committees/the-board.md")["default"]} />
              } />
              <Route exact path="/committees/board-of-studies" element={
                <IndividualCommitteePage text={require("../../content/committees/board-of-studies.md")["default"]} />
              } />
              <Route exact path="/committees/mega6" element={
                <IndividualCommitteePage text={require("../../content/committees/mega6.md")["default"]} />
              } />
              <Route exact path="/committees/concats" element={
                <IndividualCommitteePage text={require("../../content/committees/concats.md")["default"]} />
              } />
              <Route exact path="/committees/femmepp" element={
                <IndividualCommitteePage text={require("../../content/committees/femmepp.md")["default"]} />
              } />
              <Route exact path="/committees/dv_ops" element={
                <IndividualCommitteePage text={require("../../content/committees/dv_ops.md")["default"]} />
              } />
              <Route exact path="/committees/dvarm" element={
                <IndividualCommitteePage text={require("../../content/committees/dvarm.md")["default"]} />
              } />
              <Route exact path="/committees/mega7" element={
                <IndividualCommitteePage text={require("../../content/committees/mega7.md")["default"]} />
              } />
            </Route>
          </Routes>
        </Router>
      </>
        :
        <LanguageSelector />}
      <Footer />
      {/* <WIP /> */}
    </div>
  );
};

export default App;
