import { useState } from 'react';
import { View, Dimensions } from 'react-native';
function isHorizontal(size) {
    return size.width > size.height;
}
export function AutoDirectionView(props) {
    const [isH, setIsH] = useState(() => isHorizontal(Dimensions.get('window')));
    return (<View {...props} onLayout={e => isH !== isHorizontal(e.nativeEvent.layout) && setIsH(!isH)} style={[{ flexDirection: isH ? 'row' : 'column', flex: 1 }, props.style]}/>);
}
