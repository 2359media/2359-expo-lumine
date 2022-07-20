import React from 'react';
import {createScreen, navigate} from '../services/navigation';
import {TouchableHighlight} from 'react-native';
import {Scaffold, TopNavigation, createThemeStyles, Text} from '../..';
import {getProductsByGroupId} from '../services/product';

export default createScreen('Products', ({groupId}) => {
  const data = getProductsByGroupId(groupId);
  const styles = useThemeStyles();
  return (
    <Scaffold.FlatList
      topNav={<TopNavigation title={groupId} />}
      data={data}
      renderItem={({item}) => (
        <TouchableHighlight
          style={styles.item}
          underlayColor={styles.underlay.backgroundColor}
          onPress={() => navigate('ProductDetails', {id: item.id})}
        >
          <Text style={styles.itemText}>{item.id}</Text>
        </TouchableHighlight>
      )}
    />
  );
});

const useThemeStyles = createThemeStyles(({colors}) => ({
  item: {
    backgroundColor: colors.backgroundD1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 8,
  },
  itemText: {
    flex: 1,
  },
  underlay: {
    backgroundColor: colors.backgroundD2,
  },
}));
