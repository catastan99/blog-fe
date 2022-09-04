import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../../components/Layout";
import getData from "../../api/api";
import ReactMarkdown from "react-markdown";
import RelatedArticles from "../../components/RelatedArticles";
import { Helmet } from "react-helmet";
import { IMAGE_PATH } from "../../api/constants";
import { Link } from "react-router-dom";

function Article() {
  const { articleId } = useParams();
  const [articleData, setArticleData] = useState([]);
  const [createdDate, setCreatedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [articleCategory, setArticleCategory] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [relatedArticlesData, setRelatedArticlesData] = useState([]);

  useEffect(() => {
    getData(`articles/${articleId}?populate=*`).then((data) => {
      setArticleData(data.data.attributes);
    });
  }, [articleId]);

  useEffect(() => {
    const createdDate = new Date(articleData.createdAt);
    const year = createdDate.getFullYear();
    const month = createdDate.getMonth() + 1;
    const day = createdDate.getDate();
    setCreatedDate(day + "." + month + "." + year);

    const updatedDate = new Date(articleData.updatedAt);
    const year2 = updatedDate.getFullYear();
    const month2 = updatedDate.getMonth() + 1;
    const day2 = updatedDate.getDate();
    setUpdatedDate(day2 + "." + month2 + "." + year2);

    articleData.category &&
      setArticleCategory(articleData.category.data.attributes.categoryName);
    articleData.category && setcategoryId(articleData.category.data.id);
  }, [articleData]);

  useEffect(() => {
    getData(
      `categories/${categoryId}?populate[0]=articles&populate[1]=articles.image`
    ).then((data) => {
      // console.log(data)
      const relatedArticlesUnfiltered = data.data.attributes.articles.data;
      const relatedArticlesFiltered = relatedArticlesUnfiltered.filter(
        (article) => article.id !== parseInt(articleId)
      );

      setRelatedArticlesData(relatedArticlesFiltered);
    });
  }, [categoryId, articleId]);

  return (
    <Layout>
      <div className="container">
        <Helmet>
          {articleData.title && <title>{articleData.title} | Blog</title>}
        </Helmet>
        <div className="ArticlePage">
          {articleData.category && articleData.category.data && (
            <Link
              to={"/articles?cat=" + articleData.category.data.id}
              className="category"
            >
              {articleCategory}
            </Link>
          )}

          <h2>{articleData.title && articleData.title}</h2>
          <div className="flex">
            <div className="article-container">
              <div className="image">
                {articleData.image && (
                  <img
                    src={IMAGE_PATH + articleData.image.data.attributes.url}
                    alt="Blog"
                  />
                )}
              </div>
              <div className="description">
                <ReactMarkdown>{articleData.description}</ReactMarkdown>
              </div>
              <hr />
              <div className="metadata">
                {articleData.author && articleData.author.data && (
                  <p className="author">
                    Articol scris de{" "}
                    <b>{articleData.author.data.attributes.name}</b>
                  </p>
                )}
                {createdDate && (
                  <p className="date">Data publicării: {createdDate}</p>
                )}
                {updatedDate && (
                  <p className="date">Actualizat: {updatedDate}</p>
                )}
              </div>
            </div>
            <RelatedArticles
              articles={relatedArticlesData}
              articleCategory={articleCategory}
              articleId={articleId}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Article;
