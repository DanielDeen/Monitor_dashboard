import React from 'react';
import moment from 'moment';
import { Motion,spring } from 'react-motion';
import dimensions from 'react-dimensions';

import pureRender from 'pure-render-decorator';
import style from './timeline.less';
import Immutable from 'seamless-immutable';
import { Tooltip } from 'antd';

const Event = ({index,selectedIndex,distance,width=12,height=0,onClick,event : {time,status,content}}) =>{
	let className = status;
	let dotType = 'future';
	if(index < selectedIndex) {
		dotType = 'past';
	}else if (index === selectedIndex) {
		dotType = 'current';
	}else {
		className = '';
	}

	function buildReact(count) {
		let tip = "当前异常服务数" + count;
		if(count > 10){
			count = 10;
		}
		let top = 0;
		let height = 0;

		if(count === 0)
			return;

		height = 10 * count;

		if(count === 1){
			top = -17;
		} else if (count === 2) {
			top = -25;
		} else if (count === 3) {
			top = -35;
		} else if (count === 4) {
			top = -45;
		} else if (count === 5) {
			top = -55;
		} else if (count === 6) {
			top = -65;
		} else if (count === 7) {
			top = -75;
		} else if (count === 8) {
			top = -85;
		} else if (count === 9) {
			top = -95;
		} else if (count === 10) {
			top = -105;
		}

		return <Tooltip placement="bottom" title="tip">
					<div className = "event-content-red"
						style={{top:` ${top}px`,height : `${height}px`}}></div>
				</Tooltip>
	}

	let left = distance;
	return (
		<li className={dotType} style = {{left : `${left}px`,height : `${height}px`}}
			onClick = { ()=>{onClick(time,index);}}>
			<a className={className} onClick = {()=>{onClick(time,index);}}>
			</a>
			<label>{label}</label>
		</li>
		);
};


const EventLine = ({left,width}) =>{
	<Motion style = {{
		_width: spring(width),
		_left: spring(left),
	}}>{({_width,_left}) => 
		<span
			aria-hidden='true'
			className='event-line'
			style={{
				width: `${_width}px`,
				left: `${_left}px`
			}}
			/>
	}</Motion>
};


const EventBar = ({barWidth,distances,events,selectedIndex,onTimeClick,eventWidth}) => {
	let eventLineWidth = distances[selectedIndex];
	return (
		<div className="event" style={{ width: `${barWidth}px`,transform: 'translateX(0px)'}}>
			<ol>
				{events.map((event,index) =>
					<Event
						key = {index}
						distance = {distances[index]}
						event = {event} 
						index = {index}
						onClick = {onTimeClick}
						selectedIndex = {selectedIndex}
						width = {eventWidth}
					/>
				)}
			</ol>
			<EventLine left={0} width={eventLineWidth}/>
		</div>
	);
};

const TimelineNav = (props) =>{
	let {position,maxPosition,onPreClick,onNextClick} = props;
	const preEnabled = Math.round(position) < 0;
	const nextEnabled = Math.round(position) > Math.round(maxPosition);

	const preClass = preEnabled ? '' : 'disabled';
	const nextClass = nextEnabled ? '' : 'disabled';

	return (
		<ul className = "timeline-navigation">
			<li><a href="javascript:;" className={`prev ${preClass}`} onClick={onPreClick}>
				<span className={preClass}>&lt;</span>
				</a></li>
			<li>
				<a href="javascript:;" className={`next ${nextClass}`} onClick={onNextClick}>
					<span className={nextClass}>&lt;</span>
				</a>
			</li>
		</ul>
	);
}

@pureRender
class HorizontalTimeline extends React.Component {
	constructor(props) {
		super(props);

		let {events} = props;
	}

	onTimeClick = (time , selectedIndex) => {
		if(this.props.onTimeClick) {
			this.props.onTimeClick(time,selectedIndex);
		}
	}

	render() {
		let { events,containerWidth,onPreTimeClick,onNextTimeClick} = this.props;
		let {selectedIndex} = this.props;

		let eventCount = events.length;

		let navWidth = 40;
		let startPadding = 60;
		let endPadding = 60;

		let eventWidth = (containerWidth - 2 * navWidth - startPadding - endPadding) / eventCount;
		let eventOutterWidth = eventWidth;
		let totalDistance = startPadding + eventWidth * events.length;

		let distances = [];
		for (let index in events) {
			let event = event[index];
			distances[index] = startPadding + eventOutterWidth * Number.parseInt(index);
		}
		let position = distances[selectedIndex];
		let maxPosition = totalDistance;

		let barWidth = containerWidth - 2 * navWidth;

		return <div className = "timeline">
			<div className = "events-wrapper">
				<EventBar barWidth={barWidth} distances={distances} events={events} selectedIndex={selectedIndex}
							onTimeClick={this.onTimeClick} eventWidth={eventWidth}/>
			</div>
			<TimelineNav position={position} maxPosition={maxPosition} onPreClick={onPreTimeClick}
							onNextClick={onNextTimeClick}/>
		</div>
	}
}

export default dimensions({elementResize: true})(HorizontalTimeline);




