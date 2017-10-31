import React from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
} from 'react-native';

import { gridSectionStyle, colors } from "../styles";

export default class GridSection extends React.Component {
	constructor(props){
		super(props);

		this._renderTitle = this._renderTitle.bind(this);
	}

	_renderTitle(){
		console.log("YO BOYYY",this.props)
		if(this.props.titlePosition === 'center'){
			return (
				<View style={gridSectionStyle.titleWrapper}>
					{this.props.lines && <View style={gridSectionStyle.leftLine} />}
					<Text style={gridSectionStyle.titleText}>{this.props.title}</Text>
					{this.props.lines && <View style={gridSectionStyle.rightLine} />}
				</View>
			)
		}
		else if(this.props.titlePosition === 'left'){
			console.log("well fk ",this.props.titlePosition)
			return (
				<View style={gridSectionStyle.titleWrapperLeft}>
					<Text style={gridSectionStyle.titleText}>{this.props.title}</Text>
				</View>
			)
		}
	}
	render(){
		console.log("this.props.children",this.props.children)
		return(
			<View style={gridSectionStyle.container}>
				{ this.props.title && this._renderTitle() }

				{this.props.empty ? 
					<View style={gridSectionStyle.sectoinEmpty}>
						{this.props.children}
					</View>
				:
					<View style={gridSectionStyle.sectionCells}>
						{this.props.children && this.props.children.length > 0 ? 

							this.props.children.map((item,key)=>{
								return <View key={key} style={gridSectionStyle.sectionCellWrapper}>{item}</View>
							})

						:''}
					</View>
				}
			</View>
		)
	}
}