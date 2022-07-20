export interface Product<T> {
  id: string;
  groupId: 'Components' | 'Screens' | 'Technologies';
  component?(props: T): any;
  defaultProps?: Partial<T>;
  types?: {
    [key: string]: Partial<T>;
  };
  modifiers?: {
    [key: string]: {
      [key: string]: Partial<T>;
    };
  };
}

const products: {[id: string]: Product<any>} = {};

export function addProduct<T>(product: Product<T>) {
  products[product.id] = product;
}

export function getProductsByGroupId(groupId: string): Product<any>[] {
  return Object.values(products)
    .filter(p => p.groupId == groupId)
    .sort((a, b) => (a.id > b.id ? 1 : -1));
}

export function getProductById(id: string): Product<any> | undefined {
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
