import React, { useState } from "react";
import { MdRecordVoiceOver } from "react-icons/md";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { BsPlayCircle,BsFillPauseCircleFill,BsChevronCompactDown } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import img1 from "../assets/english.png";

const TextToSpeechTwo = () => {
  const [showOption, setShowOption] = useState(false);
  const [playIcon, setPlayIcon] = useState(true);

  const handleVoiceIconClick = () => {
    setShowOption(!showOption);
  };

  return (
    <div className="position-relative">
      {/* Option */}
      {showOption && (
        <div className="text-black">
          <div className="adjusted-position1 bg-white p-2">
            <div className="d-flex gap-3 ">
              <h3 className="fs-5">Pick Your Favourite Voice </h3>
              <span className="fs-5">
                <BsChevronCompactDown />
              </span>
            </div>

            <p className="custom-font-size">
              Improve comprehension with AI voices
            </p>
          </div>
          <div className="adjusted-position bg-white">
            <div className="d-flex justify-content-between align-items-center custom-content border-bottom">
              <div>
                <div>
                  <img
                    src={img1} 
                    alt="english"
                  />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div>English, Female</div>
              </div>
              <div>
                <TiTickOutline />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center  custom-content border-bottom">
              <div>
                <div>
                  <img
                    src={img1}
                    alt="english"
                  />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div>English, Female</div>
              </div>
              <div>
                <TiTickOutline />
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center custom-content border-bottom">
              <div>
                <div>
                  <img
                    src={img1}
                    alt="english"
                  />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div>English, Female</div>
              </div>
              <div>
                <TiTickOutline />
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center  custom-content border-bottom">
              <div>
                <div>
                  <img
                    src={img1} 
                    alt="english"
                  />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div>English, Female</div>
              </div>
              <div>
                <TiTickOutline />
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center custom-content border-bottom">
              <div>
                <div>
                  <img
                    src={img1} 
                    alt="english"
                  />
                </div>
              </div>
              <div>
                <div>Ema</div>
                <div>English, Female</div>
              </div>
              <div>
                <TiTickOutline />
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
           <div> <FiSkipBack /></div>
           {
            playIcon ?
              <div><BsPlayCircle onClick={()=> setPlayIcon(!playIcon)} className="fs-3"style={{color: "#6610f2"}}/></div>
              :
             
              <div><BsFillPauseCircleFill onClick={()=> setPlayIcon(!playIcon)} className="fs-3"style={{color: "#6610f2"}}/></div>
             
           }
            <div><FiSkipForward /></div>
          </div>
          {/* Speed */}
          <div>
            <div className="">
              <p className="cursor-pointer">1.00x</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechTwo;