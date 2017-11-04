import React from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { colors, listItemStyle } from "../styles";


/*

TODO clean up styling

------

props list:

listItemNumber={1}

backgroundColor={'yellow'}
border={true}

disabled

image={{uri: 'http://via.placeholder.com/30x30'}}

leftText={"FREE PACK"}
leftTextBright

rightText={"4h 38mins..."}
rightSmallText={"SMALL"}
rightSmallText2={"SMALL2"}

gradient={true}

onPress={()=>{}}

------

*/

export default class ListItem extends React.Component{ 

	constructor(props){
		super(props);	
	}

	render(){
		return (
			<View style={{flexDirection: 'row'}}>
				{this.props.listItemNumber && (
					<View
						style={{
							backgroundColor: colors.marineBg,
							width: 44,
							height: 44,
							borderRadius: 44/2,
						    justifyContent: 'center',
						    alignItems: 'center',
						    marginRight: 16
						}}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'bold',
								color: colors.white
							}}
						>
							{this.props.listItemNumber}
						</Text>
					</View>
				)}

				<View style={listItemStyle.freePackWrapper}>

					<View 
						style={[
							listItemStyle.tiltButtonWrapper,
							{backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : colors.marineBg}
						]}
					>
						<LinearGradient
							colors={[colors.transparent, this.props.gradient ? colors.neonBlueBg : colors.transparent]}
							style={listItemStyle.gradient}
						>
							<TouchableOpacity 
								onPress={()=>{this.props.onPress()}} 
								style={[listItemStyle.button, {borderColor: this.props.border ? colors.neonBlueBg : colors.transparent}]}
							>
								<Image 
									source={this.props.image}
									style={{
										width: 32,
										height: 32,
										marginLeft: 8,
										marginRight: 8
									}}
								/>

								<View 
									style={[listItemStyle.freePackTextWrapper,{paddingLeft: this.props.image ? 0 : 20}]}
								>
									<Text 
										style={[listItemStyle.freePackText, {color: this.props.disabled ? 'rgba(255,255,255,0.3)' : (this.props.leftTextBright ? colors.neonBlue : colors.white)}]}
									>
										{this.props.leftText}
									</Text>
								</View>

								{this.props.rightText && (
									<View style={[listItemStyle.freePackTextWrapper,{alignItems: 'flex-end',}]}>
										<Text style={listItemStyle.freePackTimer}>
											{this.props.rightText}
										</Text>
									</View>
								)}

								{this.props.rightSmallText && (
									<View style={[listItemStyle.freePackTextWrapper,{alignItems: 'flex-end',}]}>
										<Text style={{
											color: this.props.rightSmallText2 ? colors.white : 'rgba(255,255,255,0.3)',
											fontWeight: 'bold',
											fontSize: 13,
										}}>
											{this.props.rightSmallText}
										</Text>
										{this.props.rightSmallText2 && (
											<Text style={{
												color: 'rgba(255,255,255,0.3)',
												fontWeight: 'bold',
												fontSize: 13,
											}}>
												{this.props.rightSmallText}
											</Text>
										)}
									</View>	
								)}
							</TouchableOpacity>
						</LinearGradient>
					</View>
				</View>
			</View>
		)
	}
}
