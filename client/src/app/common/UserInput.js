import "./userInput.css";
import mailIcon from "../image/mail.png"
import phoneIcon from "../image/phone_Icon.png"

export default function UserInput(props) {
  return (
    <div type="text" className="card">
      {props.mailIcon && <img src={mailIcon} className="centerImage" alt="Logo" />}
      {props.phoneIcon && <img src={phoneIcon} className="centerImage" alt="Logo" />}
      <>{props.info}</>
    </div>
  );
}
