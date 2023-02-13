import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import LoginTab from "./components/LoginTab";
import RegisterTab from "./components/RegisterTab";

export default function Login() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Login" value="1" />
            <Tab label="Register" value="2" />            
          </TabList>
        </Box>
        <TabPanel value="1">
          <LoginTab />
        </TabPanel>
        <TabPanel value="2">
          <RegisterTab />
        </TabPanel>        
      </TabContext>
    </Box>
  );
}
