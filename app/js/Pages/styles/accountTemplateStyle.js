import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"


export const accountTemplateStyle = StyleSheet.create({
	container:{
		backgroundColor: colors.marine,
		marginBottom: 20,
	},
	header:{
		marginBottom: 20,
	},
	buttons:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	changePicture:{
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 30,
	},
	picture:{
		width: 64,
		height: 64,
		borderRadius: 5,
	},
	picturePlaceholder:{
		width: 64,
		height: 64,
		borderRadius: 5,
		backgroundColor: 'rgba(255, 255, 255, 0.31)',
	},
	changePictureText:{
		color: colors.bluishGrey,
		fontWeight: 'bold',
		fontSize: 14,
		marginTop: 7,
	}
})