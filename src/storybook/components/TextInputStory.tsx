import {TextInput} from '../../';
import {createStory} from '../Story';

export default createStory({
  name: 'TextInput',
  Component: TextInput,
  options: {
    title: ['Title', undefined],
    placeholder: ['This is a placeholder', undefined],
    value: [
      '',
      'This is a simple value',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
    multiline: [false, true],
    secureTextEntry: [false, true],
    rounded: [false, true],
    editable: [true, false],
  },
});
