import {deepMerge} from '../../services/utils';
import {createThemeStyles, Styles} from '../../services/style';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'light'
  | 'link'
  | 'linkSmall'
  | 'barItem';

export interface ButtonSX {
  container?: any;
  containerPressed?: any;
  containerDisabled?: any;
  text?: any;
  textPressed?: any;
  textDisabled?: any;
  icon?: any;
  iconPressed?: any;
  iconDisabled?: any;
}

export const useStyles = createThemeStyles(({colors, fonts}) => {
  function createBaseStyle(type: string, add: Styles = {}) {
    return deepMerge<Styles>(
      {
        [`${type}Container`]: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          paddingHorizontal: 2,
          minHeight: 48,
          backgroundColor: colors.primary,
        },
        [`${type}ContainerPressed`]: {
          opacity: 0.7,
        },
        [`${type}ContainerDisabled`]: {
          backgroundColor: colors.disabled,
        },
        [`${type}Icon`]: {
          padding: 6,
          tintColor: colors.background,
        },
        [`${type}Text`]: {
          fontFamily: fonts.primary600,
          fontSize: 16,
          textAlign: 'center',
          color: colors.background,
          padding: 6,
        },
        [`${type}TextDisabled`]: {
          color: colors.disabledD1,
        },
        [`${type}IconDisabled`]: {
          tintColor: colors.disabledD1,
        },
      },
      add
    );
  }
  function createLinkStyle(type: string, add: Styles = {}) {
    return deepMerge<Styles>(
      {
        [`${type}Container`]: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 40,
          minWidth: 40,
        },
        [`${type}ContainerPressed`]: {
          opacity: 0.7,
        },
        [`${type}Icon`]: {
          tintColor: colors.primary,
          padding: 4,
        },
        [`${type}IconDisabled`]: {
          tintColor: colors.disabledD1,
        },
        [`${type}Text`]: {
          fontFamily: fonts.primary600,
          fontSize: 16,
          color: colors.primary,
          padding: 4,
        },
        [`${type}TextDisabled`]: {
          color: colors.disabledD1,
        },
      },
      add
    );
  }

  return {
    ...createBaseStyle('primary'),
    ...createBaseStyle('secondary', {
      secondaryContainer: {
        backgroundColor: colors.transparent,
        borderWidth: 1,
        borderColor: colors.primary,
      },
      secondaryText: {
        color: colors.primary,
      },
      secondaryIcon: {
        tintColor: colors.primary,
      },
    }),
    ...createBaseStyle('danger', {
      dangerContainer: {
        backgroundColor: colors.danger,
      },
    }),
    ...createBaseStyle('light', {
      lightContainer: {
        backgroundColor: colors.backgroundD1,
      },
      lightText: {
        color: colors.foregroundL1,
      },
      lightIcon: {
        tintColor: colors.foregroundL1,
      },
    }),
    ...createLinkStyle('barItem'),
    ...createLinkStyle('link'),
    ...createLinkStyle('linkSmall', {
      linkSmallText: {
        fontSize: 14,
      },
    }),
  } as {[key: string]: any};
});
