// src/data/products.js

export const products = [
  {
    id: 'apple-iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    description: 'สุดยอด iPhone ที่มาพร้อมชิป A17 Pro อันทรงพลัง, ระบบกล้องที่ล้ำหน้า, และดีไซน์ไทเทเนียมสุดหรู',
    price: 48900.00,
    imageUrl: 'https://media.studio7thailand.com/153363/iPhone-15-Pro-Max_Black-Titanium-square_medium.png', // รูป iPhone 15 Pro Max
    category: 'smartphone',
    brand: 'Apple',
    specifications: {
      storage: ['256GB', '512GB', '1TB'],
      colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium']
    }
  },
  {
    id: 'apple-macbook-air-m3-15-inch',
    name: 'MacBook Air M3 15-inch',
    description: 'โน้ตบุ๊กบางเบาที่มาพร้อมชิป M3 ประสิทธิภาพสูง, จอภาพ Liquid Retina ที่สวยงาม, และแบตเตอรี่ที่ใช้งานได้ยาวนาน',
    price: 49900.00,
    imageUrl: 'https://media.education.studio7thailand.com/92247/MacBook-Air-15-inch-M3-Midnight-1-square_medium.jpg', // รูป MacBook Air M3
    category: 'laptop',
    brand: 'Apple',
    specifications: {
      ram: ['8GB', '16GB', '24GB'],
      storage: ['256GB', '512GB', '1TB', '2TB'],
      colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver']
    }
  },
  {
    id: 'apple-ipad-pro-m4-13-inch',
    name: 'iPad Pro M4 13-inch',
    description: 'iPad Pro ที่บางที่สุดเท่าที่เคยมีมา ขับเคลื่อนด้วยชิป M4, จอภาพ Ultra Retina XDR, และ Apple Pencil Pro',
    price: 42900.00,
    imageUrl: 'https://www.istudiobyspvi.com/cdn/shop/files/TH_iPad_Pro_13_M4_WiFi_Space_Black_PDP_Image_Position_1a.jpg?v=1719762810', // รูป iPad Pro M4
    category: 'tablet',
    brand: 'Apple',
    specifications: {
      storage: ['256GB', '512GB', '1TB', '2TB'],
      colors: ['Space Black', 'Silver']
    }
  },
  {
    id: 'apple-airpods-pro-2nd-gen-usb-c',
    name: 'AirPods Pro (2nd Gen) with USB-C',
    description: 'หูฟังไร้สายพร้อมระบบตัดเสียงรบกวนแบบแอ็คทีฟที่ดีขึ้น, โหมดฟังเสียงภายนอกแบบปรับตามสภาพแวดล้อม, และเสียงตามตำแหน่ง',
    price: 8990.00,
    imageUrl: 'https://www.istudio.store/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-2__global.jpg?v=1700662045&width=823', // รูป AirPods Pro (2nd Gen)
    category: 'audio',
    brand: 'Apple',
    specifications: {
      charging_case: 'USB-C',
      features: ['Active Noise Cancellation', 'Adaptive Transparency', 'Spatial Audio']
    }
  },
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    description: 'นาฬิกาอัจฉริยะที่แข็งแกร่งที่สุดและมากความสามารถที่สุดของ Apple สำหรับการผจญภัยและการออกกำลังกาย',
    price: 31900.00,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409_GEO_TH_LANG_TH_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=aTVJSEliNW9jb25zalBlTm16VmMxcWpkNHRJWDMzcTg3NWRxV0pydTcvS2RrR0RZTTJreFJVVTcrbDZOWVQrbHBxMnU2OUJYejN6aUdidHcra1pOMld6MHRPNnBGUmU1a0lscDBiNGU2WmRuNDBzcjA0aG5jQUJ1UTI2VzJJR1lsN0YvdlcvMTRHSW5ORk5zMkE5U1hn', // รูป Apple Watch Ultra 2
    category: 'wearable',
    brand: 'Apple',
    specifications: {
      material: 'Titanium',
      connectivity: ['GPS + Cellular'],
      bands: ['Alpine Loop', 'Trail Loop', 'Ocean Band']
    }
  },
  {
    id: 'apple-mac-mini-m2',
    name: 'Mac mini M2',
    description: 'เดสก์ท็อปขนาดกะทัดรัดที่ทรงพลังอย่างเหลือเชื่อด้วยชิป M2 เพื่อประสิทธิภาพการทำงานที่เหนือกว่า',
    price: 24900.00,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-mac-mini-pro-202303?wid=2000&hei=820&fmt=jpeg&qlt=90&.v=1680804442472', // รูป Mac mini M2
    category: 'desktop',
    brand: 'Apple',
    specifications: {
      ram: ['8GB', '16GB', '24GB'],
      storage: ['256GB', '512GB', '1TB', '2TB']
    }
  },
  {
    id: 'apple-airtag',
    name: 'AirTag',
    description: 'วิธีง่ายๆ ในการตามหาสิ่งของของคุณ เพียงแค่ติด AirTag ไว้กับกุญแจ, กระเป๋า หรือสิ่งของอื่นๆ',
    price: 1090.00,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=aUZiM0Z1TmxieDdSR0Z6RU5uemRuOHVJWlMva2FYSFVWb3Q4TXJyVGJVY2VnSEp2SE4xaUJuS0VhaWlSWW9obFBJSEI4eEprQ3k5NVh3Y3BXYkFrUFIrMFFpbFM1dVZaaCtoRy9ldmUzTEpsZjhrbFZ0dVg0YjM1UzZDem93MkY', // รูป AirTag
    category: 'accessories',
    brand: 'Apple',
    specifications: {
      connectivity: 'Bluetooth',
      features: ['Precision Finding', 'Lost Mode']
    }
  },
  {
    id: 'apple-magic-keyboard',
    name: 'Magic Keyboard',
    description: 'คีย์บอร์ดที่มอบประสบการณ์การพิมพ์ที่สะดวกสบายและแม่นยำ พร้อมแบตเตอรี่ใช้งานได้ยาวนาน',
    price: 4990.00,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXCL3TH?wid=4000&hei=4000&fmt=jpeg&qlt=90&.v=1729134351259', // รูป Magic Keyboard
    category: 'accessories',
    brand: 'Apple',
    specifications: {
      features: ['Touch ID', 'Numeric Keypad']
    }
  },
  {
    id: 'apple-pencil-2nd-gen',
    name: 'Apple Pencil (2nd Gen)',
    description: 'ยกระดับประสบการณ์การใช้ iPad ของคุณให้สมบูรณ์แบบยิ่งขึ้นสำหรับการจดโน้ต, วาดภาพ, และทำเครื่องหมายเอกสาร',
    price: 5490.00,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK0C2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=WGZCUEdhaWg2QklNT0FNVDdMVkFJdllvYS9naDJJdU9KTWdGWjhKWFRmSlArcGQ0TXQ4Q0Y4YmRmSFVjdGJTRVUzR2toOVVvY056Z1V5SmZKMFMxeEE', // รูป Apple Pencil
    category: 'accessories',
    brand: 'Apple',
    specifications: {
      compatibility: ['iPad Pro', 'iPad Air', 'iPad mini'],
      features: ['Magnetic attachment and pairing', 'Wireless charging']
    }
  },
  {
    id: 'apple-studio-display',
    name: 'Apple Studio Display',
    description: 'จอภาพ 5K Retina ขนาด 27 นิ้ว พร้อมกล้องสุดล้ำและระบบเสียง 6 ลำโพง มอบประสบการณ์ที่น่าทึ่ง',
    price: 54900.00,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/studio-display-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=90&.v=1645125507093', // รูป Apple Studio Display
    category: 'monitor',
    brand: 'Apple',
    specifications: {
      resolution: '5K Retina',
      size: '27-inch',
      features: ['Studio-quality mics', 'Six-speaker sound system']
    }
  },
];