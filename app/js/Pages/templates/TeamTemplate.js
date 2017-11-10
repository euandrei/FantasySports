import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    Dimensions
} from 'react-native';

import Header from "../../Pages/components/Header";
import GridSection from "../../Pages/components/GridSection";
import GridCellWrapper from "../../Pages/components/GridCellWrapper";

import { colors, teamTemplateStyle } from "../../Pages/styles";

export default class TeamTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		let height = Dimensions.get('window').height;
		return(
			<View style={[teamTemplateStyle.container,{minHeight: height}]}>
				<View style={teamTemplateStyle.header}>
					<Header 
						title={"TEAM"}
						leftIcon={this.props.backIcon || null}
						onBack={()=>{}}
						button={this.props.button || null}
						onPress={()=>{this.props.onPress()}}
					/>
					{this.props.tutorial && this.props.overSave && <Image source={require('../../../assets/click-indicator.png')} style={{height:55,width:55,position:'absolute',top: -5, right: 30 ,}}/>}
				</View>
				<View style={teamTemplateStyle.grid}>
					<GridSection
						title={"players"}
						titlePosition={"center"}
						line={this.props.line}
					>
						<GridCellWrapper
							bgColor={colors.neonBlueBg}
							title={"M.RYAN"}
							image={this.props.player1}
							type={"player"}
							tutorial={this.props.tutorial}
							overPlayer={this.props.overPlayer}
						/>
						<GridCellWrapper
							bgColor={colors.neonBlueBg}
							title={"T.GURELY"}
							image={this.props.player2}
							type={"player"}
						/>
						<GridCellWrapper
							bgColor={colors.neonBlueBg}
							title={"A.BROWN"}
							image={this.props.player3}
							type={"player"}
						/>
					</GridSection>
				</View>
				<View style={teamTemplateStyle.grid}>
					<GridSection
						title={"buffs (optional)"}
						titlePosition={"center"}
						line={this.props.line}
					>
						<GridCellWrapper
							bgColor={colors.greenishTurquoiseBg}
							title={"QB BUFF"}
							image={this.props.buff1}
							type={"buff"}
							tutorial={this.props.tutorial}
							overBuff={this.props.overBuff}
						/>
						<GridCellWrapper
							bgColor={colors.greenishTurquoiseBg}
							title={"RB BUFF"}
							image={this.props.buff2}
							type={"buff"}
						/>
						<GridCellWrapper
							bgColor={colors.greenishTurquoiseBg}
							title={"WR BUFF"}
							image={this.props.buff3}
							type={"buff"}
						/>
					</GridSection>
				</View>
				<View style={teamTemplateStyle.grid}>
					<GridSection
						title={"nerfs (optional)"}
						titlePosition={"center"}
						line={this.props.line}
					>
						<GridCellWrapper
							bgColor={colors.watermelonBg}
							title={"QB NERF"}
							image={this.props.nerf1}
							type={"nerf"}
							
							tutorial={this.props.tutorial}
							overNerf={this.props.overNerf}
						/>
						<GridCellWrapper
							bgColor={colors.watermelonBg}
							title={"RB NERF"}
							image={this.props.nerf2}
							type={"nerf"}
						/>
						<GridCellWrapper
							bgColor={colors.watermelonBg}
							title={"WR NERF"}
							image={this.props.nerf3}
							type={"nerf"}
						/>
					</GridSection>
				</View>
			</View>
		)
	}
}