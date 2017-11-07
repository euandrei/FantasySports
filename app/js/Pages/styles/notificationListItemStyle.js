import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"

export const notificationListItemStyle = StyleSheet.create({
	container:{
		flex: 1,
		borderBottomColor: colors.white2,
    	borderBottomWidth: 1,
    	paddingTop: 29,
    	paddingBottom: 24,
    	marginLeft: 15,
    	marginRight: 15
	},
	containerMinimal:{
		flex: 1,
    	marginLeft: 15,
    	marginRight: 15
	},
	notificationHeader:{
		flex: 1,
		flexDirection: 'row',
		marginBottom: 22,
	},
	avatarWrapper:{
		// flex: 1,
		// borderRadius: 5
	},
	avatar:{
		height: 48,
		width: 48,
		borderRadius: 5
	},
	headerTitleWrapper:{
		flex: 1,
		justifyContent:'center',
		paddingLeft: 15,
	},
	headerTitlePre:{
		fontSize: 14, 
		color: colors.bluishGrey
	},
	headerTitlePost:{
		color: colors.white
	},

	// special offer
	specialOfferHeaderWrapper:{

	},
	specialOfferHeaderTitle:{
		color: colors.neonBlue, 
		fontSize: 14, 
		marginBottom: 3
	},
	specialOfferHeaderLine:{
		height: 2, 
		flex: 1, 
		backgroundColor: colors.neonBlue
	},
	specialOfferContainer:{
		flex: 1, 
		alignItems: 'center', 
		paddingBottom: 30
	},
	cellComponentsWrapper:{
		flex: 1, 
		alignItems: 'center', 
		paddingBottom: 30
	},
	cellWrapper:{
		flex: 1,
		width: 108,
		height: 140,
	},
	actualPriceLabel:{
		fontSize: 18,
        lineHeight: 12,
        fontWeight: 'bold',
        color: colors.bluishGrey,
        paddingTop: 17,
        textDecorationLine: 'line-through'
	},
	discountPriceLabel:{
		fontSize: 20,
		lineHeight: 14,
		fontWeight: 'bold',
		color: colors.white,
		paddingTop: 15,
	},
	buttonsContainer:{
		flex: 1, 
		flexDirection: 'row', 
		width: 220
	},



	// arrow notification container
	arrowNotificationContainer:{
		flex: 1
	},
	arrowNotificationWrapper:{
		flex: 1,
        width: 291,
        height: 140,
        flexDirection: 'row',
	},
	arrowImageWrapper:{
		alignItems:'center',
        justifyContent:'center',
	},
	arrowImage:{
		marginLeft: 19,
        marginRight: 19,
        width: 21,
        height: 16
	},
})