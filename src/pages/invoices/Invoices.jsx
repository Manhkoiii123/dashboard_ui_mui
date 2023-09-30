import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/Header";
const Invoices = () => {
  return (
    <div>
      <Header subTitle={"Welcome to your invoices"} title={"Invoices"}></Header>
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </div>
  );
};

export default Invoices;
