import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import GridCellWrapper from "../components/GridCellWrapper.js"
import GridSection from "../components/GridSection.js"
import NoItem from "../components/NoItem.js"
import Header from "../components/Header.js"
import SmallTabbar from "../components/SmallTabbar.js"
import BigTabbar from "../components/BigTabbar.js"
import Tab from "../components/Tab.js"
import MatchupCards from "../components/MatchupCards.js"
import MatchHeader from "../components/MatchHeader.js"

import OnBoardMessage from "../templates/OnBoardMessage.js"

import { colors } from "../styles";

export default class Test extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activeTab: 1,
			activeBigTab: 0,
		}
	}
	render(){
		

		return(
			<ScrollView style={styles.container}>
				<MatchHeader />
				<MatchupCards 
					leftHead={require('../../../assets/heads/h_gry_left.png')}
					leftName={"You"}
					rightHead={require('../../../assets/heads/h_red_right.png')}
					rightName={"Somedude"}

					week={14}
					bet={'25,000'}

					scoreRight={'124.2'}
					scoreLeft={'248.8'}

					gameStatus={'live'}
					gameTime={'2d 4hr'}
				/>

				{/*
				<Header 
					leftIcon={require('../../../assets/back.png')}
					title={"BELIEVETHEHYPE"}
					subtitle={"LEGENDARY"}
					circle={"12"}
				/>
				
				
				
				<SmallTabbar
					activeTab={this.state.activeTab}
					onChange={(id)=>{this.setState({activeTab: id})}}
				>
					<Tab 
						tabTitle={"PLS WORK"}
					>
						<Image source={require('../../../assets/back.png')} style={{width: 200 ,height: 200, backgroundColor: 'red', alignItems: 'center',
		justifyContent: 'center',}}><Text style={{color: 'white'}}>IS working</Text></Image>
					</Tab>

					<Tab 
						tabTitle={"Is WORKING BUOII"}
					>
						<Text style={{color: 'white'}}>SOmething nice</Text>
					</Tab>					
				</SmallTabbar>

				<BigTabbar 
					activeTab={this.state.activeBigTab}
					onChange={(id)=>{this.setState({activeBigTab: id})}}
				>
					<Tab 
						tabTitle={"PUBLIC"}
					>
						<Text style={{color: 'white'}}>SOmething PUBLIC</Text>
					</Tab>
					<Tab 
						tabTitle={"PRIVATE"}
					>
						<Text style={{color: 'white'}}>SOmething PRIVATE</Text>
					</Tab>

				</BigTabbar>


				<GridSection
					title={"Title"}
					titlePosition={"center"}
					lines
				>
					<GridCellWrapper
						bgColor={colors.watermelonBg}
						title={"Test"}
						image={require('../../../assets/nerfs/bear_trap.png')}
						type={"power-up"}
					/>
					
					<GridCellWrapper
						bgColor={colors.greenishTurquoiseBg}
						title={"Test"}
						image={require('../../../assets/nerfs/bear_trap.png')}
						type={"power-up"}
					/>
					<GridCellWrapper
						bgColor={colors.greenishTurquoiseBg}
						title={"Test"}
						image={require('../../../assets/buffs/cannon.png')}
						type={"power-up"}
					/>
				</GridSection>

				<GridSection
					title={"Title"}
					titlePosition={"center"}
					empty
				>
					<NoItem 
						message={"No buffs availablle…"}
						buttonText={"SHOP"}
						onPress={()=>{}}
					/>
				</GridSection>
				
*/}
			</ScrollView>
			)
			
		
	}
}



const styles = StyleSheet.create({
	container: {

		backgroundColor: colors.marine,
		paddingRight: 10,
		paddingLeft: 10,
	},
	test:{
		flex: 0.7,
		flexDirection: 'row',

	},
	test2:{
		flex: 2,
	}
});
