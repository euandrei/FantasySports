import React from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
} from 'react-native';

import { gridSectionStyle, colors } from "../styles";

/*

<GridSection
	title={"Title"}
	titlePosition={"center"}
	line

	withUnderText
>

*/

export default class GridSection extends React.Component {
	constructor(props){
		super(props);

		this._renderTitle = this._renderTitle.bind(this);
	}

	_renderTitle(){
		if(this.props.titlePosition === 'center'){
			return (
				<View style={gridSectionStyle.titleWrapper}>
					{this.props.line && <View style={gridSectionStyle.leftLine} />}
					<Text style={gridSectionStyle.titleText}>{this.props.title.toUpperCase()}</Text>
					{this.props.line && <View style={gridSectionStyle.rightLine} />}
				</View>
			)
		}
		else if(this.props.titlePosition === 'left'){
			return (
				<View style={gridSectionStyle.titleWrapperLeft}>
					<Text style={gridSectionStyle.titleText}>{this.props.title}</Text>
				</View>
			)
		}
	}
	render(){
		return(
			<View style={gridSectionStyle.container}>
				{ this.props.title && this._renderTitle() }

				{this.props.empty ? 
					<View style={gridSectionStyle.sectionEmpty}>
						{this.props.children}
					</View>
				:
					<View style={gridSectionStyle.sectionCells}>
						{this.props.children && this.props.children.length > 0 ? 

							this.props.children.map((item,key)=>{
								if(this.props.main && key == 0){
									return <View key={key} style={{width: '100%',alignItems: 'center',justifyContent: 'center'}}><View style={[gridSectionStyle.sectionCellWrapper, {height: this.props.withUnderText ? 156 : 140, marginBottom: this.props.withUnderText ? 31 : 10}]}>{item}</View></View>
								}
								else {
									return <View key={key} style={[gridSectionStyle.sectionCellWrapper, {height: this.props.withUnderText ? 156 : 140, marginBottom: this.props.withUnderText ? 31 : 10}]}>{item}</View>
								}
							})

						:''}
					</View>
				}
			</View>
		)
	}
}