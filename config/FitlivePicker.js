import Constants from 'expo-constants';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform,FlatList,StyleSheet } from 'react-native';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';


const App = props => {
  console.log(props)

const handleChange = (e)=> {
  console.log(e)
  }
const data = [{'label':'One','value':'1One'},{'label':'Two','value':'2Two'}]
    return (<FlatList
                renderItem={({ item }) => (
                  <Touchable onPress={() => handleChange(item)}>
                   <Text
                        
                          >
                            {item && item['label']}
                          </Text>
                  </Touchable>
                )}
                contentContainerStyle={styles.FlatListyd}
                data={data}
              />)
  
}


const styles = StyleSheet.create({
  IconWO: {
    width: 24,
    height: 24,
  },
  Viewvz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    marginTop: 3,
    marginBottom: 3,
  },
  FlatListyd: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 20,
    paddingTop: 20,
    width: '100%',
  },
  ScreenContainerAu: {
    alignItems: 'center',
  },
  ViewWz: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextWv: {
    marginLeft: 32,
    textTransform: 'uppercase',
  },
  ViewNH: {
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  Viewn4: {
    alignSelf: 'stretch',
    paddingRight: 24,
    paddingLeft: 10,
  },
});
export default App
