import React from 'react';
import {View, ViewProps} from 'react-native';
import {createStyles} from '../../services/style';
import {Button} from '../Button';

interface TabsProps extends ViewProps {
  selectedIndex?: number;
  data?: string[];
  onValueChange?(index: number): void;
}

export function Tabs(props: TabsProps) {
  return (
    <View style={[styles.tabs, props.style]}>
      {props.data?.map((d, i) => (
        <Button
          key={i}
          text={d}
          type={props.selectedIndex == i ? 'primary' : 'light'}
          sx={styles}
          onPress={() => props.onValueChange?.(i)}
        />
      ))}
    </View>
  );
}

const styles = createStyles({
  tabs: {
    flexDirection: 'row',
    marginHorizontal: -2,
  },
  container: {
    flex: 1,
    marginHorizontal: 2,
    minHeight: 36,
  },
  text: {
    fontSize: 14,
  },
});
