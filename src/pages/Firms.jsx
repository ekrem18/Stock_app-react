import { useEffect,useState  } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/FirmCard"
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo({ name: "", phone: "", address: "", image: "" })
  }


  useEffect(() => {
    // getFirms()
    getStockData("firms");
  }, []);

  console.log(firms);
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>NEW FIRM</Button>

      <FirmModal open={open} handleClose={handleClose}/>

      <Grid container justifyContent={"center"} spacing={2}>
        {firms?.map((firm) => (
          <Grid item key={firm.id} >
            <FirmCard firm={firm} handleOpen={handleOpen}/>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
};

export default Firms;
