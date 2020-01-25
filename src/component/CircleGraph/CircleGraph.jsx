import React from "react";
import { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#0c223f"];

export default class CircleGraph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/3Leoa7f4/";

  render() {
    return (
      <PieChart
        width={this.props.width}
        height={this.props.height}
        onMouseEnter={this.onPieEnter}
      >
        <Pie
          data={data}
          cx={this.props.cx}
          cy={this.props.cy}
          innerRadius={this.props.innerRadius}
          outerRadius={this.props.outerRadius}
          fill="#0c223f"
          paddingAngle={0}
          dataKey="value"
          startAngle={90}
          endAngle={this.props.endAngle}
          animationDuration={1000}
          isAnimationActive={this.props.isAnimationActive}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
