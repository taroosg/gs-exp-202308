// App.jsx

// 🔽 Link を追加
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { BookCreate } from "./pages/BookCreate";
import { BookIndex } from "./pages/BookIndex";
import { BookShow } from "./pages/BookShow";

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      {/* 🔽 追加 */}
      <ul>
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
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/book-create" element={<BookCreate />} />
        <Route path="/book-index" element={<BookIndex />} />
        <Route path="/book-show/:id" element={<BookShow />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
