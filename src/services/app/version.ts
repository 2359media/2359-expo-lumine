import m from '../../../modules';

export function getVersionString() {
  const {nativeApplicationVersion, nativeBuildVersion} = m.Application;
  return `${nativeApplicationVersion} (${nativeBuildVersion})`;
}
