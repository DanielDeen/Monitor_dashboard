import createG2 from 'g2-react';
import { Stat } from 'g2';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from './data.json'; 

const Line = createG2(chart => {
  chart.line().position('time*total').color('Request').shape('spline').size(2);
  chart.render();
});

class LineChart extends Component {

  	state = {
	    data: data,
	    width: 1200,
	    height: 250,
	    forceFit: true,
	    plotCfg: {
	    margin: [10, 100, 50, 50],
	    },
  	}

  	render() {
    	return (
      		<div>
		        <Line
		          data={this.state.data}
		          width={this.state.width}
		          height={this.state.height}
		          plotCfg={this.state.plotCfg}
		          forceFit={this.state.forceFit}
		        />
      		</div>
    	);
  	}
}

export default LineChart;