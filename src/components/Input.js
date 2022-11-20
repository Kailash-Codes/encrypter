import Button from "./Button";
import { useState } from "react";
import GuideText from "./GuideText";
import Output from "./Output";

const Input = () => {
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");

  function handleChange(values) {
    setData(values.target.value);
  }

  function handleClick(e) {
    if (e.target.id === "encr") {
      setOutput(btoa(data));
    } else if (e.target.id === "decr") {
      setOutput(atob(data));
    }
  }

  return (
    <div>
      <GuideText guide="Enter your message" />
      <textarea type="text" className="box" onChange={handleChange} />
      <br />
      <div className="btn-group">
        <Button
          buttonClass="button"
          buttonId="encr"
          onClick={handleClick}
          buttonName="Encrypt"
        />
        <Button
          buttonClass="button"
          buttonId="decr"
          onClick={handleClick}
          buttonName="Decrypt"
        />
      </div>
      <br />
      <br />
      <Output value={output} />
    </div>
  );
};
export default Input;
