import React, {useContext, useEffect, useRef} from 'react';
import {View, ViewProps} from 'react-native';
import Context from './Context';

export default function Footer(props: ViewProps) {
  const {footerFrame, setFooterFrame, containerRef} = useContext(Context);
  const ref = useRef<View>(null);
  const widthRef = useRef<number>(0);

  function measure() {
    ref?.current?.measureLayout(
      containerRef?.current,
      (x, y, width, height) => {
        const l = {x, y, width, height};
        if (Math.abs(widthRef.current - width) > 1) {
          widthRef.current = width;
          if (!footerFrame || Math.abs(l.y - footerFrame.y) > 1) {
            setFooterFrame?.(l);
          }
        }
      },
      () => {}
    );
  }
  useEffect(measure);

  return (
    <View
      ref={ref}
      {...props}
      style={[{minHeight: footerFrame?.height}, props.style]}
      onLayout={measure}
    />
  );
}
