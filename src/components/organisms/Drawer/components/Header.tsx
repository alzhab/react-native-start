import React, {ReactElement, useContext} from 'react';
import {Colors, TextFamily, TextSize, ThemeContext} from '@styles/base';
import {getStyles} from '../styles';
import {Flex, Image, Text} from '@components';
import {AI, JC} from '@types';

const Header = (): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const styles = getStyles(colors);
	
	return (
		<Flex styles={styles.header} jc={JC.center}>
			<Flex full dir={'row'} ai={AI.center}>
				<Flex styles={styles.headerImage}>
					<Image
						style={{width: '100%', height: '100%'}}
						source={require('@assets/images/profile.jpg')}
						resizeMode={'cover'}
					/>
				</Flex>
    
				<Flex>
					<Text family={TextFamily.BOLD} size={TextSize.large} color={Colors.PRIMARY}>
            Sophie Garnier
					</Text>
					<Text family={TextFamily.REGULAR} size={TextSize.medium} color={Colors.FONT_SECOND}>
            Luxembourg
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Header;
