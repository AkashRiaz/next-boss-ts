type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock">;

type ProductWithColor = Required<Product>;

const product1: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "$300",
  stock: 30,
  color: "Red",
};

type OptionalProduct = Partial<Product>;

const product2: OptionalProduct = {
  id: 123,
};
