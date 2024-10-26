import { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
// import resObj  from '../utils/mockData';
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(
        [
            {
                info: {
                    id: '5934',
                    name: 'Burger King',
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG',
                    locality: 'Koramangala',
                    areaName: 'Koramangala',
                    costForTwo: '₹350 for two',
                    cuisines: ['Burgers', 'American'],
                    avgRating: 4.1,
                    parentId: '166',
                    avgRatingString: '4.1',
                    totalRatingsString: '95K+',
                    sla: {
                        deliveryTime: 20,
                        lastMileTravel: 1.6,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '1.6 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 06:55:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png',
                                description: 'Delivery!',
                            },
                            {
                                imageId: 'Rxawards/_CATEGORY-Burger.png',
                                description: 'Delivery!',
                            },
                        ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId:
                                                'Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png',
                                        },
                                    },
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Burger.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '4.2',
                            ratingCount: '4.0K+',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '10576',
                    name: 'Pizza Hut',
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg',
                    locality: '6th Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹350 for two',
                    cuisines: ['Pizzas'],
                    avgRating: 3.8,
                    parentId: '721',
                    avgRatingString: '3.8',
                    totalRatingsString: '19K+',
                    sla: {
                        deliveryTime: 25,
                        lastMileTravel: 0.9,
                        serviceability: 'SERVICEABLE',
                        slaString: '25-30 mins',
                        lastMileTravelString: '0.9 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 04:00:00',
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹189',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '4.6',
                            ratingCount: '2.9K+',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '671928',
                    name: 'KFC',
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG',
                    locality: '7th Block',
                    areaName: 'Koramangla',
                    costForTwo: '₹400 for two',
                    cuisines: ['Burgers', 'Fast Food', 'Rolls & Wraps'],
                    avgRating: 4.1,
                    parentId: '547',
                    avgRatingString: '4.1',
                    totalRatingsString: '1.8K+',
                    sla: {
                        deliveryTime: 18,
                        lastMileTravel: 1.2,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '1.2 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 02:00:00',
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹179',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '656392',
                    name: 'Subway',
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/028cd410-8376-4db2-aae3-0a34de711943_656392.JPG',
                    locality: '1st Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹350 for two',
                    cuisines: ['Salads', 'Snacks', 'Desserts', 'Beverages'],
                    avgRating: 4,
                    parentId: '2',
                    avgRatingString: '4.0',
                    totalRatingsString: '1.8K+',
                    sla: {
                        deliveryTime: 19,
                        lastMileTravel: 1.6,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '1.6 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 03:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                                description: 'Delivery!',
                            },
                        ],
                        textExtendedBadges: [
                            {
                                iconId: 'guiltfree/GF_Logo_android_3x',
                                shortDescription: 'options available',
                                fontColor: '#7E808C',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: '',
                                            fontColor: '#7E808C',
                                            iconId: 'guiltfree/GF_Logo_android_3x',
                                            shortDescription: 'options available',
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹119',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '437721',
                    name: 'Kwality Walls Ice Cream and More',
                    cloudinaryImageId: 'zeebapgpk2nhhxpvnlen',
                    locality: 'Sree Renuka Yellama temple road',
                    areaName: 'Koramangala',
                    costForTwo: '₹300 for two',
                    cuisines: ['Ice Cream'],
                    avgRating: 4.5,
                    veg: true,
                    parentId: '582',
                    avgRatingString: '4.5',
                    totalRatingsString: '93',
                    sla: {
                        deliveryTime: 15,
                        lastMileTravel: 1.1,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '1.1 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 04:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'v1695133679/badges/Pure_Veg111.png',
                                description: 'pureveg',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'pureveg',
                                            imageId: 'v1695133679/badges/Pure_Veg111.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: '₹100 OFF',
                        subHeader: 'ABOVE ₹349',
                        discountTag: 'FLAT DEAL',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-sree-renuka-yellama-temple-road-koramangala-rest437721',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '621512',
                    name: 'The Belgian Waffle Co.',
                    cloudinaryImageId: '5116a385bac0548e06c33c08350fbf11',
                    locality: 'K.H.B Colony',
                    areaName: 'Koramangala',
                    costForTwo: '₹200 for two',
                    cuisines: ['Waffle', 'Desserts', 'Ice Cream', 'Beverages'],
                    avgRating: 4.4,
                    veg: true,
                    parentId: '2233',
                    avgRatingString: '4.4',
                    totalRatingsString: '1.1K+',
                    sla: {
                        deliveryTime: 25,
                        lastMileTravel: 1.4,
                        serviceability: 'SERVICEABLE',
                        slaString: '25-30 mins',
                        lastMileTravelString: '1.4 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 00:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Green%20Dot%20Awards/Best%20In%20Waffle.png',
                                description: 'Delivery!',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Green%20Dot%20Awards/Best%20In%20Waffle.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: '20% OFF',
                        subHeader: 'UPTO ₹50',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-k-h-b-colony-koramangala-rest621512',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '375041',
                    name: 'Andhra Gunpowder',
                    cloudinaryImageId: 'byilgyrcfz690ryoasww',
                    locality: '6th Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹350 for two',
                    cuisines: ['Andhra', 'Biryani', 'South Indian'],
                    avgRating: 4.4,
                    parentId: '10496',
                    avgRatingString: '4.4',
                    totalRatingsString: '4.2K+',
                    sla: {
                        deliveryTime: 20,
                        lastMileTravel: 0.1,
                        serviceability: 'SERVICEABLE',
                        slaString: '20-25 mins',
                        lastMileTravelString: '0.1 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 01:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Rxawards/_CATEGORY-Andhra.png',
                                description: 'Delivery!',
                            },
                        ],
                        textExtendedBadges: [
                            {
                                iconId: 'guiltfree/GF_Logo_android_3x',
                                shortDescription: 'options available',
                                fontColor: '#7E808C',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Andhra.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: '',
                                            fontColor: '#7E808C',
                                            iconId: 'guiltfree/GF_Logo_android_3x',
                                            shortDescription: 'options available',
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹149',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/andhra-gunpowder-6th-block-koramangala-rest375041',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '42060',
                    name: 'Sharief Bhai Biryani',
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/1fb3d278-2f68-4715-95c8-55ee76bc01fc_42060.jpg',
                    locality: 'Koramangala',
                    areaName: 'Koramangala',
                    costForTwo: '₹400 for two',
                    cuisines: [
                        'Biryani',
                        'Kebabs',
                        'Mughlai',
                        'Arabian',
                        'South Indian',
                        'Rolls & Wraps',
                        'Street Food',
                        'Fast Food',
                        'Desserts',
                        'Beverages',
                    ],
                    avgRating: 4.1,
                    parentId: '469102',
                    avgRatingString: '4.1',
                    totalRatingsString: '48K+',
                    sla: {
                        deliveryTime: 24,
                        lastMileTravel: 2.2,
                        serviceability: 'SERVICEABLE',
                        slaString: '20-25 mins',
                        lastMileTravelString: '2.2 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 03:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Rxawards/_CATEGORY-Biryani.png',
                                description: 'Delivery!',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Biryani.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹199',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '4.0',
                            ratingCount: '4.6K+',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-koramangala-rest42060',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '108097',
                    name: 'Ambur Star Briyani Since 1890',
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg',
                    locality: '2nd Stage',
                    areaName: 'BTM Layout',
                    costForTwo: '₹500 for two',
                    cuisines: ['Biryani', 'Chettinad', 'Andhra', 'Beverages', 'Seafood'],
                    avgRating: 4.3,
                    parentId: '21400',
                    avgRatingString: '4.3',
                    totalRatingsString: '18K+',
                    sla: {
                        deliveryTime: 29,
                        lastMileTravel: 3,
                        serviceability: 'SERVICEABLE',
                        slaString: '25-30 mins',
                        lastMileTravelString: '3.0 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 00:30:00',
                        opened: true,
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: 'guiltfree/GF_Logo_android_3x',
                                shortDescription: 'options available',
                                fontColor: '#7E808C',
                            },
                        ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: '',
                                            fontColor: '#7E808C',
                                            iconId: 'guiltfree/GF_Logo_android_3x',
                                            shortDescription: 'options available',
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/ambur-star-briyani-since-1890-2nd-stage-btm-layout-rest108097',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '23678',
                    name: "McDonald's",
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg',
                    locality: '5th Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹400 for two',
                    cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
                    avgRating: 4.3,
                    parentId: '630',
                    avgRatingString: '4.3',
                    totalRatingsString: '60K+',
                    sla: {
                        deliveryTime: 19,
                        lastMileTravel: 1.3,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '1.3 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 02:55:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png',
                                description: 'Delivery!',
                            },
                            {
                                imageId: 'Rxawards/_CATEGORY-Burger.png',
                                description: 'Delivery!',
                            },
                        ],
                        textExtendedBadges: [
                            {
                                iconId: 'guiltfree/GF_Logo_android_3x',
                                shortDescription: 'options available',
                                fontColor: '#7E808C',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId:
                                                'Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png',
                                        },
                                    },
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Burger.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: '',
                                            fontColor: '#7E808C',
                                            iconId: 'guiltfree/GF_Logo_android_3x',
                                            shortDescription: 'options available',
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: '30% OFF',
                        subHeader: 'UPTO ₹70',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '426776',
                    name: 'Theobroma',
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/57402f74-4e44-451f-8a05-13fe35fb7dd3_426776.JPG',
                    locality: '7th Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹400 for two',
                    cuisines: ['Desserts', 'Bakery', 'Beverages'],
                    avgRating: 4.6,
                    parentId: '1040',
                    avgRatingString: '4.6',
                    totalRatingsString: '4.5K+',
                    sla: {
                        deliveryTime: 13,
                        lastMileTravel: 1.3,
                        serviceability: 'SERVICEABLE',
                        slaString: '10-15 mins',
                        lastMileTravelString: '1.3 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-26 23:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Green%20Dot%20Awards/Best%20In%20Desserts.png',
                                description: 'Delivery!',
                            },
                            {
                                imageId: 'Rxawards/_CATEGORY-Desserts.png',
                                description: 'Delivery!',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Green%20Dot%20Awards/Best%20In%20Desserts.png',
                                        },
                                    },
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Desserts.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹99',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/theobroma-7th-block-koramangala-rest426776',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '18973',
                    name: 'Nandhana Palace',
                    cloudinaryImageId: '195876a3181ef63f76e45e3a7b49b585',
                    locality: 'Koramangala',
                    areaName: 'Koramangala',
                    costForTwo: '₹500 for two',
                    cuisines: ['Biryani', 'Andhra', 'South Indian', 'North Indian'],
                    avgRating: 4.1,
                    parentId: '2120',
                    avgRatingString: '4.1',
                    totalRatingsString: '33K+',
                    sla: {
                        deliveryTime: 18,
                        lastMileTravel: 0.5,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '0.5 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 02:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Rxawards/_CATEGORY-Andhra.png',
                                description: 'Delivery!',
                            },
                            {
                                imageId: 'Rxawards/_CATEGORY-Biryani.png',
                                description: 'Delivery!',
                            },
                        ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Andhra.png',
                                        },
                                    },
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Biryani.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '4.3',
                            ratingCount: '8.1K+',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '158855',
                    name: "Candice's Gourmet Sandwiches & Wraps",
                    cloudinaryImageId: 'd1331113564b015c9d55c48ff48a2553',
                    locality: '5th Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹600 for two',
                    cuisines: ['Salads', 'sandwich', 'Snacks'],
                    avgRating: 4.5,
                    parentId: '465403',
                    avgRatingString: '4.5',
                    totalRatingsString: '3.2K+',
                    sla: {
                        deliveryTime: 18,
                        lastMileTravel: 0.2,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '0.2 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-26 23:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'newg.png',
                                description: 'Gourmet',
                            },
                        ],
                        textExtendedBadges: [
                            {
                                iconId: 'guiltfree/GF_Logo_android_3x',
                                shortDescription: 'options available',
                                fontColor: '#7E808C',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Gourmet',
                                            imageId: 'newg.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: '',
                                            fontColor: '#7E808C',
                                            iconId: 'guiltfree/GF_Logo_android_3x',
                                            shortDescription: 'options available',
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: '50% OFF',
                        subHeader: 'UPTO ₹100',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-rest158855',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '255801',
                    name: 'Great Indian Khichdi by EatFit',
                    cloudinaryImageId: '6e44fd7f1e5cd9967edfe47c10247671',
                    locality: '6th Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹200 for two',
                    cuisines: [
                        'Home Food',
                        'Indian',
                        'North Indian',
                        'Healthy Food',
                        'Snacks',
                        'Desserts',
                        'Rajasthani',
                        'South Indian',
                        'Maharashtrian',
                        'Sweets',
                    ],
                    avgRating: 4.3,
                    veg: true,
                    parentId: '319582',
                    avgRatingString: '4.3',
                    totalRatingsString: '3.7K+',
                    sla: {
                        deliveryTime: 18,
                        lastMileTravel: 0.9,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '0.9 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 01:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Green%20Dot%20Awards/Best%20In%20Vegan.png',
                                description: 'Delivery!',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Green%20Dot%20Awards/Best%20In%20Vegan.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹89',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/great-indian-khichdi-by-eatfit-6th-block-koramangala-rest255801',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '558763',
                    name: 'HRX by EatFit',
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/27b3c3e0-1215-45b8-9807-81ea0ea98b0a_558763.jpg',
                    locality: '6th Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹450 for two',
                    cuisines: ['Healthy Food', 'Salads', 'Burgers'],
                    avgRating: 4.6,
                    parentId: '335529',
                    avgRatingString: '4.6',
                    totalRatingsString: '307',
                    sla: {
                        deliveryTime: 16,
                        lastMileTravel: 0.9,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '0.9 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 01:00:00',
                        opened: true,
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: 'guiltfree/GF_Logo_android_3x',
                                shortDescription: 'brand',
                                fontColor: '#7E808C',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: '',
                                            fontColor: '#7E808C',
                                            iconId: 'guiltfree/GF_Logo_android_3x',
                                            shortDescription: 'brand',
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: '50% OFF',
                        subHeader: 'UPTO ₹100',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/hrx-by-eatfit-6th-block-koramangala-rest558763',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '65797',
                    name: "Leon's - Burgers & Wings (Leon Grill)",
                    cloudinaryImageId:
                        'RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg',
                    locality: 'Koramangala',
                    areaName: 'Koramangala',
                    costForTwo: '₹300 for two',
                    cuisines: [
                        'American',
                        'Snacks',
                        'Turkish',
                        'Portuguese',
                        'Continental',
                    ],
                    avgRating: 4.3,
                    parentId: '371281',
                    avgRatingString: '4.3',
                    totalRatingsString: '48K+',
                    sla: {
                        deliveryTime: 17,
                        lastMileTravel: 1.3,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '1.3 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 04:00:00',
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹99',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '4.5',
                            ratingCount: '4.0K+',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '551720',
                    name: 'Yuki',
                    cloudinaryImageId: 'kmsrz96lzstsabwtn9em',
                    locality: 'KHB Block',
                    areaName: 'Koramangala',
                    costForTwo: '₹400 for two',
                    cuisines: ['Thai', 'Pan-Asian', 'Japanese'],
                    avgRating: 4.4,
                    parentId: '331481',
                    avgRatingString: '4.4',
                    totalRatingsString: '888',
                    sla: {
                        deliveryTime: 27,
                        lastMileTravel: 0.1,
                        serviceability: 'SERVICEABLE',
                        slaString: '25-30 mins',
                        lastMileTravelString: '0.1 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-26 23:30:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'newg.png',
                                description: 'Gourmet',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Gourmet',
                                            imageId: 'newg.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: '40% OFF',
                        subHeader: 'UPTO ₹80',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/yuki-khb-block-koramangala-rest551720',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '717421',
                    name: 'Paris Panini - Gourmet Sandwiches & Wraps',
                    cloudinaryImageId: 'c27da4b0bab4ca71460bdf082cf58ad4',
                    locality: 'BTM Layout',
                    areaName: 'Koramangala',
                    costForTwo: '₹500 for two',
                    cuisines: [
                        'Continental',
                        'Pastas',
                        'Salads',
                        'Desserts',
                        'Snacks',
                        'Fast Food',
                        'French',
                    ],
                    avgRating: 4.4,
                    parentId: '21019',
                    avgRatingString: '4.4',
                    totalRatingsString: '1.1K+',
                    sla: {
                        deliveryTime: 20,
                        lastMileTravel: 1.6,
                        serviceability: 'SERVICEABLE',
                        slaString: '20-25 mins',
                        lastMileTravelString: '1.6 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-26 23:30:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                                description: 'Delivery!',
                            },
                        ],
                        textExtendedBadges: [
                            {
                                iconId: 'guiltfree/GF_Logo_android_3x',
                                shortDescription: 'options available',
                                fontColor: '#7E808C',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Delivery!',
                                            imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: '',
                                            fontColor: '#7E808C',
                                            iconId: 'guiltfree/GF_Logo_android_3x',
                                            shortDescription: 'options available',
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: '60% OFF',
                        subHeader: 'UPTO ₹120',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-btm-layout-koramangala-rest717421',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '41913',
                    name: 'Chinita Real Mexican Food',
                    cloudinaryImageId: '29fc772cc06b07a4b018e4971d96c9a3',
                    locality: 'Koramangala',
                    areaName: 'Koramangala',
                    costForTwo: '₹750 for two',
                    cuisines: ['Mexican', 'Salads', 'Desserts', 'Beverages'],
                    avgRating: 4.4,
                    parentId: '5064',
                    avgRatingString: '4.4',
                    totalRatingsString: '6.6K+',
                    sla: {
                        deliveryTime: 17,
                        lastMileTravel: 0.2,
                        serviceability: 'SERVICEABLE',
                        slaString: '15-20 mins',
                        lastMileTravelString: '0.2 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-26 23:00:00',
                        opened: true,
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: 'newg.png',
                                description: 'Gourmet',
                            },
                        ],
                    },
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: 'Gourmet',
                                            imageId: 'newg.png',
                                        },
                                    },
                                ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: '50% OFF',
                        subHeader: 'UPTO ₹100',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '4.2',
                            ratingCount: '2.1K+',
                        },
                        source: 'GOOGLE',
                        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/chinita-real-mexican-food-koramangala-rest41913',
                    type: 'WEBLINK',
                },
            },
            {
                info: {
                    id: '737688',
                    name: 'Wow! China',
                    cloudinaryImageId: '95982cfa57cb3b7e504f2015c375fd55',
                    locality: 'KORAMANGALA LAYOUT EXTENSION',
                    areaName: 'KORAMANGALA',
                    costForTwo: '₹300 for two',
                    cuisines: [
                        'Tibetan',
                        'Chinese',
                        'Asian',
                        'Snacks',
                        'Continental',
                        'Desserts',
                        'Beverages',
                    ],
                    avgRating: 4.1,
                    parentId: '226836',
                    avgRatingString: '4.1',
                    totalRatingsString: '97',
                    sla: {
                        deliveryTime: 22,
                        lastMileTravel: 0.3,
                        serviceability: 'SERVICEABLE',
                        slaString: '20-25 mins',
                        lastMileTravelString: '0.3 km',
                        iconType: 'ICON_TYPE_EMPTY',
                    },
                    availability: {
                        nextCloseTime: '2024-10-27 02:00:00',
                        opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: 'F',
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {},
                        },
                    },
                    aggregatedDiscountInfoV3: {
                        header: 'ITEMS',
                        subHeader: 'AT ₹129',
                    },
                    differentiatedUi: {
                        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                        differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                        },
                    },
                    reviewsSummary: {},
                    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                        aggregatedRating: {
                            rating: '--',
                        },
                    },
                    ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
                },
                analytics: {
                    context: 'seo-data-2c7ae379-044d-4139-a0f7-b5e4c6905500',
                },
                cta: {
                    link:
                        'https://www.swiggy.com/city/bangalore/wow-china-layout-extension-koramangala-rest737688',
                    type: 'WEBLINK',
                },
            },
        ]);
    return (
        <div className='body'>
            <div className='filter'>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((f) => f.info.avgRating> 4);
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className='res-container'>
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
