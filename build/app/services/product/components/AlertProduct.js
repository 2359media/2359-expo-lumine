import { Button, showAlert } from '../../../..';
import { addProduct } from '../Product';
addProduct({
    id: 'Alert',
    groupId: 'Components',
    component: Button,
    defaultProps: {
        text: 'Show Alert',
        onPress() {
            showAlert('Title', 'Message');
        },
    },
});
