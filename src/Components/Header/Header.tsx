import "./Header.scss";
import { Avatar } from "@mui/material";
import logo from "/imgs/photo_2024-03-06_21-41-26.jpg";
import DropDown from "../../Components/DropDown/DropDown";
import useOutsideClick from "../../hooks/useOutsideClick";
import BasicModal from "../../Components/ModalUi/ModalUi";
import { useState } from "react";
import Users from "./Users/Users";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  name?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const { ref, isActive, setIsActive } = useOutsideClick<HTMLDivElement>(false);

  const updateShowDropState = () => {
    setIsActive(!isActive);
  };

  const redirect =()=>{
    if (location.pathname !== "/") navigate("/")   
  }

  return (
    <div className="HeaderPage">
      <div className="header">
       <span onClick={redirect} className={location.pathname !== "/" ? "pointer" : ""}>GBEL Projects</span> 
        <div className="header-profile__wrap">
          <Users />
          <div
            onClick={updateShowDropState}
            className="header-profile__content"
            ref={ref}
          >
            <Avatar alt="Georgiy Belyakov" src={logo} />
            Информация обо мне
            {isActive && <DropDown handleOpen={handleOpen} />}
          </div>
        </div>
      </div>
      <BasicModal open={open} handleClose={handleClose}/>
    </div>
  );
};

export default Header;
