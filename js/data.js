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
    description: 'Rich and intense single-origin espresso shot.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=75',
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
    description: 'Espresso diluted with hot water for a smooth, rich cup.',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=75',
    tags: ['bestseller'],
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
    description: 'Espresso served over iced cold water and ice cubes.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=75',
    tags: ['bestseller'],
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
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=75',
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
    description: 'Espresso topped with a delicate dollop of steamed milk foam.',
    image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&w=600&q=75',
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
    description: 'Equal parts rich espresso and warm steamed milk.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=75',
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
    description: 'Refreshing brewed artisan herbal and fruit iced tea.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=75',
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
    description: 'Rich Belgian chocolate blend with steamed milk and cocoa dusting.',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=75',
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
    description: 'Layered espresso with freshly squeezed orange juice and caramel syrup.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=75',
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
    description: 'Iced espresso topped with thick whipped cream and grated chocolate.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=75',
    tags: ['special'],
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
    description: 'Slow cold-steeped artisan single-origin brew over ice.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=75',
    tags: ['special'],
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
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=75',
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
    description: 'Sparkling Mineral Soda | 275ml',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=75',
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
    description: 'Warm croissant with crispy bacon and melted cheese.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=75',
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
    description: 'Flaky croissant with Norwegian smoked salmon, cream cheese, and fresh dill.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=75',
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
    description: 'Croissant with creamy French brie cheese and sweet figs.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=75',
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
    description: 'Warm focaccia with seasoned tofu, avocado, and fresh crisp vegetables.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=75',
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
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=75',
    tags: [],
    inStock: true,
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 }
      ]
    }
  },
  {
    id: 'b2',
    name: 'Briosso (1kg)',
    category: 'beans',
    price: 120,
    description: 'Single Origin Whole Bean. Medium Roast featuring rich red apple acidity, dark caramel sweetness, and milk chocolate finish.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=600&q=75',
    tags: ['vegan'],
    inStock: true,
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 }
      ]
    }
  }
];
