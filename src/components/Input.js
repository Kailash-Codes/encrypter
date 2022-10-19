import Button from "./Button";
import { useState } from "react";
import GuideText from "./GuideText";
import encrypter from "./encrypt";
import Output from "./Output";

const Input = () => {
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");

  function change(values) {
    setData(values.target.value);
  }

  function updateClick() {
    var encData = encrypter(data);
    setOutput(encData);
  }

  return (
    <div>
      <GuideText guide="Enter your message" />
      <input type="text" className="box" onChange={change} />
      <br />
      <Button buttonClass="button" onClick={updateClick} buttonName="Encrypt" />
      <br />
      <br />
        <Output value={output} />
    </div>
  );
};
export default Input;
