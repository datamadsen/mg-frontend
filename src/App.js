import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from './lib/Header';
import Menu from './lib/Menu';
import About from './pages/About';
import UserNew from './pages/UserNew';
import UserShow from './pages/UserShow';
import {SecurityTokenService} from "./services/SecurityTokenService";
import LoginPage from "./pages/LoginPage";

class App extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <div>
          <Helmet>
            <title>Massguard</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
          </Helmet>
          <BrowserRouter>
            <div id="header_and_menu" className="p-4 max-w-2xl text-center m-auto">
              <Header />
              <Menu />
            </div>
            <div id="content" className="w-96 m-auto ">
              <Routes>
                <Route path="/" element={<UserNew />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/me" element={<UserShow />}></Route>
                <Route path="/log-in" element={<LoginPage />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </HelmetProvider>
    );
  }
}

export default App;
