import React, { useContext, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Context from './Context';
export default function IndicatorFrame(props) {
    const { indicatorFrame, setIndicatorFrame, containerRef } = useContext(Context);
    const [myFrame, setMyFrame] = useState();
    const ref = useRef(null);
    function measure() {
        ref?.current?.measureLayout(containerRef?.current, (x, y, width, height) => {
            if (!myFrame || Math.abs(myFrame.y - y) > 1) {
                const newLayout = { x, y, width, height };
                setMyFrame(newLayout);
                if (!indicatorFrame ||
                    y < indicatorFrame.y ||
                    Math.abs(width - indicatorFrame.width) > 1) {
                    setIndicatorFrame?.(newLayout);
                }
            }
        }, () => { });
    }
    useEffect(measure);
    return (<>
      <View style={{
            height: indicatorFrame && myFrame
                ? Math.max(myFrame.y - indicatorFrame.y, 0)
                : 0,
        }}/>
      <View ref={ref} {...props} style={[{ height: 24 }, props.style]} onLayout={measure}/>
    </>);
}
