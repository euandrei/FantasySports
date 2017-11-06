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
import SmallTabbar from "../../Pages/components/SmallTabbar";
import Tab from "../../Pages/components/Tab";
import GridSection from "../../Pages/components/GridSection";
import GridCellWrapper from "../../Pages/components/GridSection";

import Carousel from "../../Pages/components/Carousel";

import { colors, storeTemplateStyle } from "../../Pages/styles";

export default class StoreTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activeTab: 3,
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
				lines
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
			</GridSection>
		)
	}
	_renderBuffsTab(){
		return (
			<GridSection
				title={"Title"}
				titlePosition={"center"}
				lines
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
			</GridSection>
		)
	}
	_renderNerfsTab(){
		return (
			<GridSection
				title={"Title"}
				titlePosition={"center"}
				lines
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
			</GridSection>
		)
	}
	_renderGoldTab(){
		return (
			<GridSection
				title={"Title"}
				titlePosition={"center"}
				lines
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
			</GridSection>
		)
	}
	render(){
		let height = Dimensions.get('window').height;
		return(
			<ScrollView style={[storeTemplateStyle.container,{minHeight: height}]}>
				


					<View style={storeTemplateStyle.header}>
						<Header 
							leftIcon={require('../../../assets/trophy.png')}
							logo={require('../../../assets/logo.png')}
							circle={"4"}
						/>
					</View>

					<View style={storeTemplateStyle.carousel}>
						<Carousel />
					</View>
		
					<View>
						<SmallTabbar
							activeTab={this.state.activeTab}
							onChange={(id)=>{this.setState({activeTab: id})}}
							filter={require('../../../assets/filter.png')}
							onFilter={()=>{}}
						>	
							
							<Tab 
								tabTitle={"All"}
							>
								{this._renderAllTab()}
							</Tab>

							<Tab 
								tabTitle={"Buffs"}
							>
								{this._renderBuffsTab()}
							</Tab>	

							<Tab 
								tabTitle={"Nerfs"}
							>
								{this._renderNerfsTab()}
							</Tab>	

							<Tab 
								tabTitle={"Gold"}
							>
								{this._renderGoldTab()}
							</Tab>	
							
											
						</SmallTabbar>
					</View>
				
					
				

				
			</ScrollView>
		)
	}
}
