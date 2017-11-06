import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    Dimensions
} from 'react-native';

import Header from "../../Pages/components/Header";
import ListItem from "../../Pages/components/ListItem";

import { colors, selectionTemplateStyle } from "../../Pages/styles";

export default class ListTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		let height = Dimensions.get('window').height;

		return(
			<ScrollView style={[selectionTemplateStyle.container,{minHeight: height}]}>

				<View style={selectionTemplateStyle.header}>
					<Header 
						title={this.props.title}
						leftIcon={this.props.leftIcon || null}
						onBack={()=>{}}
						button={this.props.button || null}
						onPress={()=>{}}
					/>
				</View>

				<View style={selectionTemplateStyle.grid}>
					
					{this.props.items.map((item,i)=>{
						return (
							<View 
								key={i}
								style={{
									marginBottom: 11
								}}
							>
								<ListItem
									key={i}
									listItemNumber={i + 1}

									// backgroundColor={'black'}
									// border={true}

									// disabled

									image={{uri: 'http://via.placeholder.com/30x30'}}

									leftText={item.left}
									leftTextBright

									// rightText={item.right}
									rightSmallText={"SMALL"}
									// rightSmallText2={"SMALL2"}

									// gradient // used on non button like in match header

									onPress={()=>{}}
								/>
							</View>
						)
					})}
					
				</View>
				
			</ScrollView>
		)
	}
}