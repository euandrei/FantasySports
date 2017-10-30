import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
} from 'react-native';

import GridCellWrapper from "../components/GridCellWrapper.js"
import { colors } from "../styles";

export default class Test extends React.Component {

	render(){
		return(
			<View style={styles.container}>
				

				<View style={styles.test}>
					<GridCellWrapper
						bgColor={colors.neonBlueBg}
						title={"Test"}
						updateText={"New"}

						type={"power-up"}
					/>


					<GridCellWrapper
						bgColor={colors.greenishTurquoiseBg}
						title={"Test"}
						image={require('../../../assets/plus-green.png')}
						type={"plus"}
					/>



					<GridCellWrapper
						bgColor={colors.neonBlueBg}
						title={"Test"}
						updateText={'x29'}
						underText={'19.99'}
						type={"power-up"}
					/>
					

				</View>
				<View style={styles.test}>
					<GridCellWrapper
						bgColor={colors.neonBlueBg}
						title={"Test"}
						image={require('../../../assets/buffs/cannon.png')}
						underText={'19.99'}
						type={"power-up"}
					/>
					<GridCellWrapper
						bgColor={colors.neonBlueBg}
						title={"Test"}
						image={require('../../../assets/buffs/bazooka.png')}
						type={"power-up"}
					/>
					<GridCellWrapper
						bgColor={colors.watermelonBg}
						title={"Test"}
						image={require('../../../assets/nerfs/bear_trap.png')}
						type={"power-up"}
					/>
					

				</View>

				
				<View style={styles.test2}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(6, 44, 75)',

	},
	test:{
		flex: 0.7,
		flexDirection: 'row',
		padding: 10
	},
	test2:{
		flex: 2,
	}
});
