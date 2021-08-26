import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '10px',
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    background: "#11bf71",
    color: "#000",
    fontWeight: "700",

    transition: " all 1.2s ease-in-out",
    "&:hover": {
      transition: " 0.2s ease-in-out",
      color: "#000",
      fontWeight: "700",
    },
  },
  buttonClear: {
    background: "#000",
    color: "#11bf71",
    fontWeight: "700",

    transition: " all 1.2s ease-in-out",
    "&:hover": {
      transition: " 0.2s ease-in-out",
      color: "#000",
      fontWeight: "700",
    },
  },
}));
