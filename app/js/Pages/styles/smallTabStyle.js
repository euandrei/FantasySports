import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"


export const smallTabStyle = StyleSheet.create({
	container:{
		flex: 1,
		marginBottom: 10,
	},
	tabWrapper:{
		flex: 1,
		flexDirection: 'row',
	},
	tabs:{
		flex: 2,
		flexDirection: 'row',
	},
	tabText:{
		paddingRight: 10,
		fontSize: 20,
		fontWeight: '600',
		color: colors.bluishGrey,
	},
	tabActiveText:{
		color: colors.white,
	},
	filterIcon:{
		marginTop: 5,
		height: 15,
		width: 15,
		alignItems: 'center',
		justifyContent: 'center',
	}

})