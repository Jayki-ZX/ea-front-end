import React, { useState} from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

import '../style-sheets/SOCviewComponent.css';

/*
const series = [{ soc }];
    const options = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
            borderRadius: 4,
            horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['SOC'],
        }
    };
*/
export interface Props {
    soc: number;
}

const BarSOC: React.FC<Props> = props => {
    const series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined = [{ data: [props.soc] }];
    const options: ApexOptions | undefined = {
        chart: {
            toolbar: {
                show: false
            },
            selection: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                dataLabels: {
                    position: 'bottom',
                }
            }
        },
        colors: ["#00FF00"],
        dataLabels: {
            enabled: true,
            offsetX: 610,
            formatter: function(val, opts) {
                return `${val} %`
            }
        },
        labels: ["SOC"],
        xaxis: {
            labels: {
                show: false,
            }
        },
        yaxis: {
            min: 0,
            max: 100,
            show: false,
            axisBorder: {
                show: false
            }
        },
        tooltip: {
            enabled: false
        },
        grid: {
            show: false
        }
    };
    return (
        <div className="SOC_barChart_container">
            <ReactApexChart options={options} series={series} type="bar" height={100} width={1220}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" fill="#ffffff" className="bi bi-battery" viewBox="0 0 16 16">
                <path d="M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
            </svg>
        </div>

    );
};

export default BarSOC;