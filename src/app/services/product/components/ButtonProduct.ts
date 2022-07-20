import {Button} from '../../../..';
import {addProduct} from '../Product';

addProduct({
  id: 'Button',
  groupId: 'Components',
  component: Button,
  defaultProps: {
    text: 'Button',
  },
  types: {
    Primary: {},
    'Primary Rounded': {rounded: true},
    Secondary: {secondary: true},
    'Secondary Rounded': {secondary: true, rounded: true},
    Link: {link: true},
  },
  modifiers: {
    State: {
      Enabled: {disabled: false},
      Disabled: {disabled: true},
    },
  },
});
