import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Grid
} from "@devexpress/dx-react-chart-material-ui";

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ value: Math.sin(i) / i, argument: i });
  }

  return data;
};

export default class Diagramm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: generateData(2.5, 12, 0.5)
    };
  }
  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Chart data={data} width={650} height={500}>
          <ArgumentAxis name="argument" />
          <ValueAxis />

          <Grid name="argument" />
          <Grid />

          <SplineSeries
            name="sin"
            valueField="value"
            argumentField="argument"
          />
        </Chart>
      </Paper>
    );
  }
}

