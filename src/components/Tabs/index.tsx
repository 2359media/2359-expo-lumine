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
    <View style={[styles.container, props.style]}>
      {props.data?.map((d, i) => (
        <Button
          key={i}
          text={d}
          small
          rounded={false}
          light={props.selectedIndex !== i}
          style={styles.item}
          onPress={() => props.onValueChange?.(i)}
        />
      ))}
    </View>
  );
}

const styles = createStyles({
  container: {
    flexDirection: 'row',
    marginHorizontal: -2,
  },
  item: {
    flex: 1,
    marginHorizontal: 2,
  },
});
