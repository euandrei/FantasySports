import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

import GridCellWrapper from "./GridCellWrapper.js"
import GridSection from "./GridSection.js"

import { notificationListItemStyle, colors } from "../styles";

/*

TODO replace hardcoded data ie: avatar, arrow cells, grid cells

<NotificationListItem 
  team=[] <- at the moment bool for demo

  title1={'Text 1 start'}
  text1={'finishing ...'}

  title2={'Text 2 start'}
  text2={'finishing ...'}
/>

*/

export default class NotificationListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	render(){

		return (
			<View style={notificationListItemStyle.container}>

        <View style={notificationListItemStyle.notificationHeader}>

          <Image source={require('../../../assets/placeholder.png')} style={notificationListItemStyle.avatar} />
          
          <View style={notificationListItemStyle.headerTitleWrapper}>
            <Text style={notificationListItemStyle.headerTitlePre}>
              <Text style={notificationListItemStyle.headerTitlePost}>{this.props.title1}</Text>
              {' '}
              {this.props.text1}
            </Text>
            <Text style={notificationListItemStyle.headerTitlePre}>
              <Text style={notificationListItemStyle.headerTitlePost}>{this.props.title2}</Text>
              {' '}
              {this.props.text2}
            </Text>
          </View>
        </View>

        {this.props.team ? (
          <View>
            <GridSection
              // title={"Title"}
              // titlePosition={"center"}
              // lines
            >
              <GridCellWrapper
                bgColor={colors.watermelonBg}
                title={"Test"}
                image={require('../../../assets/nerfs/bear_trap.png')}
                type={"power-up"}
              />
              
              <GridCellWrapper
                bgColor={colors.greenishTurquoiseBg}
                title={"Test"}
                image={require('../../../assets/nerfs/bear_trap.png')}
                type={"power-up"}
              />
              <GridCellWrapper
                bgColor={colors.greenishTurquoiseBg}
                title={"Test"}
                image={require('../../../assets/buffs/cannon.png')}
                type={"power-up"}
              />

              <GridCellWrapper
                bgColor={colors.watermelonBg}
                title={"Test"}
                image={require('../../../assets/nerfs/bear_trap.png')}
                type={"power-up"}
              />
              
              <GridCellWrapper
                bgColor={colors.greenishTurquoiseBg}
                title={"Test"}
                image={require('../../../assets/nerfs/bear_trap.png')}
                type={"power-up"}
              />
              <GridCellWrapper
                bgColor={colors.greenishTurquoiseBg}
                title={"Test"}
                image={require('../../../assets/buffs/cannon.png')}
                type={"power-up"}
              />

              <GridCellWrapper
                bgColor={colors.watermelonBg}
                title={"Test"}
                image={require('../../../assets/nerfs/bear_trap.png')}
                type={"power-up"}
              />
              
              <GridCellWrapper
                bgColor={colors.greenishTurquoiseBg}
                title={"Test"}
                image={require('../../../assets/nerfs/bear_trap.png')}
                type={"power-up"}
              />
              <GridCellWrapper
                bgColor={colors.greenishTurquoiseBg}
                title={"Test"}
                image={require('../../../assets/buffs/cannon.png')}
                type={"power-up"}
              />
            </GridSection>
          </View>
        ) : (
          <View style={notificationListItemStyle.arrowNotificationContainer}>
            <View style={notificationListItemStyle.arrowNotificationWrapper}>
              <GridCellWrapper
                bgColor={colors.watermelonBg}
                title={"Test"}
                image={require('../../../assets/placeholder.png')}
                type={"player"}
              />

              <View style={notificationListItemStyle.arrowImageWrapper}>
                <Image 
                  style={notificationListItemStyle.arrowImage}
                  source={{uri: 'http://via.placeholder.com/21x16'}}
                />
              </View>

              <GridCellWrapper
                bgColor={colors.watermelonBg}
                title={"Test"}
                image={require('../../../assets/placeholder.png')}
                type={"power-up"}
              />
            </View>
          </View>
        )}


      </View>
		)
	}
}
