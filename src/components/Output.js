import GuideText from "./GuideText";
import Input from "./Input";
const Output = (props) => {
  return (
    <div>
      <GuideText guide="Encrypted Message" /><br/>
      <p className="out-box" >{props.value}</p>
    </div>
  );
};

export default Output;
