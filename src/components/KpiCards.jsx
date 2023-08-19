import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { deepPurple, pink, amber } from "@mui/material/colors";

import { Avatar, Grid, Paper } from "@mui/material";

const KpiCards = () => {
  const cardData = [
    {
      id: 1,
      icon: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
      bgColor: deepPurple[100],
      color: deepPurple[700],
      title: "Profit",
      value: "$48000",
    },

    {
      id: 2,
      icon: <ShoppingCartIcon sx={{ fontSize: "2rem" }} />,
      bgColor: pink[100],
      color: pink[700],
      title: "profit",
      value: "$48000",
    },

    {
      id: 3,
      icon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
      bgColor: amber[100],
      color: amber[700],
      title: "Sales",
      value: "$48000",
      width: "70px",
      height: "70px",
    },
  ];
  return (
    <div>
      <Grid container>
        {cardData.map((item) => (
          <Grid item>
            <Paper>
              <Avatar sx={{ bgcolor: item.bgColor, color: item.color }}>
                {item.icon}
              </Avatar>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default KpiCards;
