import React, { useContext, useMemo } from 'react';
import { View, Image } from 'react-native';
import { Scaffold, Text, PageView, Button, createStyles, colors, ThemeContext, } from '../..';
import { AutoDirectionView } from '../components/AutoDirectionView';
import { useSelector } from '../services/store';
export function MainView(props) {
    const theme = useContext(ThemeContext);
    const styleIndex = useSelector(s => s.settings.styleIndex);
    const tintTheme = useMemo(() => props.tint
        ? {
            ...theme,
            colors: {
                ...theme.colors,
                primary: props.tint,
                primaryD1: props.tintD1 ?? props.tint,
                background: props.backgroundTint ?? theme.colors.background,
            },
            key: theme.key + props.tint,
        }
        : theme, [theme, props.tint]);
    return (<ThemeContext.Provider value={tintTheme}>
      <Scaffold.View contentContainerStyle={styles.contentContainer} topView={props.coverImage && (<Image style={styles.coverImage} resizeMode="stretch" source={props.coverImage}/>)}>
        <AutoDirectionView>
          <View style={styles.section}>
            {props.topImage && (<Image style={styles.topImage} resizeMode="cover" source={props.topImage}/>)}
            {props.topTitle && (<Text h1 style={styles.topTitle}>
                {props.topTitle}
              </Text>)}
            {props.topDesc && (<Text p2 style={styles.topDesc}>
                {props.topDesc}
              </Text>)}
            {props.topContent}
          </View>
          <View style={styles.section}>
            <View style={styles.titleContainer}>
              {props.logoImage && (<Image style={styles.logo} source={props.logoImage} resizeMode="center"/>)}
              {props.title && (<Text h1 style={styles.title}>
                  {props.title}
                </Text>)}
              {props.desc && (<Text p2 style={styles.desc}>
                  {props.desc}
                </Text>)}
            </View>
            <PageView.Footer>
              <Button rounded={styleIndex == 0} secondary={styleIndex == 1} style={styles.button} text={props.actionText} onPress={props.action}/>
            </PageView.Footer>
          </View>
        </AutoDirectionView>
      </Scaffold.View>
    </ThemeContext.Provider>);
}
const styles = createStyles({
    contentContainer: {
        paddingTop: 48,
        paddingBottom: 24,
    },
    coverImage: {
        position: 'absolute',
        width: undefined,
        aspectRatio: 750 / 1066,
        left: 0,
        bottom: 0,
        right: 0,
    },
    topImage: {
        position: 'absolute',
        width: undefined,
        height: undefined,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'visible',
    },
    topTitle: {
        fontSize: 40,
        lineHeight: 60,
        color: colors.white,
        marginBottom: 12,
    },
    topDesc: {
        color: colors.white,
    },
    section: {
        flex: 1,
        marginHorizontal: -24,
        paddingHorizontal: 24,
    },
    titleContainer: {
        flex: 1,
        marginTop: 36,
    },
    title: {
        textAlign: 'center',
        marginBottom: 16,
    },
    desc: {
        textAlign: 'center',
    },
    logo: {
        flex: 1,
        alignSelf: 'center',
    },
    button: {
        marginTop: 12,
    },
});
