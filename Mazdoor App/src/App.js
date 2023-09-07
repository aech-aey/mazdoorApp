import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Technician from "./components/Technician";
import TechnicianData from "./components/TechnicianData";
import "./App.css";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import BuildIcon from "@mui/icons-material/Build";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import TechnicianDetails from "./components/TechnicianDetails";
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import EngineeringIcon from '@mui/icons-material/Engineering';

const App = () => {
  const [registrations, setRegistrations] = useState(Technician);

  useEffect(() => {
    const storedRegistrations = localStorage.getItem("registrations");

    if (storedRegistrations) {
      setRegistrations(JSON.parse(storedRegistrations));
    }
  }, []);

  const jobRoles = [
    {
      category: "Home Service",
      roles: [
        { text: "Plumber", icon: <PlumbingIcon /> },
        { text: "Ac Technician", icon: <AcUnitIcon /> },
        { text: "Electrician", icon: <ElectricBoltIcon /> },
        { text: "Carpenter", icon: <CarpenterIcon /> },
        { text: "House Cleaning", icon: <CleaningServicesIcon /> },
      ],
    },
    {
      category: "Car Service",
      roles: [
        { text: "Car Repair", icon: <CarRepairIcon /> },
        { text: "Tire Repair", icon: <TireRepairIcon /> },
        { text: "Dent and Paint Work", icon: <FormatPaintIcon /> },
        { text: "Engine Work", icon: <EngineeringIcon /> },
        { text: "Electrical Work", icon: <ElectricCarIcon /> },
      ],
    },
    {
      category: "Bike Service",
      roles: [
        { text: "Bike Repair", icon: <BuildIcon /> },
      ],
    },
  ];
  const handleFilterResult = (selectedJobRole) => {
    if (selectedJobRole === "All") {
      setRegistrations(Technician);
    } else {
      const filteredRegistrations = Technician.filter(
        (technician) => technician.jobRole === selectedJobRole
      );
      setRegistrations(filteredRegistrations);
    }
  };

  return (
    <Router>
    <div className="App">
      <Navbar
        jobRoles={jobRoles}
        handleFilterResult={handleFilterResult}
        setRegistrations={setRegistrations}
        registrations={registrations}
      />
      <Routes>
        <Route
          path="/"
          element={<TechnicianData registrations={registrations} />}
        />
        <Route
          path="/technician/:index"
          element={<TechnicianDetails registrations={registrations} />}
        />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
