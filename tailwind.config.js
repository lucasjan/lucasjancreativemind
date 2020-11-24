// tailwind.config.js
module.exports = {
  theme: {
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
      'about-us': "url('/lucasjancreativemind/image/about-us-section.svg')",
      'people': "url('/lucasjancreativemind/image/people-bg.svg')",
        
      }),
      backgroundColor: theme => ({
        'theme-color': '#1C1C1C',

      })
    },
    height: {
        '1080xl': '67.5rem',
            }
  }
}

