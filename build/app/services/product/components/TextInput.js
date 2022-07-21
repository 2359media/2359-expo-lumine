import { TextInput } from '../../../..';
import { addProduct } from '../Product';
addProduct({
    id: 'TextInput',
    groupId: 'Components',
    component: TextInput,
    types: {
        Primary: { title: 'Title' },
        Rounded: { placeholder: 'Placeholder', rounded: true },
        Multiline: {
            title: 'Title',
            placeholder: 'Multiline',
            rounded: true,
            multiline: true,
        },
    },
});
