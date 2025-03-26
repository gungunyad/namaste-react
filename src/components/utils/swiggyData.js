const restLists = [
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
          "collectionId": "83637",
          "title": "Burger",
          "description": "Satisfy your cravings with these fresh and flavoursome burgers.",
          "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/2/6f256b56-e319-488b-8003-9ccca21d4f14_pic",
          "aspectRatio": "3.44",
          "cta": {
            "link": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger,burger,layout_Burger,ads_pc_burger",
            "type": "collectionv2"
          },
          "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
          "count": "65 restaurants"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
          "sortConfigs": [
            {
              "key": "relevance",
              "title": "Relevance (Default)",
              "selected": true,
              "defaultSelection": true
            },
            {
              "key": "deliveryTimeAsc",
              "title": "Delivery Time"
            },
            {
              "key": "modelBasedRatingDesc",
              "title": "Rating"
            },
            {
              "key": "costForTwoAsc",
              "title": "Cost: Low to High"
            },
            {
              "key": "costForTwoDesc",
              "title": "Cost: High to Low"
            }
          ],
          "restaurantCount": 65,
          "facetList": [
            {
              "label": "10 Mins Delivery",
              "id": "isRestaurantBolt",
              "selection": "SELECT_TYPE_SINGLESELECT",
              "facetInfo": [
                {
                  "label": "10 Mins Delivery",
                  "id": "isRestaurantBoltfacetquery0",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_FLATTENED",
              "subLabel": "Filterby",
              "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
              "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/fcab0012-69db-492b-83ef-e61699c3bf5b_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
            },
            {
              "label": "Veg/Non-Veg",
              "id": "isVeg",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Non Veg",
                  "id": "isVegfacetquery0",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Pure Veg",
                  "id": "isVegfacetquery1",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby",
              "openFilter": true
            },
            {
              "label": "Ratings",
              "id": "rating",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Ratings",
                  "id": "ratingfacetquery0",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Ratings 4.0+",
                  "id": "ratingfacetquery1",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Ratings 4.5+",
                  "id": "ratingfacetquery2",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby",
              "openFilter": true
            },
            {
              "label": "Delivery Time",
              "id": "deliveryTime",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Less than 30 mins",
                  "id": "deliveryTimefacetquery0",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Less than 45 mins",
                  "id": "deliveryTimefacetquery1",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby",
              "openFilter": true
            },
            {
              "label": "Cost For Two",
              "id": "costForTwo",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Less than Rs. 300",
                  "id": "costForTwofacetquery0",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Rs.300 - Rs.600",
                  "id": "costForTwofacetquery1",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Greater than Rs. 600",
                  "id": "costForTwofacetquery2",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby",
              "openFilter": true
            }
          ]
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          "layout": {
            "rows": 1,
            "widgetPadding": {
              "left": 16,
              "right": 16
            },
            "scrollBar": {
              
            },
            "widgetTheme": {
              "defaultMode": {
                "backgroundColour": "#FFFFFF",
                "theme": "THEME_TYPE_LIGHT"
              },
              "darkMode": {
                "backgroundColour": "#1B3028",
                "theme": "THEME_TYPE_DARK"
              }
            }
          },
          "id": "restaurantCountWidget",
          "gridElements": {
            "infoWithStyle": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
              "text": "Restaurants to explore",
              "headerStyling": {
                "textSize": 15,
                "textColor": "text_color_highest_emphasis",
                "textFontName": "FONT_NAME_HEADER_H5",
                "maxLines": 1
              }
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "448533",
            "name": "B Burger - Bigger Burger",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/2/08fd14ff-fe06-4778-b25f-cfe1a8a09cf4_cc5b070d-c307-40ea-a9e6-e1051b828573.jpg",
            "locality": "Thane West",
            "areaName": "Majiwada",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "American"
            ],
            "avgRating": 4.3,
            "parentId": "454391",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.3K+",
            "promoted": true,
            "adTrackingId": "cid=26909034~p=0~adgrpid=26909034#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=448533~eid=92281a64-9bdf-4727-8ff9-20d518b5b7b2~srvts=1742983869475~collid=83637",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-03-26 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/bolt%206.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "bolt/bolt%206.png",
                        "description": "bolt!"
                      }
                    },
                    {
                      "attributes": {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              },
              "commsStyling": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.4",
                "ratingCount": "49"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26909034"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=448533&source=collection&query=Burger",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "221810",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/48de608c-d073-445e-8d15-458430e86c78_221810.jpg",
            "locality": "Lake City Mall",
            "areaName": "Thane West",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.4,
            "parentId": "166",
            "avgRatingString": "4.4",
            "totalRatingsString": "39K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 0.3,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-03-27 06:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/bolt%206.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "bolt/bolt%206.png",
                        "description": "bolt!"
                      }
                    },
                    {
                      "attributes": {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              },
              "commsStyling": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=221810&source=collection&query=Burger",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "973758",
            "name": "Wendy's Burgers",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/1/fb5f0af0-34f6-4c8a-aee0-f7fd40772f00_92b9ff1e-83fe-4b5a-8be0-64c8b6f6d567.jpeg",
            "locality": "Primus Business Park",
            "areaName": "Wagle Estate Thane",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks"
            ],
            "avgRating": 4.3,
            "parentId": "972",
            "avgRatingString": "4.3",
            "totalRatingsString": "221",
            "promoted": true,
            "adTrackingId": "cid=26903760~p=1~adgrpid=26903760#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=973758~eid=1b46f258-700e-49f1-a2af-a23a05a66fa2~srvts=1742983869475~collid=83637",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 3.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-03-26 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹59"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              },
              "commsStyling": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26903760"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=973758&source=collection&query=Burger",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "23740",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/8c907c87-752d-46e2-aab9-fba2cd9dc4c5_23740.jpg",
            "locality": "Lake City Mall",
            "areaName": "Thane West",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "27K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 0.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-03-26 23:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹199",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              },
              "commsStyling": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=23740&source=collection&query=Burger",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "340444",
            "name": "Social",
            "cloudinaryImageId": "fnkptar5tiqelwchiggy",
            "locality": "Tenant Space SF-32",
            "areaName": "Viviana Mall",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Chinese",
              "Fast Food",
              "Biryani",
              "Pizzas",
              "Salads",
              "Kebabs",
              "Juices",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "2146",
            "avgRatingString": "4.2",
            "totalRatingsString": "2.3K+",
            "promoted": true,
            "adTrackingId": "cid=26820073~p=2~adgrpid=26820073#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=340444~eid=2f0c6240-21e8-432d-b5ef-2b5a89eac37c~srvts=1742983869475~collid=83637",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-03-27 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                },
                "imageBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹199"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              },
              "commsStyling": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26820073"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=340444&source=collection&query=Burger",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "342530",
            "name": "BOSS Burger",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/f52ff27e-851d-4c8e-8fca-c78603e24d5a_342530.jpg",
            "locality": "Thane West",
            "areaName": "Viviana Mall",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks"
            ],
            "avgRating": 4.4,
            "parentId": "8594",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.3K+",
            "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-03-27 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              },
              "commsStyling": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=342530&source=collection&query=Burger",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "329388",
            "name": "The Food Town",
            "cloudinaryImageId": "8b8b9dbee19d8f10d953b8eb66e0173a",
            "locality": "Naupada",
            "areaName": "Thane West",
            "costForTwo": "₹700 for two",
            "cuisines": [
              "Indian",
              "Chinese",
              "Italian",
              "Continental",
              "Desserts",
              "Beverages",
              "Snacks"
            ],
            "avgRating": 4.6,
            "parentId": "208534",
            "avgRatingString": "4.6",
            "totalRatingsString": "3.5K+",
            "promoted": true,
            "adTrackingId": "cid=26706649~p=3~adgrpid=26706649#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=329388~eid=64593508-0b19-40e6-9ac0-92b783943a52~srvts=1742983869475~collid=83637",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 3.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "3.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-03-26 23:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              },
              "commsStyling": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "4.1K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26706649"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=329388&source=collection&query=Burger",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    }
  ];

  export default restLists;
