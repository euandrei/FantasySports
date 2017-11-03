import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "./colors.js"

export const gridSectionStyle = StyleSheet.create({
	container:{
		alignSelf: 'stretch',
	},

	titleWrapper:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
	},
	titleText:{
		color: colors.bluishGrey,
		fontSize: 16,
		fontWeight: 'bold',
	},
	titleWrapperLeft:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	leftLine:{
		flex: 1,
		height: 1,
		borderWidth: 1,
		borderColor: colors.white2,
		marginRight: 15,
	},
	rightLine:{
		flex: 1,
		height: 1,
		borderWidth: 1,
		borderColor: colors.white2,
		marginLeft: 15,
	},
	sectionCells:{
	    flexWrap: 'wrap',
	    flexDirection: 'row',
    	justifyContent: 'space-between',
		marginLeft: -8,
		marginRight: -8,
	},
	sectionCellWrapper:{
		marginBottom: 10,
		flexDirection: 'row',
    	flexGrow: 0,
    	width: '33%',
    	height: 140,
    	paddingLeft: 8,
    	paddingRight: 8,
	},
	sectoinEmpty:{
		flex: 1,
	},


})