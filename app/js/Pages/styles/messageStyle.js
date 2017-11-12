import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"

export const messageStyle = StyleSheet.create({
	container:{
		backgroundColor: colors.marineBg,
		flex: 1,
	},
	title:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	itemType:{
		fontSize: 20,
		fontWeight: 'bold',
	},
	titleText:{
		fontSize: 40,
		fontWeight: 'bold',
		color: colors.white,
	},

	middle:{
		flex: 4,
	},

	playerWrapper:{
		alignItems: 'center',
		justifyContent: 'space-around',
		flex: 1,
		padding: 15,
		paddingBottom: 30,
	},
	playerStats:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	stats:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	statsTitle:{
		fontSize: 15,
		color: colors.bluishGrey,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	statsValue:{
		fontSize: 32,
		color: colors.white,
		fontWeight: 'bold',
	},
	impact:{
		alignItems: 'center',
		justifyContent: 'center',
	},
	impactTitle:{
		fontSize: 15,
		color: colors.bluishGrey,
		fontWeight: 'bold',
	},
	impactText:{
		fontSize: 26,
		color: colors.white,
		fontWeight: 'bold',
	},
	impactItemText:{
		fontSize: 34,
		color: colors.white,
		fontWeight: 'bold',
	},	

	itemWrapper:{
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-between',
		paddingBottom: 40,
		paddingTop: 5,
	},
	itemImage:{
		maxWidth: 250,
		maxHeight: 250,
	},
	description:{
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	descriptionText:{
		textAlign: 'center',
		maxWidth: 280,
		fontSize: 16,
		color: colors.blueyGrey,
		fontWeight: 'bold',
	},
	yellowCircle:{
		backgroundColor: colors.sunnyYellow,
		width: 64,
		height: 64,
		borderRadius: 64,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	yellowText:{
		color: colors.marineTwo,
		fontSize: 26,
		fontWeight: 'bold',
	},

	bottom:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	cancelButton:{
		height: 44,
		width: 105,
		marginRight: 5,
	},
	useButton:{
		height: 44,
		width: 105,
	},
	line:{
		alignItems: 'center',
		justifyContent: 'center',
	},
	stockWrapper:{
		width: 48,
		height: 48,
		borderRadius: 48,
		backgroundColor: colors.metallicBlue50,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopWidth: 1,
		borderColor: colors.whiteTwo,
	},
	stockText:{
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	}

})