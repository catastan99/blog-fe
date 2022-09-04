import React from "react";
import {IMAGE_PATH} from '../api/constants'

function Author(props) {
  const { authorDetails } = props;
  return (
    <div className="Author">
      <h5>Author</h5>
      <div className="author-container">
        <div className="author-image">
          {authorDetails.image && (
            <img
              src={
                IMAGE_PATH +
                authorDetails.image.data.attributes.url
              }
              alt=""
            />
          )}
        </div>
        {authorDetails && authorDetails.name && <h4>{authorDetails.name}</h4>}
        {authorDetails.description && <p>{authorDetails.description}</p>}
      </div>
    </div>
  );
}

export default Author;
