import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate()
  

  return (
    <HomePage>
      <div id="map" ref={mapRef} style={{ width: '1150px', height: '700px' }} />
      <button onClick={navigateto} style={{ marginTop: "20px" }}>Go to Home</button>
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
  position: relative;
`;
