import React, { useEffect } from 'react'; // React와 useEffect를 임포트합니다.
import Highmap from "./assets/Group 244.png"

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=df3b985018e2335de3937d17790dffd8&autoload=false";
    script.onload = () => kakao.maps.load(() => {
      new kakao.maps.Map(
        document.getElementById('map'), // 이 id는 지도를 표시할 div의 id와 일치해야 합니다.
        {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        }
      );
    });
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={Highmap} alt="Map" style={{ width: '500px', marginBottom: '20px' }} />
        <div id="map" style={{ width: '1000px', height: '800px' }}></div>
      </div>
    </>
  );
}

export default KakaoMap;
