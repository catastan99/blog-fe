import Home from "./pages/Home/Home";
import "./sass/styles.scss";
import { Routes, Route } from "react-router-dom";
import Article from "./pages/Article/Article";
import AllArticles from "./pages/AllArticles/AllArticles";
import Page404 from "./pages/Page404";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
