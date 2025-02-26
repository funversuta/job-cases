import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { useEffect, useState } from "react";
import modalData from "../../assets/MocDatas/modalData.json";
import CloseIcon from "@mui/icons-material/Close";
import "./ModalUi.scss";
interface BasicModal {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "#1d1d1d",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontSize: "2rem",
};

interface ModalData {
  id: string;
  title: string;
  description: string;
}

const BasicModal: React.FC<BasicModal> = ({ open, handleClose }) => {
  const modalText = useSelector((state: RootState) => state.modal.value);
  const [modaldata, setModaldata] = useState<ModalData | undefined | null>(null);

  useEffect(() => {
    if (modalText) {
      const findmodaldata = () => {
        const modaldata = modalData.find((p: { id: string }) => p.id === modalText);
        setModaldata(modaldata);
      };

      if (modalText) {
        findmodaldata();
      }
    }
  }, [modalText]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modaldata?.title}
            <CloseIcon
              onClick={() => {
                handleClose(true);
              }}
              className="closeIcon"
            />
          </Typography>
          <div
            id="modal-modal-description"
            dangerouslySetInnerHTML={{ __html: modaldata?.description ?? "" }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
