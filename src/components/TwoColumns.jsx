import React, { useEffect, useState } from "react";
import Articles from "./Articles";
import getData from "../api/api";
import Author from "./Author";
import SocialMedia from "./SocialMedia";
import GoogleAd from "./GoogleAd";

function TwoColumns() {
  const [recentArticles, setRecentArticles] = useState([]);
  const [authorDetails, setAuthorDetails] = useState([]);
  const [socialMediaButtons, setSocialMediaButtons] = useState([]);

  useEffect(() => {
    getData("articles?populate=*").then((data) => {
      setRecentArticles(data.data);
    });

    getData("author-detail?populate=*").then((data) => {
      setAuthorDetails(data.data.attributes);
    });

    getData("social-media-button?populate=*").then((data) => {
      setSocialMediaButtons(data.data.attributes.socialMediaButton);
    });
  }, []);

  return (
    <div className="container">
      <div className="TwoColumns">
        <div className="left-side">
          {/* <Paginate data={DUMMY_ARTICLES} type="most-popular" title="Top Articole" itemsPerPage={4}/> */}
          {/* <Paginate   itemsPerPage={4} items={DUMMY_ARTICLES}/> */}
          <Articles
            data={recentArticles}
            type="most-popular"
            title="Recomandate"
            itemsPerPage={4}
          />
          <Articles
            data={recentArticles}
            type="most-recent"
            title="Cele mai recente articole"
            itemsPerPage={4}
          />
        </div>
        <div className="right-side">
          <Author authorDetails={authorDetails} />
          <SocialMedia socialMediaButtons={socialMediaButtons} />
          <GoogleAd />
        </div>
      </div>
    </div>
  );
}

export default TwoColumns;
