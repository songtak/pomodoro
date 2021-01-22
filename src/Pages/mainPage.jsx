import React from "react";
import { timer } from "../etc/data";
import "../css/Pages.css";
import "../css/common.css";

import Select from "../Content/Select";

const mainPage = () => {
  return (
    <>
      <div className="out-box">
        <div className="title">POMODORO</div>
        <div>
          <input className="input" type="text" placeholder="닉네임" />
        </div>
        <div>
          <Select
            className="select"
            name="time"
            id="d"
            placeholder="집중시간"
            label="집중시간"
            options={timer}
          ></Select>
        </div>
        <button className="start button">시작</button>
      </div>
    </>
  );
};

export default mainPage;
