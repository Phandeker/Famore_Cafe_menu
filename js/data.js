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
  { id: 'vegan', label: '🌱 Vegan' }
];

window.MENU_ITEMS = [
  // --- COFFEE & DRINKS ---
  {
    id: 'c1',
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
    id: 'c2',
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
    id: 'c6',
    name: 'Espresso',
    category: 'coffee',
    price: 8,
    description: 'INFORMATION ABOUT AMERICANO',
    image: 'https://cdn.shopify.com/s/files/1/0601/8783/6659/files/Espresso-cup-with-coffee-beans.jpg?v=1655750550',
    tags: [],
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
    tags: [],
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


  // --- SALADS ---
  {
    id: 's1',
    name: 'Grilled Halloumi & Roasted Beet Salad',
    category: 'salads',
    price: 48,
    description: 'Warm crispy halloumi cheese, slow-roasted beets, baby arugula, toasted walnut crumble, and pomegranate balsamic vinaigrette.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    inStock: true,
    calories: '420 kcal',
    options: {
      protein: [
        { name: 'No Extra Protein', price: 0 },
        { name: 'Add Grilled Chicken Breast', price: 16 },
        { name: 'Add Avocado', price: 8 }
      ]
    }
  },
  {
    id: 's2',
    name: 'Mediterranean Superfood Quinoa Bowl',
    category: 'salads',
    price: 46,
    description: 'Fluffy tri-color quinoa, English cucumbers, cherry tomatoes, Kalamata olives, chickpeas, fresh mint, and lemon tahini dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan'],
    inStock: true,
    calories: '380 kcal',
    options: {
      protein: [
        { name: 'Standard', price: 0 },
        { name: 'Add Crumbled Feta', price: 6 },
        { name: 'Add Grilled Halloumi', price: 12 }
      ]
    }
  },
  {
    id: 's3',
    name: 'Avocado & Citrus Salad',
    category: 'salads',
    price: 44,
    description: 'Sliced Haas avocado, ruby red grapefruit segments, baby spinach, shaved fennel, toasted pumpkin seeds, and citrus-herb dressing.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan'],
    inStock: true,
    calories: '320 kcal',
    options: {
      dressing: [
        { name: 'Citrus Herb Vinaigrette', price: 0 },
        { name: 'Tahini Dressing', price: 0 }
      ]
    }
  },

  // --- SANDWICHES ---
  {
    id: 'sw1',
    name: 'Smoked Salmon & Everything Bagel',
    category: 'sandwiches',
    price: 42,
    description: 'Fresh toasted artisan bagel, Norwegian smoked salmon, dill whipped cream cheese, capers, pickled red onions, and fresh cucumbers.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    inStock: true,
    calories: '510 kcal',
    options: {
      bread: [
        { name: 'Everything Bagel', price: 0 },
        { name: 'Sesame Bagel', price: 0 },
        { name: 'Gluten-Free Bread', price: 5 }
      ]
    }
  },
  {
    id: 'sw2',
    name: 'Roasted Turkey & Basil Pesto Focaccia',
    category: 'sandwiches',
    price: 44,
    description: 'Oven-roasted turkey breast, fresh mozzarella, house basil pesto, sun-dried tomatoes, and wild rocket on warm garlic olive oil focaccia.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    tags: ['bestseller'],
    inStock: true,
    calories: '580 kcal',
    options: {
      cheese: [
        { name: 'Mozzarella', price: 0 },
        { name: 'Extra Mozzarella', price: 6 },
        { name: 'Dairy-Free Cheese', price: 4 }
      ]
    }
  },
  {
    id: 'sw3',
    name: 'Avocado & Poached Egg Toast',
    category: 'sandwiches',
    price: 38,
    description: 'Thick sourdough toast spread with mashed avocado, chili flakes, microgreens, organic poached egg, and zaatar oil.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    tags: [],
    inStock: true,
    calories: '430 kcal',
    options: {
      egg: [
        { name: '1 Poached Egg', price: 0 },
        { name: '2 Poached Eggs', price: 6 }
      ]
    }
  },
  {
    id: 'sw4',
    name: 'Grilled Halloumi & Olive Tapenade Sourdough',
    category: 'sandwiches',
    price: 40,
    description: 'Seared halloumi cheese, roasted sweet peppers, black olive tapenade, fresh tomato, and mint leaves on pressed sourdough.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    tags: [],
    inStock: true,
    calories: '520 kcal',
    options: {}
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
    description: 'IMFORMATION COMING SOON',
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
    description: 'Information COMING SOON',
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
    name: 'Basque Burnt Cheesecake Slice',
    category: 'pastries',
    price: 28,
    description: 'Caramelized crust on the outside with a lush, creamy center. Served with seasonal berry compote.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    tags: [],
    inStock: true,
    calories: '450 kcal',
    options: {}
  },

  // --- COFFEE BEANS ---
  {
    id: 'b1',
    name: 'Ethiopia Yirgacheffe (250g)',
    category: 'beans',
    price: 58,
    description: 'Single Origin Whole Bean. Light Roast with vibrant floral jasmine notes, bergamot tea, and wild peach sweetness.',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'bestseller'],
    inStock: true,
    calories: 'N/A',
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 },
        { name: 'Filter / Pour-Over Grind', price: 0 },
        { name: 'French Press Grind', price: 0 }
      ],
      weight: [
        { name: '250g Bag', price: 0 },
        { name: '1kg Bag', price: 95 }
      ]
    }
  },
  {
    id: 'b2',
    name: 'Colombia Huila Reserve (250g)',
    category: 'beans',
    price: 54,
    description: 'Single Origin Whole Bean. Medium Roast featuring rich red apple acidity, dark caramel sweetness, and milk chocolate finish.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan'],
    inStock: true,
    calories: 'N/A',
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 },
        { name: 'Filter / Pour-Over Grind', price: 0 }
      ],
      weight: [
        { name: '250g Bag', price: 0 },
        { name: '1kg Bag', price: 90 }
      ]
    }
  },
  {
    id: 'b3',
    name: 'Signature Velvet House Blend (250g)',
    category: 'beans',
    price: 48,
    description: 'Curated blend of Brazil Cerrado & Sumatra Mandheling. Medium-Dark Roast delivering intense cocoa notes, hazelnut, and thick crema.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'bestseller'],
    inStock: true,
    calories: 'N/A',
    options: {
      grind: [
        { name: 'Whole Bean', price: 0 },
        { name: 'Espresso Grind', price: 0 },
        { name: 'Filter / Pour-Over Grind', price: 0 }
      ],
      weight: [
        { name: '250g Bag', price: 0 },
        { name: '1kg Bag', price: 80 }
      ]
    }
  }
];
