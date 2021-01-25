import React, {Component} from 'react';
import {Button, Flex, Text} from '@components';
import {FormHeader, Header} from '../components';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {Colors} from '@styles/base';
import {ButtonTypes, NavigationProps, Navigations} from '@types';
import AnimateItTiming from '../../../components/atoms/AnimateItTiming';
import {Form} from './component';
import {observer} from 'mobx-react';
import {authStore, loadingStore} from '@stores';
import {SubmitData} from './component/Form/interfaces';

// Container Component
@observer
class Login extends Component<NavigationProps> {
  state = {
    email: '',
    password: '',
  };
  
  submit(data: SubmitData) {
    authStore.login(data)
  }
  
  render() {
    return (
      <AnimateItTiming
        style={{width: '100%', backgroundColor: '#FCFCFC', flex: 1}}
        interpolations={[{
          name: 'translateY',
          outputRange: [WINDOW_WIDTH, 0],
          dir: 'to'
        }]}>
        <>
          <Header />
    
          <Flex container full size={1}>
            <FormHeader title='Sign in' desc='Enter your emails and password'/>
    
            <Form submit={(data) => this.submit(data)}/>
            
            <Button empty type={ButtonTypes.EMPTY} styles={{marginTop: scaleSize(25)}} click={() => this.props.navigation.navigate(Navigations.Signup)} full>
              <Text>Don’t have an account? <Text color={Colors.PRIMARY}>Sign Up</Text></Text>
            </Button>
          </Flex>
        </>
      </AnimateItTiming>
    );
  }
}

export default Login;
