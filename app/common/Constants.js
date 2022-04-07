import { Dimensions } from 'react-native'

const Constants = {
  nameStore: 'plantnmore',
  RTL: false, // default to set redux. Only use first time
  useReactotron: true,
  Language: 'English', // Arabic, English. Default to set redux. Only use first time
  fontFamilyRegular: 'Poppins-Regular',
  fontFamilyMedium: 'Poppins-Medium',
  fontFamilyBold: 'Poppins-Bold',
  fontFamilySemiBold: 'Poppins-SemiBold',

  kickOffCountry: ['in', 'il', 'am', 'ro'],

  EmitCode: {
    Toast: 'toast',
    Notification: 'notification',
    Timmer: 'timmer'

  },
  Dimension: {
    ScreenWidth (percent = 1) {
      return Dimensions.get('window').width * percent
    },
    ScreenHeight (percent = 1) {
      return Dimensions.get('window').height * percent
    }
  },

  LimitAddToCart: 100,
  ShowQuickCart: false, // show hide quick add to cart in product item
  PostImage: {
    small: 'small',
    medium: 'medium',
    medium_large: 'medium_large',
    large: 'large'
  },
  Layout: {
    card: 1,
    twoColumn: 2,
    simple: 3,
    list: 4,
    advance: 5,
    threeColumn: 6,
    horizon: 7,
    twoColumnHigh: 8,
    miniBanner: 9
  },
  pagingLimit: 10,

  fontText: {
    size: 16
  },

  // Export font size
  sizes: {
    base: 14,
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 16,
    h5: 14,
    h6: 12
  },

  // Export lineheights
  lineHeights: {
    base: 20,
    h1: 43,
    h2: 33,
    h3: 28,
    h4: 23,
    h5: 20,
    h6: 17
  },
  mapStyle:
      [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#242f3e'
            }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#746855'
            }
          ]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#242f3e'
            }
          ]
        },
        {
          featureType: 'administrative.country',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#fff2fd'
            },
            {
              weight: 1
            }
          ]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#263c3f'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#6b9a76'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#38414e'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#212a37'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9ca5b3'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#746855'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#1f2835'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#f3d19c'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#2f3948'
            }
          ]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#17263c'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#515c6d'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#17263c'
            }
          ]
        }
      ],
  countryList: {}

}

export default Constants
