import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import './App.css'
import Home from "./home";
import PhotoCapturePage from "./PhotoCapturePage";

const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


<<<<<<< HEAD
function AppContent() { 
=======
function AppContent() {
>>>>>>> 483cedf6e224e4e5b9a2dccddeb6ae88241729a9
  
  return (
    <>
      <Main>
        <Routes>
<<<<<<< HEAD
        <Route path="/home" element={<Home />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> 483cedf6e224e4e5b9a2dccddeb6ae88241729a9
        <Route path="photo-capture" element={<PhotoCapturePage />} />
        </Routes>
      </Main>
    </>
  )
}

const App = () => {
  return (
    <AppContainer>
      <Router>
        <AppContent />
      </Router>
    </AppContainer>
  );
};


export default App;

