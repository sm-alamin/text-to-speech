import React, { useState } from "react";
import { MdRecordVoiceOver } from "react-icons/md";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { BsPlayCircle, BsFillPauseCircleFill } from "react-icons/bs";
import tickIcon from "/tick.png";
import dropdown from "/dropdown.png";
import img1 from "../assets/english.png";

const TextToSpeechTwo = () => {
  const [showOption, setShowOption] = useState(false);
  const [showSpeed, setShowSpeed] = useState(false);
  const [playIcon, setPlayIcon] = useState(true);
  const [speedValue, setSpeedValue] = useState(250);
  const [selectedItem, setSelectedItem] = useState(1);
  const handleRatingChange = (event) => {
    const value = parseFloat(event.target.value);
    setSpeedValue(value);
  };


  const handleVoiceIconClick = () => {
    setShowOption(!showOption);
    setShowSpeed(false);
  };
  const handleSpeedIconClick = () => {
    setShowSpeed(!showSpeed);
    setShowOption(false);
  };
  const handleCustomContentClick = (index) => {
    console.log("Selected item index:", index);
    setSelectedItem(index);
  };

  let backgroundClass = "";
  if (speedValue >= 300 && speedValue < 600) {
    backgroundClass = "fast-background";
  } else if (speedValue >= 600 && speedValue <= 900) {
    backgroundClass = "very-fast-background";
  } else if (speedValue >= 200 && speedValue <= 300) {
    backgroundClass = "normal-background";
  } else if (speedValue < 200) {
    backgroundClass = "slow-background";
  }
  return (
    <div className="position-relative">
      {/* Option */}
      {showOption && (
        <div className="text-black">
          <div className="adjusted-position1 bg-white p-2">
            <div className="d-flex gap-5 ">
              <h3 className="fs-custom">Pick Your Favourite Voice </h3>
              <span className="fs-5">
                <img
                  src={dropdown}
                  onClick={() => setShowOption(false)}
                  style={{ width: "15px", height: "15px" }}
                />
              </span>
            </div>

            <p className="custom-font-size text-start">
              Improve comprehension with AI voices
            </p>
          </div>
          <div className="adjusted-position bg-white">
            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 0 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(0)}
              style={{ width: "100%" }}
            >
              <div style={{ width: "20%" }}>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div style={{ width: "60%" }}>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div style={{ width: "10%" }}>
                {selectedItem === 0 && <img src={tickIcon} />}
              </div>
            </div>

            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 1 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(1)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 1 && <img src={tickIcon} />}</div>
            </div>

            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 2 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(2)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 2 && <img src={tickIcon} />}</div>
            </div>

            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 3 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(3)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 3 && <img src={tickIcon} />}</div>
            </div>

            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 4 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(4)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 4 && <img src={tickIcon} />}</div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 5 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(5)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 5 && <img src={tickIcon} />}</div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 6 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(6)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 6 && <img src={tickIcon} />}</div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 7 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(7)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 7 && <img src={tickIcon} />}</div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 8 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(8)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div className="">
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 8 && <img src={tickIcon} />}</div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 9 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(9)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 9 && <img src={tickIcon} />}</div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center border-bottom p-2 custom-content ${
                selectedItem === 10 ? "selected-item" : ""
              }`}
              onClick={() => handleCustomContentClick(10)}
            >
              <div>
                <div>
                  <img src={img1} alt="english" />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div className="custom-font-size">English, Female</div>
              </div>
              <div>{selectedItem === 10 && <img src={tickIcon} />}</div>
            </div>
          </div>
        </div>
      )}
      {showSpeed && (
        <div className="text-black">
          <div className="adjusted-position3 bg-white p-2">
            <div className="d-flex gap-5 ">
              <h3 className="fs-custom">Choose your listening speed </h3>
              <span className="fs-5">
                <img
                  src={dropdown}
                  className="fs-3"
                  onClick={() => setShowSpeed(false)}
                  style={{ width: "15px", height: "15px" }}
                />
              </span>
            </div>

            <p className="custom-font-size text-start">
              Get through articles 2-3x faster
            </p>
          </div>
          <div className="adjusted-position-m bg-white">
            <div className=" d-flex flex-row justify-content-between align-items-center ml-100">
              <div className="flex-1">
              <label className="text-gray-600 position-absolute top-0">
                Selected Speed: {speedValue}
              </label>
              <div className="slidecontainer">
                <input
                  type="range"
                  id="rating"
                  name="rating"
                  placeholder="select of speed"
                  min="100"
                  max="900"
                  step="10"
                  defaultValue={560}
                  value={speedValue}
                  onChange={handleRatingChange}
                  required
                  className="slider verticle-align block field-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              </div>
             

              <div className="d-flex flex-column gap-5 flex-grow align-items-center justify-content-center mt-5 mr-100">
              <div
                  className={
                    backgroundClass === "slow-background"
                      ? "slow-background"
                      : ""
                  }
                >
                  Slower
                </div>
                <div
                  className={
                    backgroundClass === "normal-background"
                      ? "normal-background"
                      : ""
                  }
                >
                  Average
                </div>
                <div
                  className={
                    backgroundClass === "fast-background"
                      ? "fast-background"
                      : ""
                  }
                >
                  Fast
                </div>
                <div
                  className={
                    backgroundClass === "very-fast-background"
                      ? "very-fast-background"
                      : ""
                  }
                >
                  Speed Reader
                </div>
                
                
                
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="p-3 shadow bg-white text-black position-absolute top-0"
        style={{ height: "100px", width: "300px", borderRadius: "8px" }}
      >
        <div className="d-flex gap-3 justify-content-between align-items-center">
          <div className="audio-player">
            <div className="audio-controls">
              <div className="audio-time-start">0:00</div>
              <div
                style={{ height: "4px", marginTop: "10px" }}
                className="progress audio-progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar"
                  style={{ width: "25%", height: "4px", background: "#6610f2" }}
                />
              </div>
              <div className="audio-time-end">3:45</div>
            </div>
            <div className="audio-volume"></div>
          </div>
        </div>
        {/* 2nd Section */}
        <div className="d-flex justify-content-between mt-2">
          {/* Voice */}
          <div className="d-flex gap-2">
            <div onClick={handleVoiceIconClick}>
              <div className="border-0 mt-1">
                <MdRecordVoiceOver className="fs-4 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Controls */}
          <div className="d-flex gap-3">
            <div>
              {" "}
              <FiSkipBack />
            </div>
            {playIcon ? (
              <div>
                <BsPlayCircle
                  onClick={() => setPlayIcon(!playIcon)}
                  className="fs-3"
                  style={{ color: "#6610f2" }}
                />
              </div>
            ) : (
              <div>
                <BsFillPauseCircleFill
                  onClick={() => setPlayIcon(!playIcon)}
                  className="fs-3"
                  style={{ color: "#6610f2" }}
                />
              </div>
            )}
            <div>
              <FiSkipForward />
            </div>
          </div>
          {/* Speed */}
          <div>
            <div className="">
              <p className="cursor-pointer" onClick={handleSpeedIconClick}>
                1.00x
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechTwo;
