import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    Dimensions
} from 'react-native';

import { colors } from "../styles";

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    // Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import {vw, vh, vmin, vmax} from 'react-native-viewport-units'

/*

DELETE -> react-native-viewport-units

AND MAKE OWN COMPONENT:

'use strict';

var React = require('react-native')
  , Dimensions = React.Dimensions
  , {width, height} = Dimensions.get('window');

var units = {
  vw: width/100
, vh: height/100
};

units.vmin = Math.min(units.vw, units.vh);
units.vmax = Math.max(units.vw, units.vh);

module.exports = units;

*/

var {width, height} = Dimensions.get('window');

export default class Parallelogram extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	getHeight(newWidth) {
		const original_width = 170.61;
		const original_height = 251;

		return (original_height / original_width) * newWidth
	}

	getWidth(newHeight) {
		const original_width = 170.61;
		const original_height = 251;

		return (original_width / original_height) * newHeight
	}

	render() {

		// const width = 100

		// const height = this.getHeight(width);

		// const height = 100;

		// const width = Math.round(this.getWidth(height))

		// const width = 170.61

		// const height = 251;

		// console.log(vw, vh, vmin, vmax);
		console.log(width, height)


		// 411.42857142857144 683.4285714285714

		// 411 683

		return (

				<View 
					style={{backgroundColor: 'red'}}
				>
					{/*
						<View style={{
							backgroundColor: 'pink',
							position: 'absolute',
							zIndex: 100,
							top: 20,
							left: 20

						}}>
							<Text style={{fontSize: 20}}>CONTENT BOX</Text>

						</View>
					*/}

					
					<Svg 
						// width={170.61} 
						// height={251} 
						// viewBox="0 0 170.61 251"
						// width={width / 3.5}
						width={400}
						height={50}
						// viewBox={`0 0 1000 ${300}`}
						viewBox={`0 0 ${411 * vw} ${50 * vh}`}
						// preserveAspectRatio="xMidYMid meet"
					>	

						<Defs>
					        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="300">
					            <Stop
					                offset="0%"
					                stopColor="blue"
					                stopOpacity="1"
					            />
					            <Stop
					                offset="100%"
					                stopColor="green"
					                stopOpacity="1"
					            />
					        </LinearGradient>
					    </Defs>

						{/*
							
							<Line
						        x1="160"
						        y1="50"
						        x2={160 + 700}
						        y2="50"
						        stroke="yellow"
						        strokeWidth="20"
						    />

						*/}

				  		<Path 
				  			x={0}
				  			// fill="rgb(0,0,255)"
							d="M170.11 250.5V.5h-4.31a73.7 73.7 0 0 0-62.19 34.22L7 186.91c-17.49 27.57 2.31 63.59 35 63.59z"
				  			strokeWidth="15"
					        stroke="rgb(0,0,0)"
					        fill="url(#grad)"
				  		/>

				  		<Rect
					        // x="25"
					        // y="5"

					        x={160}
					        width={700}
					        height={251}

					        // height={'100%'}

					        // fill="rgb(0,0,255)"
					        fill="url(#grad)"
					        strokeWidth="15"
					        stroke="rgb(0,0,0)"
					    />

					    <Path
					    	x={160 + 700}
				  			// fill="rgb(0,0,255)"
				  			fill="url(#grad)"
	  						d="M.5.5v250h4.31A73.7 73.7 0 0 0 67 216.28l96.6-152.19C181.09 36.52 161.29.5 128.63.5z" 
				  			strokeWidth="15"
					        stroke="rgb(0,0,0)"
				  		/>
				  		
					</Svg>
					
				</View>
		)
	}

}