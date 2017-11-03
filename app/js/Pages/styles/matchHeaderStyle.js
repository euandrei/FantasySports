import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"

export const matchHeaderStyle = StyleSheet.create({
	container:{
	},
	headerWrapper:{
		flex: 1,
		flexDirection: 'row',
		marginBottom: 10,
	},
	user:{
		flex: 2,
		flexDirection: 'row',
	},
	userImage:{
		height: 32,
		width: 32,
		borderRadius: 5,
		backgroundColor: 'rgba(255,255,255,0.31)',
		marginRight: 5,
	},
	usernameText:{
		color: colors.white,
		fontSize: 15,
		fontWeight: 'bold',
	},
	usernameStreak:{
		color: colors.blueyGrey,
		fontSize: 13,
		fontWeight: 'bold',
	},
	gold:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	yellowCircle:{
		marginRight: 4,
	},
	goldText:{
		color: colors.white,
		fontSize: 15,
		fontWeight: 'bold',
	},
	level:{
		flex: 1,

		justifyContent: 'center',

	},
	levelText:{
		color: colors.white,
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 7,
	},
	levelProgress:{
		height: 4,
		backgroundColor: colors.metallicBlue,
	},
	levelProgressComplete:{
		height: 4,
		backgroundColor: colors.sunnyYellow,
	},


	// FREE PACK
	freePackWrapper:{
		flex: 1,
		alignSelf: 'stretch',
		height: 44,
	},
	tiltButtonWrapper:{
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		
		borderRadius: 7,
	},
	gradient:{
		flex: 1, 
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 7,	
	},
	button:{
		flex: 1, 
		flexDirection: 'row',
		alignSelf: 'stretch',
		borderWidth: 2,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	freePackTextWrapper:{
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	freePackText:{
		fontWeight: 'bold',
		fontSize: 20,
	},
	freePackTimer:{
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 20,
	}


})