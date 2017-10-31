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

import { colors } from "../styles";

export default class Test extends React.Component {

	render(){
		return(
			<ScrollView style={styles.container}>
				
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
		padding: 10,
	},
	test:{
		flex: 0.7,
		flexDirection: 'row',

	},
	test2:{
		flex: 2,
	}
});
