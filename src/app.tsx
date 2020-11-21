import React, {Component, ReactElement} from 'react';
import {Provider} from 'mobx-react';
import Container from '@navigations/Container';
import {Splash} from '@modules';
import {ChangeColorsIN, defaultColors, ThemeContext} from '@styles/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from 'react-native';
import {loadingStore, noticeMessageStore, modalStore} from '@stores';

const stores = {
	loadingStore,
	noticeMessageStore,
	modalStore,
};

class App extends Component {
  state = {
  	load: true,
  	colors: defaultColors,
  	showIntro: false,
  };

  async componentDidMount() {
  	// await AsyncStorage.clear();
  	await this.getDataIntro();
  	await this.getData();
  }

  // СОХРАНЯЕМ В СОСТОЯНИЕ ЦВЕТА ИЗ ASYNC STORAGE ================================================
  async getData() {
  	try {
  		const value = await AsyncStorage.getItem('colors');
  		if (value === null) {
  			const colors = JSON.stringify(defaultColors);
  			await AsyncStorage.setItem('colors', colors);
  		} else {
  			this.setState({colors: JSON.parse(value)});
  		}
  		setTimeout(() => this.toggleLoad(), 1000);
  	} catch (e) {
  		this.toggleLoad();
  	}
  }

  async getDataIntro() {
  	try {
  		const value = await AsyncStorage.getItem('showIntro');
  		if (value === null) {
  			this.setState({showIntro: true});
  		}
  	} catch (e) {}
  }

  // СОХРАНЯЕМ В ASYNC STORAGE НОВЫЕ ЦВЕТА ================================================
  async storeData(value: ChangeColorsIN) {
  	try {
  		const jsonValue = JSON.stringify(value);
  		await AsyncStorage.setItem('colors', jsonValue);
  	} catch (e) {}
  }

  // МЕНЯЕМ ЦВЕТА И СОХРАНЯЕМ В ASYNC STORAGE ================================================
  changeColors(colors: ChangeColorsIN) {
  	colors = {
  		...defaultColors,
  		...colors,
  	};
  	this.setState({colors});
  	this.storeData(colors);
  }

  // ВКЛЮЧАЕМ / ВЫКЛЮЧАЕМ ЗАГРУЗКУ
  toggleLoad() {
  	this.setState({load: !this.state.load});
  }

  async storeDataIntro() {
  	try {
  		const jsonValue = JSON.stringify(false);
  		console.log(jsonValue);
  		await AsyncStorage.setItem('showIntro', jsonValue);
  	} catch (e) {}
  }

  hideIntro() {
  	this.storeDataIntro();
  }

  render(): ReactElement {
  	return (
  		<>
  			<StatusBar backgroundColor={this.state.colors.PRIMARY} barStyle={'light-content'} />
  			<ThemeContext.Provider
  				value={{
  					colors: this.state.colors,
  					showIntro: this.state.showIntro,
  					changeColors: (colors: ChangeColorsIN) => this.changeColors(colors),
  					hideIntro: () => this.hideIntro(),
  				}}>
  				{!this.state.load ? (
  					<Provider {...stores}>
  						<Container />
  					</Provider>
  				) : null}
  				<Splash show={this.state.load} />
  			</ThemeContext.Provider>
  		</>
  	);
  }
}

export default App;
