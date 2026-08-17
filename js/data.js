/**
 * Cafe Menu Data Configuration
 * Currency: ILS (₪)
 * Language: English
 */

window.CURRENCY = '₪';

window.CATEGORIES = [
  { id: 'all', name: 'All Items', icon: '✨' },
  { id: 'coffee', name: 'Coffee & Drinks', icon: '☕' },
  { id: 'pastries', name: 'Bakery & Sweets', icon: '🥐' },
  { id: 'sandwiches', name: 'Artisan Sandwiches', icon: '🥪' },
  { id: 'salads', name: 'Fresh Salads', icon: '🥗' },
  { id: 'beans', name: 'Coffee Beans', icon: '🫘' }
];

window.DIET_FILTERS = [
  { id: 'bestseller', label: '⭐ Best Seller' },
  { id: 'vegan', label: '🌱 Vegan' },
  { id: 'special', label: '🎉 Special' }
];

window.MENU_ITEMS = [
  // --- COFFEE & DRINKS ---
  {
    id: 'c1',
    name: 'Espresso',
    category: 'coffee',
    price: 8,
    description: 'INFORMATION ABOUT AMERICANO',
    image: 'https://cdn.shopify.com/s/files/1/0601/8783/6659/files/Espresso-cup-with-coffee-beans.jpg?v=1655750550',
    tags: ['bestseller'],
    inStock: true,
    options: {
      size: [
        { name: 'Short', price: 0 },
        { name: 'Short double', price: 2 },
        { name: 'Long', price: 0 },
        { name: 'Long double', price: 2 }
      ],
      milk: [
        { name: "Without milk", price: 0 },
        { name: 'Whole Milk', price: 2 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      TakeAway: { name: 'Take Away', price: 0 },
      Ice: { name: 'Ice', price: 0 },
      Temperature: { name: 'Hot Milk', price: 0 },
    }
  },
  {
    id: 'c2',
    name: 'Cappuccino',
    category: 'coffee',
    price: 14,
    description: 'Double shot of signature Ethiopian espresso blended with silky micro-foam steamed milk.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    inStock: true,
    options: {
      size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 2 }
      ],
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c6',
    name: 'Latte',
    category: 'coffee',
    price: 14,
    description: 'Espresso infused with house-made sweetened condensed milk, Madagascar vanilla, and caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    inStock: true,
    options: {
      size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 2 }
      ],
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c3',
    name: 'Cold Coffee',
    category: 'coffee',
    price: 16,
    description: 'Slow-steeped for 20 hours using single-origin Guatemalan beans. Smooth, chocolatey, and crisp over ice.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    inStock: true,
    options: {
      size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 2 }
      ],
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c4',
    name: 'Americano',
    category: 'coffee',
    price: 13,
    description: 'INFORMATION ABOUT AMERICANO',
    image: 'https://www.foodandwine.com/thmb/k8YTwOlm3J86ejoVCsrvrgoA47g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Partners-Americano-FT-BLOG0523-b8e18cc340574cc9bed536cceeec7082.jpg',
    tags: [],
    inStock: true,
    options: {
      size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 2 }
      ],
      milk: [
        { name: "Without milk", price: 0 },
        { name: 'Whole Milk', price: 2 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      Temperature: { name: 'Hot Milk', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c5',
    name: 'Cold Americano',
    category: 'coffee',
    price: 12,
    description: 'INFORMATION ABOUT AMERICANO',
    image: 'https://skillstrainingcollege.com.au/wp-content/uploads/2024/11/cold-espresso-tonic-a-highball-glass-filled-with-2023-11-27-05-34-53-utc-2048x1365.jpg.webp',
    tags: [],
    inStock: true,
    options: {
      size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 1 }
      ],
      milk: [
        { name: "Without milk", price: 0 },
        { name: 'Whole Milk', price: 2 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      Temperature: { name: 'Hot Milk', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c7',
    name: 'Flat White',
    category: 'coffee',
    price: 14,
    description: 'Ristretto espresso shots poured over velvety textured micro-foam milk for an intense coffee flavor.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    tags: [],
    inStock: true,
    options: {
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ]
    }
  },
  {
    id: 'c8',
    name: 'Macchiato',
    category: 'coffee',
    price: 14,
    description: 'INFORMATION ABOUT AMERICANO',
    image: 'https://img.bestrecipes.com.au/X1OxZDPR/br/2021/05/macchiato-unsplash-962590-1.jpg',
    tags: [],
    inStock: true,
    options: {
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c9',
    name: 'Cortado',
    category: 'coffee',
    price: 14,
    description: 'INFORMATION ABOUT AMERICANO',
    image: 'https://eclairncafe.com/wp-content/uploads/2023/06/cafe-cortado.jpeg',
    tags: [],
    inStock: true,
    options: {
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c10',
    name: 'Ice Tea',
    category: 'coffee',
    price: 12,
    description: 'INFORMATION ABOUT drink',
    image: 'https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=1.00xw:1.00xh;0,0',
    tags: [],
    inStock: true,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c11',
    name: 'Ceremonial Grade Matcha Latte',
    category: 'coffee',
    price: 19,
    description: 'Premium Japanese Uji ceremonial matcha whisked with warm oat milk and raw agave nectar.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    inStock: true,
    options: {
      version: [
        { name: 'First version', price: 0 },
        { name: 'Second version', price: 1 },
        { name: 'Third version', price: 2 }

      ],
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 0 },
        { name: 'Almond Milk', price: 0 },
        { name: 'Soy Milk', price: 0 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c12',
    name: 'Chocolate Cocao',
    category: 'coffee',
    price: 17,
    description: 'INFORMATION ABOUT DRINK',
    image: 'https://caroha.com/wp-content/uploads/2022/07/hot-cacao-recipe-3-1024x682.jpg',
    tags: [],
    inStock: true,
    options: {
      Temperature: [
        { name: 'Hot', price: 0 },
        { name: 'Cold', price: 1 }
      ],
      milk: [
        { name: 'Whole Milk', price: 0 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c13',
    name: 'Bumblebee',
    category: 'coffee',
    price: 18,
    description: 'INFORMATION ABOUT DRINK',
    image: 'https://espressobarista.com/wp-content/uploads/2025/01/cold-bumble-coffee-22-1140x570.webp',
    tags: ['special'],
    inStock: true,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c14',
    name: 'Mont Blanc',
    category: 'coffee',
    price: 17,
    description: 'INFORMATION ABOUT DRINK',
    image: 'https://img.delicious.com.au/ANBn1MYQ/w759-h506-cfill/del/2025/03/mont-blanc-coffee-224835-1.jpg',
    tags: [],
    inStock: true,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c15',
    name: 'Cold Brew Coffee',
    category: 'coffee',
    price: 14,
    description: 'INFORMATION ABOUT DRINK',
    image: 'https://lifesimplified.gorenje.com/wp-content/uploads/2024/06/gorenje-blog-refreshing_cold_brew_coffee-1024x577.jpg',
    tags: [],
    inStock: true,
    options: {
      size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 2 }
      ],
      milk: [
        { name: "Without milk", price: 0 },
        { name: 'Whole Milk', price: 2 },
        { name: 'Oat Milk', price: 2 },
        { name: 'Almond Milk', price: 2 },
        { name: 'Soy Milk', price: 2 }
      ],
      Temperature: { name: 'Hot Milk', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c16',
    name: 'Orange Juice',
    category: 'coffee',
    price: 15,
    description: 'Freshly squeezed orange juice.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/orange-juice-royalty-free-image-1745609809.pjpeg?crop=1xw:0.84375xh;center,top&resize=1200:*',
    tags: [],
    inStock: true,
    options: {
      size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 3 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'c17',
    name: 'Bottle of Soda',
    category: 'coffee',
    price: 11,
    description: 'Bottle of Soda | 275ml',
    image: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/OOY30_Z_P_8464611_2.png',
    tags: [],
    inStock: true,
    options: {}
  },


  // --- SALADS ---
  {
    id: 's1',
    name: 'Burrata Salad',
    category: 'salads',
    price: 23,
    description: 'Fresh burrata cheese, cherry tomatoes, fresh basil, olive oil, and balsamic glaze.',
    image: 'https://static01.nyt.com/images/2025/08/29/multimedia/hm-tomato-and-burrata-salad-with-chile-crisp-qjhc/hm-tomato-and-burrata-salad-with-chile-crisp-qjhc-superJumbo.jpg?format=pjpg&quality=75&auto=webp&disable=upscale',
    tags: [],
    inStock: false,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 's2',
    name: 'Tofu Salad',
    category: 'salads',
    price: 23,
    description: 'Tofu, cherry tomatoes, fresh basil, olive oil, and balsamic glaze.',
    image: 'https://www.ellielikes.cooking/wp-content/uploads/2024/11/silken-tofu-salad-7-682x1024.jpg',
    tags: ['vegan'],
    inStock: false,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },

  // --- SANDWICHES ---
  {
    id: 'sw1',
    name: 'Beef Sandwich',
    category: 'sandwiches',
    price: 39,
    description: 'Smoked beef slices, horseradish sauce, fresh arugula, and caramelized onion on croissant.',
    image: 'https://teatimemagazine.com/wp-content/uploads/2021/03/Roast-Beef-Tea-Sandwiches-with-Red-Onion-Marmalade-.jpeg',
    tags: [],
    inStock: true,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'sw2',
    name: 'Bacon Croissant',
    category: 'sandwiches',
    price: 32,
    description: 'Warm croissant with bacon and cheese.',
    image: 'https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/03/filled-croissant-with-bacon-brie-blackberry.jpg',
    tags: [],
    inStock: true,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'sw3',
    name: 'Salmon Croissant',
    category: 'sandwiches',
    price: 39,
    description: 'Croissant with salmon cream cheese and fresh dill.',
    image: 'https://media02.stockfood.com/largepreviews/NDI1OTkyNzkz/13741703-Croissant-with-smoked-salmon-cream-cheese-and-dill.jpg',
    tags: [],
    inStock: true,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'sw4',
    name: 'Croissant with Brie',
    category: 'sandwiches',
    price: 39,
    description: 'Croissant with brie cheese and figs.',
    image: 'https://thumbs.dreamstime.com/b/fresh-croissant-sandwich-brie-cheese-arugula-figs-delicious-breakfast-tasty-food-fresh-croissant-sandwich-brie-129249621.jpg',
    tags: [],
    inStock: true,
    options: {
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'sw5',
    name: 'Barbecue Turkey Focaccia',
    category: 'sandwiches',
    price: 20,
    description: 'Smoked turkey breast, barbecue sauce, caramelized onions and fresh mozzarella on warm garlic olive oil focaccia.',
    image: 'https://substackcdn.com/image/fetch/$s_!LW3Z!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F35639a1a-471f-4e41-b205-42b1502dafd7_800x1080.png',
    tags: [],
    inStock: true,
    options: {
      Size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 19 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'sw6',
    name: 'Focaccia with Tofu',
    category: 'sandwiches',
    price: 20,
    description: 'Warm focaccia with tofu, avocado, and fresh vegetables.',
    image: 'https://browngirlveganeats.com/wp-content/uploads/2025/06/IMG_9575.jpg',
    tags: [],
    inStock: true,
    options: {
      Size: [
        { name: 'Medium', price: 0 },
        { name: 'Large', price: 19 }
      ],
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },

  // --- BAKERY & PASTRIES ---
  {
    id: 'p1',
    name: 'Butter Croissant',
    category: 'pastries',
    price: 16,
    description: 'Classic flaky, golden, layered French butter croissant baked fresh every morning.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    inStock: true,
    options: {
      size: [
        { name: 'Without', price: 0 },
        { name: 'Butter', price: 2 },
        { name: 'Jam', price: 2 },
        { name: 'Butter & Jam', price: 4 }
      ],
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'p2',
    name: 'Pistachio Croissants',
    category: 'pastries',
    price: 18,
    description: 'Filled with rich almond frangipane cream, topped with toasted sliced almonds and dusted with powdered sugar.',
    image: 'https://i0.wp.com/loaves-and-such.com/wp-content/uploads/2024/10/Pistachio-Croissants.jpg?resize=750%2C495&ssl=1',
    tags: ['bestseller'],
    inStock: true,
    options: {
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'p3',
    name: 'Raspberry Pastry',
    category: 'pastries',
    price: 17,
    description: 'Flaky pastry filled with rich raspberry jam.',
    image: 'https://ashbaber.com/wp-content/uploads/2023/03/4-raspberry-and-almond-croissants-small.jpg',
    tags: [],
    inStock: true,
    options: {
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'p4',
    name: 'Sinnabon',
    category: 'pastries',
    price: 20,
    description: 'Classic cinnamon roll made with premium cinnamon and drizzled with cream cheese frosting.',
    image: 'https://zira.uz/wp-content/uploads/2018/10/sinnabon-4.jpg',
    tags: [],
    inStock: true,
    options: {
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'p5',
    name: 'Banana Muffin',
    category: 'pastries',
    price: 14,
    description: 'Soft banana muffin with chocolate chips.',
    image: 'https://noshingwiththenolands.com/wp-content/uploads/2022/08/Chocolate-Chip-Banana-Muffins-horizontal-on-a-cooling-rack-5-Custom-680x453.jpg',
    tags: [],
    inStock: true,
    options: {
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'p6',
    name: 'Chocolate Cookie',
    category: 'pastries',
    price: 11,
    description: 'Classic cookie with chocolate chips.',
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1707/https://www.thepalatablelife.com/wp-content/uploads/2025/03/classic-chocolate-chip-cookies-2-scaled.jpg',
    tags: [],
    inStock: true,
    options: {
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'p7',
    name: 'Matcha Cookie',
    category: 'pastries',
    price: 11,
    description: 'Matcha cookies with white chocolate chips.',
    image: 'https://www.savorysweetspoon.com/wp-content/uploads/2023/03/Matcha-White-Chocolate-Cookies-2-960x1200.jpg',
    tags: [],
    inStock: true,
    options: {
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'p8',
    name: 'Pekan Cookie',
    category: 'pastries',
    price: 11,
    description: 'Classic cookie with pecan.',
    image: 'https://crisco.com/wp-content/uploads/2025/07/Toasted-Pecan-Cookies-9-scaled.jpg',
    tags: [],
    inStock: true,
    options: {
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },
  {
    id: 'p9',
    name: 'Carrot Cake',
    category: 'pastries',
    price: 16,
    description: 'Classic Carrot Cake with nuts.',
    image: 'https://healthynibblesandbits.com/wp-content/uploads/2016/02/Carrot-Zucchini-Cake-9-624x935.jpg',
    tags: [],
    inStock: true,
    options: {
      Warm: { name: 'Heat Up', price: 0 },
      TakeAway: { name: 'Take Away', price: 0 }
    }
  },

  // --- COFFEE BEANS ---
  {
    id: 'b1',
    name: 'Brewkva (1kg)',
    category: 'beans',
    price: 95,
    description: 'Single Origin Whole Bean. Light Roast with vibrant floral jasmine notes, bergamot tea, and wild peach sweetness.',
    image: 'https://static.tildacdn.net/tild6530-3731-4163-a562-373538346333/logo.png',
    tags: [],
    inStock: true,
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 },
        // { name: 'Filter / Pour-Over Grind', price: 0 },
        // { name: 'French Press Grind', price: 0 }
      ],
      // weight: [
      //   { name: '250g Bag', price: 0 },
      //   { name: '1kg Bag', price: 95 }
      // ]
    }
  },
  {
    id: 'b2',
    name: 'Briosso (1kg)',
    category: 'beans',
    price: 120,
    description: 'Single Origin Whole Bean. Medium Roast featuring rich red apple acidity, dark caramel sweetness, and milk chocolate finish.',
    image: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/6432499/large/e583fb4dc8e420bbfa3949b2bc8ef697.jpg',
    tags: ['vegan'],
    inStock: true,
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 },
        // { name: 'Filter / Pour-Over Grind', price: 0 }
      ],
      // weight: [
      //   { name: '250g Bag', price: 0 },
      //   { name: '1kg Bag', price: 90 }
      // ]
    }
  },
];
