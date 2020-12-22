import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
  { 
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    }
  },
  { 
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    }
  }
]
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem 
          title='Iden Han'
          subTitle='idenhan129@gmail.com'
          image={require('../assets/iden.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems} 
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon 
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem 
        title="Log Out"
        IconComponent={
          <Icon 
            name="logout" 
            backgroundColor="#ffe66d" 
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light,
  }
})

export default AccountScreen;