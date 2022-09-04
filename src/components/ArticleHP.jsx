import React from "react";
import { Link } from "react-router-dom";

function ArticleHP(props) {
  const { id, title, img, category } = props;

  return (
    <div
      className="ArticleHP"
      style={{
        background: `url("${img}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h4>{title}</h4>
      {category && <p className="category">{category}</p>}
      <Link to={`/article/${id}`}>
        <div className="link"></div>
      </Link>
    </div>
  );
}

export default ArticleHP;
