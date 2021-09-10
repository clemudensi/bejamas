const products = [
    {
        "id": '1',
        "name": "Reddit",
        "category": "tech",
        "price": 25.50,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.682082455.7455/ra,fitted_v_neck,x1860,45474B:e9c9d4e890,front-c,306,378,600,600-bg,f8f8f8.u2.jpg",
            "alt": "Reddit"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                },
                {
                    "src": "",
                    "alt": ""
                },
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '2',
        "name": "C++ Premium",
        "category": "tech",
        "price": 40.89,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.678572358.4438/ssrco,mens_premium_t_shirt,mens,fafafa:ca443f4786,front,square_product,x600-bg,f8f8f8.1.jpg",
            "alt": "C++ Premium"
        },
        "bestseller": true,
        "featured": false,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '3',
        "name": "JSON Essential",
        "category": "tech",
        "price": 21.89,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.40703899.9107/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.u3.jpg",
            "alt": "JSON Essential"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '4',
        "name": "JSON Classic",
        "category": "tech",
        "price": 23.75,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.398734608.2498/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.u12.jpg",
            "alt": "JSON Classic"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '20',
        "name": "Power to the people",
        "category": "people",
        "price": 25.52,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.116752863.0191/ssrco,classic_tee,mens,heather_grey,front_alt,square_product,600x600.jpg",
            "alt": "TPower to the people"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '5',
        "name": "Dungeon Meowster",
        "category": "people",
        "price": 18.96,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.1159221798.4718/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
            "alt": "Dungeon Meowster"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '6',
        "name": "Ew People",
        "category": "people",
        "price": 17.59,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.2005169480.5512/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.u2.jpg",
            "alt": "Ew People"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '7',
        "name": "Dancing Keith",
        "category": "people",
        "price": 19.48,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.1317922216.2241/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg",
            "alt": "Dancing Keith"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '8',
        "name": "Github Octocat",
        "category": "landmarks",
        "price": 30.24,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.849196563.7755/ra,relaxed_fit,x1860,fafafa:ca443f4786,front-c,319,380,600,600-bg,f8f8f8.u3.jpg",
            "alt": "Github Octocat"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '9',
        "name": "Continental Divivide",
        "category": "landmarks",
        "price": 19.26,
        "currency": "USD",
        "image": {
            "src": "https://www.backcountrygear.com/media/catalog/product/cache/cbf8ca5a7b8c68c3d9556c2ff6d280ca/c/o/continental-divide-trail-cactus.jpg",
            "alt": "Devops"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '10',
        "name": "Smith rock",
        "category": "landmarks",
        "price": 20.56,
        "currency": "USD",
        "image": {
            "src": "https://www.backcountrygear.com/media/catalog/product/cache/cbf8ca5a7b8c68c3d9556c2ff6d280ca/s/c/screen_shot_2016-06-30_at_10.01.jpg",
            "alt": "Smith rock"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '11',
        "name": "North Cascade",
        "category": "landmarks",
        "price": 17.36,
        "currency": "USD",
        "image": {
            "src": "https://www.backcountrygear.com/media/catalog/product/cache/cbf8ca5a7b8c68c3d9556c2ff6d280ca/n/o/north-cascades-clay-tee-2_1728x1728.jpg",
            "alt": "North Cascade"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '12',
        "name": "USA national park",
        "category": "landmarks",
        "price": 21.78,
        "currency": "USD",
        "image": {
            "src": "https://i.ebayimg.com/thumbs/images/g/zeUAAOSwZaFhFLzf/s-l300.webp",
            "alt": "USA national park"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '13',
        "name": "Starry night",
        "category": "abstract",
        "price": 26.46,
        "currency": "USD",
        "image": {
            "src": "https://i.etsystatic.com/16615387/c/1562/1241/213/46/il/85bda1/3226323845/il_340x270.3226323845_98n1.jpg",
            "alt": "Starry night"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '14',
        "name": "Black or White",
        "category": "artworks",
        "price": 20.10,
        "currency": "USD",
        "image": {
            "src": "https://i.etsystatic.com/23084415/c/1111/883/394/171/il/b40674/2446808095/il_340x270.2446808095_cu1s.jpg",
            "alt": "Black or White"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '15',
        "name": "Caravagggio",
        "category": "artworks",
        "price": 19.32,
        "currency": "USD",
        "image": {
            "src": "https://i.etsystatic.com/25101507/r/il/92a128/3060204692/il_340x270.3060204692_qc8b.jpg",
            "alt": "Caravagggio"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '16',
        "name": "I love art",
        "category": "artworks",
        "price": 30.24,
        "currency": "USD",
        "image": {
            "src": "https://i.etsystatic.com/13557012/r/il/82279d/2539519786/il_340x270.2539519786_dblz.jpg",
            "alt": "I love art"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "Backbone Logotype T-shirt for adults and kids",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '17',
        "name": "ManeSkin Artwork",
        "category": "artworks",
        "price": 27.72,
        "currency": "USD",
        "image": {
            "src": "https://ih1.redbubble.net/image.2395983616.2069/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
            "alt": "ManeSkin Artwork"
        },
        "bestseller": true,
        "featured": true,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "Programmer Silhouettes T-shirt for adults and kids",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '18',
        "name": "Unimpressed Frog",
        "category": "artworks",
        "price": 21.15,
        "currency": "USD",
        "image": {
            "src": "https://i.etsystatic.com/27018469/r/il/3e72a0/2778110728/il_340x270.2778110728_33gl.jpg",
            "alt": "Unimpressed Frog"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "Social Media Essentials T-shirt for adults and kids",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    },
    {
        "id": '19',
        "name": "Peace Love",
        "category": "artworks",
        "price": 23.58,
        "currency": "USD",
        "image": {
            "src": "https://i.etsystatic.com/27031746/c/1722/1369/397/250/il/09f7b9/3229207474/il_340x270.3229207474_h2lu.jpg",
            "alt": "Peace Love"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimensions": {
                "width": 600,
                "height": 600
            },
            "size": 15000,
            "description": "Mail Chimps Essential Classic T-shirt for adults and kids",
            "recommendations": [
                {
                    "src": "",
                    "alt": ""
                }
            ]
        }
    }
];

export default products;
