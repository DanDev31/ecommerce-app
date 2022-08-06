const preLoadedProducts = [
    {
        "product_name": "Gamer chair Pro Viper",
        "brand":"Viper",
        "description": "A beautyful purple gamer chair",
        "product_image": "https://falabella.scene7.com/is/image/Falabella/14559402_1?wid=800&hei=800&qlt=70",
        "price": 350,
        "stock": 3,
        "category":"Accesories"
    },
    {
        "product_name":"Ram Memory Vengeance RGB Pro gamer 8GB Corsair",
        "brand":"Corsair",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://http2.mlstatic.com/D_NQ_NP_697848-MLA47874082015_102021-O.jpg",
        "price": 50.00,
        "stock": 5,
        "num_reviews": 0,
        "rate":0,
        "category":"Ram Memory"
    },
    {
        "product_name":"Pc Gamer RGB Ryzen 5 8GB",
        "brand":"Ryzen",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://tiendatecnet.com/wp-content/uploads/2022/05/tailgate-600x600.png",
        "price": 75.50,
        "stock": 10,
        "num_reviews": 0,
        "rate":0,
        "category":"PC Gamers"
    },
    {
        "product_name":"GPU Nvidia GeForce GTX 1050 4GB",
        "brand":"Nvidia",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://http2.mlstatic.com/D_NQ_NP_839019-MCO40597341471_012020-O.jpg",
        "price": 355.99,
        "stock": 1,
        "num_reviews": 0,
        "rate":0,
        "category":"GPU"
    },
    {
        "product_name":"RGB Redragon CPU Coolder",
        "brand":"Redragon",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/17282946/resize/640/640?1651871828",
        "price": 25.00,
        "stock": 8,
        "num_reviews": 0,
        "rate":0,
        "category":"Accesories" 
    },
    {
        "product_name":"Asus Rog TRX40",
        "brand":"Asus",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://ae01.alicdn.com/kf/Sa53e9bee7f7947dc8e6611ed9815e0ccI/new-original-for-ASUS-ROG-STRIX-TRX40-XE-GAMING-Motherboard-supports-ThreadRipper-Series-CPU.jpg_Q90.jpg_.webp",
        "price": 130.25,
        "stock": 7,
        "num_reviews": 0,
        "rate":0,
        "category":"Motherboards" 
    },
    {
        "product_name":"Gamer Headphones Redragon Zeus RGB",
        "brand":"Redragon",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://cdn.coordiutil.com/imagen-diadema_gamer_redragon_zeus_x_rgb_h510-2239767-0-0-0-100.jpg",
        "price": 80.00,
        "stock": 4,
        "num_reviews": 0,
        "rate":0,
        "category":"Accesories"
    },
    {
        "product_name":"SSD 980 Samsung 1TB",
        "brand":"Samsung",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://http2.mlstatic.com/D_NQ_NP_998778-MLA46735126555_072021-O.jpg",
        "price": 120.45,
        "stock": 5,
        "num_reviews": 0,
        "rate":0,
        "category":"Hard Disks and SSD"
    },
    {
        "product_name":"Mouse and Keyboard Gamer Redragon",
        "brand":"Redragon",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://http2.mlstatic.com/D_NQ_NP_604858-MLA48170563239_112021-O.jpg",
        "price": 60.50,
        "stock": 8,
        "num_reviews": 0,
        "rate":0,
        "category":"Accesories"
    },
    {
        "product_name":"Ram Memory T-Force 8GB RGB",
        "brand":"T-Force",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://n1g.cl/Home/3006-home_default/-t-force-delta-rgb-32gb-ddr4-3200-2x16gb-white-pc4-25600-memory-model-tf4d432g3200hc16cdc01.jpg",
        "price": 45.00,
        "stock": 10,
        "num_reviews": 0,
        "rate":0,
        "category":"Ram Memory"
    },
    {
        "product_name":"Ram Memory T-Force Delta 8GB x 2",
        "brand":"T-Force",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://www.techpowerup.com/review/team-group-t-force-delta-tuf-gaming-rgb/images/small.png",
        "price": 74.99,
        "stock": 3,
        "num_reviews": 0,
        "rate":0,
        "category":"Ram Memory"
    },
    {
        "product_name":"ROG Strix Asus GeForce RTX 3050 8GB",
        "brand":"Asus",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://dlcdnwebimgs.asus.com/gain/3472707B-776F-48A1-B2C9-85706A263CBD/w717/h525",
        "price": 1300.00,
        "stock": 2,
        "num_reviews": 0,
        "rate":0,
        "category":"GPU"
    },
    {
        "product_name":"CPU AMD Ryzen 5 5600g",
        "brand":"AMD",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg",
        "price": 250.45,
        "stock": 5,
        "num_reviews": 0,
        "rate":0,
        "category":"CPU"
    },
    {
        "product_name":"CPU AMD Ryzen 7 3700x",
        "brand":"AMD",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://c1.neweggimages.com/ProductImage/19-113-567-V11.jpg",
        "price": 347.99,
        "stock": 4,
        "num_reviews": 0,
        "rate":0,
        "category":"CPU"
    },
    {
        "product_name":"CPU Intel Core i5 12Th Gen",
        "brand":"Intel",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/22268779/resize/640/640?1657128037",
        "price": 360.00,
        "stock": 3,
        "num_reviews": 0,
        "rate":0,
        "category":"CPU"
    },
    {
        "product_name":"CPU Intel Core i9 10Th Gen",
        "brand":"Intel",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://www.profesionalreview.com/wp-content/uploads/2020/05/intel-core-i9-10900k-review10.png",
        "price": 480.99,
        "stock": 2,
        "num_reviews": 0,
        "rate":0,
        "category":"CPU"
    },
    {
        "product_name":"PC Gamer i5 8GB Ram",
        "brand":"Intel",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://cdn.coordiutil.com/imagen-pc_gamer_i5_9400f_video_rx_570_de_8_gigas_ssd_240_ram_8gb_bord_asus_tuf_b360_fuente_500_bronze-2010511-800-600-1-75.jpg",
        "price": 1100.99,
        "stock": 2,
        "num_reviews": 0,
        "rate":0,
        "category":"PC Gamers"
    },
    {
        "product_name":"PC Gamer Ryzen 7 8GB Ram",
        "brand":"VSG",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://i0.wp.com/www.pcstorecolombia.com/wp-content/uploads/2022/02/BFC-NSE-300-WWGKP-4A-01.png?resize=300%2C300&ssl=1",
        "price": 2350.25,
        "stock": 1,
        "num_reviews": 0,
        "rate":0,
        "category":"PC Gamers"
    },
    {
        "product_name":"Hard Disk Seagate 1TB",
        "brand":"Seagate",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://fenixcomercial.com.co/wp-content/uploads/2020/04/st2000vx0081.png",
        "price": 60.00,
        "stock": 6,
        "num_reviews": 0,
        "rate":0,
        "category":"Hard Disks and SSD"
    },
    {
        "product_name":"SSD Kingston 512GB",
        "brand":"Kingston",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://ae01.alicdn.com/kf/S40c1fa6243944243a9e22441c0c3e37fN/Kingston-disco-duro-interno-de-estado-s-lido-NV1-M-2-2280-M-2-SATA-SSD.jpg",
        "price": 48.50,
        "stock": 10,
        "num_reviews": 0,
        "rate":0,
        "category":"Hard Disks and SSD"
    },
    {
        "product_name":"Aorus B460 PRO AC",
        "brand":"Gigabyte",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://static.gigabyte.com/StaticFile/Image/Global/150b48b125953b9bff4ce93aec2b9988/Product/25142/Png",
        "price": 180.80,
        "stock": 4,
        "num_reviews": 0,
        "rate":0,
        "category":"Motherboards"
    },
    {
        "product_name":"msi B450M Gaming Plus",
        "brand":"msi",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://asset.msi.com/resize/image/global/product/product_4_20190506093324_5ccf8ee4cff47.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        "price": 200.00,
        "stock": 4,
        "num_reviews": 0,
        "rate":0,
        "category":"Motherboards"
    },
    {
        "product_name":"EVGA 750GA 80 plus gold",
        "brand":"EVGA",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://images.evga.com/products/gallery/png/220-GA-0750-X1_LG_1.png",
        "price": 79.99,
        "stock": 4,
        "num_reviews": 0,
        "rate":0,
        "category":"Power Supply"
    },
    {
        "product_name":"Corsair RM850 80 plus gold",
        "brand":"Corsair",
        "description": "Mauris tincidunt est faucibus augue vestibulum sollicitudin. Morbi scelerisque dignissim tincidunt. Maecenas vestibulum urna nulla, a viverra neque vestibulum ac. Donec quis eleifend nisl. Morbi ullamcorper convallis purus. Proin congue tempor sapien, vel molestie mi scelerisque at.",
        "product_image": "https://s3techno.com/wp-content/uploads/2016/03/71Gaa4b12LL._AC_SL1500_-removebg-preview.png",
        "price": 85.65,
        "stock": 4,
        "num_reviews": 0,
        "rate":0,
        "category":"Power Supply"
    },

]

const preLoadedCategories = [
    {
        category_name:"PC Gamers"
    },
    {
        category_name:"Ram Memory"
    },
    {
        category_name:"Hard Disks and SSD"
    },
    {
        category_name:"CPU"
    },
    {
        category_name:"GPU"
    },
    {
        category_name:"Motherboards"
    },
    {
        category_name:"Power Supply"
    },
    {
        category_name:"Accesories"
    }
]

module.exports = {
    preLoadedProducts,
    preLoadedCategories
}