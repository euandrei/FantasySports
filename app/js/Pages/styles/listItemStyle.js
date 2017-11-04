import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"

export const listItemStyle = StyleSheet.create({

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