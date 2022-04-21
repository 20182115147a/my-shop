import polo_nu_cafe_1_grey from '../assets/polo-nu-cafe-1-white.webp';
import polo_nu_cafe_1_navy from '../assets/polo-nu-cafe-1-navy.webp';
import polo_nu_cafe_1_brown from '../assets/polo-nu-cafe-1-brown.webp';

import polo_nam_matchim_2_black from '../assets/polo-nam-matchim-2-black.webp';
import polo_nam_matchim_2_white from '../assets/polo-nam-matchim-2-white.webp';
import polo_nam_matchim_2_red from '../assets/polo-nam-matchim-2-red.webp';

import  polo_nu_cafe_3_blackwhite from '../assets/polo-nu-cafe-3-blackwhite.webp';
import  polo_nu_cafe_3_whitenavy from '../assets/polo-nu-cafe-3-whitenavy.webp';
import  polo_nu_cafe_3_yellow from '../assets/polo-nu-cafe-3-yellow.webp';

import polo_nam_coolmax_4_green from '../assets/polo-nam-coolmax-4-green.webp';
import polo_nam_coolmax_4_white from '../assets/polo-nam-coolmax-4-white.webp';
import polo_nam_coolmax_4_red from '../assets/polo-nam-coolmax-4-red.webp';

import polo_nam_vohau_5_green from '../assets/polo-nam-vohau-5-green.webp'

import polo_nu_cafe_6_black from '../assets/polo-nu-cafe-6-black.webp';
import polo_nu_cafe_6_yellow from '../assets/polo-nu-cafe-6-yellow.webp';
import polo_nu_cafe_6_navy from '../assets/polo-nu-cafe-6-navy.webp';

import polo_nu_matchim_7_yellow from '../assets/polo-nu-matchim-7-yellow.webp';
import polo_nu_matchim_7_red from '../assets/polo-nu-matchim-7-red.webp';
import polo_nu_matchim_7_pink from '../assets/polo-nu-matchim-7-pink.webp';

import polo_nam_vohau_8_yellow from '../assets/polo-nam-vohau-8-yellow.webp';

import polo_nam_matchim_9_whitecafe from '../assets/polo-nam-matchim-9-whitecafe.webp';
import polo_nam_matchim_9_whiteblack from '../assets/polo-nam-matchim-9-whiteblack.webp';
import polo_nam_matchim_9_whitebrown from '../assets/polo-nam-matchim-9-whitebrown.webp';

import polo_nam_askin_10_white from '../assets/polo-nam-askin-10-white.webp';

import polo_nam_askin_11_yellow from '../assets/polo-nam-askin-11-yellow.webp';

import polo_nam_askin_12_blue from '../assets/polo-nam-askin-12-blue.webp';

import polo_nu_airycool_13_red from '../assets/polo-nu-airycool-13-red.webp';
import polo_nu_airycool_13_yellow from '../assets/polo-nu-airycool-13-yellow.webp';
import polo_nu_airycool_13_white from '../assets/polo-nu-airycool-13-white.webp';


import polo_nu_airycool_14_red from '../assets/polo-nu-airycool-14-red.webp';
import polo_nu_airycool_14_black from '../assets/polo-nu-airycool-14-black.webp';
import polo_nu_airycool_14_white from '../assets/polo-nu-airycool-14-white.webp';

import polo_nam_airycool_15_red from '../assets/polo-nam-airycool-15-red.webp';
import polo_nam_airycool_15_yellow from '../assets/polo-nam-airycool-15-yellow.webp';
import polo_nam_airycool_15_white from '../assets/polo-nam-airycool-15-white.webp';

import polo_nam_airycool_16_red from '../assets/polo-nam-airycool-16-red.webp';
import polo_nam_airycool_16_yellow from '../assets/polo-nam-airycool-16-yellow.webp';
import polo_nam_airycool_16_white from '../assets/polo-nam-airycool-16-white.webp';

import polo_nu_coolmax_17_blue from '../assets/polo-nu-coolmax-17-blue.webp';
import polo_nu_coolmax_17_pink from '../assets/polo-nu-coolmax-17-pink.webp';
import polo_nu_coolmax_17_beige from '../assets/polo-nu-coolmax-17-beige.webp';

import polo_nam_cool_compact_18_red from '../assets/polo-nam-cool-compact-18-red.webp';

import polo_nu_cool_compact_19_red from '../assets/polo-nu-cool-compact-19-red.webp';

import  polo_nu_matchim_20_whitecafe from '../assets/polo-nu-matchim-20-whitecafe.webp';
import  polo_nu_matchim_20_whiteblack from '../assets/polo-nu-matchim-20-whiteblack.webp';
import  polo_nu_matchim_20_whitebrown from '../assets/polo-nu-matchim-20-whitebrown.webp'
const headerMainNavs = [
    {
        display:'Nam',
        path:'/nam',
        products_type: [
             {
                display:'Áo',
                path:'/ao-nam',
                category: [
                        {
                            display:'Áo Thun Nam',
                            path:'/ao-thun-nam'
                        },
                        {
                            display:'Áo Polo Nam',
                            path:'/ao-polo-nam'
                        },
                    ]
            },
            {
                display:'Quần',
                path:'/quan-nam',
                category: [
                    {
                        display:'Quần Jean Nam',
                        path:'/quan-jean-nam'
                    },
                    {
                        display:'Quần Tây Nam',
                        path:'/quan-tay-nam'
                    },
                ]
            },

        ]
    },
    {
        display:'Nữ',
        path:'/nu',
        products_type: [
             {
                display:'Áo',
                path:'/ao-nu',
                category: [
                        {
                            display:'Áo Thun Nữ',
                            path:'/ao-thun-nu'
                        },
                        {
                            display:'Áo Polo Nữ',
                            path:'/ao-polo-nu'
                        },
                    ]
            },
            {
                display:'Quần',
                path:'/quan-nu',
                category: [
                    {
                        display:'Quần Jean Nữ',
                        path:'/quan-jean-nu'
                    },
                    {
                        display:'Quần Tây Nữ',
                        path:'/quan-tay-nu'
                    },
                ]
            },

        ]
    }

]
const products = [
    {
        id:1,
        gerder:'nu',
        name:'Áo Polo Nữ Cafe Phối Nẹp Siêu Nhẹ Siêu Mát',
        types:['polo','cafe','bst-xuan-he'],
        price: 399000,
        details: [
            {
                color:'Xám',
                sizes: ['S','M','L'],
                imgUrls: polo_nu_cafe_1_grey
            },
            {
                
                sizes: ['S','M','L'],
                color:'Navy',
                imgUrls:polo_nu_cafe_1_navy
            },
            {
                
                sizes: ['S','M','L'],
                color:'Nâu',
                imgUrls:polo_nu_cafe_1_brown
            }
        ],
        category:'ao'
    },
    {
        id:2,
        gerder:'nam',
        name:'Áo Polo Nam Pique Mắt Chim Basic Co Giãn Thoáng Khí',
        types:['polo','bst-xuan-he','mat-chim'],
        price:399000,
        details: [
            {
                sizes: ['M','L','XL'],
                color:'Trắng',
                imgUrls: polo_nam_matchim_2_white
            },
            {
                sizes:['S','M','L'],
                color:'Đen',
                imgUrls:polo_nam_matchim_2_black
            },
            {
                
                sizes: ['S','M','XL'],
                color:'Đỏ',
                imgUrls:polo_nam_matchim_2_red
            }
        ],
        category:'ao'
    },
    {
        id:3,
        gerder:'nu',
        name:'Áo Polo Nữ Cafe Phối Màu',
        types:['polo','cafe','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['S','M','L'],
                color:'Trắng đen',
                imgUrls: polo_nu_cafe_3_blackwhite
            },
            {
                sizes: ['M','L'],
                color:'Trắng phối navy',
                imgUrls:polo_nu_cafe_3_whitenavy
            },
            {
                sizes: ['S','M'],
                color:'Vàng',
                imgUrls:polo_nu_cafe_3_yellow
            }
        ],
        category:'ao'
    },
    {
        id:4,
        gerder:'nam',
        name:'Áo Polo Nam Coolmax Thoáng Mát Bo Cổ Phối Màu',
        types:['polo','coolmax','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['S','M','L'],
                color:'Trắng',
                imgUrls: polo_nam_coolmax_4_white
            },
            {
                sizes: ['M','L','XL'],
                color:'Đỏ',
                imgUrls:polo_nam_coolmax_4_red
            },
            {
                sizes: ['XL','2XL','3XL'],
                color:'Xanh lá',
                imgUrls:polo_nam_coolmax_4_green
            }
        ],
        category:'ao'
    },
    {
        id:5,
        gerder:'nam',
        name:'Áo Polo Nam Vải Vỏ Hàu Cổ Đức',
        types:['polo','vo-hau','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['M','L','XL'],
                color:'Trắng',
                imgUrls: polo_nam_vohau_5_green
            },
            
        ],
        category:'ao'
    },
    {
        id:6,
        gerder:'nu',
        name:'Áo Polo Nữ Cafe Phối Bo Chống Tia UV',
        types:['polo','cafe','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['S','M','L'],
                color:'Đen',
                imgUrls: polo_nu_cafe_6_black
            },
            {
                sizes: ['S','M','L'],
                color:'Navy',
                imgUrls:polo_nu_cafe_6_navy
            },
            {
                sizes: ['S','M','L'],
                color:'Vàng',
                imgUrls:polo_nu_cafe_6_yellow
            }
        ],
        category:'ao'
    },
    {
        id:7,
        gerder:'nu',
        name:'Áo Polo Nữ Tay Ngắn Pique Mắt Chim Phối Bo Thoáng Khí',
        types:['polo','mat-chim','bst-xuan-he'],
        price:289000,
        colors: [
            {
                sizes: ['S','M','L'],
                color:'Vàng',
                imgUrls: polo_nu_matchim_7_yellow
            },
            {
                sizes: ['S','M','L'],
                color:'Đỏ',
                imgUrls:polo_nu_matchim_7_red
            },
            {
                sizes: ['S','M','L'],
                color:'Hồng',
                imgUrls:polo_nu_matchim_7_pink
            }
        ],
        category:'ao'
    },
    {
        id:8,
        gerder:'nam',
        name:'Áo Polo Nam Vải Vỏ Hàu Cổ Đức ',
        types:['polo','vo-hau','bst-xuan-he'],
        price:329000,
        colors: [
            {
                sizes: ['M','L','XL'],
                color:'Vàng',
                imgUrls: polo_nam_vohau_8_yellow
            },
            
        ],
        category:'ao'
    },
    {
        id:9,
        gerder:'nam',
        name:'Áo Polo Nam Mắt Chim Dáng Suông Họa Tiết Mỏ Neo',
        types:['polo','bst-xuan-he','mat-chim'],
        price:299000,
        details: [
            {
                sizes: ['2XL','3XL','4XL'],
                color:'Trắng cafe',
                imgUrls: polo_nam_matchim_9_whitecafe
            },
            {
                sizes:['2XL','3XL','4XL'],
                color:'Trắng nâu',
                imgUrls:polo_nam_matchim_9_whitebrown
            },
            {
                
                sizes: ['2XL','3XL','4XL'],
                color:'Trắng đen',
                imgUrls:polo_nam_matchim_9_whiteblack
            }
        ],
        category:'ao'
    },
    {
        id:10,
        gerder:'nam',
        name:'Áo Polo Nam Askin Bo Trơn Trắng',
        types:['polo','askin','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['XL','2XL','3XL'],
                color:'Trắng',
                imgUrls: polo_nam_askin_10_white
            },
            
        ],
        category:'ao'
    },
    {
        id:11,
        gerder:'nam',
        name:'Áo Polo Nam Askin Bo Trơn Vàng',
        types:['polo','askin','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['XL','2XL','3XL'],
                color:'Vàng',
                imgUrls: polo_nam_askin_11_yellow
            },
            
        ],
        category:'ao'
    },
    {
        id:12,
        gerder:'nam',
        name:'Áo Polo Nam Askin Bo Trơn Xanh Đậm',
        types:['polo','askin','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['2XL'],
                color:'Vàng',
                imgUrls: polo_nam_askin_12_blue
            },
            
        ],
        category:'ao'
    },
    {
        id:13,
        gerder:'nu',
        name:'Áo Polo Nữ Airycool Thoáng Khí Thấm Hút Tốt',
        types:['polo','airycool','bst-xuan-he'],
        price:299000,
        colors: [
            {
                sizes: ['S','M','L'],
                color:'Đỏ',
                imgUrls: polo_nu_airycool_13_red
            },
            {
                sizes: ['S','M','L'],
                color:'Trắng',
                imgUrls:polo_nu_airycool_13_white
            },
            {
                sizes: ['S','M','L'],
                color:'Vàng',
                imgUrls:polo_nu_airycool_13_yellow
            }
        ],
        category:'ao'
    },
    {
        id:14,
        gerder:'nu',
        name:'Áo Polo Nữ Airycool Giữ Form Thoáng Mát',
        types:['polo','airycool','bst-xuan-he'],
        price:289000,
        colors: [
            {
                sizes: ['S','M','L'],
                color:'Đỏ',
                imgUrls: polo_nu_airycool_14_red
            },
            {
                sizes: ['S','M','L'],
                color:'Trắng',
                imgUrls:polo_nu_airycool_14_white
            },
            {
                sizes: ['S','M','L'],
                color:'Đen',
                imgUrls:polo_nu_airycool_14_black
            }
        ],
        category:'ao'
    },
    {
        id:15,
        gerder:'nam',
        name:'Áo Polo Nam Airycool Thoáng Khí Thấm Hút Tốt',
        types:['polo','airycool','bst-xuan-he'],
        price:299000,
        colors: [
            {
                sizes: ['M','L','XL'],
                color:'Đỏ',
                imgUrls: polo_nam_airycool_15_red
            },
            {
                sizes: ['M','L','XL'],
                color:'Trắng',
                imgUrls:polo_nam_airycool_15_white
            },
            {
                sizes: ['XL','2XL','3XL'],
                color:'Vàng',
                imgUrls:polo_nam_airycool_15_yellow
            }
        ],
        category:'ao'
    },
    {
        id:16,
        gerder:'nam',
        name:'Áo Polo Nam Airycool Giữ Form Thoáng Mát',
        types:['polo','airycool','bst-xuan-he'],
        price:299000,
        colors: [
            {
                sizes: ['M','XL','2XL'],
                color:'Đỏ',
                imgUrls: polo_nam_airycool_16_red
            },
            {
                sizes: ['M','XL','2XL'],
                color:'Trắng',
                imgUrls:polo_nam_airycool_16_white
            },
            {
                sizes: ['XL','2XL','3XL'],
                color:'Vàng',
                imgUrls:polo_nam_airycool_16_yellow
            }
        ],
        category:'ao'
    },
    {
        id:16,
        gerder:'nam',
        name:'Quần Âu Nam Vải Nano Cao Cấp Giữ Phom, Co Giãn Thoải Mái',
        types:['polo','airycool','bst-xuan-he'],
        price:299000,
        colors: [
            {
                sizes: ['M','XL','2XL'],
                color:'Đỏ',
                imgUrls: polo_nam_airycool_16_red
            },
            {
                sizes: ['M','XL','2XL'],
                color:'Trắng',
                imgUrls:polo_nam_airycool_16_white
            },
            {
                sizes: ['XL','2XL','3XL'],
                color:'Vàng',
                imgUrls:polo_nam_airycool_16_yellow
            }
        ],
        category:'ao'
    }, 
    {
        id:17,
        gerder:'nu',
        name:'Áo Polo Nữ Coolmax Lacoste',
        types:['polo','coolmax','bst-xuan-he'],
        price:299000,
        colors: [
            {
                sizes: ['XS','S','M'],
                color:'Xanh',
                imgUrls: polo_nu_coolmax_17_blue
            },
            {
                sizes: ['XS','S','M'],
                color:'Be',
                imgUrls:polo_nu_coolmax_17_beige
            },
            {
                sizes: ['XS','S','M'],
                color:'Hồng',
                imgUrls:polo_nu_coolmax_17_pink
            }
        ],
        category:'ao'
    },
    {
        id:18,
        gerder:'nam',
        name:'Áo Polo Nam Cool Compact Siêu Nhẹ - Đỏ',
        types:['polo','cool-compact','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['M','L','XL'],
                color:'Đỏ',
                imgUrls: polo_nam_cool_compact_18_red
            },
            
        ],
        category:'ao'
    },
    {
        id:19,
        gerder:'nu',
        name:'Áo Polo Nữ Cool Compact Siêu Nhẹ - Đỏ',
        types:['polo','cool-compact','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['S','M','L'],
                color:'Đỏ',
                imgUrls: polo_nu_cool_compact_19_red
            },
            
        ],
        category:'ao'
    },
    {
        id:20,
        gerder:'nu',
        name:'Áo Polo Nữ Mắt Chim Dáng Suông Họa Tiết Mỏ Neo',
        types:['polo','matchim','bst-xuan-he'],
        price:399000,
        colors: [
            {
                sizes: ['S','M','L'],
                color:'Trắng cafe',
                imgUrls: polo_nu_matchim_20_whitecafe
            },
            {
                sizes: ['S','M','L'],
                color:'Trắng đen',
                imgUrls: polo_nu_matchim_20_whiteblack
            },
            {
                sizes: ['S','M','L'],
                color:'Trắng nâu',
                imgUrls: polo_nu_matchim_20_whitebrown
            }
        ],
        category:'ao'
    }


    
]
export {headerMainNavs}