import { defineStore } from 'pinia'

export const usePhoneStore = defineStore('phoneStore', {
  state: () => ({
    phones: [
      {
        id: 1,
        slug: 'iphone-15',
        name: 'iPhone 15',
        price: 999,
        description: 'The latest iPhone with a powerful A16 chip and USB-C connector.',
        image: '/frontend_Eshop_with_phones/img/iphone15.jpg',
      },
      {
        id: 2,
        slug: 'samsung-s24',
        name: 'Samsung S24',
        price: 899,
        description: 'Samsung\'s flagship with Galaxy AI artificial intelligence features.',
        image: '/frontend_Eshop_with_phones/img/s24.jpg'
      },
      {
        id: 3,
        slug: 'pixel-8',
        name: 'Google Pixel 8',
        price: 799,
        description: 'Pure Android, the best camera for night photography, and smart features.',
        image: '/frontend_Eshop_with_phones/img/pixel 8.jpg'
      },
      {
        id: 4,
        slug: 'xiaomi-13',
        name: 'Xiaomi 13',
        price: 650,
        description: 'Top value for money. Fast 67W charging and a superb screen.',
        image: '/frontend_Eshop_with_phones/img/Xiaomi 13.jpg',
      },
      {
        id: 5,
        slug: 'xperia-1',
        name: 'Sony Xperia 1',
        price: 1100,
        description: 'For film and photography enthusiasts. 4K OLED display and professional cameras.',
        image: '/frontend_Eshop_with_phones/img/xperia.jpg'
      },

      {
        id: 6,
        slug: 'one-plus-12',
        name: 'OnePlus 12',
        price: 850,
        description: 'Incredible speed and charging that charges in 20 minutes.',
        image: '/frontend_Eshop_with_phones/img/one-plus12.jpg'
      },
      {
        id: 7,
        slug: 'Z-flip-5',
        name: 'Samsung Z Flip 5',
        price: 999,
        description: 'A stylish foldable smartphone that fits in any pocket.',
        image: '/frontend_Eshop_with_phones/img/flip5.jpg'
      },
      {
        id: 8,
        slug: 'rog-phone-8',
        name: 'Asus ROG Phone 8',
        price: 1200,
        description: 'A monster for gaming. RGB lighting and the most powerful cooling.',
        image: '/frontend_Eshop_with_phones/img/rog-phone-8.jpg'
      },
      {
        id: 9,
        slug: 'edge-40',
        name: 'Motorola Edge 40',
        price: 450,
        description: 'A slim, lightweight and elegant smartphone with pure Android.',
        image: '/frontend_Eshop_with_phones/img/edge40.jpg'
      }
    ],
    cart: []
  }),

  getters: {
    cartCount: (state) => state.cart.length,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price, 0)
  },

  actions: {
    addToCart(phone) {
      this.cart.push(phone);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    clearCart() {
      this.cart = [];
    }
  }
})