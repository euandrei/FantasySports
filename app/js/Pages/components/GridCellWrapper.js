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

export default class GridCellWrapper extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false,
		}
		this.handleCellClick = this.handleCellClick.bind(this);
	}

	handleCellClick(){
		this.setState({
			active: !this.state.active
		})
	}
	render(){
		
		return(
			<View style={[gridStyle.wrapperContainer ]}>

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
								<TiltButton 
									text={"INFO"}
									borderColor={colors.sunnyYellow}
									backgroundColor={colors.sunnyYellowBg}
									onPress={()=>{}}
								/>
								<TiltButton 
									text={"USE"}
									borderColor={colors.neonBlue}
									backgroundColor={colors.neonBlueBg}
									onPress={()=>{}}
								/>
							</View>

						</TouchableOpacity>
					
				}

					
			</View>
				
		)
	}
}

