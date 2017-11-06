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
    	paddingLeft: 15,
    	paddingRight: 15
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