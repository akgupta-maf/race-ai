/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(49, 37, 28)',
          20: 'rgb(214, 211, 210)',
          40: 'rgb(173, 168, 164)',
          60: 'rgb(131, 124, 119)',
          80: 'rgb(90, 81, 73)',
        },
        secondary: {
          DEFAULT: 'rgb(180, 151, 90)',
          80: 'rgb(195, 172, 123)',
          60: 'rgb(210, 193, 156)',
          40: 'rgb(225, 213, 189)',
          20: 'rgb(240, 234, 222)',
        },
        cta: {
          DEFAULT: 'rgb(138, 21, 56)',
          hover: 'rgb(161, 68, 96)',
        },
        typography: {
          DEFAULT: 'rgb(30, 41, 59)',
          secondary: 'rgb(148, 163, 184)',
        },
        surface: {
          bg: 'rgb(241, 245, 249)',
        },
        success: {
          DEFAULT: 'rgb(108, 164, 57)',
          80: 'rgb(137, 182, 97)',
          60: 'rgb(167, 200, 136)',
          40: 'rgb(196, 219, 176)',
          20: 'rgb(226, 237, 215)',
        },
        warning: {
          DEFAULT: 'rgb(253, 185, 19)',
          80: 'rgb(253, 199, 66)',
          60: 'rgb(253, 213, 113)',
          40: 'rgb(254, 227, 161)',
          20: 'rgb(255, 241, 208)',
        },
        burgundy: {
          DEFAULT: 'rgb(138, 21, 56)',
          80: 'rgb(161, 68, 96)',
          60: 'rgb(184, 115, 136)',
          40: 'rgb(207, 162, 176)',
          20: 'rgb(230, 209, 216)',
        },
        orange: {
          DEFAULT: 'rgb(248, 151, 21)',
          80: 'rgb(249, 172, 68)',
          60: 'rgb(251, 193, 115)',
          40: 'rgb(252, 213, 161)',
          20: 'rgb(254, 234, 208)',
        },
        blue: {
          DEFAULT: 'rgb(0, 150, 214)',
          80: 'rgb(51, 171, 222)',
          60: 'rgb(102, 192, 230)',
          40: 'rgb(153, 213, 239)',
          20: 'rgb(204, 234, 247)',
        },
      },
    },
  },
  plugins: [],
}
