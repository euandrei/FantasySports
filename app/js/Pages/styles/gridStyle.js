import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "./colors.js"

export const gridStyle = StyleSheet.create({
	container:{
		flex: 1,
		marginBottom: 8,
		alignSelf: 'stretch',
	},
	grid:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',

	},
	linearGradient:{
	    flex: 1,
	    borderRadius: 8
	},
	titleText:{
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 14,
	},
	titleWrapper:{
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	imageWrapper:{
		flex: 4,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imagePlus:{
		width: 30,
	},
	wrapperContainer:{
		flex: 1,
	},
	wrapper:{
		position: 'absolute', 
		backgroundColor: colors.sunnyYellow,
		alignItems: 'center',
		justifyContent: 'center',
		width: 32,
		height: 32,
		borderRadius: 25,
		bottom: 4,
		right: 4,
		zIndex: 100,
	},
	wrapperText:{
		fontSize: 13,
		color: colors.marineTwo,
	},
	topPart:{
		flex: 9,
	},
	under:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	underText:{
		color: colors.white,
		fontSize: 18,
	},


	gridActive:{
		backgroundColor: colors.marine,
		borderRadius: 8,
	},


	dropdownWrapper:{
		position: 'absolute',
		bottom: -90,
		right: 0,
		left: 0,
		top: 0,
		borderBottomRightRadius: 8,
		borderBottomLeftRadius: 8,
		backgroundColor: colors.marine,
		alignItems: 'center',
		alignSelf: 'stretch',
		zIndex: 1,
	},
	dropdownBackground:{
		backgroundColor: colors.marine2, 
		alignSelf: 'stretch',
		flex: 1, 
	},
	tiltButtonWrapper:{
		flex: 0.23,
		alignSelf: 'stretch',
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 5,
		paddingBottom: 4,
	}




}); 