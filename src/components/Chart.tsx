import React from "react";
import { Pie } from "react-chartjs-2";

interface Props {
    chartData: string
    title: string
    chartType: string
}

export default (props:any) => {
  return (
    <div>
      {props.chartType === "Pie" && (
        <Pie
          data={props.chartData}
          options={{
            title: {
              display: true,
              text: props.title,
              fontSize: 25,
            },
            responsive: false,
            maintainAspectRatio: false,
            legend: {
              position: "bottom",
              labels: {
                boxWidth: 50,
                fontSize: 20,
              },
            },
          }}
          width={500}
          height={500}
        />
      )}
    </div>
  );
};
