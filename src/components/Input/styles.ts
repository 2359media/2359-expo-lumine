import {createThemeStyles} from '../../services/style';

export const useThemeStyles = createThemeStyles(({fonts, colors}) => ({
  container: {
    marginBottom: 24,
  },
  border: {
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderLine: {
    paddingTop: 20,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: colors.foregroundL3,
  },
  borderRounded: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 12,
    borderRadius: 8,
    borderColor: colors.backgroundD2,
    borderWidth: 1,
  },
  borderDisabled: {
    backgroundColor: colors.disabled,
  },
  title: {
    position: 'absolute',
    left: 16,
    right: 16,
    fontFamily: fonts.primary400,
    color: colors.foregroundL3,
  },
  value: {
    flex: 1,
    marginLeft: 12,
    marginRight: 4,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: fonts.primary400,
    color: colors.foreground,
  },
  valueLine: {
    fontSize: 16,
    lineHeight: 24,
    minHeight: 24,
  },
  valueRounded: {
    top: -1,
    fontSize: 14,
    lineHeight: 21,
    minHeight: 21,
  },
  valueRoundedHasTitle: {
    top: 6,
  },
  valueEmpty: {
    color: colors.foregroundL3,
  },
  icon: {
    tintColor: colors.foregroundL3,
  },
  error: {
    marginVertical: 4,
    marginHorizontal: 16,
    fontFamily: fonts.primary400,
    fontSize: 12,
    color: colors.danger,
  },
}));
