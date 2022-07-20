import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from '../Text';
import {Button, ButtonProps} from '../Button';
import {createStyles} from '../../services/style';

interface Props {
  title?: string;
  backButton?: ButtonProps;
  left?: any;
  rightButtons?: ButtonProps[];
  right?: any;
  center?: any;
}

export function TopNavigation(props: Props) {
  const navigation = useNavigation();
  const canGoBack = useMemo(() => navigation.canGoBack(), []);

  return (
    <View style={styles.container}>
      <View style={styles.sideContainer}>
        {(canGoBack || props.backButton) && (
          <Button
            barItem
            icon={require('../../../assets/iconBack.png')}
            onPress={navigation.goBack}
            {...props.backButton}
          />
        )}
        {props.left}
      </View>
      <View style={styles.centerContainer}>
        {!!props.title && (
          <Text h3 style={styles.title}>
            {props.title}
          </Text>
        )}
        {props.center}
      </View>
      <View style={styles.sideContainer}>
        {props.rightButtons?.map((p, i) => (
          <Button barItem key={i} {...p} />
        ))}
        {props.right}
      </View>
    </View>
  );
}

const styles = createStyles({
  container: {
    flexDirection: 'row',
    zIndex: 100,
    marginHorizontal: -100,
    paddingHorizontal: 108,
    marginTop: -100,
    paddingTop: 108,
    paddingBottom: 8,
    alignItems: 'center',
  },
  sideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40,
    minHeight: 40,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
