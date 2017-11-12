import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "./colors.js"

export const headerStyle = StyleSheet.create({
	container:{
		alignSelf: 'stretch',
		height: 56,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 20
	},
	leftComponent:{
		flex: 1,
		// marginTop: -5,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	centerComponent:{
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	rightComponent:{
		paddingRight: 15,
		flex: 1,
		marginTop: -5,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	titleWithSubtitle:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// paddingTop: 15 // subtitle font height and space between title and subtitle
	},
	titleText:{
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	},
	subtitleText:{
		color: colors.sunnyYellow,
		fontSize: 13,
		fontWeight: 'bold',
		marginTop: -3,
	},
	logo:{
		width: '50%',
	},
	circle:{
		height: 30,
		width: 30,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: colors.neonBlue,
		alignItems: 'center',
		justifyContent: 'center',
	},
	circleAndSettings:{
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	circleText:{
		color: colors.white,
	},
	buttonText:{
		color: colors.neonBlue,
		fontWeight: 'bold',
		fontSize: 20,
	},
	filterIcon:{
		width: 20,

	},
	settingsIcon:{
		width: 20,
	}



});