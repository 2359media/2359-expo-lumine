import { DateInput } from '../../';
import { createStory } from '../Story';
export default createStory({
    name: 'DateInput',
    Component: DateInput,
    options: ({ setState }) => ({
        mode: ['date', 'time'],
        title: ['Date of Birth', undefined],
        placeholder: ['dd mmm yyyy', undefined],
        value: [undefined, new Date()],
        dateFormat: [undefined, 'dd MMM yyyy, h:mma'],
        rounded: [false, true],
        editable: [true, false],
        onValueChange: [d => setState({ value: d })],
    }),
});
