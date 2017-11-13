import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "./colors.js"

export const userProfileHeaderStyle = StyleSheet.create({
	container:{
		paddingLeft: 15,
		paddingRight: 15,
	},
	userStats:{
		flex:1,
		flexDirection: 'row',
		// marginBottom: 20,
	},
	bottomPart:{
		flex: 1,
	},

	avatarWrapper:{
		flex: 1,
	},
	avatar:{
		height: 64,
		width: 64,

		borderRadius: 5
	},
	stats:{
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	statsText:{
		fontWeight: 'bold',
		fontSize: 21,
		color: colors.white,
	},
	statsTitle:{
		fontWeight: 'bold',
		fontSize: 14,
		color: colors.bluishGrey,
	},
	buttons:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 30,
		paddingTop: 30

	},
	buttonsWrapper:{
		width: 115,
		height: 44,
		marginRight: 4,
		marginLeft: 4,
	},
	level:{
		flex: 1,
		// justifyContent: 'center',
		paddingBottom: 20,
		paddingTop: 20

	},
	levelTextWrapper:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	levelText:{
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	},
	levelValue:{
		color: colors.blueyGrey,
		fontSize: 13,
		fontWeight: 'bold',
	},
	levelProgress:{
		height: 4,
		backgroundColor: colors.metallicBlue,
	},
	levelProgressComplete:{
		height: 4,
		backgroundColor: colors.sunnyYellow,
	},
	gold:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	goldText:{
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 5
	},
	goldSubText:{
		color: colors.blueyGrey,
		fontWeight: 'bold',
		fontSize: 15,
		marginLeft: 5
	},
	// circle:{
	// 	height: 28,
	// 	width: 28,
	// 	borderRadius: 28/2,
	// 	borderWidth: 2,
	// 	borderColor: colors.neonBlue,
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
	// circleText:{
	// 	color: colors.white,
	// 	fontSize: 21,
	// 	lineHeight: 27,
	// 	// fontWeight: 'bold',
	// 	fontFamily: 'Arial'
	// },
})