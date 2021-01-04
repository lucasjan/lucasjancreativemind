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
      '0': 0,
     auto: 'auto',
     '2/3': '66.666667%',
     '3/4': '75%',
     '1/2': '50%',
     '4/5': '40%',
     '3/5': '30%',
     '2/5': '20%',
     '2': '2rem',
     '5': '5rem',
     '-5': '-5rem',
     '0': '0',
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
      }),
      textColor: theme => ({
            'ass-primary': '#FB8122',
            'mgbd-red':'#EC221C',
        }),    
      backgroundColor: theme => ({
        'theme-color': '#1C1C1C',
        'ass-theme-color': '#E1E2E2',
        'ass-background-color': '#CACCC9',
        'ass-bgcolor-orange': '#FB8122',
        'ass-bgcolor-black': '#1D2228',
        'mgbd-red': '#EC221C',
        'mgbd-grey': '#2e2e2e',
      }),
      fontFamily:{
        'official': ['Verdana'],
        'ass-modern': ['MOD20'],
        'ass-brittany': ['BrittanySignatureRegular, Brittany Signature'],
        'ass-raleway' : ['Raleway'],
      },
      width:{
        '8per': '8%',
      }
    },

    height: {
        '1080xl': '67.5rem',
        '1/5': '20%',
            }
    
  }
}
