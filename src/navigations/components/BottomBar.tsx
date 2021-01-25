import React from 'react';
import {Button, Flex, Text} from '@components';
import {Colors, COLORS} from '@styles/base';
import {AI, ButtonTypes, JC, Navigations} from '@types';
import {boxShadow, scaleSize} from '@styles/mixins';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

const BottomBar = (props: BottomTabBarProps) => {
  const routes = props.state.routes;
  const history = props.state.history;
  const descrptors = props.descriptors;
  
  const activeKey = history[history.length - 1].key;
  
  const navigate = (route: Navigations, key: string) => {
    if (activeKey !== key) {
      props.navigation.navigate(route)
    }
  };
  
  return (
    <Flex
      full
      ai={AI.center}
      jc={JC.spaceBetween}
      styles={{
        backgroundColor: COLORS.MAIN_BG,
        paddingTop: scaleSize(20),
        paddingBottom: scaleSize(30),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        ...boxShadow()
      }}>
      
      {routes.map(route => {
        const key = route.key;
        const options = descrptors[key].options;
        // @ts-ignore
        const Icon = options.Icon;
        const isActive = activeKey === key;
        
        return (
          <Button
            key={route.name}
            empty
            type={ButtonTypes.EMPTY}
            click={() => navigate(Navigations[route.name], route.key)}>
            <Icon color={isActive ? COLORS.PRIMARY : COLORS.FONT_SECOND} size={20} />
            
            <Text
              color={isActive ? Colors.PRIMARY : Colors.FONT_SECOND}
              styles={{
                marginTop: 10
            }}>{options.title}</Text>
          </Button>
        )
      })}
    </Flex>
  );
};

export default BottomBar;
