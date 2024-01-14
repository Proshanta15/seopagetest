import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import axios from "axios";
import { FaClipboardList } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FiPaperclip } from "react-icons/fi";
import { IoLayers } from "react-icons/io5";
import { PiChatsCircle } from "react-icons/pi";
import image1 from "../assets/person-1.jpeg";
import image2 from "../assets/person-2.jpeg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CardChild = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState();
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      setUploadedFileURL(response.data.fileUrl);
    });
  }

  return (
    <>
      <div className="card_content">
        <div className="card_content_top">
          <div className="card_content_top_left">
            <img src={image1} alt="image-1" />
            <h6>Client Name</h6>
          </div>
          <div className="card_content_top_right">
            <img src={image2} alt="image-2" />
            <h6>Sadik Istiak</h6>
          </div>
        </div>
        <div className="card_content_mid">
          <div className="card_content_mid_left">
            <span className="card_content_mid_icon">
              <IoLayers />
            </span>
            <span className="card_content_mid_text">
              Lorem ipsum dolor sit amet. Lorem, ipsum.
            </span>
          </div>
          <div className="card_content_mid_right">
            <span className="card_content_mid_icon">
              <FaClipboardList />
            </span>
            <span
              className="card_content_mid_text"
              id="card_content_mid_text_right"
            >
              1/2
            </span>
          </div>
        </div>
        <div className="card_content_bottom">
          <span>
            <img src={image1} alt="image-1" />
          </span>
          <span>
            <img src={image2} alt="image-2" />
          </span>
          <span className="card_content_bottom_text">12+</span>
          <span>
            <PiChatsCircle />
            <span className="card_content_bottom_text">15</span>
          </span>
          <span>
            <FiPaperclip onClick={handleOpen} />{" "}
            <span className="card_content_bottom_text">25</span>
          </span>
          <span>
            <FaRegCalendarDays />
            <span className="card_content_bottom_text">30-12-2022</span>
          </span>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="App">
              <form onSubmit={handleSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange} />
                <button type="submit">Upload</button>
              </form>
              {uploadedFileURL && (
                <img src={uploadedFileURL} alt="Uploaded content" />
              )}
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CardChild;
