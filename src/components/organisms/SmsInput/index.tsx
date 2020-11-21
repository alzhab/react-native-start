import React, {ReactElement, useContext} from 'react';
import {TextInput} from 'react-native';
import {getStyles} from './styles';
import {InputProps} from './interfaces';
import {ThemeContext} from '@styles/base';
import {Flex} from '@components';

const Index = (props: InputProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const styles = getStyles(colors);
 
	return (
		<Flex styles={styles.inputItem}>
			<TextInput
				onKeyPress={({ nativeEvent }) => {
					if(nativeEvent.key === 'Backspace' && props.delete) {
						props.delete()
					}
				}}
				maxLength={1}
				caretHidden={true}
				ref={props.customRef}
				placeholder=''
				autoCapitalize='none'
				keyboardType='number-pad'
				placeholderTextColor={colors.FONT_SECOND}
				style={styles.input}
				onChangeText={(val: string) => {
					props.onChange(val)
				}}
			/>
		</Flex>
	);
};

export default Index;
