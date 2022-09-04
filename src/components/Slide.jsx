import React from "react";
import { IMAGE_PATH } from "../api/constants";

function Slide(props) {
  const {
    title,
    description,
    background,
    buttonText,
    buttonURL,
    textPosition,
  } = props;
  return (
    <div className="item ">
      <div
        className="slide"
        style={{
          background: `url("${IMAGE_PATH}${background}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className={`slide-text slide-text-${textPosition}`}>
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
            {buttonText && buttonURL && (
              <a href={buttonURL} className="btn btn-red">
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
