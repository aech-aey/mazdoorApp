import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Sidebar from "./Sidebar";
import logo from "./logo.png";

import CloseIcon from "@mui/icons-material/Close";



const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "black",
}));

const RedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fa2828",
  "&:hover": {
    backgroundColor: "rgb(210, 37, 37)",
  },
  '@media (max-width: 600px)': {
    fontSize: '12px', // Adjust the font size as needed
  },
}));


const RightAlignedContent = styled("div")(({ theme }) => ({
  marginLeft: "auto",
}));



// Styling for the modal and its content
const ModalContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "90vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "black",
  border: "2px solid #000",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

const ModalTitle = styled("h2")(({ theme }) => ({
  color: "#fa2828",
  marginBottom: theme.spacing(3),
}));
const ModalContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: theme.spacing(2),
  overflowY: "auto",
  maxHeight: "60vh",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    gap: theme.spacing(2),
    fontSize: "14px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(3),
    height: "auto",
    maxHeight: "none",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(4),
    height: "auto",
    maxHeight: "none",
  },
}));

const CloseButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  color: "white",
  transition: "color 0.2s ease-in-out, transform 0.2s ease-in-out",
  "&:hover": {
    color: "#fa2828",
    transform: "scale(1.3)",
  },
}));
const IconButtons = styled(Button)(({ theme }) => ({

  color: "white",
  transition: "color 0.2s ease-in-out, transform 0.2s ease-in-out",
  "&:hover": {
    color: "#fa2828",
    transform: "scale(1.3)",
  },
}));




const DarkTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "48%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "48%",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiFormLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "#fa2828",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fa2828",
    },
  },
}));

const DarkInputLabel = styled(InputLabel)(({ theme }) => ({
  color: "white",

}));

const DarkFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",

  [theme.breakpoints.between("md", "lg")]: {
    width: "48%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "48%",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputBase-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "#fa2828",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fa2828",
    },
  },
}));

const DarkSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-root": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#fa2828",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fa2828",
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
}));
const DarkMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "#fa2828",
  },
  "&.Mui-selected": {
    backgroundColor: "#fa2828",
  },
}));
const DarkFileInputContainer = styled("label")(({ theme }) => ({
  backgroundColor: "#fa2828",
  color: "white",
  width: "90%",

  [theme.breakpoints.between("md", "lg")]: {
    width: "45%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "45%",
  },
  padding: "10px",
  border: "none",
  outline: "none",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#d11919",
  },
  "&:focus-within": {
    border: "1px solid #fa2828",
  },
}));
const DarkButtons = styled(Button)(({ theme }) => ({
  backgroundColor: "#fa2828",
  width: "80vw",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "rgb(210, 37, 37)",
  },
}));
const DarkFileInput = styled("input")({

});

const Navbar = ({ setRegistrations, jobRoles, handleFilterResult, registrations }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    payPerHour: "",
    location: "",
    jobRole: "",
    desc: "",
    exp: "",

    image: null
  });


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFormData({
      ...formData,
      image: imageUrl,
    });
  };

  const handleRegistration = () => {

    if (
      !formData.name ||
      !formData.phoneNumber ||
      !formData.payPerHour ||
      !formData.jobRole ||
      !formData.exp ||
      !formData.location ||
      !formData.desc ||
      !formData.education ||
      !formData.image
    ) {

      alert('please fill all the fields')
      return;
    }


    const newRegistration = {
      ...formData,
      jobRole: formData.jobRole.text,
    };
    setRegistrations([newRegistration, ...registrations]);
    localStorage.setItem("registrations", JSON.stringify([newRegistration, ...registrations]));




    setFormData({
      name: "",
      phoneNumber: "",
      payPerHour: "",
      location: "",
      jobRole: "",
      desc: "",
      exp: "",


      image: null,
    });

    setModalOpen(false);
    alert('You are successfully registered')

  };


  return (
    <>
      <div className="nav">



        <Box sx={{ flexGrow: 1 }}>
          <CustomAppBar position="static">
            <Toolbar>
              <IconButtons
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButtons>
              <div> <img className="logo" src={logo} alt="Logo" /></div>
              <RightAlignedContent>
                <RedButton variant="contained" onClick={openModal} >
                  Register as technician
                </RedButton>
              </RightAlignedContent>
            </Toolbar>
          </CustomAppBar>
        </Box>
        <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} jobRoles={jobRoles} handleFilterResult={handleFilterResult} />
      </div>

      <Modal
        open={modalOpen}
        onClose={closeModal}
        BackdropProps={{
          onClick: undefined, // Disable click event for the backdrop
        }}
      >

        <ModalContainer>
          <CloseButton onClick={closeModal}>
            <CloseIcon />
          </CloseButton>
          <ModalTitle>Register as Technician</ModalTitle>
          <ModalContent>
            <DarkTextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <PhoneInput
              id="phone"
              placeholder="Enter phone number"
              className="phone"
              value={formData.phoneNumber}
              onChange={(value) => setFormData({ ...formData, phoneNumber: value })}
            />
            <DarkTextField
              label="Hourly rate"
              variant="outlined"
              name="payPerHour"
              value={formData.payPerHour}
              onChange={handleInputChange}
              type="number"
            />
            <DarkTextField
              label="Education"
              variant="outlined"
              name="payPerHour"
              value={formData.education}
              onChange={handleInputChange}

            />
            <DarkFormControl>
              <DarkInputLabel>Job Category</DarkInputLabel>
              <DarkSelect
                name="jobCategory"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  formData.jobRole=""}}
                 
                  renderValue={(selected) => (
                    <span style={{ color: 'white' }}>{selected}</span>
                  )}
                >
                {jobRoles.map((category, index) => (
                  <DarkMenuItem key={index} value={category.category}>
                    {category.category}
                  </DarkMenuItem>
                ))}
              </DarkSelect>
            </DarkFormControl>

            <DarkFormControl>
              <DarkInputLabel>Job Role</DarkInputLabel>
              <DarkSelect
                name="jobRole"
                value={formData.jobRole}
                onChange={handleInputChange}
                disabled={!selectedCategory}
                renderValue={(selected) => (
                  <span style={{ color: 'white' }}>{selected}</span>
                )}
               
              >
                {selectedCategory &&
                  jobRoles
                    .find((category) => category.category === selectedCategory)
                    .roles.map((role, index) => (
                      <DarkMenuItem key={index} value={role.text}>
                        {role.text}
                      </DarkMenuItem>
                    ))}
              </DarkSelect>
            </DarkFormControl>


            <DarkTextField
              label="Experience in years"
              variant="outlined"
              name="exp"
              value={formData.exp}
              onChange={handleInputChange}
              type="number"
            />
            <DarkTextField
              label="Location"
              variant="outlined"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />


            <DarkTextField
              label="Short description about your work"
              variant="outlined"
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
            />
            <DarkFileInputContainer htmlFor="fileInput">
              Choose an image <div></div>
              <DarkFileInput
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
              />
            </DarkFileInputContainer>
            <DarkButtons variant="contained" onClick={handleRegistration}>
              Register as technician
            </DarkButtons>
          </ModalContent>
        </ModalContainer>
      </Modal>

    </>
  );
};

export default Navbar;