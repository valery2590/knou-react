import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import ProfileFormPage from './pages/ProfileFormPage';
import UserProfilePage from './pages/UserProfilePage';
import SwipePage from "./pages/SwipePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PreferencesFormPage from "./pages/PreferencesFormPage"



function App() {

  return (

    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/profileform">
            <ProfileFormPage />
          </Route>
          <Route exact path="/preferencesform">
            <PreferencesFormPage />
          </Route>
          <Route exact path="/swipepage">
            <SwipePage />
          </Route>
          <Route exact path="/userprofile">
            <UserProfilePage />
          </Route>
         
        </Switch>
        <div className="footer_container">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
