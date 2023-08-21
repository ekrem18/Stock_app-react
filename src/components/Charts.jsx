import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}`;

const Charts = () => {
  const{sales, purchases} = useSelector((state) => state.stock)
  
  const salesData = sales?.map((item)=> ({
    date: item.createds,
    quantity: item.quantity,
    price: item.price_total,
  }))

  const purchasesData = sales?.map((item)=> ({
    date: item.createds,
    quantity: item.quantity,
    price: item.price_total,
  }))
// console.log(s);
  return(
  <>
  <Card >
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

  <Card >
    <Title>Total Sales</Title>
    <LineChart
      className="mt-6"
      data={salesData}
      index="date"
      categories={["quantity", "price"]}
      colors={["emerald", "gray"]}
      valueFormatter={dataFormatter}
    
    />
  </Card>
  </>
  )
};

export default Charts