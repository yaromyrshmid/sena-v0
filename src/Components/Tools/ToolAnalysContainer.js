import React, { Component } from 'react';
import {ToolAnalys} from './ToolAnalys';

export class ToolAnalysContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart1: {
        display: "none",
        options: {},
        series: [],
        type: "bar",
        width: "700"
      },
      chart2: {
        display: "none",
        options: {},
        series: [],
        type: 'donut',
        width: "500",        
      },
      chart3: {
        display: "none",
        options: {},
        series: [],
        type: 'line',
        width: "500",        
      }
    };
  }

  handleExpClick = () => {
    const chart1 = {
      display: "block",
      options: {
        title: {
          text: 'Витрати, грн.',
          offsetY: 30,
          align: 'center',
          style: {
            fontSize:  '2rem'
          },
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -10000,
                to: 10000,
                color: '#e1131d'
             }]
            }
          }
        },
        colors: ['#e1131d'],
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']
        }
      },
      series: [
        {
          name: "Витрати, грн.",
          data: [1000, 4000, 5000, 0, 5000, 0, 5000, 3000, 0, 0, 0, 0]
        }
      ],
      type: "bar",
      width: "700"
    }
    const chart2 = {
      display: "block",
      options: {
        title: {
          text: 'Структура витрат за категоріями, грн.',
          offsetY: 30,
          align: 'center',
          margin: 10,
          style: {
            fontSize:  '1.5rem'
          },
        },
        colors: ['#e1131d', '#ff717b', '#ecb05b', '#acbf00', '#00a6a0'],
        chart: {
          id: "basic-bar"
        },
        labels: ['Товар', 'Супутній товар', 'Упаковка', 'Маркетинг'],
        legend: {
          position: 'bottom'
        }
      },
      series: [55000, 5000, 5000, 7000],
      type: "donut",
      width: "500",
    }

    const chart3 = {
      display: "none"
    }

    this.setState({chart1: chart1});
    this.setState({chart2: chart2});
    this.setState({chart3: chart3});
  }

  handleIncomeClick = () => {
    const chart1 = {
      display: "block",
      options: {
        title: {
          text: 'Доходи, грн.',
          offsetY: 30,
          align: 'center',
          style: {
            fontSize:  '2rem'
          },
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -10000,
                to: 10000,
                color: '#acbf00'
             }]
            }
          }
        },
        colors: ['#acbf00'],
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']
        }
      },
      series: [
        {
          name: "Доходи, грн.",
          data: [0, 0, 8000, 4000, 8000, 4000, 10000, 12000, 0, 0, 0, 0]
        }
      ],
      type: "bar",
      width: "700"
    }
  
    const chart2 = {
      display: "block",
      options: {
        title: {
          text: 'Доходи від продажу, грн.',
          offsetY: 30,
          align: 'center',
          margin: 10,
          style: {
            fontSize:  '1.5rem'
          },
        },
        colors: ['#00a6a0', '#acbf00', '#ecb05b', '#ff717b', '#e1131d'],
        chart: {
          id: "basic-bar"
        },
        labels: ['Піжама з єдинорогом', 'Піжама з котом', 'Наліпки з єдинорогом', 'Наліпки з котом'],
        legend: {
          position: 'bottom'
        }
      },
      series: [12000, 7000, 600, 600],
      type: "donut",
      width: "500",
    }

    const chart3 = {
      display: "none"
    }

    this.setState({chart1: chart1});
    this.setState({chart2: chart2});
    this.setState({chart3: chart3});
  }

  handleProfitClick = () => {
    const chart1 = {
      display: "block",
      options: {
        title: {
          text: 'Прибуток, грн.',
          offsetY: 30,
          align: 'center',
          style: {
            fontSize:  '2rem'
          },
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -10000,
                to: 0,
                color: '#e1131d'
              }, {
                from: 0,
                to: 10000,
                color: '#acbf00'
              }]
            }
          }
        },
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']
        },
      },
      series: [
        {
          name: "Прибуток, грн.",
          data: [-1000, -4000, 3000, 6000, 5000, 4000, 4000, 3000, 0, 0, 0, 0]
        }
      ],
      type: "bar",
      width: "700"
    }

    const chart2 = {
      display: "none"
    }

    const chart3 = {
      display: "block",
      type: "line",
      options: {
        title: {
          text: 'Повернення вкладених коштів, грн.',
          offsetY: 30,
          align: 'center',
          margin: 10,
          style: {
            fontSize:  '1.5rem'
          },
        },
        colors: ['#00a6a0'],
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']
        },        
        legend: {
          position: 'bottom'
        }
      },
      series: [{
        name: "Desktops",
        data: [-1000, -5000, -2000, 2000, 5000, 9000, 14000, 23000]
      }],
      width: "700",
    }
    this.setState({chart1: chart1});
    this.setState({chart2: chart2});
    this.setState({chart3: chart3});
    }

    handleWorkClick = () => {
      const chart1 = {
        display: "block",
        options: {
          chart: {
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },          
          title: {
            text: 'Затрати часу, год.',
            offsetY: 30,
            align: 'center',
            margin: 10,
            style: {
              fontSize:  '1.5rem'
            },
          },
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            opposite: true
          },
          legend: {
            horizontalAlign: 'left'
          }
        },
        series: [{
          name: "STOCK ABC",
          data: [
            [1486684800000, 6], 
            [1486771200000, 0], 
            [1486857600000, 2], 
            [1486944000000, 4], 
            [1487030400000, 3], 
            [1487116800000, 2]
          ]
        }],
        type: "area",
        width: "700"
      }
  
      const chart2 = {
        display: "none"
      }
  
      const chart3 = {
        display: "block",
        type: "line",
        options: {
          title: {
            text: 'Повернення вкладених коштів, грн.',
            offsetY: 30,
            align: 'center',
            margin: 10,
            style: {
              fontSize:  '1.5rem'
            },
          },
          colors: ['#00a6a0'],
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']
          },        
          legend: {
            position: 'bottom'
          }
        },
        series: [{
          name: "Desktops",
          data: [-1000, -5000, -2000, 2000, 5000, 9000, 14000, 23000]
        }],
        width: "500",
      }
      this.setState({chart1: chart1});
      this.setState({chart2: chart2});
      this.setState({chart3: chart3});
      }

  render() {
    return (
      <ToolAnalys 
      chart1={this.state.chart1}
      chart2={this.state.chart2}
      chart3={this.state.chart3}
      expClick={this.handleExpClick}
      incomeClick={this.handleIncomeClick}
      profitClick={this.handleProfitClick}
      workClick={this.handleWorkClick}
      />
    );
  }
}