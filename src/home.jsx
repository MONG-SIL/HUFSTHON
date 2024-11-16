import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  const mapRef = useRef(null); // useRef로 map DOM 요소 참조
  const [mapInitialized, setMapInitialized] = useState(false); // 상태 관리
 
  const navigateto = () => {
    if (1) { // 조건에 따라 navigate 실행
      navigate("/");
    }
  };

  useEffect(() => {
    const { kakao } = window; // 전역 kakao 객체 가져오기
    if (!kakao) return; // kakao 객체가 없는 경우 대비

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 보여질 지도 좌표
      level: 3 // 지도의 레벨(확대, 축소 정도)
    };

    // 지도 생성
    const map = new kakao.maps.Map(mapRef.current, options);
    setMapInitialized(true); // 지도 초기화 상태 업데이트
  }, []);

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
