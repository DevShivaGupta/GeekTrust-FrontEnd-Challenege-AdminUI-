import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import DeleteIcon from "@mui/icons-material/Delete";

const TableToolbar = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { SelectedIds, setRows, rows, SetsearchList, setSelected } = props;
  const numSelected = SelectedIds.length;

  const multipledeleteHandler = (SelectedIds, rows) => {
    const newList = rows.filter(function (obj) {
      return SelectedIds.indexOf(obj.id) === -1;
    });
    console.log(newList);
    setRows(newList);
    SetsearchList(newList);
    setSelected([]);
    enqueueSnackbar(`Deleted ${numSelected} rows from table`, {
      variant: "success",
      autoHideDuration: 2000,
    });
  };

  return (
    numSelected > 0 && (
      <Button
        sx={{marginLeft:"0.5rem"}}
        variant="contained"
        endIcon={<DeleteIcon />}
        onClick={() => multipledeleteHandler(SelectedIds, rows)}
      >
        {numSelected} selected
      </Button>
    )
  );
};
export default TableToolbar;
