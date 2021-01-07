import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import Chart from "../components/Chart";
import { Person } from "../interfaces/Person";
import { selectModeState } from "../redux/mode";
import { selectPeople } from "../redux/people";
import { RootState } from "../redux/store";

const Results: React.FC = () => {
        
    const [peopleChartData, setPeopleChartData] = useState<Person[]>([]);

    const AssignDataPoint =(namesList: Person[])=> {
        var dataArr:any = [];
        namesList.forEach((person) => {
        dataArr.push({
            name: person.name,
            time: person.time,
            color: person.color,
        });
        });
        setPeopleChartData(dataArr)
    }

    const renderChart =()=> {
        var dataArr:any = [];
        var labelArr:any = [];
        var colorArr:any = [];
        peopleChartData.forEach((person) => {
        if (person.time > 0) {
            dataArr.push(person.time);
            labelArr.push(person.name);
            colorArr.push(person.color);
        }
        });
        return (
        <Chart
            chartData={{
            labels: labelArr,
            datasets: [
                {
                data: dataArr,
                backgroundColor: colorArr,
                },
            ],
            }}
            title="Talk Times"
            chartType="Pie"
        />
        );
    }
    
    const namesList = useSelector(selectPeople);
    const mode = useSelector(selectModeState);
    useEffect(() => {
        AssignDataPoint(namesList)
    }, [namesList, mode]);

    
    return (
      <div>
        {/* <h4 style={{marginBottom:0}}>Talk Times</h4> */}
        {peopleChartData && renderChart()}
      </div>
    );
}
export default Results;
