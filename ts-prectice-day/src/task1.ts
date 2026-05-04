type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const calculateTotal = (item: CartItem): number => {
  const { price, quantity = 1 } = item;

  const totalCost = price * quantity;

  return totalCost;
};

const product1: CartItem = {
  name: "mouse",
  price: 27,
  quantity: 3,
};

const result = calculateTotal(product1);

console.log(result);
