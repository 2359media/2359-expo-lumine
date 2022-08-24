export default function findErrorMessage(r: any): string {
  if (typeof r == 'string') {
    return r.replace(/^\[.*\] /, '');
  }
  if (typeof r == 'object') {
    return findErrorMessage(r.message || r.messages || Object.values(r)[0]);
  }
  return 'Oops, something wrong!';
}
