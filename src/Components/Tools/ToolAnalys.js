import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { Button } from 'react-bootstrap';
import './Tools.css';

export class ToolAnalys extends Component {

  render () {
    return (
      <div>
      <Button style={{backgroundColor: '#ff717b'}} onClick={this.props.expClick}> Витрати</Button>
      <Button style={{backgroundColor: '#acbf00'}} onClick={this.props.incomeClick}> Доходи</Button>
      <Button style={{backgroundColor: '#00a6a0'}} onClick={this.props.profitClick}> Прибуток</Button>
      <Button style={{backgroundColor: '#ecb05b'}} onClick={this.props.workClick}> Робочий час</Button>
      <Button style={{backgroundColor: '#ff717b'}}> Залишки на складі</Button>
      <Button style={{backgroundColor: '#acbf00'}}> Продажі</Button>
      <Button style={{backgroundColor: '#00a6a0'}}> Магазин</Button>
      <Button style={{backgroundColor: '#ecb05b'}}> Податки</Button>
        <div className="row">
          <div className="mixed-chart chart-centered">
            <Chart
              style={{display: this.props.chart1.display}}
              options={this.props.chart1.options}
              series={this.props.chart1.series}
              type={this.props.chart1.type}
              width={this.props.chart1.width}
            />
          </div>
          <div className="mixed-chart chart-centered">
            <Chart
              style={{display: this.props.chart2.display}}
              options={this.props.chart2.options}
              series={this.props.chart2.series}
              type={this.props.chart2.type}
              width={this.props.chart2.width}              
            />
          </div>
          <div className="mixed-chart chart-centered">
            <Chart
              style={{display: this.props.chart3.display}}
              options={this.props.chart3.options}
              series={this.props.chart3.series}
              type={this.props.chart3.type}
              width={this.props.chart3.width}              
            />
          </div>
        </div>
      </div>
    )
  }
}