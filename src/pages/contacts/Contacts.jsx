import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/Header";
const Contacts = () => {
  return (
    <div>
      <Header subTitle={"Welcome to your contact"} title={"Contacts"}></Header>
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </div>
  );
};

export default Contacts;
