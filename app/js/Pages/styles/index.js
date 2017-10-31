import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"

import { gridStyle } from "./gridStyle.js"
import { gridSectionStyle } from "./gridSectionStyle.js"
import { headerStyle } from "./headerStyle.js"

export {
	colors,
	gridStyle,
	gridSectionStyle,
	headerStyle
}


export const tiltButton = StyleSheet.create({

	button:{
		flex: 1, 
		borderWidth: 2,
		padding: 8,
		alignSelf: 'stretch',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',

	},
	buttonText:{
		flex: 1,
		color: colors.white,
		fontWeight: 'bold'
	}

})

