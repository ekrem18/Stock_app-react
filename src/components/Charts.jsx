import { Grid } from "@mui/material";
import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: item.createds,
    quantity: item.quantity,
    price: item.price_total,
  }));

  const purchasesData = sales?.map((item) => ({
    date: item.createds,
    quantity: item.quantity,
    price: item.price_total,
  }));
  // console.log(s);
  return (
    <Grid container justifyContent="center" spacing={3} mt={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <Title>Total Purchases</Title>
          <LineChart
            className="mt-6"
            data={purchasesData}
            index="date"
            categories={["quantity", "price"]}
            colors={["emerald", "gray"]}
            valueFormatter={dataFormatter}
          />
        </Card>
        </Grid>

        <Grid item xs={12} md={6}>
        <Card>
          <Title>Total Sales</Title>
          <LineChart
            className="mt-6"
            data={salesData}
            index="date"
            categories={["price"]}
            colors={["emerald", "gray"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Charts;
