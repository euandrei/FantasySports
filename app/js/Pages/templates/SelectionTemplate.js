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
import GridSection from "../../Pages/components/GridSection";
import GridCellWrapper from "../../Pages/components/GridCellWrapper";

import { colors, selectionTemplateStyle } from "../../Pages/styles";

export default class SelectionTemplate extends React.Component {
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
					<GridSection
						main={this.props.main}
					>
						{this.props.cards.map((card,key)=>{
							return (
								<GridCellWrapper
									key={key}
									bgColor={this.props.type == 'nerf' ? colors.watermelonBg : colors.neonBlueBg}
									title={card.name}
									image={card.image}
									type={this.props.type}
									
									tutorial={card.tutorial ? card.tutorial : false}
									overPlayer={card.tutorial ? card.tutorial : false}
								/>
							)
						})}
						
						
					</GridSection>
				</View>
				
			</ScrollView>
		)
	}
}