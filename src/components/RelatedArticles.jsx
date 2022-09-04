import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../api/constants";

function RelatedArticles(props) {
  const { articles, articleCategory } = props;

  return (
    <div className="RelatedArticles">
      {articles.length > 0 && (
        <h3>Alte articole din categoria {articleCategory}</h3>
      )}
      {articles.map((article) => {
        return (
          <div className="related-article" key={article.id}>
            <Link to={"/article/" + article.id}>
              <div className="image">
                <img
                  src={
                    IMAGE_PATH + article.attributes.image.data.attributes.url
                  }
                  alt=""
                />
              </div>
              <p>{article.attributes.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default RelatedArticles;
