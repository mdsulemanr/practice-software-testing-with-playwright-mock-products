export const combinationPliers = {
  id: '01KQKGY3QYDXVV45G5ZT1SHTGK',
  name: 'Combination Pliers',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: 14.15,
  is_location_offer: false,
  is_rental: false,
  co2_rating: 'D',
  in_stock: true,
  is_eco_friendly: false,
  product_image: {
    id: '01KQKGY3QBM4XEE1W6V3JVBC90',
    by_name: 'Helinton Fantin',
    by_url: 'https://unsplash.com/@fantin',
    source_name: 'Unsplash',
    source_url: 'https://unsplash.com/photos/W8BNwvOvW4M',
    file_name: 'pliers01.avif',
    title: 'Combination pliers',
  },
  category: {
    id: '01KQKGY3Q0G9NP3XMCR2VWV08J',
    name: 'Pliers',
    slug: 'pliers',
  },
  brand: {
    id: '01KQKGY3CR9G63XNXTCGPPTGYZ',
    name: 'ForgeFlex Tools',
  },
};

export const discountedProduct = {
  ...combinationPliers,
  id: 'mock-discounted-product',
  name: 'Discounted Product',
  is_location_offer: true,
  price: 10.00,
  product_image: {
    ...combinationPliers.product_image,
    id: 'mock-discounted-product-image',
    title: 'Discounted product',
  },
};

export const expensiveProduct = {
  ...combinationPliers,
  id: 'mock-expensive-product',
  name: 'Expensive Product',
  price: 999.99,
  product_image: {
    ...combinationPliers.product_image,
    id: 'mock-expensive-product-image',
    title: 'Expensive product',
  },
};

export const outOfStockProduct = {
  ...combinationPliers,
  id: 'mock-out-of-stock-product',
  name: 'Out of Stock Product',
  in_stock: false,
  product_image: {
    ...combinationPliers.product_image,
    id: 'mock-out-of-stock-product-image',
    title: 'Out of stock product',
  },
};

export const productsResponse = (productsArray) => ({
  current_page: 1,
  data: productsArray,
  from: productsArray.length > 0 ? 1 : null,
  last_page: 1,
  per_page: 9,
  to: productsArray.length,
  total: productsArray.length,
});

export const errorResponse = (message) => ({
  error: message,
});
