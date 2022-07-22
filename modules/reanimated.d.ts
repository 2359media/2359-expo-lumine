import Animated from 'react-native-reanimated';
import * as Rest from 'react-native-reanimated';
export type * from 'react-native-reanimated';

declare const modules: typeof Rest & {Animated: typeof Animated};

export default modules;
