/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        
      },
      backgroundImage:{
        'my-image': "url('/public/img/Back2.jpg')"
      },
      fontFamily:{
        'Quicksand': ['Quicksand']
      },

      fontSize:{
        'medium': '18px',
        'small': '14px'
    },
      width:{
        'basic-width': "130px",
        'basic-height': "150px",
        "frame-width": "70%",
        "details-width": "30%",
        "small-width": "5%",
        "auto-width": "90%",
        "med-small-width": "15%",
        "pixel-basic-width": "300px"
         
      },
      scale:{
        "basic-scale": 110
      },
      maxWidth:{
        'basic-max-width': '1000px',
        'wrap-width': '100%',
        'medium-max': '350px',
      },
      animation:{
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite'
      },
      keyframes:{
        'bounce-slow':{
          '0%':{transform: 'translateY(0)'},
          '25%':{transform: 'translateY(-35px)'},
          '50%':{transform: 'translateY(0)'},
          '75%':{transform: 'translateY(-20px)'},
          '100%': {transform: 'translateY(0)'},
        },
        
        
      },
      borderWidth:{
        'basic-border': '1px'
      },
      fontWeight: {
        'extra-light': '100',
        'light': '200',
        'super-light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extra-bold': '800',
        'black': '900',
      },
      
    },
  },
  plugins: [],
}

