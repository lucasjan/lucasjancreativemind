// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'mgbd-b-red': '#EC221C',
     }),
    inset: {
      '0': '0',
     auto: 'auto',
     '2/3': '66.666667%',
     '3/4': '75%',
     '1/2': '50%',
     '4/5': '40%',
     '3/5': '30%',
     '2/5': '20%',
     '1': '1rem',
     '2': '2rem',
     '5': '5rem',
     '-5': '-5rem',

    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
    },
    extend: {
      backgroundImage: theme => ({
      'about-us': "url('./image/about-us-section.svg')",
      'people': "url('./image/people-bg.svg')",
      'footer': "url('./image/footer-bg.svg')",
      'slider-1': "url('./image/slider-img.jpg')",
      'engine': "url('./image/engine-parts.png')",
      'suspension': "url('./image/suspension-parts.png')",
      'brake': "url('./image/break-parts.png')",
      'exhaust': "url('./image/exhaust-parts.png')",
      'bodykit': "url('./image/body-kits.png')",
      'motor': "url('./image/motor-oils.png')",
      'steering': "url('./image/steering-parts.png')",
      'transmission': "url('./image/transmission-parts.jpg')",
      'prof': "url('./image/prof-image.svg')",
      'trap-black': "url('./image/trap-black.svg')",
      'trap-grey': "url('./image/trap-grey.svg')",
      'lp': "url('./image/light-products.jpg')",
      'tp': "url('./image/tire-products.jpg')",
      'bp': "url('./image/brake-products.jpg')",
      'gnf': "url('./image/gnf-header-image.png')",
      'gnf-freequote': "url('./image/free-quote.jpg')",
      'gnf-hd': "url('./image/cta-header.png')",
      'gnf-abstract1': "url('./image/abstract1.jpg')",
      'gnf-abstract2': "url('./image/abstract2.png')",
      'gnf-abstract3': "url('./image/testimonials.png')",
      'gnf-com-box': "url('./image/comment-box.png')",
      'uat-head': "url('./image/uat-header.jpg')",
      'uat-hive': "url('./image/hive-background.png')",
      'uat-hive2': "url('./image/uat-hive2.png')",
      'uat-deg': "url('./image/our-degrees.jpg')",
      'uat-hack': "url('./image/hacker.jpg')",
      'uat-grey': "url('./image/grey-uat.png')",
      'uat-request': "url('./image/request-background.jpg')",
      'yale-header': "url('./image/hive-header.jpg')",
      'pj-header-nav': "url('./image/pennyjuice-green-background.svg')",
      'pj-header': "url('./image/pj-fruit.png')",
      'pj-torn': "url('./image/green-torn-border.png')",
      'pj-w-cirle': "url('./image/white-circle.svg')",
      'paradise-slider': "url('./image/slide-paradise.jpg')",
      'paradise-trans': "url('./image/trans-pic.png')",
      'paradise-trans2': "url('./image/trans-pic2.png')",
      'paradise-property': "url('./image/property.jpg')",
      }),

      borderColor: theme => ({
        'paradise-primary': '#F2B846',
       }),

      textColor: theme => ({
            'ass-primary': '#FB8122',
            'gnf-primary': '#F9A34F',
            'gnf-grey': '#999999',
            'mgbd-red':'#EC221C',
            'mgbd-grey': '#939292',
            'yale-grey': '#777777',
            'paradise-orange': '#F2B846',
            'paradise-grey': '#616161',
        }),    
      backgroundColor: theme => ({
        'theme-color': '#1C1C1C',
        'ass-theme-color': '#E1E2E2',
        'ass-background-color': '#CACCC9',
        'ass-bgcolor-orange': '#FB8122',
        'ass-bgcolor-black': '#1D2228',
        'mgbd-red': '#EC221C',
        'mgbd-grey': '#2e2e2e',
        'gnf-primary': '#1B232A',
        'gnf-secondary': '#F9A34F',
        'uat-primary': '#1A1A1A',
        'yale-primary': '#FBE82D',
        'yale-grey': '#464646',
        'pj-orange': '#F07A18',
        'pj-orange-fruit': '#ED8E40',
        'pj-yellow-fruit': '#F8D25A',
        'pj-green-fruit': '#A5D15D',
        'pj-grey': '#E1E1E1',
        'pj-primary': '#F6F5FA',
        'pj-secondary': '#575757',
        'paradise-primary': '#F2B846',
        'paradise-primary-light': '#F8DBA2',
        'paradise-secondary': '#013953',
        
      }),
      fontFamily:{
        'official': ['Verdana'],
        'ass-modern': ['MOD20'],
        'ass-brittany': ['BrittanySignatureRegular, Brittany Signature'],
        'ass-raleway' : ['Raleway'],
        'uat-georgia' : ['Georgia'],
        'yale-new' : ['YaleNew'],
        'pj-varela' : ['Varela Round'],
      },

      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '4/6': '60%',
        '3/4': '75%',
        'full': '100%',
       },

      width:{
        '6per': '6%',
        '8per': '8%',
        '10per': '10%',
        '12per': '12%',
        '35per': '35%',
        '20per': '20%',
        '24' : '24rem',
        '20' : '20rem',
        '18' : '18rem',
      }
    },

    height: {
        '1080xl': '67.5rem',
        '1/5': '20%',
        '24' : '24rem',
        '20' : '20rem',
        '18' : '18rem',
            }

  }
}
