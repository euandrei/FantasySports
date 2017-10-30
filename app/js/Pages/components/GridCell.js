import React from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import GridImage from './GridImage';
import { gridStyle, colors } from "../styles";

export default class GridCell extends React.Component {

	render(){

		
		return(
			<View style={gridStyle.container}>
				<LinearGradient colors={[colors.transparent, this.props.bgColor]} style={gridStyle.linearGradient}>
					<View style={gridStyle.grid}>
						<View style={gridStyle.titleWrapper}>
							{this.props.title && <Text style={gridStyle.titleText}>{this.props.title.toUpperCase()}</Text>}
						</View>

						<GridImage 
							type={this.props.type} 
							image={this.props.image}
						/>

					</View>
				</LinearGradient>
			</View>
		)
	}
}