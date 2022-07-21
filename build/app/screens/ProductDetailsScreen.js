import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Scaffold, TopNavigation, Tabs, Text } from '../..';
import { createScreen } from '../services/navigation';
import { getProductById } from '../services/product';
export default createScreen('ProductDetails', ({ id }) => {
    const data = useMemo(() => getProductById(id), [id]);
    const [state, setState] = useState({ props: {} });
    if (!data || !data?.component) {
        return <View />;
    }
    const Component = data.component;
    const types = data.types ?? { Default: {} };
    return (<Scaffold.ScrollView topNav={<TopNavigation title={id}/>} bottomView={data.modifiers &&
            Object.keys(data.modifiers).map(k => {
                const options = Object.keys(data.modifiers[k]);
                return (<React.Fragment key={k}>
              <Text h5>{k}</Text>
              <Tabs selectedIndex={state[k] || 0} data={options} onValueChange={i => setState({
                        ...state,
                        [k]: i,
                        props: {
                            ...state.props,
                            ...data.modifiers[k][options[i]],
                        },
                    })}/>
            </React.Fragment>);
            })}>
      {Object.keys(types).map(k => {
            return (<View key={k} style={{ marginBottom: 16 }}>
            <Component {...(data.defaultProps ?? {})} {...types[k]} {...state.props}/>
          </View>);
        })}
    </Scaffold.ScrollView>);
});
