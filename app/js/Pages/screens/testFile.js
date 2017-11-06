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
import ListItem from "../components/ListItem.js"
import ListTemplate from "../templates/ListTemplate.js"
import Slider from "../components/Slider.js"
import Carousel from "../components/Carousel.js"
import UserProfileHeader from "../components/UserProfileHeader.js"

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
			
			{/*<View style={styles.contentWrapper}>
				<Slider />
			</View>
			<View style={styles.carouselWrapper}>
				<Carousel />
			</View>*/}
			{/*<View style={{height: 400, width: 400, backgroundColor:'red'}}>
				<GridCellWrapper
	               bgColor={colors.watermelonBg}
	               title={"Test"}
	               image={require('../../../assets/buffs/cannon.png')}
	               type={"buff"}
	             />
	             <GridCellWrapper
					bgColor={colors.watermelonBg}
					title={"Test"}
					image={require('../../../assets/nerfs/bear_trap.png')}
					type={"power-up"}
				/>
             </View>*/}

			<UserProfileHeader
				wins={'2,478'}
				followers={'2,478'}
				following={'2,478'}

				button1={"CHALLENGE"}
				onButton1={()=>{}}

				graph
				actualLevel={'7629'}
				totalLevel={'10000'}
				user={'ROOKIE'}
				gold={'34.6K'}
				onAdd={()=>{}}

				button2={"UNFOLLOW"}
				onButton2={()=>{}}
				//button2={"FOLLOW"}
				>
			</UserProfileHeader>
			
			{/*<GridSection
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
				*/}
			

			

				{/*

				<ListTemplate 
					items={
						[
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'}
						]
					}
				/>

				<ListItem
					listItemNumber={1}

					// backgroundColor={'black'}
					// border={true}

					// disabled

					image={{uri: 'http://via.placeholder.com/30x30'}}

					leftText={"FREE PACK"}
					// leftTextBright

					rightText={"4h 38mins..."}
					// rightSmallText={"SMALL"}
					// rightSmallText2={"SMALL2"}

					// gradient // used on non button like in match header

					onPress={()=>{}}
				/>

					
				
				<MatchHeader 
					username={"USERNAME"}
					streak={8}

					gold={'43.6K'}
					level={"ROOKIE"}
					levelProgress={'80%'}
					freePackTimer={'4h 38mins...'}
					getFreePack={()=>{}}
				/>
				
				<MatchupCards 
					leftHead={require('../../../assets/heads/h_gry_left.png')}
					leftName={"You"}
					rightHead={require('../../../assets/heads/h_red_right.png')}
					rightName={"Somedude"}

					week={14}
					bet={'25,000'}

					scoreLeft={'248.8'}
					scoreRight={'124.2'}

					gameStatus={'live'}
					gameTime={'2d 4hr'}

					buttons
				/>

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
	},
	contentWrapper:{
		paddingRight: 10,
		paddingLeft: 10,
	},
	carouselWrapper:{
		marginTop: 20,
		marginBottom: 20,
	},
	test:{
		flex: 0.7,
		flexDirection: 'row',

	},
	test2:{
		flex: 2,
	}
});
