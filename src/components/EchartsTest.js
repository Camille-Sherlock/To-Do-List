import React, { Component } from "react";

import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

class EchartsTest extends Component {
  componentDidMount() {
    let myChart = echarts.init(document.getElementById("chart"));
    myChart.setOption({
      title: { text: "ECharts 入门示例" },
      tooltip: {},
      xAxis: {
        data: ["All", "Active", "Completed"],
      },
      yAxis: {},
      series: [
        {
          name: "任务完成情况",
          type: "bar",
          data: [5, 20, 36],
        },
      ],
    });
  }
  render() {
    return <div id="chart" style={{ width: 400, height: 400 }}></div>;
  }
}

export default EchartsTest;
