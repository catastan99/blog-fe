import React from "react";
import ArticleHP from "./ArticleHP";
import { IMAGE_PATH } from "../api/constants";

function Articles(props) {
  const { data, type, title } = props;

  return (
    <div className="container">
      <div className="Articles">
        <h2>{title}</h2>
        <div className={type}>
          {data.map((item) => {
            return (
              <ArticleHP
                key={item.id}
                id={item.id}
                title={item.attributes.title}
                img={IMAGE_PATH + item.attributes.image.data.attributes.url}
                category={
                  item.attributes.category
                    ? item.attributes.category.data.attributes.categoryName
                    : null
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
