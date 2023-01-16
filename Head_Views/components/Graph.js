import { useState, useEffect } from "react";
import axios from 'axios';
import { Chart } from 'primereact/chart';

export function Graph() {

    const [graphsData, setGraphsData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/head/graph")
          .then(response => {
            let data = [];
            for(let i = 0; i < response.data.length; ++i) {
              let course = response.data[i];
              let assessmentsNumbers = [];
              let max = course.assignments.length > course.quizzes.length ? course.assignments.length : course.quizzes.length;
              for (let i = 1; i <= max; ++i) {
                assessmentsNumbers.push(`Assessment # ${i}`);
              }
              data.push({
                courseName: course.courseName,
                totalStudents: course.students,
                labels: assessmentsNumbers,
                datasets: [
                  {
                    label: "Quiz",
                    backgroundColor: "#42A5F5",
                    data: course.quizzes.map(quiz => quiz.studentsPassed)
                  },
                  {
                    label: "Assignment",
                    backgroundColor: "#FFA726",
                    data: course.assignments.map(assignment => assignment.studentsPassed)
                  }
                ]
              });
            }
            setGraphsData(data);
          })
          .catch(err => console.error(err));
      }, []);

    const getLightTheme = () => {
        return {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
    }

    const basicOptions = getLightTheme();

    return (
        <div className="grid">
            {graphsData.map((graphData, index) => {
                return (
                <div key={`graph-${index}`} className='card col-4'>
                    <h5>{graphData.courseName}</h5>
                    <Chart type="bar" data={graphData} options={basicOptions} />
                </div>
                );
            })}
        </div>
    );
}