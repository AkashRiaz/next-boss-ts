const product = {
  id: 101,
  name: "Keyboard",
  price: 50,
};


const getProductProps = <T, K extends keyof T>(obj: T, key: K): T[K]=>{
    return obj[key]
}

const productName = getProductProps(product, "name")
console.log(productName)