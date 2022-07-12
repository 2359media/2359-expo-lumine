import { Text } from '../../';
import { createStory } from '../Story';
export default createStory({
    name: 'Text',
    Component: Text,
    options: {
        children: [<>Lorem ipsum dolor sit amet</>],
        h1: [false, true],
        h2: [false, true],
        h3: [false, true],
        h4: [false, true],
        h5: [false, true],
        p2: [false, true],
        p3: [false, true],
        p4: [false, true],
        f1: [false, true],
        onPress: [undefined, () => { }],
    },
    radios: [['h1', 'h2', 'h3', 'h4', 'h5', 'p2', 'p3', 'p4', 'f1']],
});
