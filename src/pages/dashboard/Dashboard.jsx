import { Box, Button } from "@mui/material";
import Row1 from "./Row1";
import { DownloadOutlined } from "@mui/icons-material";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Header
        subTitle={"Welcome to your dashboard"}
        title={"DASHBOARD"}
      ></Header>
      <Box sx={{ textAlign: "right", marginBottom: "20px" }}>
        <Button
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined></DownloadOutlined>
          Download Reports
        </Button>
      </Box>
      <Row1></Row1>
      <Row2></Row2>
      <Row3></Row3>
    </div>
  );
};

export default Dashboard;
