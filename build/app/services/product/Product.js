const products = {};
export function addProduct(product) {
    products[product.id] = product;
}
export function getProductsByGroupId(groupId) {
    return Object.values(products)
        .filter(p => p.groupId == groupId)
        .sort((a, b) => (a.id > b.id ? 1 : -1));
}
export function getProductById(id) {
    return products[id];
}
// const products: {[key: string]: any} = {
//   Components: {
//     Alert: undefined,
//     Button: undefined,
//     DateInput: undefined,
//     Tabs: undefined,
//     TextInput: undefined,
//     TopNavigation: undefined,
//   },
//   Screens: {
//     Login: undefined,
//     Register: undefined,
//     OTP: undefined,
//   },
//   Technologies: {
//     PhotoFiltering: undefined,
//     MachineLearning: undefined,
//     ChatBot: undefined,
//   },
// };
