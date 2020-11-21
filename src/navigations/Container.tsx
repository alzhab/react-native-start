import React, {Component, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import {Loading, Modal, NoticeMessage} from '@molecules';
import {ThemeContext} from '@styles/base';
import {RootNavigations} from '@navigations/routes';
import {loadingStore, noticeMessageStore, modalStore} from '@stores';

const Stack = createStackNavigator();

@observer
class Container extends Component {
  static contextType = ThemeContext;
  
  render(): ReactElement {
  	const {colors} = this.context;
  
  	return (
  		<>
  			<Loading loading={loadingStore.loading}/>
  			<NoticeMessage text={noticeMessageStore.text} show={noticeMessageStore.show} type={noticeMessageStore.type}/>
  			<Modal full={modalStore.modalProps.full} show={modalStore.modalProps.show} empty={modalStore.modalProps.empty}
  				closeModal={() => modalStore.closeModal()}>
  				{modalStore.modalProps.children()}
  			</Modal>
     
  			<NavigationContainer theme={{
  				dark: false, colors: {
  					primary: colors.PRIMARY,
  					background: colors.MAIN_BG,
  					card: colors.MAIN_BG,
  					text: colors.FONT,
  					border: colors.FONT,
  					notification: colors.FONT
  				}
  			}}>
  				<Stack.Navigator headerMode={'none'}>
  					{
  						RootNavigations.map(route => (
  							<Stack.Screen key={route.name} name={route.name} component={route.component} />
  						))
  					}
  				</Stack.Navigator>
  			</NavigationContainer>
    
  			
  		</>
  	);
  }
}

export default Container;
