import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"

export const matchupCardsStyle = StyleSheet.create({
	container:{
		
	},
	linearGradient:{
		flex: 1, 
		borderRadius: 12,
	},
	matchupWrapper:{
		padding: 10,
		paddingTop: 40,
		paddingBottom: 40,
	},

	// HEADS 
	headsWrapper:{
		flex: 1,
		flexDirection: 'row',
		marginBottom: 10,
	},
	headsLeftWrapper:{
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headsLeft:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headsRightWrapper:{
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headsRight:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dotdotWrapper:{
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dotButton:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch', 
		paddingLeft: 30,
		paddingRight: 30,
	},
	dotdot:{
		alignItems: 'center',
		justifyContent: 'center',
	},
	head:{
		width: 64,
		height: 64,
		marginBottom: 10,
	},
	headNameText:{
		fontSize: 15,
		fontWeight: 'bold',
		color: colors.white,
	},
	won:{
		height: 30,
		width: 30,
		position: 'absolute',
		top: -10,
		right: -10,
		backgroundColor: colors.sunnyYellow,
		borderRadius: 30,
		zIndex: 1,
	},
	wonText:{
		color: colors.marine,
		fontSize: 13,
		fontWeight: 'bold',
	},



	// BET INFO
	betInfoWrapper:{
		flex: 1,
		flexDirection: 'row',
		marginTop: 30,
	},
	weekInfo:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	betInfo:{
		flex: 1,
		borderLeftWidth: 1,
		borderColor: "rgba(255,255,255,0.1)",
		alignItems: 'center',
		justifyContent: 'center',
	},
	betInfoTitle:{
		flexDirection: 'row',
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.white,
	},
	betInfoDescription:{
		color: "#AAC2CC",
		fontSize: 14,
		fontWeight: 'bold',
	},


	// Button
	buttonWrapper:{
		flexDirection: 'row',
		marginTop: 40,
	},
	buttonLeftWrapper:{
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		padding: 2,
	},
	buttonLeft:{
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 50,
	},
	buttonRightWrapper:{
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: 2,
	},
	buttonRight:{
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: 100,
		height: 50,
	},

	// SCORE BARS 
	scoreBarsWrapper:{
		flexDirection: 'row',
	},
	barRight:{
		flex: 1,
		paddingLeft: 5,
	},
	barLeft:{
		flex: 1,
		paddingRight: 5,
	},
	scoreTextWrapper:{
		alignItems: 'center',
		marginBottom: 20,
	},
	scoreText:{
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	},
	progressBar:{
		flex: 1,
		backgroundColor: colors.marine50,
		borderRadius: 20,
		height: 20,
	},
	progressBarActive:{
		backgroundColor: colors.neonBlue,
		height: 20,
		borderRadius: 20,
	},
	gameStatusText:{
		color: colors.white,
		fontSize: 18,
		fontWeight: 'bold',

	},

	// DETAILS WRAPPER
	detailsWrapper:{

	},

	// TABBAR
	tabContainer:{
		marginTop: 20,
	},
	tabs:{
		flexDirection: 'row',
	},
	tabButton:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 1,
	},
	tabText:{
		color: colors.white,
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 15,
		paddingBottom: 30,
	},
	tabContent:{
		flex: 1,
		backgroundColor: colors.marine,
		marginLeft: -10,
		marginRight: -10,
		paddingTop: 50,
		paddingBottom: 50,
	},
	quarterWrapper:{
		flexDirection: 'row',
		flex: 1,
	},
	quarterLeft:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	quarterRight:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},


	// POWERUP
	powerupWrapper:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	detailsImage:{
		height: 150,
		width: 150,
		marginTop: -30,
		marginBottom: 20,
	},
	detailsUserName:{
		fontSize: 15,
		fontWeight: 'bold',
		color: colors.white,
	},
	detailsValue:{
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.white,
	},
	detailsTime:{
		fontSize: 15,
		fontWeight: 'bold',
		color: 'rgba(255,255,255,0.5)',
	},
	powerupName:{
		fontSize: 15,
		fontWeight: 'bold',
		color: colors.white,
	},
	powerupValue:{
		fontSize: 30,
		fontWeight: 'bold',
	}







})