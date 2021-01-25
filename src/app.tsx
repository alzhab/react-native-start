import React, {Component, ReactElement} from 'react';
import Container from '@navigations/Container';
import {Splash} from '@modules';
import {COLORS} from '@styles/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, StatusBar} from 'react-native';
import {OnboardingContext} from './context';
import {authStore, exclusiveStore, loadingStore, modalStore, noticeMessageStore} from '@stores';
import {observer, Provider} from 'mobx-react';

const stores = {
  loadingStore,
  noticeMessageStore,
  modalStore,
  authStore,
  exclusiveStore
};

class WithStores extends Component {
  render() {
    return <Provider {...stores}>{this.props.children}</Provider>;
  }
}

@observer
class WithAuthCheck extends Component<{
  hideSplash: () => void
}> {
  state = {
    showIntro: false
  };
  
  componentDidMount() {
    authStore.getAuthData()
      .then(() => {
        this.props.hideSplash();
      })
  }
  
  render(): ReactElement {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

class WithOnboarding extends Component<{
  hideSplash: () => void
}> {
  state = {
    showIntro: false
  };
  
  componentDidMount() {
    this.getShowIntroFromStorage();
  }
  
  getShowIntroFromStorage() {
    AsyncStorage.getItem('showOnboarding')
      .then(res => {
        setTimeout(() => {
          this.setState({showOnboarding: res === null}, () => {
            this.props.hideSplash();
          });
        }, 1000);
      })
      .catch(e => {
        console.log('getShowIntroFromStorage error: ', e);
      });
  }
  
  hideIntro() {
    const jsonValue = JSON.stringify(false);
    AsyncStorage.setItem('showOnboarding', jsonValue)
      .then(res => {
        console.log('Hide intro: ', res);
      })
      .catch(e => {
        console.log('Hide intro error: ', e);
      });
  }
  
  render(): ReactElement {
    return (
      <OnboardingContext.Provider
        value={{
          showOnboarding: this.state.showIntro,
          hideOnboarding: () => this.hideIntro()
        }}>
        {this.props.children}
      </OnboardingContext.Provider>
    );
  }
}

class App extends Component {
  state = {
    onBoardingLoded: false,
    authCheckLoaded: false
  };
  
  render(): ReactElement {
    const loading = !this.state.onBoardingLoded || !this.state.authCheckLoaded;
  
    return (
      <>
        <StatusBar backgroundColor={COLORS.PRIMARY} barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}/>
        <WithOnboarding hideSplash={() => this.setState({onBoardingLoded: true})}>
          <WithAuthCheck hideSplash={() => this.setState({authCheckLoaded: true})}>
            {!loading ? (
              <WithStores>
                <Container/>
              </WithStores>
            ) : null}
            <Splash show={loading}/>
          </WithAuthCheck>
        </WithOnboarding>
      </>
    );
  }
}

export default App;
