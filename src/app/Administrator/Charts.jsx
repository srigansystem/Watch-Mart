import React from "react";

// Line chart component
export const LineChart = ({ data }) => {
  return (
    <div className="chart-container line-chart">
      <h4>Revenue Over Time</h4>
      <div className="line-chart-plot">
        {data.map((point, idx) => (
          <div
            key={idx}
            className="chart-point"
            style={{ height: `${point.revenue / 1000}%` }}
          />
        ))}
      </div>
    </div>
  );
};

// Pie chart component
export const PieChart = ({ data }) => {
  const total = data.paid + data.unpaid + data.shipped;
  return (
    <div className="chart-container pie-chart">
      <h4>Order Status Distribution</h4>
      <div className="pie-chart-plot">
        <div
          className="pie-slice paid"
          style={{ flex: data.paid / total }}
        >
          Paid ({data.paid})
        </div>
        <div
          className="pie-slice unpaid"
          style={{ flex: data.unpaid / total }}
        >
          Unpaid ({data.unpaid})
        </div>
        <div
          className="pie-slice shipped"
          style={{ flex: data.shipped / total }}
        >
          Shipped ({data.shipped})
        </div>
      </div>
    </div>
  );
};
