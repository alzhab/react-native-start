import React, {ReactElement, useContext} from 'react';
import {TextInput} from 'react-native';
import {getStyles} from './styles';
import {InputProps} from './interfaces';
import {TextInputMask} from 'react-native-masked-text';
import {ThemeContext} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {Flex, InputError} from '@components';
import {AI} from '@types';

const Input = (props: InputProps): ReactElement => {
	const error = props.error;
	const {colors} = useContext(ThemeContext);
	const styles = getStyles(colors);
	const Icon = props.Icon;
	
	return (
		<Flex dir={'row'} ai={AI.center} full styles={styles.inputItem}>
			{
				Icon
					? (
				    <Flex styles={{marginRight: props.Icon ? scaleSize(6) : 0}}>
							<Icon scale={1.5} color={colors.PRIMARY} />
						</Flex>
					)
					: null
			}
   
			{
				props.mask
					? (
						<TextInputMask
							type="custom"
							options={{mask: props.mask}}
							secureTextEntry={props.secureTextEntry}
							placeholder={props.placeholder}
							autoCapitalize='none'
							keyboardType={props.keyboardType || 'default'}
							placeholderTextColor={error ? colors.ERROR : colors.FONT_SECOND}
							style={[styles.input, error ? styles.inputError : null]}
							value={props.value}
							caretHidden={props.caretHidden}
							onChangeText={(val: string) => {
								props.onChange(val)
							}}
						/>
					): (
						<TextInput
							secureTextEntry={props.secureTextEntry}
							placeholder={props.placeholder}
							autoCapitalize='none'
							value={props.value}
							multiline={props.textArea}
							keyboardType={props.keyboardType || 'default'}
							placeholderTextColor={error ? colors.ERROR : colors.FONT_SECOND}
							style={[styles.input, props.textArea ? styles.textArea : null, error ? styles.inputError : null]}
							caretHidden={props.caretHidden}
							onChangeText={(val: string) => {
								props.onChange(val)
							}}
						/>
					)
			}
   
			<InputError error={props.error} />
		</Flex>
	);
};

export default Input;
