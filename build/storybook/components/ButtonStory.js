import { Button } from '../../';
import { createStory } from '../Story';
export default createStory({
    name: 'Button',
    Component: (Button),
    options: {
        text: ['Button'],
        secondary: [false, true],
        link: [false, true],
        small: [false, true],
        large: [false, true],
        rounded: [false, true],
        disabled: [false, true],
    },
});
