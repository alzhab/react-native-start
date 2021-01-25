import React, {Component, ReactElement} from 'react';
import {Flex} from '@components';
import {State} from './interfaces';
import {observer} from 'mobx-react';
import {CONTAINER_VER_PADDING} from '@styles/spacing';
import {Best, Categories, Exclusive, Header, Search} from './components';
import {ScrollView} from 'react-native';
import {exclusiveStore} from '@stores';

@observer
export default class Start extends Component {
  state: State = {
    show: true
  };
  
  componentDidMount(): void {
    exclusiveStore.getData();
  }
  
  render(): ReactElement {
    return (
      <ScrollView style={{width: '100%'}} bounces={true}>
        <Flex full size={1} styles={{paddingVertical: CONTAINER_VER_PADDING}}>
          <Header />
          
          <Search />
          
          <Exclusive loading={exclusiveStore.loading} data={exclusiveStore.data}/>
          
          <Best loading={exclusiveStore.loading} data={exclusiveStore.data} />
  
          <Categories loading={exclusiveStore.loading} categories={exclusiveStore.data} products={exclusiveStore.data} />
        </Flex>
      </ScrollView>
    );
  }
}

