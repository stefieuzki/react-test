import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowflg, setFaceShowFlg] = useState(false);
  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlg(!faceShowflg);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [num]);
  if (num > 0) {
    if (num % 3 === 0) {
      faceShowflg || setFaceShowFlg(true);
    } else {
      faceShowflg && setFaceShowFlg(false);
    }
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowflg && <p>（｀ェ´）ﾋﾟｬｰ</p>}
    </>
  );
};

export default App;
