import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

function SocialMedia(props) {
  const { socialMediaButtons } = props;
  return (
    <div className="SocialMedia">
      <h5>Subscribe & Follow</h5>
      <div className="social-media-buttons">
        {socialMediaButtons.map((socialMediaButton) => {
          return (
            <a
              href={socialMediaButton.buttonURL}
              className="btn btn-social"
              target="_blank"
              rel="noreferrer"
              key={socialMediaButton.id}
            >
              <span>
                {socialMediaButton.buttonText === "Facebook" && <FiFacebook />}
                {socialMediaButton.buttonText === "Twitter" && <FiTwitter />}
                {socialMediaButton.buttonText === "Instagram" && (
                  <FiInstagram />
                )}
                {socialMediaButton.buttonText === "Youtube" && <FiYoutube />}
              </span>
              {socialMediaButton.buttonText}
            </a>
          );
        })}
        {/* <a href="" className="btn btn-social"><span><FiFacebook/></span>Facebook</a>
            <a href="" className="btn btn-social"><span><FiInstagram/></span>Instagram</a>
            <a href="" className="btn btn-social"><span><FiTwitter/></span>Twitter</a>
            <a href="" className="btn btn-social"><span><FiYoutube/></span>Youtube</a> */}
      </div>
    </div>
  );
}

export default SocialMedia;
