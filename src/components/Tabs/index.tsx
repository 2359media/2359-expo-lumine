import React from 'react';
import {View, ViewProps} from 'react-native';
import {createThemeStyles} from '../../services/style';
import {Button} from '../Button';

interface TabsProps extends ViewProps {
  selectedIndex?: number;
  data?: string[];
  onValueChange?(index: number): void;
}

export function Tabs(props: TabsProps) {
  const styles = useThemeStyles();
  return (
    <View style={[styles.container, props.style]}>
      {props.data?.map((d, i) => (
        <Button
          key={i}
          text={d}
          sx={{
            text: styles.text(props.selectedIndex == i),
            pressed: styles.itemPressed,
          }}
          style={styles.item(props.selectedIndex == i)}
          onPress={() => props.onValueChange?.(i)}
        />
      ))}
    </View>
  );
}

const useThemeStyles = createThemeStyles(({colors}) => ({
  container: {
    flexDirection: 'row',
    marginHorizontal: -2,
  },
  item: (selected?: boolean) => ({
    flex: 1,
    marginHorizontal: 2,
    minHeight: 36,
    backgroundColor: selected ? colors.primary : colors.background,
  }),
  text: (selected?: boolean) => ({
    fontSize: 14,
    color: selected ? colors.background : colors.foreground,
  }),
  itemPressed: {
    opacity: 0.8,
  },
}));
