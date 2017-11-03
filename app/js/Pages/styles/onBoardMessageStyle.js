import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "./colors.js"

export const onBoardMessageStyle = StyleSheet.create({
	container:{
		flex: 1,
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: colors.marineBg,
	},
	topPart:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	title:{
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleWeek:{
		color: colors.blueyGrey,
		fontWeight: 'bold',
		fontSize: 16
	},
	titleText:{
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 42
	},
	titleValue:{
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleValueText:{
		fontSize: 72,
		fontWeight: 'bold',
	},
	bottomPart:{
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	bottomTextView:{
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		padding: 40,
		
	},
	bottomTitle:{
		color: colors.sunnyYellow,
		fontWeight: "bold",
		fontSize: 17,
		marginBottom: 15,
	},
	bottomText:{
		color: colors.white,
		fontSize: 36,
		fontWeight: 'bold',

	},
	buttonView:{
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	buttonWrapper:{
		height: 45,
		width: 145,
	},

	skip:{
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 40,
	},
	skipText:{
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 14,
	},




	versusWrapper:{
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch',
		position: 'relative',
		marginTop: 20,
	},
	versusLeft:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center', 
	},
	versusRight:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center', 
	},
	absoluteVersus:{
		position: 'absolute', 
		top: 0, 
		left: 0, 
		right: 0, 
		bottom: 0, 
		marginTop: 80,
		justifyContent: 'center', 
		alignItems: 'center'
	},
	vsText:{
		fontSize: 34,
		fontWeight: 'bold',
		color: colors.white,
	},
	versusImage:{
		width: 160,
		height: 160,
		marginBottom: 20,
	},
	nameText:{
		color: colors.white,
		fontSize: 24,
		fontWeight: "bold",
	}



})