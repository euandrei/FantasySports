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
		marginBottom: 30,
	},
	bottomPart:{
		flex: 1,
		marginBottom: 30,
	},

	avatarWrapper:{
		flex: 1,
	},
	avatar:{
		height: 64,
		width: 64,
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
	},
	buttonsWrapper:{
		width: 115,
		height: 44,
		marginRight: 4,
		marginLeft: 4,
	},
	level:{
		flex: 1,

		justifyContent: 'center',

	},
	levelTextWrapper:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	levelText:{
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,

	},
	levelValue:{
		color: colors.blueyGrey,
		fontSize: 13,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	levelProgress:{
		height: 4,
		backgroundColor: colors.metallicBlue,
		marginBottom: 30,
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
	yellowCircle:{
		marginRight: 4,
		width: 16,
		height: 16,
	},
	goldText:{
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	},
	goldSubText:{
		color: colors.blueyGrey,
		fontSize: 15,
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
	circleText:{
		color: colors.white,
		fontSize: 22,
		marginTop: -3,
	},
})