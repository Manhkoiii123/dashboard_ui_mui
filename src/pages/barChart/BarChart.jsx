import Header from "../../components/Header";
import Bar from "./Bar";

const BarChart = () => {
  return (
    <>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar></Bar>
    </>
  );
};

export default BarChart;
