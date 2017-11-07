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

import SmallTabbar from "../../Pages/components/SmallTabbar";
import Tab from "../../Pages/components/Tab";

import Carousel from "../../Pages/components/Carousel";

import { colors, storeTemplateStyle } from "../../Pages/styles";

export default class StoreTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activeTab: 0,
			activeBigTab: 0,
		}
		this._renderAllTab = this._renderAllTab.bind(this);
		this._renderBuffsTab = this._renderBuffsTab.bind(this);
		this._renderNerfsTab = this._renderNerfsTab.bind(this);
		this._renderGoldTab = this._renderGoldTab.bind(this);
	}
	_renderAllTab(){
		return (
			<GridSection
				title={"Title"}
				titlePosition={"center"}
				line

				withUnderText
			>
				{[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((value, i) => {
					return (
						<GridCellWrapper
							key={i}
							bgColor={colors.watermelonBg}
							title={"Test"}
							image={require('../../../assets/nerfs/bear_trap.png')}
							type={"buff"}
							underText={0.99}
						/>
					)
				})}
			</GridSection>
		)
	}
	_renderBuffsTab(){
		return (
			<GridSection
				title={"Title"}
				titlePosition={"center"}
				line

				withUnderText
			>
				{[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((value, i) => {
					return (
						<GridCellWrapper
							key={i}
							bgColor={colors.watermelonBg}
							title={"Test"}
							image={require('../../../assets/nerfs/bear_trap.png')}
							type={"nerfs"}
							underText={0.99}
						/>
					)
				})}
			</GridSection>
		)
	}
	_renderNerfsTab(){
		return (
			<GridSection
				title={"Title"}
				titlePosition={"center"}
				line

				withUnderText
			>
				{[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((value, i) => {
					return (
						<GridCellWrapper
							key={i}
							bgColor={colors.watermelonBg}
							title={"Test"}
							image={require('../../../assets/nerfs/bear_trap.png')}
							type={"buff"}
							underText={0.99}
						/>
					)
				})}
			</GridSection>
		)
	}
	_renderGoldTab(){
		return (
			<GridSection
				title={"Title"}
				titlePosition={"center"}
				line

				withUnderText
			>
				{[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((value, i) => {
					return (
						<GridCellWrapper
							key={i}
							bgColor={colors.watermelonBg}
							title={"Test"}
							image={require('../../../assets/nerfs/bear_trap.png')}
							type={"nerfs"}
							underText={0.99}
						/>
					)
				})}
			</GridSection>
		)
	}

	render(){
		let height = Dimensions.get('window').height;

		return(
			<ScrollView style={[storeTemplateStyle.container,{minHeight: height}]}>
				<View style={storeTemplateStyle.header}>
					<Header 
						leftIcon={require('../../../assets/back.png')}
						// logo={require('../../../assets/logo.png')}
						title={"store"}
						// circle={"4"}
					/>
				</View>

				<View style={storeTemplateStyle.carousel}>
					<Carousel />
				</View>

				<View style={{paddingLeft: 10, paddingRight: 10}}>
					<SmallTabbar
						activeTab={this.state.activeTab}
						onChange={(id)=>{this.setState({activeTab: id})}}
						// filter={require('../../../assets/filter.png')}
						// onFilter={()=>{}}
					>	
						
						<Tab 
							tabTitle={"ALL"}
						>
							{this._renderAllTab()}
						</Tab>

						<Tab 
							tabTitle={"BUFFS"}
						>
							{this._renderBuffsTab()}
						</Tab>	

						<Tab 
							tabTitle={"NERFS"}
						>
							{this._renderNerfsTab()}
						</Tab>	

						<Tab 
							tabTitle={"GOLD"}
						>
							{this._renderGoldTab()}
						</Tab>	
						
										
					</SmallTabbar>
				</View>
				
			</ScrollView>
		)
	}
}