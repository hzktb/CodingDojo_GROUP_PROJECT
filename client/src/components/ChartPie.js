import React from 'react'
import { Pie } from 'react-chartjs-2'

const ChartPie = () => {

    const data = {
        labels: [
            'Total Calories',
            'Fat',
            'Protein',
            'Carb',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [200, 70, 100,150],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(50,205,50)',
                'rgb(255, 205, 86)'

            ],
            hoverOffset: 4
        }]
    };
    return (
        <>
            <Pie data={data}/>
        </>
    )
}

export default ChartPie