import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Transcript.css";

const Transcript = ({ data }) => {
  const [show, setShow] = useState(true);

  const changeShow = () => {
    setShow(!show);
  };

  return (
    <div className="transcript">
      <div className="subtitle">
        <h3>Trascrizione</h3>
        <button onClick={changeShow}>
          {show ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </button>
      </div>
      <div className="content">
        {show ? (
          data.map((paragraph, idx) => {
            return (
              <div key={idx}>
                <h4>{paragraph.title}</h4>
                <p className="pad">{paragraph.text}</p>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Transcript;
