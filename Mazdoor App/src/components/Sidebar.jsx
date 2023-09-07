import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";


export default function Sidebar({ isOpen, onClose, jobRoles, handleFilterResult }) {
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    onClose();
  };

  const list = (
    <Box
      sx={{ width: 250 ,height: "100%", backgroundColor: "black",  color: "white"}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
     <h3 className="service">What service do you want?</h3>
      <Divider sx={{ backgroundColor: "#fa2828"}}/>
      <List>
  {jobRoles.map((categoryData, index) => (
    <div key={index}>
      <ListSubheader  sx={{ backgroundColor: "#fa2828", fontWeight:"800", color:"black"}}>{categoryData.category}</ListSubheader>
      {categoryData.roles.map((role, roleIndex) => (
        <ListItem key={roleIndex} disablePadding onClick={() => handleFilterResult(role.text)}>
          <ListItemButton sx={{ "&:hover": { backgroundColor: "#fa2828" } }}>
            <ListItemIcon sx={{ color: "inherit" }}>{role.icon}</ListItemIcon>
            <ListItemText primary={role.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  ))}
</List>


    </Box>
 
  );
  console.log(jobRoles)
  return (
    <div>
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        {list}
      </Drawer>
    </div>
  );
}