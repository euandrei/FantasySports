import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
     findNodeHandle
} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
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
import NotificationListItem from "../components/NotificationListItem.js"
import Gallery from "../components/Gallery.js"
import TextField from "../components/TextField.js"
import MenuComponent from "../components/MenuComponent.js"
import Message from "../components/Message.js"
import DropdownComponent from "../components/DropdownComponent.js"
import ProgressLoader from "../components/ProgressLoader.js"
import StoreTemplate from "../templates/StoreTemplate.js"
import LoadingLogo from "../templates/LoadingLogo.js"
import LoadingOverlay from "../templates/LoadingOverlay.js"
import TeamTemplate from "../templates/TeamTemplate.js"
import GalleryTemplate from "../templates/GalleryTemplate.js"

import ProfileTemplate from "../templates/ProfileTemplate.js"

import AccountTemplate from "../templates/AccountTemplate.js"

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
	componentDidMount(){
		this.setState({
			viewRef: findNodeHandle(this.refs.backgroundImage),
		})
	}


	render(){
		return(
			<AccountTemplate
				login
				onLogin={()=>{}}
				singup
				onSingup={()=>{}}
			>
				<TextField 
					title={"Name"}
					placeholder={"First Lastname"}
					type={"default"}
				/>
				<TextField 
					title={"Username"}
					placeholder={"Usernamegoeshere"}
					type={"default"}
				/>
				<TextField 
					title={"New Password"}
					type={"password"}
				/>
				<TextField 
					title={"New Password, again"}
					type={"password"}
				/>
			</AccountTemplate>
		)
	
		return (
			<View style={{backgroundColor: colors.marine, flex: 1,}}>                                   
				<View ref={(item) => this.renderItem = findNodeHandle(item)} style={{backgroundColor:'transparent', flex: 1 }}>
					<Text style={{fontSize: 40,color: 'pink',zIndex: 1}}>HEY</Text>
				</View>
				<View style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor:'transparent', zIndex: 1}}>
					<Message
						itemType={"QUARTERBACK"}
						title={"LASERSCOPE"}

						type="buff"
						impact="84"
						description="Up your QB's accuracy to the next level with this Laser Scope!"
						yellowText="x100"

						type="player"
						rank="4"
						points="64.88"
						lastWeek="47.34"
						impact="SUN 10:00AM @ SEA"

						buttons={true} 
						buy={'100,000'}
						// STOCK OR BUTTONS !!!
						//stock={15}

						playerImage={require('../../../assets/buffs/tank.png')}
					/>
				</View>
					<BlurView 
				      style={{position:'absolute',top:0,bottom:0,right:0,left:0}}
				      blurType="dark"
				      blurAmount={25}
				      viewRef={this.renderItem}
				    />
				    <BlurView 
				      style={{position:'absolute',top:0,bottom:0,right:0,left:0}}
				      blurType="dark"
				      blurAmount={25}
				      viewRef={this.renderItem}
				    />
				    <BlurView 
				      style={{position:'absolute',top:0,bottom:0,right:0,left:0}}
				      blurType="dark"
				      blurAmount={25}
				      viewRef={this.renderItem}
				    />
			</View>
		)
		return (
			<LoadingOverlay />
			//<LoadingLogo />
		)
		return (
			<ProgressLoader
				step={1}
				text={"lineup is ready. let's go!"}
				active={1}
			/>
		)


		return (
			<ProfileTemplate />

		)
	

		// return(
		// 	<AccountTemplate
		// 		onLogin={()=>{}}
		// 		onSingup={()=>{}}
		// 	/>
	}

}
	


	// render() {

	// 	return (
	// 		<StoreTemplate />
	// 	)
	// }

	// render() {





		//		<NotificationListItem 
		//			specialOffer
		//		/>


		


	// 	return(
	// 		<ScrollView style={styles.container}>

	// 		{

				

	// 			<NotificationListItem 
	// 				specialOffer
	// 			/>

	// 			<NotificationListItem 
	// 				title1={'Text 1 start'}
	// 				text1={'finishing ...'}
	// 			/>

	// 			<NotificationListItem 
	// 				title1={'Text 1 start'}
	// 				text1={'finishing ...'}

	// 				title2={'Text 2 start'}
	// 				text2={'finishing ...'}

	// 				buttons
	// 			/>

	// 			<NotificationListItem 
	// 				title1={'Text 1 start'}
	// 				text1={'finishing ...'}

	// 				title2={'Text 2 start'}
	// 				text2={'finishing ...'}

	// 				team 
	// 			/>

	// 			<NotificationListItem 
	// 				title1={'Text 1 start'}
	// 				text1={'finishing ...'}

	// 				title2={'Text 2 start'}
	// 				text2={'finishing ...'}

	// 				arrowed
	// 			/>

			// 	<View style={{marginTop: 20, paddingRight: 15, paddingLeft: 15}}>
			// 		<Slider 
			// 			topTitle={"Top Title"}
			// 			bottomTitle={"Bottom Title"}

			// 			minLabel={"Something small"}
			// 			maxLabel={"Big"}


			// 			minimumValue={0}
			// 			maximumValue={1}
			// 			value={0.5}
			// 		/>
			// 	</View>
				
			// <DropdownComponent
			// 	data={[{
			// 	      value: 'Banana',
			// 	    }, {
			// 	      value: 'Mango',
			// 	    }, {
			// 	      value: 'Pear',
			// 	    }]}
			// 	title={'TITLE'}
			//  />

			// <TextField 
			// 	title={"Name"}
			// 	placeholder={"Your name"}

			// 	type={"account"} // may be account or password or default
			// 	//If type='account' and account is missing it will assume there is no account and wont show the change button

			// 	account={'myawesomeaccount'}
			// 	onAccountPress={()=>{}}
			// />

			// <MenuComponent 
			// 	title={'Header'}
			// 	menus={[
			// 		{title: 'Lorem', onPress: "location"},
			// 		{title: 'Lorem', onPress: "location"},
			// 		{title: 'Lorem', onPress: "location"},
			// 	]}

			// />
		

	// 					value={0.5}
	// 				/>
	// 			</View>
				
	// 		<DropdownComponent
	// 			data={[{
	// 			      value: 'Banana',
	// 			    }, {
	// 			      value: 'Mango',
	// 			    }, {
	// 			      value: 'Pear',
	// 			    }]}
	// 			title={'TITLE'}
	// 		 />

	// 		<TextField 
	// 			title={"Name"}
	// 			placeholder={"Your name"}

	// 			type={"account"} // may be account or password or default
	// 			//If type='account' and account is missing it will assume there is no account and wont show the change button

	// 			account={'myawesomeaccount'}
	// 			onAccountPress={()=>{}}
	// 		/>


				

	// 			<View style={styles.contentWrapper}>
	// 				<Slider />
	// 			</View>


	// 			<View style={styles.carouselWrapper}>
	// 				<Carousel />
	// 			</View>


	// 			<View style={{height: 400, width: 400, backgroundColor:'red'}}>
	// 				<GridCellWrapper
	// 	               bgColor={colors.watermelonBg}
	// 	               title={"Test"}
	// 	               image={require('../../../assets/buffs/cannon.png')}
	// 	               type={"buff"}
	// 	             />
	// 	             <GridCellWrapper
	// 					bgColor={colors.watermelonBg}
	// 					title={"Test"}
	// 					image={require('../../../assets/nerfs/bear_trap.png')}
	// 					type={"power-up"}
	// 				/>
	//              </View>



			
			
			



	// 		<UserProfileHeader
	// 			wins={'2,478'}
	// 			followers={'2,478'}
	// 			following={'2,478'}

	// 			button1={"CHALLENGE"}
	// 			onButton1={()=>{}}

	// 			graph
	// 			actualLevel={'7629'}
	// 			totalLevel={'10000'}
	// 			user={'ROOKIE'}
	// 			gold={'34.6K'}
	// 			onAdd={()=>{}}

	// 			button2={"UNFOLLOW"}
	// 			onButton2={()=>{}}
	// 			//button2={"FOLLOW"}
	// 			>
	// 		</UserProfileHeader>



	// 		<GridSection
	// 				title={"Title"}
	// 				titlePosition={"center"}
	// 				lines
	// 			>
	// 				<GridCellWrapper
	// 					bgColor={colors.watermelonBg}
	// 					title={"Test"}
	// 					image={require('../../../assets/nerfs/bear_trap.png')}
	// 					type={"power-up"}
	// 				/>
					
	// 				<GridCellWrapper
	// 					bgColor={colors.greenishTurquoiseBg}
	// 					title={"Test"}
	// 					image={require('../../../assets/nerfs/bear_trap.png')}
	// 					type={"power-up"}
	// 				/>
	// 				<GridCellWrapper
	// 					bgColor={colors.greenishTurquoiseBg}
	// 					title={"Test"}
	// 					image={require('../../../assets/buffs/cannon.png')}
	// 					type={"power-up"}
	// 				/>
	// 			</GridSection>


				


				
			


				
		


			

				

	// 				<View style={styles.contentWrapper}>
	// 					<Slider />
	// 				</View>
	// 				<View style={styles.carouselWrapper}>
	// 					<Carousel />
	// 				</View>


	// 				<UserProfileHeader
	// 					wins={'2,478'}
	// 					followers={'2,478'}
	// 					following={'2,478'}

	// 					button1={"CHALLENGE"}
	// 					onButton1={()=>{}}

	// 					graph
	// 					actualLevel={'7629'}
	// 					totalLevel={'10000'}
	// 					user={'ROOKIE'}
	// 					gold={'34.6K'}
	// 					onAdd={()=>{}}

	// 					button2={"UNFOLLOW"}
	// 					onButton2={()=>{}}
	// 					//button2={"FOLLOW"}
	// 				>
						
	// 				</UserProfileHeader>

	// 			<ListTemplate 
	// 				items={
	// 					[
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'},
	// 						{left: 'FREE PACK', right: '4h 38mins...'}
	// 					]
	// 				}
	// 			/>

	// 			<ListItem
	// 				listItemNumber={1}

	// 				// backgroundColor={'black'}
	// 				// border={true}

	// 				// disabled

	// 				image={{uri: 'http://via.placeholder.com/30x30'}}

	// 				leftText={"FREE PACK"}
	// 				// leftTextBright

	// 				rightText={"4h 38mins..."}
	// 				// rightSmallText={"SMALL"}
	// 				// rightSmallText2={"SMALL2"}

	// 				// gradient // used on non button like in match header

	// 				onPress={()=>{}}
	// 			/>

					
				
	// 			<MatchHeader 
	// 				username={"USERNAME"}
	// 				streak={8}

	// 				gold={'43.6K'}
	// 				level={"ROOKIE"}
	// 				levelProgress={'80%'}
	// 				freePackTimer={'4h 38mins...'}
	// 				getFreePack={()=>{}}
	// 			/>
				
	// 			<MatchupCards 
	// 				leftHead={require('../../../assets/heads/h_gry_left.png')}
	// 				leftName={"You"}
	// 				rightHead={require('../../../assets/heads/h_red_right.png')}
	// 				rightName={"Somedude"}

	// 				week={14}
	// 				bet={'25,000'}

	// 				scoreLeft={'248.8'}
	// 				scoreRight={'124.2'}

	// 				gameStatus={'live'}
	// 				gameTime={'2d 4hr'}

	// 				buttons
	// 			/>

	// 			<Header 
	// 				leftIcon={require('../../../assets/back.png')}
	// 				title={"BELIEVETHEHYPE"}
	// 				subtitle={"LEGENDARY"}
	// 				circle={"12"}
	// 			/>
				
				
				
	// 			<SmallTabbar
	// 				activeTab={this.state.activeTab}
	// 				onChange={(id)=>{this.setState({activeTab: id})}}
	// 			>
	// 				<Tab 
	// 					tabTitle={"PLS WORK"}
	// 				>
	// 					<Image source={require('../../../assets/back.png')} style={{width: 200 ,height: 200, backgroundColor: 'red', alignItems: 'center',
	// 	justifyContent: 'center',}}><Text style={{color: 'white'}}>IS working</Text></Image>
	// 				</Tab>

	// 				<Tab 
	// 					tabTitle={"Is WORKING BUOII"}
	// 				>
	// 					<Text style={{color: 'white'}}>SOmething nice</Text>
	// 				</Tab>					
	// 			</SmallTabbar>

	// 			<BigTabbar 
	// 				activeTab={this.state.activeBigTab}
	// 				onChange={(id)=>{this.setState({activeBigTab: id})}}
	// 			>
	// 				<Tab 
	// 					tabTitle={"PUBLIC"}
	// 				>
	// 					<Text style={{color: 'white'}}>SOmething PUBLIC</Text>
	// 				</Tab>
	// 				<Tab 
	// 					tabTitle={"PRIVATE"}
	// 				>
	// 					<Text style={{color: 'white'}}>SOmething PRIVATE</Text>
	// 				</Tab>

	// 			</BigTabbar>


	// 			<GridSection
	// 				title={"Title"}
	// 				titlePosition={"center"}
	// 				lines
	// 			>
	// 				<GridCellWrapper
	// 					bgColor={colors.watermelonBg}
	// 					title={"Test"}
	// 					image={require('../../../assets/nerfs/bear_trap.png')}
	// 					type={"power-up"}
	// 				/>
					
	// 				<GridCellWrapper
	// 					bgColor={colors.greenishTurquoiseBg}
	// 					title={"Test"}
	// 					image={require('../../../assets/nerfs/bear_trap.png')}
	// 					type={"power-up"}
	// 				/>
	// 				<GridCellWrapper
	// 					bgColor={colors.greenishTurquoiseBg}
	// 					title={"Test"}
	// 					image={require('../../../assets/buffs/cannon.png')}
	// 					type={"power-up"}
	// 				/>
	// 			</GridSection>

	// 			<GridSection
	// 				title={"Title"}
	// 				titlePosition={"center"}
	// 				empty
	// 			>
					// <NoItem 
					// 	message={"No buffs availablle…"}
					// 	buttonText={"SHOP"}
					// 	onPress={()=>{}}
					// />
	// 			</GridSection>


	// 			}

	// 		</ScrollView>
	// 	)
			
		

//	}
//}


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
