import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { BookCreate } from "./pages/BookCreate";
import { BookIndex } from "./pages/BookIndex";
import { BookShow } from "./pages/BookShow";
import { Top } from "./pages/Top";
import { Page404 } from "./pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <h1>ブクログ風アプリ</h1>
      <ul>
        <li>
          <Link to="/">top</Link>
        </li>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
        <li>
          <Link to="/book-create">投稿する</Link>
        </li>
        <li>
          <Link to="/book-index">一覧を見る</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/book-create" element={<BookCreate />} />
        <Route path="/book-index" element={<BookIndex />} />
        <Route path="/book-show/:id" element={<BookShow />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
