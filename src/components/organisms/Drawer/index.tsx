import React, {ReactElement, useContext} from 'react';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {TextSize, ThemeContext} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {useNavigation} from '@react-navigation/native'
import {Header} from './components';
import {Navigations} from '@navigations/Navigations';
import {Logout} from '@assets/icons';

const CustomDrawerContent = (props: DrawerContentComponentProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const navigation = useNavigation();
	
	const logout = () => {
	};
	
	return (
		<>
			<Header/>
			<DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: scaleSize(25)}}>
				<DrawerItemList {...props}
					labelStyle={{
						marginLeft: 0,
						paddingLeft: 0,
						marginHorizontal: 0,
						paddingHorizontal: 0,
						fontSize: TextSize.medium
					}}/>
			</DrawerContentScrollView>
			<DrawerItem
				icon={() => <Logout color={colors.PRIMARY} scale={1.5} />}
				label="Logout"
				style={{marginBottom: scaleSize(25)}}
				onPress={() => logout()}
			/>
		</>
	);
};

export default CustomDrawerContent;
