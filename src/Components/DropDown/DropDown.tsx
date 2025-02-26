import { useDispatch } from "react-redux";
import "./DropDown.scss";
import { setModalValue } from "../../stores/modalslice";

interface DropDownProps {
  name?: string;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type modalType = "BIO" | "ORG";

const DropDown: React.FC<DropDownProps> = ({ handleOpen }) => {
  const dispatch = useDispatch();

  const handler = (modalType: modalType) => {
    dispatch(setModalValue(modalType));
    handleOpen(true);
  };
  return (
    <div className="DropDown">
      <ul className="DropDown-list">
        <li className="DropDown-list__item" onClick={() => handler("BIO")}>
          Биография
        </li>
        <li className="DropDown-list__item" onClick={() => handler("ORG")}>
          Организации
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
