import { useState } from "react";
import "./App.css";
import { Chart as ChartJS } from "chart.js/auto";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";

// data
import { UserData } from "./Data/Data";
import PieChart from "./Components/PieChart";

function App() {
  const [GainData, setGainData] = useState({
    labels: UserData.map((user) => user.year), //labels is x-axis
    datasets: [
      {
        label: "Users gained",
        data: UserData.map((user) => user.userGain),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: ["black"],
        borderWidth: 2,
      },
    ],
  });
  const [LostData, setLostData] = useState({
    labels: UserData.map((user) => user.year), //labels is x-axis
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((user) => user.userLost),
        backgroundColor: ["purple", "green", "yellow", "red"],
        borderColor: ["black"],
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <BarChart chartData={GainData} />
      <BarChart chartData={LostData} />
      <LineChart chartData={GainData} />
      <LineChart chartData={LostData} />
      <PieChart chartData={GainData} />
      <PieChart chartData={LostData} />
    </div>
  );
}

export default App;
