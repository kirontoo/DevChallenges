module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: 'rgba(235, 87, 87, 1)',
      black: 'rgba(51, 51, 51, 1)',
      white: {
        light: 'rgba(255, 255, 255, 1)',
        DEFAULT: 'rgba(242, 242, 242, 1)'
      },
      gray: {
        light: 'rgba(189, 189, 189, 1)',
        DEFAULT: 'rgba(130, 130, 130, 1)',
        dark: 'rgba(79, 79, 79, 1)'
      },
    }
  },
  variants: {
    extend: {
      inset: ['hover']
    },
  },
  plugins: [],
}
