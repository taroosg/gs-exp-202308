import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export const BookShow = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "books", id);
    getDoc(docRef).then((documentSnapshot) => {
      setBook({ ...documentSnapshot.data(), id: documentSnapshot.id });
      setLoading(false);
    });
  }, []);

  const update = async (id, isCompleted) => {
    setLoading(true);
    const docRef = doc(db, "books", id);
    await updateDoc(docRef, { isCompleted });
    const newDocumentSnapshot = await getDoc(docRef);
    setBook({ ...newDocumentSnapshot.data(), id: newDocumentSnapshot.id });
    alert("Done!");
    setLoading(false);
  }

  const destroy = async (id) => {

    const questions = [
      "このデータをけしますか？",
      "ほんとにけすのですか？",
      "こうかいしませんね？"
    ];

    const askQuestion = (index) =>
      index === questions.length
        ? true
        : confirm(questions[index])
          ? askQuestion(index + 1)
          : false;
    if (!askQuestion(0)) return false;

    setLoading(true);
    const docRef = doc(db, "books", id);
    await deleteDoc(docRef);
    alert("Done!");
    navigate("/book-index");
  }

  if (loading) {
    return <p>loading now...</p>;
  }

  return (
    <>
      <p>本詳細の画面</p>
      <table>
        <tbody>
          <tr>
            <td>場所</td>
            <td>{book.place}</td>
          </tr>
          <tr>
            <td>天気</td>
            <td>{book.weather}</td>
          </tr>
          <tr>
            <td>読んだ本</td>
            <td>{book.book}</td>
          </tr>
          <tr>
            <td>感想</td>
            <td>{book.text}</td>
          </tr>
          <tr>
            <td>ステータス</td>
            <td>{book.isCompleted ? '読み終わった' : '今読んでる'}</td>
          </tr>
        </tbody>
      </table>

      <p>この本を．．．</p>
      <div>
        <button onClick={() => update(book.id, true)}>読み終わった</button>
        <button onClick={() => update(book.id, false)}>今読んでる</button>
      </div>

      <p>削除する</p>
      <button onClick={() => destroy(book.id)}>削除</button>
    </>
  );
};
