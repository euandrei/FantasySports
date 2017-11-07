import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"


export const accountTemplateStyle = StyleSheet.create({
	container:{
		backgroundColor: colors.marine,
	},
	buttons:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
})