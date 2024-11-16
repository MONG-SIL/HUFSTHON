import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import flash from "./assets/flash.png"
import camerafb from "./assets/camerafb.png"
import capture from "./assets/capture.png"
import back from "./assets/back.png"
import retake from "./assets/retake.png"
import upload from "./assets/Frame185.png"

const PhotoCapturePage = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadedPhoto, setUploadedPhoto] = useState(null); // 업로드된 이미지 상태

  const capturePhoto = () => {
    if (flashEnabled) {
      document.body.style.backgroundColor = "white";
      setTimeout(() => {
        document.body.style.backgroundColor = "";
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedPhoto(imageSrc);
      }, 100);
    } else {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedPhoto(imageSrc);
    }
  };
  const gotoHome = () => {
    navigate("/home");
  }

  const retakePhoto = () => {
    setCapturedPhoto(null);
    setUploadedPhoto(null); // 업로드된 이미지도 초기화
    setUploadStatus("");
  };

  const toggleFlash = () => {
    setFlashEnabled((prev) => !prev);
  };

  // 서버와 통신 없이 촬영 이미지를 `uploadedPhoto` 상태로 저장
  const uploadPhoto = () => {
    if (!capturedPhoto) {
      setUploadStatus("No photo to upload.");
      return;
    }

    setUploadedPhoto(capturedPhoto); // 촬영 이미지를 업로드된 이미지로 설정
    console.log(capturedPhoto);
    console.log("Photo successfully uploaded locally!");
    setUploadStatus("Photo successfully uploaded locally!");
  };

  return (
    <div style={styles.photoCapturePage}>
      {!capturedPhoto ? (
        <>
          <img src={back} onClick={gotoHome} style={{ width: '50px', height: '50px', marginleft: 0 }}  ></img>
          <div style={styles.webcamContainer}>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              style={styles.webcam}
            />
          </div>
          <div style={styles.controls}>
            <button onClick={toggleFlash} style={styles.flashButton}>
              <img src={flash}></img>
            </button>
            <button onClick={capturePhoto} style={styles.captureButton}>
              <img src={capture}></img>
            </button>
            <button onClick={capturePhoto} style={styles.transitionButton}>
              <img src={camerafb}></img>
            </button>
          </div>
        </>
      ) : (
        <div style={styles.photoPreviewPage}>
          <div style={styles.photoPreview}>
            <img
              src={uploadedPhoto || capturedPhoto} // 업로드된 사진이 있으면 업로드된 사진을 표시
              alt="Captured"
              style={styles.capturedPhoto}
            />
          </div>
          <div style={styles.photoPreviewControls}>
            <button onClick={retakePhoto} style={styles.retakeButton}>
              <img src={retake}></img> 
            </button>
            <button onClick={uploadPhoto} style={styles.uploadButton}>
              <img src={upload}></img>
            </button>
          </div>
          {uploadStatus && <p>{uploadStatus}</p>}
        </div>
      )}
    </div>
  );
};

const styles = {
  photoCapturePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#white",
    position: "relative",
  },
  webcamContainer: {
    width: "90%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "20px",
  },
  webcam: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },
  controls: {
    width: "100%",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#white",
  },
  flashButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  captureButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  transitionButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  bigIcon: {
    width: "48px",
    height: "48px",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  photoPreviewPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    backgroundColor: "white",
    position: "relative",
  },
  photoPreview: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
  },
  capturedPhoto: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },
  photoPreviewControls: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    backgroundColor: "#white",
  },
  retakeButton: {
    backgroundColor: "#white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  uploadButton: {
    backgroundColor: "#white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default PhotoCapturePage;
