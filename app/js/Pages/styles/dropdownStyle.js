import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "./colors.js"

export const dropdownStyle = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: colors.marine
	},
	title:{
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 16,
	}
})