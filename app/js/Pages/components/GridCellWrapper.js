import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import GridCell from "./GridCell.js"
import TiltButton from "./TiltButton.js"
import { gridStyle, colors } from "../styles"
import {BoxShadow} from 'react-native-shadow'
import {Actions} from 'react-native-router-flux';
export default class GridCellWrapper extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false,
		}
		this.handleCellClick = this.handleCellClick.bind(this);
	}

	handleCellClick(){
		if(this.props.tutorial && (this.props.overPlayer || this.props.overBuff || this.props.overNerf)){
			console.log("this.props.tutorial",this.props.tutorial)
			Actions[this.props.tutorial]();
		}
		// TODO HANDLE IF THE CARD IS EMPTY
		if(this.props.image){
			this.setState({
				active: !this.state.active
			})
		}
	}
	render(){
		return(
			<View style={[gridStyle.wrapperContainer ]}>
				{this.props.tutorial && (this.props.overPlayer || this.props.overBuff || this.props.overNerf) && <View style={{height:30,width:30,position:'absolute',top:-10,right:0,borderRadius:20,backgroundColor:'rgba(255,244,33,.5)'}}/>}
				<TouchableOpacity style={[gridStyle.topPart, this.state.active ? gridStyle.gridActive : '']} onPress={this.handleCellClick}>
					<GridCell
						bgColor={this.props.bgColor ? this.props.bgColor : null}
						title={this.props.title ? this.props.title : null}
						image={this.props.image ? this.props.image : null}
						type={this.props.type ? this.props.type : null}
					/>
					{this.props.updateText && 
						<View style={gridStyle.wrapper}> 
							<Text style={gridStyle.wrapperText}>{this.props.updateText}</Text>
						</View>
					}
				</TouchableOpacity>

				{this.props.underText && 
					<View style={gridStyle.under}>
						{this.props.underIcon ? <Image style={{width: 16, height: 16}} source={this.props.underIcon} resizeMode='contain' /> : <Text style={gridStyle.underText}>$</Text>}
						<Text style={gridStyle.underText}>{this.props.underText}</Text>
					</View>
				}

				{this.state.active &&  
					
						<TouchableOpacity style={gridStyle.dropdownWrapper} onPress={()=>{this.setState({active: !this.state.active})}}>

							<View style={gridStyle.dropdownBackground}>
								<GridCell
									bgColor={this.props.bgColor ? this.props.bgColor : null}
									title={this.props.title ? this.props.title : null}
									image={this.props.image ? this.props.image : null}
									type={this.props.type ? this.props.type : null}
								/>
								<View style={{flex: 0.55, height: 50}}>
									<View style={{flex: 1, marginBottom: 10}}>
										<TiltButton 
											text={"INFO"}
											borderColor={colors.sunnyYellow}
											backgroundColor={colors.sunnyYellowBg}
											onPress={()=>{}}
										/>
									</View>
									<View style={{flex: 1}}>
										<TiltButton 
											text={"USE"}
											borderColor={colors.neonBlue}
											backgroundColor={colors.neonBlueBg}
											onPress={()=>{}}
										/>
									</View>
								</View>
							</View>

						</TouchableOpacity>
					
				}

					
			</View>
				
		)
	}
}

