import React, { useEffect } from 'react'; // React와 useEffect를 임포트합니다.
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Map from "./assets/map.png";


function CommuteInfo() {  // 이름 변경
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
    navigate("/kakaomap");
  };
  const gotokakao = ()=>{
    navigate("/kakaomap");
  }

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
    <FormWrapper>
      <FormContentWrapper>
        <Top>
          <ProgressBar>
            <InnerProgressBar style={{ backgroundColor: "#F3F3F3" }} />
            <InnerProgressBar style={{ backgroundColor: "#4273F9" }} />
            <InnerProgressBar style={{ backgroundColor: "#F3F3F3" }} />
          </ProgressBar>
        </Top>
        <Title>출퇴근 정보를 입력해 주세요</Title>
        <CommuteForm onSubmit={handleSubmit(onSubmit)}>
          <FormFieldWrapper>
            <Controller
              name="departure"
              control={control}
              render={({ field }) => (
                <FormInput {...field} placeholder="출발지를 입력해 주세요" />
              )}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Controller
              name="destination"
              control={control}
              render={({ field }) => (
                <FormInput {...field} placeholder="도착지를 입력해 주세요" />
              )}
            />
          </FormFieldWrapper>
          <div id="map" style={{ width: '600px', height: '300px' }}></div>
        </CommuteForm>
        <NextBtn onClick={gotokakao}>
            다음
          </NextBtn>
      </FormContentWrapper>
    </FormWrapper>
  );
}

export default CommuteInfo;

const FormWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #white;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;

const FormContentWrapper = styled.div`
  width: 348px;
  margin: 0 auto;
  padding: 0px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 229px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const InnerProgressBar = styled.div`
  width: 76.33px;
  height: 6px;
  background-color: #white;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 24px;
  margin-top: 10px;
`;

const CommuteForm = styled.form`
  transform: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormFieldWrapper = styled.div`
  width: 316px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  background-color: #F3F3F3;
  width: 305px;
  height: 60px;
  border-radius: 12px;
  border: none;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  padding-left: 10px;

  &::placeholder {
    color: #959595;
    font-weight: 600;
    font-size: 12px;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

const NextBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #4273F9;
  color: #353535;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  margin: 20px auto 0;
  display: block;
  border: none;
  margin-bottom: 20px;
`;

const ErrMsg = styled.div`
  color: #ff4545;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  text-align: left;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(0%, 0%);
`;
