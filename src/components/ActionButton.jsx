// components/ActionButton.jsx

// 🔽 propsを追加
export const ActionButton = ({ text, action }) => {
  return (
    <>
      {/* 🔽 `onClick` でクリック時に指定した関数を実行できる */}
      <button type="button" onClick={action}>
        {text}
      </button>
    </>
  );
};
