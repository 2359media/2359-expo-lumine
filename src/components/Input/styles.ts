import {createThemeStyles} from '../../services/style';

export const useThemeStyles = createThemeStyles(({fonts, colors}) => ({
  container: {
    marginBottom: 24,
  },
  title: {
    position: 'absolute',
    left: 16,
    right: 16,
    fontFamily: fonts.primary400,
    color: colors.greyL1,
  },
  placeholder: {
    position: 'absolute',
    top: 19,
    left: 16,
    right: 16,
    fontSize: 16,
    fontFamily: fonts.primary400,
    color: colors.greyL1,
  },
  value: {
    marginTop: 19,
    marginHorizontal: 16,
    marginBottom: 4,
    fontSize: 16,
    lineHeight: 24,
    minHeight: 24,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: fonts.primary400,
    color: colors.black,
  },
  valueRounded: {
    marginTop: 14,
    marginHorizontal: 16,
    marginBottom: 14,
    lineHeight: 21,
    minHeight: 21,
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: fonts.primary400,
    color: colors.black,
  },
  border: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    bottom: 0,
    backgroundColor: colors.greyL1,
  },
  borderRounded: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 8,
    borderColor: '#C2C9D1',
    borderWidth: 1,
  },
  error: {
    marginVertical: 4,
    marginHorizontal: 16,
    fontFamily: fonts.primary400,
    fontSize: 12,
    color: colors.danger,
  },
}));
