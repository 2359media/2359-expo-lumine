import { DateInput } from '../../../..';
import { addProduct } from '../Product';
addProduct({
    id: 'DateInput',
    groupId: 'Components',
    component: DateInput,
    types: {
        Primary: { title: 'Date of Birth' },
        Rounded: {
            placeholder: 'Time',
            dateFormat: 'hh:mm a',
            mode: 'time',
            rounded: true,
        },
    },
});
