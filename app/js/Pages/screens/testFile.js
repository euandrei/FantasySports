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

import { colors } from "../styles";

export default class Test extends React.Component {

	render(){
		return(
			<ScrollView style={styles.container}>
				<Header 
					leftIcon={require('../../../assets/back.png')}
					title={"BELIEVETHEHYPE"}
					subtitle={"LEGENDARY"}
					filter={require('../../../assets/filter.png')}
				/>
				<Header 
					leftIcon={require('../../../assets/back.png')}
					title={"BELIEVETHEHYPE"}
					subtitle={"LEGENDARY"}
					logo={require('../../../assets/logo.png')}
					settings={require('../../../assets/settings.png')}
				/>
				<Header 
					leftIcon={require('../../../assets/back.png')}
					title={"BELIEVETHEHYPE"}
					subtitle={"LEGENDARY"}
					circle={"4"}
					settings={require('../../../assets/settings.png')}
				/>
				<Header 
					leftIcon={require('../../../assets/back.png')}
					button={"SAVE"}
				/>
				<Header 
					leftIcon={require('../../../assets/back.png')}
					title={"CHANGE PASSWORD"}
					button={"NEXT"}
					onPress={()=>{}}
				/>
				<Header 
					leftIcon={require('../../../assets/back.png')}
					title={"BELIEVETHEHYPE"}
					subtitle={"LEGENDARY"}
					circle={"12"}
				/>
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
				

			</ScrollView>
		)
	}
}



const styles = StyleSheet.create({
	container: {

		backgroundColor: 'rgb(6, 44, 75)',
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
