import { Box } from "@mui/material";
import Line from "./Line";
import Header from "../../components/Header";

const LineChart = () => {
  return (
    <Box sx={{ height: "75vh" }}>
      <Header
        title="Line Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Line></Line>
    </Box>
  );
};

export default LineChart;
