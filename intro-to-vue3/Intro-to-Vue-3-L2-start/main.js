// const product = 'Socks'

const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            // description: 'A warm fuzzy pair of socks.'
            image: './assets/images/socks_blue.jpg',
            // url: 'https://www.vuemastery.com'
            // inStock: true,
            inventory: 8,
            onSale: true,
        }
    }
})