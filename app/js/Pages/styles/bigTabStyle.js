import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"


export const bigTabStyle = StyleSheet.create({
	container:{
		flex: 1,
	},
	tabWrapper:{
		flex: 1,
		flexDirection: 'row',
		backgroundColor: colors.marine,
		padding: 8,
		borderRadius: 8,
	},
	rigthButton:{
		flex: 1,
	},
	leftButton:{
		flex: 1,
	},
	tabButton:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabText:{
		flex: 1,
		fontSize: 15,
		fontWeight: 'bold',
		padding: 8,
		color: colors.neonBlue,
	},
	tabActive:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',

		backgroundColor: colors.white,
	},
	tabActiveText:{
		color: colors.marine,
	}

})