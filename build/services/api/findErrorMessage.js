export default function findErrorMessage(r) {
    if (typeof r == 'string') {
        return r;
    }
    if (typeof r == 'object') {
        return findErrorMessage(r.message || r.messages || Object.values(r)[0]);
    }
    return 'Oops, something wrong!';
}
