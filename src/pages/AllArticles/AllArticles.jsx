import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import getData from "../../api/api";
import Slide from "../../components/Slide";
import Articles from "../../components/Articles";
import useQuery from "../../hooks/useQuery";

function AllArticles() {
  const [sliders, setSliders] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [categoryName, setCategoryName] = useState(null);

  let query = useQuery();
  // console.log("cat"+ query.get("cat"))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    console.log(categoryId);
    if (categoryId !== "0")
      getData(
        `categories/${categoryId}?populate[0]=articles&populate[1]=articles.image`
      ).then((data) => {
        console.log("useeffect" + categoryId);
        setCategoryName(data.data.attributes.categoryName);
        setAllArticles(data.data.attributes.articles.data);
      });
    else
      getData("articles?populate=*").then((data) => {
        setCategoryName(null);
        setAllArticles(data.data);
      });
  }, [categoryId]);

  useEffect(() => {
    getData("all-articles-sliders?populate=*").then((data) =>
      setSliders(data.data)
    );

    !query.get("cat") &&
      getData("articles?populate=*").then((data) => {
        setAllArticles(data.data);
      });

    getData("categories").then((data) => {
      setAllCategories(data.data);
    });

    query.get("cat") && setCategoryId(query.get("cat"));
  }, [query]);

  const changeCategoryHandler = (e) => {
    setCategoryId(e.target.value);
  };

  return (
    <Layout>
      <div className="AllArticles">
        <div className="AllArticles-slider">
          <Slider {...settings}>
            {sliders.map((slider) => {
              return (
                <Slide
                  key={slider.id}
                  title={slider.attributes.title}
                  description={slider.attributes.description}
                  background={slider.attributes.background.data.attributes.url}
                  alternativeText={
                    slider.attributes.background.data.attributes.alternativeText
                  }
                  buttonText={
                    slider.attributes.Button
                      ? slider.attributes.Button.buttonText
                      : null
                  }
                  buttonURL={
                    slider.attributes.Button
                      ? slider.attributes.Button.buttonURL
                      : null
                  }
                  textPosition={
                    slider.attributes.textPosition
                      ? slider.attributes.textPosition
                      : null
                  }
                />
              );
            })}
          </Slider>
        </div>
        <div className="container">
          <div className="filter">
            <form>
              <select
                name="categories"
                id="categories"
                onChange={changeCategoryHandler}
              >
                <option value={0}>Toate categoriile </option>
                {allCategories.map((category) => {
                  return (
                    <option value={category.id} key={category.id}>
                      {category.attributes.categoryName}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>

          <Articles
            data={allArticles}
            type="most-recent"
            title={
              categoryName !== null
                ? "Toate articolele din categoria " + categoryName.toLowerCase()
                : "Toate articolele"
            }
          />
          {!allArticles.length && (
            <h3 className="container">
              Niciun articol găsit în categoria{" "}
              <span className="primary-text">{categoryName}</span>.
            </h3>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AllArticles;
