import React from 'react-native';
import { H1, H2, H3, H4, H5, Body1, Body2, Body3, Body4 } from '../../';
import { createStory } from '../Story';
const allTypes = { H1, H2, H3, H4, H5, Body1, Body2, Body3, Body4 };
export default createStory({
    name: 'Typography',
    Component: () => (<>
      {Object.keys(allTypes).map(k => {
            const Comp = allTypes[k];
            return (<Comp key={k} style={{ marginBottom: 12 }}>
            {`<${k}>`}
          </Comp>);
        })}
    </>),
});
