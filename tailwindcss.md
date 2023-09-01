# vue3+ts:tailwindcss的配置项详解(theme主题配置篇)

## 配置文件
直接上官方的默认配置代码，<span style="color:rgb(236, 72, 153)">注意content里的作用域</span>
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    accentColor: ({ theme }) => ({
      ...theme('colors'),
      auto: 'auto',
    }),
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    aria: {
      busy: 'busy="true"',
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
    },
    backdropBlur: ({ theme }) => theme('blur'),
    backdropBrightness: ({ theme }) => theme('brightness'),
    backdropContrast: ({ theme }) => theme('contrast'),
    backdropGrayscale: ({ theme }) => theme('grayscale'),
    backdropHueRotate: ({ theme }) => theme('hueRotate'),
    backdropInvert: ({ theme }) => theme('invert'),
    backdropOpacity: ({ theme }) => theme('opacity'),
    backdropSaturate: ({ theme }) => theme('saturate'),
    backdropSepia: ({ theme }) => theme('sepia'),
    backgroundColor: ({ theme }) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
    backgroundOpacity: ({ theme }) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    blur: {
      0: '0',
      none: '0',
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
    borderOpacity: ({ theme }) => theme('opacity'),
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    borderSpacing: ({ theme }) => ({
      ...theme('spacing'),
    }),
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    boxShadowColor: ({ theme }) => theme('colors'),
    brightness: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    caretColor: ({ theme }) => theme('colors'),
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      '3xs': '16rem',
      '2xs': '18rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },
    container: {},
    content: {
      none: 'none',
    },
    contrast: {
      0: '0',
      50: '.5',
      75: '.75',
      100: '1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
      none: 'none',
      'context-menu': 'context-menu',
      progress: 'progress',
      cell: 'cell',
      crosshair: 'crosshair',
      'vertical-text': 'vertical-text',
      alias: 'alias',
      copy: 'copy',
      'no-drop': 'no-drop',
      grab: 'grab',
      grabbing: 'grabbing',
      'all-scroll': 'all-scroll',
      'col-resize': 'col-resize',
      'row-resize': 'row-resize',
      'n-resize': 'n-resize',
      'e-resize': 'e-resize',
      's-resize': 's-resize',
      'w-resize': 'w-resize',
      'ne-resize': 'ne-resize',
      'nw-resize': 'nw-resize',
      'se-resize': 'se-resize',
      'sw-resize': 'sw-resize',
      'ew-resize': 'ew-resize',
      'ns-resize': 'ns-resize',
      'nesw-resize': 'nesw-resize',
      'nwse-resize': 'nwse-resize',
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out',
    },
    divideColor: ({ theme }) => theme('borderColor'),
    divideOpacity: ({ theme }) => theme('borderOpacity'),
    divideWidth: ({ theme }) => theme('borderWidth'),
    dropShadow: {
      sm: '0 1px 1px rgb(0 0 0 / 0.05)',
      DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
      md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
      lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
      xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      none: '0 0 #0000',
    },
    fill: ({ theme }) => ({
      none: 'none',
      ...theme('colors'),
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
    }),
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    gap: ({ theme }) => theme('spacing'),
    gradientColorStops: ({ theme }) => theme('colors'),
    gradientColorStopPositions: {
      '0%': '0%',
      '5%': '5%',
      '10%': '10%',
      '15%': '15%',
      '20%': '20%',
      '25%': '25%',
      '30%': '30%',
      '35%': '35%',
      '40%': '40%',
      '45%': '45%',
      '50%': '50%',
      '55%': '55%',
      '60%': '60%',
      '65%': '65%',
      '70%': '70%',
      '75%': '75%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '95%': '95%',
      '100%': '100%',
    },
    grayscale: {
      0: '0',
      DEFAULT: '100%',
    },
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    hueRotate: {
      0: '0deg',
      15: '15deg',
      30: '30deg',
      60: '60deg',
      90: '90deg',
      180: '180deg',
    },
    inset: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    invert: {
      0: '0',
      DEFAULT: '100%',
    },
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    listStyleImage: {
      none: 'none',
    },
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    lineClamp: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
    },
    maxHeight: ({ theme }) => ({
      ...theme('spacing'),
      none: 'none',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    outlineColor: ({ theme }) => theme('colors'),
    outlineOffset: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    outlineWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    padding: ({ theme }) => theme('spacing'),
    placeholderColor: ({ theme }) => theme('colors'),
    placeholderOpacity: ({ theme }) => theme('opacity'),
    ringColor: ({ theme }) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
    ringOffsetColor: ({ theme }) => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringOpacity: ({ theme }) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    rotate: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    saturate: {
      0: '0',
      50: '.5',
      100: '1',
      150: '1.5',
      200: '2',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    scrollMargin: ({ theme }) => ({
      ...theme('spacing'),
    }),
    scrollPadding: ({ theme }) => theme('spacing'),
    sepia: {
      0: '0',
      DEFAULT: '100%',
    },
    skew: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    space: ({ theme }) => ({
      ...theme('spacing'),
    }),
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    stroke: ({ theme }) => ({
      none: 'none',
      ...theme('colors'),
    }),
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    supports: {},
    data: {},
    textColor: ({ theme }) => theme('colors'),
    textDecorationColor: ({ theme }) => theme('colors'),
    textDecorationThickness: {
      auto: 'auto',
      'from-font': 'from-font',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textIndent: ({ theme }) => ({
      ...theme('spacing'),
    }),
    textOpacity: ({ theme }) => theme('opacity'),
    textUnderlineOffset: {
      auto: 'auto',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    transitionDelay: {
      0: '0s',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionDuration: {
      DEFAULT: '150ms',
      0: '0s',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: ({ theme }) => ({
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    width: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      svw: '100svw',
      lvw: '100lvw',
      dvw: '100dvw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    willChange: {
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      transform: 'transform',
    },
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },
  plugins: [],
}

```
## 强调色
```javascript
accentColor: ({ theme }) => ({
  ...theme('colors'),
  auto: 'auto',
}),
```
使用accent-{color}更改元素的强调色。这对于通过覆盖浏览器的默认颜色来设置诸如复选框和单选按钮组之类的元素样式很有帮助。
```html
<input type="checkbox" class="accent-pink-500" checked> Customized
```
可以添加以下配置
```javascript
accentColor: ({ theme }) => ({
  ...theme('colors'),
  auto: 'auto',
  light: 'rgb(253, 224, 71)'
}),
```
```html
<input type="checkbox" class="accent-light" checked> Customized
```

## 动画效果
```javascript
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
```
使用 CSS 动画为元素添加动画效果的配置。
<small>
none: 'none'：表示没有动画效果，使用 'none' 作为样式值。
spin: 'spin 1s linear infinite'：表示一个旋转动画，使用 'spin' 作为样式名称，1s 表示动画持续时间为 1 秒，linear 表示动画速度线性，infinite 表示动画无限循环。
ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'：表示一个闪烁动画，使用 'ping' 作为样式名称，1s 表示动画持续时间为 1 秒，cubic-bezier(0, 0, 0.2, 1) 表示动画速度的贝塞尔曲线函数，infinite 表示动画无限循环。
pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'：表示一个脉冲动画，使用 'pulse' 作为样式名称，2s 表示动画持续时间为 2 秒，cubic-bezier(0.4, 0, 0.6, 1) 表示动画速度的贝塞尔曲线函数，infinite 表示动画无限循环。
bounce: 'bounce 1s infinite'：表示一个弹跳动画，使用 'bounce' 作为样式名称，1s 表示动画持续时间为 1 秒，infinite 表示动画无限循环。
</samll>
```html
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-spin">
        旋转效果
    </button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-ping">
        闪烁效果
    </button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-pulse">
        脉冲效果
    </button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-bounce">
        弹跳效果
    </button>
```
可以合理运用这些动画制作好看的效果，比如一个闪烁效果的徽章
```html
    <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
```

## 动画的关键帧
```javascript
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
```
在 Tailwind CSS 中，可以使用 keyframes 配置项来定义和扩展关键帧动画，并在动画类名中应用这些关键帧。这样，你可以轻松地创建和使用自定义动画效果，以满足你的项目需求。
```javascript
    keyframes: {
      myCustomAnimation: {
        '0%': { opacity: '1', transform: 'translateX(0)' },
        '50%': { opacity: '0.5', transform: 'translateX(50px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
```
并在animation里申明
```javascript
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      'custom-animation': 'myCustomAnimation 2s ease-in-out infinite',
    },
```
```html
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-custom-animation">
        自定义效果
    </button>
```

## ARIA 状态和属性
```javascript
    aria: {
      busy: 'busy="true"',
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"',
    },
```
aria 是一个自定义配置项，用于定义无障碍属性（ARIA attributes）。ARIA 属性是一组用于改善可访问性的 HTML 属性，用于提供更多的语义和信息，使得使用辅助技术的用户能够更好地理解和操作网页内容。
<small>
busy: 'busy="true"'：表示元素正在忙碌或进行中。
checked: 'checked="true"'：表示元素被选中或选中状态。
disabled: 'disabled="true"'：表示元素被禁用或不可用状态。
expanded: 'expanded="true"'：表示元素处于展开或扩展状态。
hidden: 'hidden="true"'：表示元素隐藏或不可见。
pressed: 'pressed="true"'：表示元素被按下或处于按下状态。
readonly: 'readonly="true"'：表示元素是只读的，不可编辑。
required: 'required="true"'：表示元素是必填项。
selected: 'selected="true"'：表示元素被选中或选中状态。

busy: 'busy="true"'：用于表示元素正在忙碌或进行中。适用的 HTML 标签包括 \<div\>、\<section\>、\<article\>、\<main\> 等。
checked: 'checked="true"'：用于表示元素被选中或选中状态。适用的 HTML 标签包括 \<input\>、\<optio\n>、\<menuitem\> 等。
disabled: 'disabled="true"'：用于表示元素被禁用或不可用状态。适用的 HTML 标签包括 \<input\>、\<button\>、\<select\>、\<textarea\> 等。
expanded: 'expanded="true"'：用于表示元素处于展开或扩展状态。适用的 HTML 标签包括 \<details\>、\<summary\>、\<treeitem\> 等。
hidden: 'hidden="true"'：用于表示元素隐藏或不可见。适用的 HTML 标签包括任何元素，例如 \<div\>、\<span\>、\<button\>、\<input\> 等。
pressed: 'pressed="true"'：用于表示元素被按下或处于按下状态。适用的 HTML 标签包括 \<button\>、\<input type="checkbox"\>、\<input type="radio"\> 等。
readonly: 'readonly="true"'：用于表示元素是只读的，不可编辑。适用的 HTML 标签包括 \<input\>、\<textarea\>、\<select\> 等。
required: 'required="true"'：用于表示元素是必填项。适用的 HTML 标签包括 \<input\>、\<textarea\>、\<select\> 等。
selected: 'selected="true"'：用于表示元素被选中或选中状态。适用的 HTML 标签包括 \<option\>、\<menuitem\>、\<optgroup\> 等。
</small>

```html
    <div class="relative flex items-center justify-center h-12 w-12 bg-gray-600 aria-checked:bg-red-700"
        aria-checked="false">
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
    </div>
```
当aria-checked="false"时显示bg-gray-600，当aria-checked="true"时显示bg-red-700

## 宽高比
```javascript
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
    },
```
在 Tailwind CSS 中，aspectRatio 配置项用于定义宽高比的类名，以便在元素上应用相应的宽高比样式。这个配置项允许你轻松地控制元素的宽高比，而无需手动计算和编写复杂的 CSS。
<small>
auto: 'auto'：表示宽高比为自动，即元素的宽高比根据内容和尺寸自适应。
square: '1 / 1'：表示宽高比为 1:1，即元素的宽度和高度相等，形成一个正方形。
video: '16 / 9'：表示宽高比为 16:9，即元素的宽度是高度的 16 倍，常用于视频播放器等场景。
</small>
```html
    <div class="w-full flex flex-col items-center justify-center">
        <iframe class="w-1/2 aspect-video" playsinline="true" preload="auto" autoplay="" x5-playsinline="true"
            webkit-playsinline="true" src="https://duringbug.cloud:9090/vedio/demovedio.mp4"></iframe>
    </div>
```

## 背景图片显示
```javascript
    backdropBlur: ({ theme }) => theme('blur'),
    backdropBrightness: ({ theme }) => theme('brightness'),
    backdropContrast: ({ theme }) => theme('contrast'),
    backdropGrayscale: ({ theme }) => theme('grayscale'),
    backdropHueRotate: ({ theme }) => theme('hueRotate'),
    backdropInvert: ({ theme }) => theme('invert'),
    backdropOpacity: ({ theme }) => theme('opacity'),
    backdropSaturate: ({ theme }) => theme('saturate'),
    backdropSepia: ({ theme }) => theme('sepia'),
    backgroundColor: ({ theme }) => theme('colors'),
```
<small>
<em  style="color:red">backdropBlur: ({ theme }) => theme('blur')：</em>生成用于设置背景模糊效果的类名，取自 Tailwind CSS 的 blur 配置项。<br/>
</small>

```html
    <div :style="{
        backgroundImage: 	`url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-blur-sm bg-white/30 aspect-square w-1/4">backdrop-blur-sm</div>
    </div>
```
<small>
<em  style="color:red">backdropBrightness: ({ theme }) => theme('brightness')：</em><br/>生成用于设置背景亮度的类名，取自 Tailwind CSS 的 brightness 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-brightness-50 bg-white/30 aspect-square w-1/4">backdrop-brightness-50</div>
    </div>
```
<small>
<em style="color:red">
backdropContrast: ({ theme }) => theme('contrast')：</em><br/>生成用于设置背景对比度的类名，取自 Tailwind CSS 的 contrast 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-contrast-125 bg-white/30 aspect-square w-1/4">backdrop-contrast-125</div>
    </div>
```
<small>
<em style="color:red">
backdropGrayscale: ({ theme }) => theme('grayscale')：</em> <br/>生成用于设置背景灰度程度的类名，取自 Tailwind CSS 的 grayscale 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-grayscale bg-white/30 aspect-square w-1/4">backdrop-grayscale</div>
    </div>
```

<small><em style="color:red">
backdropHueRotate: ({ theme }) => theme('hueRotate')：</em><br/>生成用于设置背景色调旋转的类名，取自 Tailwind CSS 的 hueRotate 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-hue-rotate-30 bg-white/30 aspect-square w-1/4">backdrop-hue-rotate-30</div>
    </div>
```
<small>
<em style="color:red">
backdropInvert: ({ theme }) => theme('invert')：</em><br/>生成用于设置背景反色效果的类名，取自 Tailwind CSS 的 invert 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-invert bg-white/30 aspect-square w-1/4">backdrop-invert</div>
    </div>
```
<small>
<em style="color:red">
backdropOpacity: ({ theme }) => theme('opacity')：
</em><br/>生成用于设置背景透明度的类名，取自 Tailwind CSS 的 opacity 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-opacity-50 bg-white/30 aspect-square w-1/4">backdrop-opacity-50</div>
    </div>
    
```
<small>
<em style="color:red">
backdropSaturate: ({ theme }) => theme('saturate')：</em><br/>生成用于设置背景饱和度的类名，取自 Tailwind CSS 的 saturate 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-saturate-200 bg-white/30 aspect-square w-1/4">backdrop-saturate-200</div>
    </div>
```
<small>
<em style="color:red">
backdropSepia: ({ theme }) => theme('sepia')：</em><br/>生成用于设置背景深褐色效果的类名，取自 Tailwind CSS 的 sepia 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-sepia bg-white/30 aspect-square w-1/4">backdrop-sepia</div>
    </div>
```
<small>
<em style="color:red">
backgroundColor: ({ theme }) => theme('colors')：</em><br/>生成用于设置背景颜色的类名，取自 Tailwind CSS 的 colors 配置项。
</small>

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="bg-rose-500 h-[800px] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-rose-500</div>
    </div>
```

## 背景颜色渐变
```javascript
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
```
<small>
none: 'none'：表示无背景图片。<br/>
gradient-to-t: 'linear-gradient(to top, var(--tw-gradient-stops))'：表示从下到上的线性渐变背景图片。<br/>
gradient-to-tr: 'linear-gradient(to top right, var(--tw-gradient-stops))'：表示从左下到右上的线性渐变背景图片。<br/>
gradient-to-r: 'linear-gradient(to right, var(--tw-gradient-stops))'：表示从左到右的线性渐变背景图片。<br/>
gradient-to-br: 'linear-gradient(to bottom right, var(--tw-gradient-stops))'：表示从左上到右下的线性渐变背景图片。<br/>
gradient-to-b: 'linear-gradient(to bottom, var(--tw-gradient-stops))'：表示从上到下的线性渐变背景图片。<br/>
gradient-to-bl: 'linear-gradient(to bottom left, var(--tw-gradient-stops))'：表示从右上到左下的线性渐变背景图片。<br/>
gradient-to-l: 'linear-gradient(to left, var(--tw-gradient-stops))'：表示从右到左的线性渐变背景图片。<br/>
gradient-to-tl: 'linear-gradient(to top left, var(--tw-gradient-stops))'：表示从右下到左上的线性渐变背景图片。<br/>
</small>

```html
    <div class="w-full h-[200px] flex flex-col justify-center items-center">
        <div class="w-1/6 aspect-square bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </div>
```

## 背景颜色透明度
```javascript
    backgroundOpacity: ({ theme }) => theme('opacity'),
```
通过在背景颜色的类名后添加 bg-opacity-* 类名，其中 * 是透明度的数值（0-100），你可以控制元素的背景透明度。

```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="bg-rose-500 bg-opacity-40 h-[800px] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-rose-500 bg-opacity-40</div>
    </div>
```
<p style="color:red"><em>
backgroundOpacity：这个配置项用于控制元素的背景颜色的透明度。通过为元素添加类名 bg-opacity-*，其中 * 是透明度的数值（0-100），你可以设置元素背景的透明度。例如，使用 bg-opacity-50 类名可以将背景颜色的透明度设置为 50%。<br/>
backdropOpacity：这个配置项用于控制元素的背景滤镜（backdrop-filter）的透明度。通过为元素添加类名 backdrop-opacity-*，其中 * 是透明度的数值（0-100），你可以设置元素背景滤镜的透明度。背景滤镜可以应用于元素的背景，例如模糊效果、亮度调整等。使用 backdrop-opacity-50 类名可以将背景滤镜的透明度设置为 50%。<br/>
所以，backgroundOpacity 用于设置元素背景颜色的透明度，而 backdropOpacity 用于设置元素背景滤镜的透明度。
</em>
</p>

## 背景图片位置
```javascript
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
```
通过使用这些背景位置类名，你可以根据需求快速应用不同的背景位置样式，并根据设计要求调整元素的背景位置。
```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="bg-top bg-blue-400 h-[800px] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-top</div>
    </div>
```
自定义配置
```javascript
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'custom': '30% 40%',
    },
```
```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="bg-custom bg-sky-400 h-[2000px] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-top</div>
    </div>
```
## 背景大小
```javascript
   backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
```
在 Tailwind CSS 中，backgroundSize 是一个配置项，用于生成背景大小相关的样式类名。

具体而言，backgroundSize 配置项包含了三个预定义的背景大小选项：
<small>
<em>
auto: 'auto'：表示背景大小自动适应元素的宽度和高度。
cover: 'cover'：表示背景图片等比缩放以填充整个元素，并保持宽高比例，可能会裁剪部分背景。
contain: 'contain'：表示背景图片等比缩放以完整显示在元素内部，不会进行裁剪，可能会出现空白区域。
</em>
auto(一般少用)
```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundBlendMode: `multiply`,
    }" class="bg-auto bg-sky-400 w-[100wh] h-[100vh] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-auto</div>
    </div>
```
cover
```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundBlendMode: `multiply`,
    }" class="bg-cover bg-sky-400 w-[100wh] h-[100vh] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-cover</div>
    </div>
```
contain
```html
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundBlendMode: `multiply`,
    }" class="bg-contain bg-sky-400 w-[100wh] h-[100vh] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-contain</div>
    </div>
```
</small>

## 模糊度
```javascript
    blur: {
      0: '0',
      none: '0',
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
```
blur 属性用于给元素应用模糊效果。通过设置不同的像素值，可以实现不同程度的模糊效果。
```javascript
backdropBlur: ({ theme }) => theme('blur'),
```

## 边框颜色
```javascript
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
```
以colors作为颜色当然也可以自定义border的颜色
```javascript
    borderColor: (theme) => ({
    ...theme('colors'),
    DEFAULT: theme('colors.gray.200', 'currentColor'),
    custom: 'rgb(0, 166, 125)', // 添加自定义边框颜色
    }),
```
```html
    <div class="border border-custom">
        border-custom
    </div>
```
## 边框透明度
```javascript
    borderOpacity: ({ theme }) => theme('opacity'),
```
```html
    <div class="my-2 border-4 border-green-700 border-opacity-50">
        border-opacity-50
    </div>
```

## 边框圆角
```javascript
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
```
tailwindcss提供了简单的圆角书写方式
```html
    <div class="my-2 border-4 border-green-700 rounded-lg border-opacity-50">
        rounded-lg
    </div>
```
自定义配置：
```javascript
borderRadius: {
  none: '0px',
  sm: '0.25rem',
  DEFAULT: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  '3xl': '3rem',
  full: '9999px',
  custom: '0.2rem', // 添加自定义的圆角大小
},
```

## 边框间距
```javascript
    borderSpacing: ({ theme }) => ({
      ...theme('spacing'),
    }),
```
在 Tailwind CSS 中，borderSpacing 配置用于定义边框间距。它是一个函数，接受一个参数 theme，用于获取主题配置。
官方是这么写的
```html
 <table class="border-separate border-spacing-2 border border-slate-500">
        <thead>
            <tr>
                <th class="border border-slate-600">State</th>
                <th class="border border-slate-600">City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-700">Indiana</td>
                <td class="border border-slate-700">Indianapolis</td>
            </tr>
            <tr>
                <td class="border border-slate-700">Ohio</td>
                <td class="border border-slate-700">Columbus</td>
            </tr>
            <tr>
                <td class="border border-slate-700">Michigan</td>
                <td class="border border-slate-700">Detroit</td>
            </tr>
        </tbody>
    </table>
```
## 边框粗细
```javascript
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
```
borderWidth 配置用于定义边框的宽度。它是一个对象，其中包含了不同宽度级别的配置项。taiwindcss的borderWidth属性值有些少，可以自行添加，也可以使用border-[12px]
```html
    <div class="my-2 border-[12px] border-green-700 rounded-lg border-opacity-50">
        border-[12px]
    </div>
```

## 盒子阴影
```javascript
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
```
boxShadow 配置用于定义阴影效果。它是一个对象，其中包含了不同阴影级别的配置项。

```html
    <div class="w-full h-[200px] mx-4 my-4 shadow-lg">
        shadow-lg
    </div>
```

## 盒子阴影颜色
```javascript
    boxShadowColor: ({ theme }) => theme('colors'),
```
默认是color的配置
```html
    <div class="w-full h-[200px] mx-4 my-4 shadow-lg shadow-orange-500">
        border-orange-500
    </div>
```

## 亮度
```javascript
    brightness: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
```
brightness 对象中的键名表示亮度级别，而键值表示对应的亮度值。
```javascript
    backdropBrightness: ({ theme }) => theme('brightness'),
```
以下是一个例子
```html
    <div class="brightness-200 bg-green-600">brightness-200</div>
```

## 可编辑元素中光标的颜色
```javascript
    caretColor: ({ theme }) => theme('colors'),
```
caret-color 属性用于定义输入框（或其他可编辑元素）中光标的颜色。而在 Tailwind CSS 的配置中，caretColor 是一个函数，用于动态获取主题中定义的颜色配置。
```html
    <input class="caret-red-500" placeholder="caret-red-500" />
```
## 颜色配置
```javascript
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
```
这个是所有配置中最重要的一个：Tailwind CSS 的颜色配置提供了一套方便、一致且可自定义的颜色系统，使得在应用样式时更加高效和灵活。它为开发人员提供了一组预定义的颜色变量，并支持动态生成和自定义颜色，从而满足不同项目的需求。引用color的属性包括
```javascript
    accentColor: ({ theme }) => ({
      ...theme('colors'),
      auto: 'auto',
    }),
    backgroundColor: ({ theme }) => theme('colors'),
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
    boxShadowColor: ({ theme }) => theme('colors'),
    caretColor: ({ theme }) => theme('colors'),
    divideColor: ({ theme }) => theme('borderColor'),
    fill: ({ theme }) => ({
      none: 'none',
      ...theme('colors'),
    }),
    gradientColorStops: ({ theme }) => theme('colors'),
    outlineColor: ({ theme }) => theme('colors'),
    placeholderColor: ({ theme }) => theme('colors'),
    ringColor: ({ theme }) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
    ringOffsetColor: ({ theme }) => theme('colors'),
    textColor: ({ theme }) => theme('colors'),
    textDecorationColor: ({ theme }) => theme('colors'),
```
在 Tailwind CSS 的颜色配置中，可以使用以下几种方式来输入颜色值：
命名颜色：可以直接使用预定义的颜色名称作为值。例如，red、green、blue 等。
十六进制颜色值：可以使用十六进制表示的颜色值。例如，#FF0000 表示红色，#00FF00 表示绿色。
RGB(A) 颜色值：可以使用 RGB 或 RGBA 表示的颜色值。例如，rgb(255, 0, 0) 表示红色，rgba(0, 255, 0, 0.5) 表示半透明的绿色。
HSL(A) 颜色值：可以使用 HSL 或 HSLA 表示的颜色值。例如，hsl(0, 100%, 50%) 表示红色，hsla(120, 100%, 50%, 0.5) 表示半透明的绿色。
函数：可以使用 CSS 函数来生成颜色值。例如，rgba(0, 0, 0, 0.5) 表示半透明的黑色。

## 网格列
```javascript
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      '3xs': '16rem',
      '2xs': '18rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },
```
以下代码将宽度分为4份
```html
    <div class="columns-4">
        <div class="bg-red-500">第一列</div>
        <div class="bg-green-500">第二列</div>
        <div class="bg-blue-500">第三列</div>
        <div class="bg-orange-500">第四列</div>
    </div>
```
以下代码自定义宽度，超出就换行
```html
    <div class="columns-md">
        <div class="bg-red-500">第一列</div>
        <div class="bg-green-500">第二列</div>
    </div>
```
## 容器样式
```javascript
    container: {},
```
container是一个配置对象，用于定义容器的样式。容器是指包含网页内容的最外层元素，通常用于限制内容的宽度并在页面中居中显示。一般用在自适应的页面上
在Tailwind CSS的默认配置中，container对象为空，也就是没有定义任何样式。这意味着在默认情况下，容器元素不会受到任何特定的样式限制。
但是，可以自定义container配置对象，以便根据项目的需求来定义容器的样式。以下是一个示例的container配置对象：
```javascript
    container: {
      center: true,
      padding: '2rem',
    },
```
```html
    <div class="container">
        container
    </div>
```

## 内容
```javascript
    content: {
      none: 'none',
    },
```
content是一个配置对象，用于定义内容（content）属性的值。content属性用于在CSS中插入伪元素的内容，例如使用 ::before 或 ::after 伪元素。
```html
    <div class="content-none">
        content-none
    </div>
```
这将应用 content: none 的样式规则，使得伪元素的内容为空。

需要注意的是，content 配置对象中的键值对可以根据需要进行扩展或修改。你可以自定义更多的键和对应的值，以满足你的项目需求。


```html
    <div class="text-red-300 after:content-['\_↗']">
        content
    </div>
```
这些内容实用程序甚至支持 CSS 功能，例如函数attr( )，您可以使用它来引用存储在属性中的值

## 文本对比度
```javascript
    contrast: {
      0: '0',
      50: '.5',
      75: '.75',
      100: '1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
```
对比度是指文本与其背景之间的颜色对比程度，越高的对比度意味着文本更容易阅读。
```html
    <p class="contrast-0">contrast-0</p>
    <p class="contrast-200">contrast-200</p>
```
引用该属性的有
```javascript
    backdropContrast: ({ theme }) => theme('contrast'),
```

## 鼠标指针样式
```javascript
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
      none: 'none',
      'context-menu': 'context-menu',
      progress: 'progress',
      cell: 'cell',
      crosshair: 'crosshair',
      'vertical-text': 'vertical-text',
      alias: 'alias',
      copy: 'copy',
      'no-drop': 'no-drop',
      grab: 'grab',
      grabbing: 'grabbing',
      'all-scroll': 'all-scroll',
      'col-resize': 'col-resize',
      'row-resize': 'row-resize',
      'n-resize': 'n-resize',
      'e-resize': 'e-resize',
      's-resize': 's-resize',
      'w-resize': 'w-resize',
      'ne-resize': 'ne-resize',
      'nw-resize': 'nw-resize',
      'se-resize': 'se-resize',
      'sw-resize': 'sw-resize',
      'ew-resize': 'ew-resize',
      'ns-resize': 'ns-resize',
      'nesw-resize': 'nesw-resize',
      'nwse-resize': 'nwse-resize',
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out',
    },
```

<small>
auto: 自动鼠标指针样式，通常为箭头指针。<br/>
default: 默认鼠标指针样式，通常为箭头指针。<br/>
pointer: 链接指针，表示该元素是可点击链接。<br/>
wait: 等待指针，表示正在加载或处理操作。<br/>
text: 文本指针，表示可输入文本的区域。<br/>
move: 移动指针，表示该元素可拖动。<br/>
help: 帮助指针，表示该元素提供帮助信息。<br/>
not-allowed: 禁用指针，表示该元素不可用，无法点击。<br/>
none: 隐藏鼠标指针，使其在该元素上不可见。<br/>
context-menu: 上下文菜单指针，表示在该元素上右击将显示上下文菜单。<br/>
progress: 进度指针，表示正在进行某种操作或任务。<br/>
cell: 单元格指针，表示该元素是表格单元格。<br/>
crosshair: 十字线指针，通常用于表示可绘制的区域。<br/>
vertical-text: 垂直文本指针，表示可输入垂直文本的区域。<br/>
alias: 链接别名指针，表示该元素是链接的别名。<br/>
copy: 复制指针，表示该元素可复制。<br/>
no-drop: 不可拖放指针，表示该元素不可被拖放。<br/>
grab: 抓取指针，表示该元素可通过点击并拖动进行抓取。<br/>
grabbing: 抓取中指针，表示该元素正在被拖动。<br/>
all-scroll: 全方向滚动指针，表示该元素可在所有方向上滚动。<br/>
col-resize: 列调整指针，表示可调整列宽的区域。<br/>
row-resize: 行调整指针，表示可调整行高的区域。<br/>
n-resize: 北向调整指针，表示可向上调整大小的区域。<br/>
e-resize: 东向调整指针，表示可向右调整大小的区域。<br/>
s-resize: 南向调整指针，表示可向下调整大小的区域。<br/>
w-resize: 西向调整指针，表示可向左调整大小的区域。<br/>
ne-resize: 东北向调整指针，表示可向右上方调整大小的区域。<br/>
nw-resize: 西北向调整指针，表示可向左上方调整大小的区域。<br/>
se-resize: 东南向调整指针，表示可向右下方调整大小的区域。<br/>
sw-resize: 西南向调整指针，表示可向左下方调整大小的区域。<br/>
ew-resize: 东西向调整指针，表示可在水平方向上调整大小的区域。<br/>
ns-resize: 南北向调整指针，表示可在垂直方向上调整大小的区域。<br/>
nesw-resize: 东北到西南调整指针，表示可在东北到西南方向上调整大小的区域。<br/>
nwse-resize: 西北到东南调整指针，表示可在西北到东南方向上调整大小的区域。<br/>
zoom-in: 放大指针，表示该元素可被放大。<br/>
zoom-out: 缩小指针，表示该元素可被缩小。<br/>
</small>

```html
    <div class="flex flex-wrap gap-4">
        <button class="cursor-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">自动（auto）</button>
        <button class="cursor-default px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">默认（default）</button>
        <button class="cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">链接指针（pointer）</button>
        <button class="cursor-wait px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">等待（wait）</button>
        <button class="cursor-text px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">文本（text）</button>
        <button class="cursor-move px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">移动（move）</button>
        <button class="cursor-help px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">帮助（help）</button>
        <button
            class="cursor-not-allowed px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">禁用（not-allowed）</button>
        <button class="cursor-none px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">隐藏（none）</button>
        <button
            class="cursor-context-menu px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">上下文菜单（context-menu）</button>
        <button class="cursor-progress px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">进度（progress）</button>
        <button class="cursor-cell px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">单元格（cell）</button>
        <button
            class="cursor-crosshair px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">十字线（crosshair）</button>
        <button
            class="cursor-vertical-text px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">垂直文本（vertical-text）</button>
        <button class="cursor-alias px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">链接别名（alias）</button>
        <button class="cursor-copy px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">复制（copy）</button>
        <button class="cursor-no-drop px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">不可拖放（no-drop）</button>
        <button class="cursor-grab px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">抓取（grab）</button>
        <button class="cursor-grabbing px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">抓取中（grabbing）</button>
        <button
            class="cursor-all-scroll px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">全方向滚动（all-scroll）</button>
        <button
            class="cursor-col-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">列调整（col-resize）</button>
        <button
            class="cursor-row-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">行调整（row-resize）</button>
        <button
            class="cursor-n-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">北向调整（n-resize）</button>
        <button
            class="cursor-e-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东向调整（e-resize）</button>
        <button
            class="cursor-s-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">南向调整（s-resize）</button>
        <button
            class="cursor-w-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">西向调整（w-resize）</button>
        <button
            class="cursor-ne-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东北向调整（ne-resize）</button>
        <button
            class="cursor-nw-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">西北向调整（nw-resize）</button>
        <button
            class="cursor-se-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东南向调整（se-resize）</button>
        <button
            class="cursor-sw-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">西南向调整（sw-resize）</button>
        <button
            class="cursor-ew-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东西向调整（ew-resize）</button>
        <button
            class="cursor-ns-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">南北向调整（ns-resize）</button>
        <button
            class="cursor-nesw-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东北到西南调整（nesw-resize）</button>
        <button
            class="cursor-nwse-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">西北到东南调整（nwse-resize）</button>
        <button class="cursor-zoom-in px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">放大（zoom-in）</button>
        <button class="cursor-zoom-out px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">缩小（zoom-out）</button>
    </div>
```

## 分割线样式
```javascript
    divideColor: ({ theme }) => theme('borderColor'),
    divideOpacity: ({ theme }) => theme('borderOpacity'),
    divideWidth: ({ theme }) => theme('borderWidth'),
```
divideColor：用于定义分隔线的颜色。它是一个函数，通过传递theme对象来获取主题中定义的borderColor（边框颜色）相关配置。这样，divideColor函数将返回一个包含所有可用边框颜色的对象。

divideOpacity：用于定义分隔线的不透明度。它也是一个函数，通过传递theme对象来获取主题中定义的borderOpacity（边框不透明度）相关配置。这样，divideOpacity函数将返回一个包含所有可用边框不透明度的对象。

divideWidth：用于定义分隔线的宽度。同样，它也是一个函数，通过传递theme对象来获取主题中定义的borderWidth（边框宽度）相关配置。这样，divideWidth函数将返回一个包含所有可用边框宽度的对象。

```html
    <div class="divide-y divide-blue-500 divide-opacity-50 divide-x-8">
        <p>这是第一段文字。</p>
        <p>这是第二段文字。</p>
        <p>这是第三段文字。</p>
        <p>这是第四段文字。</p>
    </div>
```

## 投影样式
```javascript
    dropShadow: {
      sm: '0 1px 1px rgb(0 0 0 / 0.05)',
      DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
      md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
      lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
      xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      none: '0 0 #0000',
    },
```
dropShadow是一个配置对象，用于定义投影（drop shadow）的样式。投影是一种阴影效果，可以让元素在页面上浮起来，增加层次感和深度。

在dropShadow配置对象中，键值对表示不同投影大小的样式。每个键对应一个投影大小，而值则是一个包含一个或多个投影样式的数组。
<div style="color:red">
drop-shadow滤镜效果实际上是基于元素的边缘和背景之间的关系产生的，如果背景是透明的，阴影效果就可能看不到。
</div>

```html
    <div class="w-full flex flex-row justify-center">
        <div class="drop-shadow-2xl bg-white w-64 aspect-square">
            drop-shadow-2xl
        </div>
    </div>
```

## SVG填充
```javascript
    fill: ({ theme }) => ({
      none: 'none',
      ...theme('colors'),
    }),
```

fill属性用于设置图形的填充颜色

```html
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-blue-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6 fill-orange-400">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
```

## flex布局
```javascript
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
```

用flex-initial允许弹性项目收缩但不增长，同时考虑到其初始大小
```html
    <div class="flex">
        <div class="flex-none w-14 h-14 bg-blue-500 mx-2">
            flex-none
        </div>
        <div class="flex-initial w-64 bg-blue-500 mx-2">
            flex-initial w-64
        </div>
        <div class="flex-initial w-32 bg-blue-500 mx-2">
            flex-initial w-32
        </div>
    </div>
```
用flex-1允许弹性项目根据需要增大和缩小，忽略其初始大小
```html
    <div class="flex">
        <div class="flex-none h-14 bg-blue-500 mx-2">
            flex-none
        </div>
        <div class="flex-1 w-64  h-14 bg-blue-500 mx-2">
            flex-1
        </div>
        <div class="flex-1 w-32  h-14 bg-blue-500 mx-2">
            flex-1
        </div>
    </div>
```
用flex-auto允许弹性项目增大和缩小，同时考虑到其初始大小
```html
    <div class="flex">
        <div class="flex-none h-14 bg-blue-500 mx-2">
            flex-none
        </div>
        <div class="flex-auto w-64  h-14 bg-blue-500 mx-2">
            flex-auto
        </div>
        <div class="flex-auto w-32  h-14 bg-blue-500 mx-2">
            flex-auto
        </div>
    </div>
```
用flex-none防止弹性项目增大或缩小

## flex尺寸
```javascript
flexBasis: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
    }),
```
用于控制flex项目的初始大小的类
```html
    <div class="flex flex-row">
        <div class="basis-1/4  h-14 bg-blue-500 mx-2">basis-1/4</div>
        <div class="basis-1/4  h-14 bg-blue-500 mx-2">basis-1/4</div>
        <div class="basis-1/2  h-14 bg-blue-500 mx-2">basis-1/2</div>
    </div>
```
可以自行配置flex-basis值，从而实现不同的布局效果。

## flex填充
```javascript
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
```
用于grow允许弹性项目增长以填充任何可用空间
用于grow-0防止弹性项目增长
```html
    <div class="flex flex-row">
        <div class="flex-grow  h-14 bg-blue-500 mx-2">flex-grow</div>
        <div class="flex-grow-0 h-14 bg-blue-500 mx-2">flex-grow-0</div>
        <div class="flex-grow-[2] h-14 bg-blue-500 mx-2">flex-grow-[2]</div>
    </div>
```

## flex收缩
```javascript
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
```
0: 表示子元素的flex-shrink属性为0，即不会收缩，不会释放自身空间给予其他元素。
DEFAULT: 表示子元素的flex-shrink属性为1，即会按比例收缩，释放自身空间给予其他元素

```html
    <div class="flex flex-row">
        <div class="h-14 w-14 bg-blue-500 mx-2">text</div>
        <div class="flex-shrink w-64 h-14 bg-blue-500 mx-2">flex-shrink</div>
        <div class=" h-14 w-14 bg-blue-500 mx-2">text</div>
    </div>
    <div class="flex flex-row">
        <div class="h-14 w-14 bg-blue-500 mx-2">text</div>
        <div class="flex-shrink-0 w-64 h-14 bg-blue-500 mx-2">flex-shrink-0</div>
        <div class=" h-14 w-14 bg-blue-500 mx-2">text</div>
    </div>
```
使用flex-shrink-\[2]时,即会按flex-shrink-1的1:2比例收缩，释放自身空间给予其他元素
```html
    <div class="flex flex-row">
        <div class="h-14 w-14 bg-blue-500 mx-2">text</div>
        <div class="flex-shrink-[2] w-64 h-14 bg-blue-500 mx-2">flex-shrink-[2]</div>
        <div class=" h-14 w-14 bg-blue-500 mx-2">text</div>
    </div>
```

## 字体
```javascript
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
```
```html
    <p class="font-sans">这是无衬线字体文本</p>
    <p class="font-serif">这是衬线字体文本</p>
    <p class="font-mono">这是等宽字体文本</p>
```
自定义字体
<small style="color:red">
Tailwind 不会自动为您转义字体名称。如果您使用的字体包含无效标识符，请将其用引号引起来或转义无效字符。(官方)
</small>
```html
    <p class="font-['Times_New_Roman']">Times New Roman</p>
```

## 字体大小
```javascript
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
```

## 字体粗细
```javascript
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
```

## grid间距
```javascript
    gap: ({ theme }) => theme('spacing'),
```
gap配置函数返回一个对象，其中包含了网格间距的可选值。这些值可以通过类名来应用到网格容器上，从而设置子元素之间的间距。
```html
    <div class="grid md:grid-cols-3 grid-cols-2 gap-2">
        <div class="bg-red-500 h-16"></div>
        <div class="bg-blue-500 h-16"></div>
        <div class="bg-green-500 h-16"></div>
        <div class="bg-yellow-500 h-16"></div>
        <div class="bg-purple-500 h-16"></div>
        <div class="bg-pink-500 h-16"></div>
    </div>
```
## 颜色渐变
```javascript
    gradientColorStops: ({ theme }) => theme('colors'),
```
gradientColorStops是用于定义渐变颜色的配置项。它可以用于创建线性渐变或径向渐变的背景色。可以通过在元素上添加bg-gradient-to和from-{color}、via-{color}、to-{color}等类来使用gradientColorStops
```html
    <div class="my-2 h-8 bg-gradient-to-r from-indigo-500 via-sky-500  to-emerald-500 "></div>
```
## 颜色渐变停点
```javascript
    gradientColorStopPositions: {
      '0%': '0%',
      '5%': '5%',
      '10%': '10%',
      '15%': '15%',
      '20%': '20%',
      '25%': '25%',
      '30%': '30%',
      '35%': '35%',
      '40%': '40%',
      '45%': '45%',
      '50%': '50%',
      '55%': '55%',
      '60%': '60%',
      '65%': '65%',
      '70%': '70%',
      '75%': '75%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '95%': '95%',
      '100%': '100%',
    },
```
```html
 <div class="my-2 h-8 bg-gradient-to-r from-red-500 from-10% via-yellow-500 via-30% to-blue-500 to-90%">
```
除了颜色之外，您还可以通过编辑theme.gradientColorStopPositions或来自定义渐变颜色停止位置theme.extend.gradientColorStopPositions。
```javascript
    gradientColorStopPositions: {
        33: '33%',
    }
```
## 灰度
```javascript
    grayscale: {
      0: '0',
      DEFAULT: '100%',
    },
```
使用grayscale和grayscale-0实用程序来控制元素是否应呈现为灰度或全彩。
利用的有
```javascript
    backdropGrayscale: ({ theme }) => theme('grayscale'),
```
```html
    <div class="grayscale">
        <img src="https://duringbug.cloud:9090/img/computer_bg3.jpg" />
    </div>
```
## 网格自动列
```javascript
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
```

<small>
auto 表示自动调整列宽度。<br/>
min 表示将列宽度设置为内容的最小宽度。<br/>
max 表示将列宽度设置为内容的最大宽度。<br/>
fr 表示将列宽度设置为可用空间的一部分（1fr），并且最小宽度为0。<br/>
</small>
gridAutoColumns是Tailwind CSS中用于自动调整网格列宽度的配置项。它可以用于定义不同的列宽度值，以便在使用网格布局时自动调整列的大小。
在配置文件或自定义扩展中添加gridAutoColumns时，可以为不同列宽度值指定各种选项。

```html
    <div class="grid grid-flow-col auto-cols-auto">
        <div class="bg-blue-500 h-16">auto-cols-auto</div>
        <div class="bg-yellow-500 h-16">auto-cols-auto</div>
        <div class="bg-pink-500 h-16">auto-cols-auto</div>
    </div>
    <div class="grid grid-flow-col auto-cols-min">
        <div class="bg-blue-500 h-16">auto-cols-min</div>
        <div class="bg-yellow-500 h-16">auto-cols-min</div>
        <div class="bg-pink-500 h-16">auto-cols-min</div>
    </div>
    <div class="grid grid-flow-col auto-cols-max">
        <div class="bg-blue-500 h-16">auto-cols-max</div>
        <div class="bg-yellow-500 h-16">auto-cols-max</div>
        <div class="bg-pink-500 h-16">auto-cols-max</div>
    </div>
    <div class="grid grid-flow-col auto-cols-fr">
        <div class="bg-blue-500 h-16">auto-cols-fr</div>
        <div class="bg-yellow-500 h-16">auto-cols-fr</div>
        <div class="bg-pink-500 h-16">auto-cols-fr</div>
    </div>
```

可以添加配置
```javascript
    gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
    }
```

或

```html
<div class="grid grid-flow-col auto-cols-[minmax(0,_2fr)]">
    <div class="bg-blue-500 h-16">auto-cols-fr</div>
    <div class="bg-yellow-500 h-16">auto-cols-fr</div>
    <div class="bg-pink-500 h-16">auto-cols-fr</div>
</div>
```
## 网格自动行
```javascript
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
```
<small>
auto 表示自动调整行宽度。<br/>
min 表示将行高度设置为内容的最小宽度。<br/>
max 表示将行高度设置为内容的最大宽度。<br/>
fr 表示将行高度设置为可用空间的一部分（1fr），并且最小宽度为0。<br/>
</small>

```html
    <div class="grid grid-flow-row auto-rows-max my-4">
        <div class="bg-blue-500 h-8 w-1/2">auto-rows-max h-8</div>
        <div class="bg-yellow-500 h-16 w-1/3">auto-rows-max h-16</div>
        <div class="bg-pink-500 h-24 w-1/4">auto-rows-max h-24</div>
    </div>
    <div class="grid grid-flow-row auto-rows-min my-4">
        <div class="bg-blue-500 h-8 w-1/2">auto-rows-min h-8</div>
        <div class="bg-yellow-500 h-16 w-1/3">auto-rows-min h-16</div>
        <div class="bg-pink-500 h-24 w-1/4">auto-rows-min h-24</div>
    </div>
    <div class="grid grid-flow-row auto-rows-fr my-4">
        <div class="bg-blue-500 h-8 w-1/2">auto-rows-fr h-8</div>
        <div class="bg-yellow-500 h-16 w-1/3">auto-rows-fr h-16</div>
        <div class="bg-pink-500 h-24 w-1/4">auto-rows-fr h-24</div>
    </div>
    <div class="grid grid-flow-row auto-rows-auto my-4">
        <div class="bg-blue-500 h-8 w-1/2">auto-rows-auto h-8</div>
        <div class="bg-yellow-500 h-16 w-1/3">auto-rows-auto h-16</div>
        <div class="bg-pink-500 h-24 w-1/4">auto-rows-auto h-24</div>
    </div>
```

## 跨列
```javascript
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },
```


```html
    <div class="grid grid-cols-4">
        <div class="bg-red-500 h-16 col-span-3">col-span-3</div>
        <div class="bg-blue-500 h-16 col-span-1">col-span-1</div>
        <div class="bg-green-500 h-16 col-span-1">col-span-1</div>
        <div class="bg-yellow-500 h-16 col-span-1">col-span-1</div>
        <div class="bg-purple-500 h-16 col-span-1">col-span-1</div>
        <div class="bg-pink-500 h-16 col-span-1">col-span-1</div>
    </div>
```

## 网格列起始
```javascript
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
```
使用col-start-{n}和col-end-{n}类为子项指定了开始和结束的列位置
```html
    <div class="grid grid-cols-4 gap-2">
        <div class="bg-red-500 h-16 col-start-3 col-end-5">col-start-2 col-end-4</div>
        <div class="bg-blue-500 h-16 col-start-2 col-end-4">col-start-2 col-end-4</div>
        <div class="bg-green-500 h-16 col-start-1 col-end-3">col-start-1 col-end-3</div>
        <div class="bg-purple-500 h-16 col-start-auto col-end-2">col-start-auto col-end-2</div>
    </div>
```

## 跨行
```javascript
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1',
    },
```
用于定义网格行高的属性之一。包含了不同行高的命名类和对应的值。

可以使用这些命名类来指定一个元素在网格布局中所占据的行数。例如，span-3表示元素跨越三列。

```html
    <div class="grid grid-cols-2 gap-2 my-4">
        <div class="bg-red-500 row-span-3">
            <p class="h-8"></p>
        </div>
        <div class="bg-blue-500">
            <p class="h-8"></p>
        </div>
        <div class="bg-green-500">
            <p class="h-8"></p>
        </div>
        <div class="bg-yellow-500">
            <p class="h-8"></p>
        </div>
    </div>
```

## 网格行起始
```javascript
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
```
使用row-start-{n}和row-end-{n}类为子项指定了开始和结束的行位置

```html
    <div class="grid grid-cols-2 gap-2 my-4">
        <div class="bg-red-500 row-start-1 row-end-3">
            <p class="h-8"></p>
        </div>
        <div class="bg-blue-500">
            <p class="h-8"></p>
        </div>
        <div class="bg-green-500">
            <p class="h-8"></p>
        </div>
        <div class="bg-yellow-500">
            <p class="h-8"></p>
        </div>
    </div>
```

## 网格模版
```javascript
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
```
默认情况下，Tailwind 包含用于grid-template-column和grid-template-rows创建具有最多 12 个等宽列和6个等高行的基本网格。您可以通过编辑theme.gridTemplate_或theme.extend.gridTemplate_在tailwind.config.js文件中自定义这些值。
<small><em>
固定值：可以直接指定每一列的宽度，例如 'gridTemplateColumns': '100px 200px 150px'，这将创建三个固定宽度的列。

百分比：可以使用百分比来定义每一列的宽度，例如 'gridTemplateColumns': '25% 50% 25%'，这将创建三个按比例分配宽度的列。

自动布局：可以使用关键词 auto 来自动布局列的宽度，例如 'gridTemplateColumns': 'auto auto auto'，这将使每个列自动适应其内容的宽度。

最小最大值：可以使用 minmax() 函数来定义每一列的最小和最大宽度，例如 'gridTemplateColumns': 'minmax(100px, 1fr) minmax(200px, 2fr)'，这将创建两列，第一列的最小宽度为100px，最大宽度为1fr（剩余空间的比例），第二列的最小宽度为200px，最大宽度为2fr。

此外，还可以组合上述方式来定义更复杂的网格布局。例如 'gridTemplateColumns': 'repeat(3, minmax(0, 1fr)) 200px'，这将创建三个等宽的列，并在最后添加一个宽度为200px的固定列。
</em></small>
也可以用以下方式自定义配置(注意用_代替空格)
```html
<div class="grid grid-rows-[200px_minmax(900px,_1fr)_100px]">
  <!-- ... -->
</div>
```
<strong style="color:red">需要注意网格布局中的 grid-template 这种语法是不支持的，Tailwind CSS提供了一组预定义的类来快速创建网格布局，而不是使用原生CSS的网格属性。</strong>

## 高度
```javascript
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
```
<small>
full: 高度为100%。<br/>
screen: 高度为屏幕的100%（视口高度）。<br/>
svh: 高度为滚动视口的100%。<br/>
lvh: 高度为相对视口的100%。<br/>
dvh: 高度为设备视口的100%。<br/>
min: 高度为最小内容高度。<br/>
max: 高度为最大内容高度。<br/>
fit: 高度为适应内容高度。<br/>
</small>

## 色相旋转
```javascript
    hueRotate: {
      0: '0deg',
      15: '15deg',
      30: '30deg',
      60: '60deg',
      90: '90deg',
      180: '180deg',
    },
```
hueRotate 属性用于旋转元素的色相，可以通过指定角度来改变颜色的整体外观。
引用的有
```javascript
    backdropHueRotate: ({ theme }) => theme('hueRotate'),
```
```html
    <div class="bg-blue-500 hover:hue-rotate-30 h-[200px] aspect-square">hover:hue-rotate-30</div>
```

## 内边距
```javascript
    inset: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
```
inset 属性用于指定元素相对于其包含块的偏移位置

```html
    <div class="bg-blue-500 relative w-full aspect-square my-2">
        <div class="absolute inset-1 bg-orange-500">inset-1</div>
        <div class="absolute inset-2 bg-red-500">inset-2</div>
        <div class="absolute inset-x-4 inset-y-8 bg-green-500">inset-x-4 inset-y-8</div>
    </div>
```

## 颜色反转
```javascript
    invert: {
      0: '0',
      DEFAULT: '100%',
    },
```
invert是一个用于反色（invert）的属性。它用于设置元素的反色效果，可以将元素的颜色进行反转。

在CSS中，invert是一个滤镜属性，用于反转元素的颜色。当invert设置为50%时，它会将元素的颜色进行反转，使得原本的亮色变暗，暗色变亮。这种效果可以让元素呈现出一种反转的外观。

具体地说，当invert设置为50%时，它会在原始颜色和反转之间创建一个混合效果。例如，对于白色（RGB值为255, 255, 255），50%的反转将使其变为灰色（RGB值为127, 127, 127）。同样地，对于黑色（RGB值为0, 0, 0），50%的反转将使其变为灰色（RGB值为127, 127, 127）。




```html
    <div class="invert-0">
        <div :style="{
            backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundBlendMode: `multiply`,
        }" class="bg-cover w-[100wh] h-[100vh] flex flex-col justify-center items-center">
            <div class=" aspect-square w-1/4">invert-0</div>
        </div>
    </div>
    <div class="invert">
        <div :style="{
            backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundBlendMode: `multiply`,
        }" class="bg-cover w-[100wh] h-[100vh] flex flex-col justify-center items-center">
            <div class=" aspect-square w-1/4">invert</div>
        </div>
    </div>
```
也可以自定义
```javascript
    invert: {
      0: '0',
      '1/3':'33.33333%'
      DEFAULT: '100%',
    },
```
或
```html
    <div class="invert-[66.666667%]">
        <div :style="{
            backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundBlendMode: `multiply`,
        }" class="bg-cover w-[100wh] h-[100vh] flex flex-col justify-center items-center">
            <div class=" aspect-square w-1/4">invert</div>
        </div>
    </div>
```
引用的的有
```javascript
    backdropInvert: ({ theme }) => theme('invert'),
```

## 文本间距
```javascript
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
```
<small>
tighter: 表示更紧密的字母间距，使用-0.05em作为单位，将字母的间距缩小。<br/>
tight: 表示较紧密的字母间距，使用-0.025em作为单位，将字母的间距稍微缩小。<br/>
normal: 表示正常的字母间距，使用0em作为单位，保持字母之间的默认间距。<br/>
wide: 表示较宽松的字母间距，使用0.025em作为单位，将字母的间距稍微增大。<br/>
wider: 表示更宽松的字母间距，使用0.05em作为单位，将字母的间距增大。<br/>
widest: 表示最宽松的字母间距，使用0.1em作为单位，将字母的间距最大化。<br/>
</small>

```html
    <p class="my-4">This is a sample text to demonstrate different letter spacing values.</p>

    <p class="my-2 leading-loose">tracking-tighter: <span class="text-red-500 tracking-tighter">tailwindcss:只需书写 HTML
            代码，无需书写 CSS，即可快速构建美观的网站。</span>
    </p>
    <p class="my-2 leading-loose">tracking-tight: <span class="text-blue-500 tracking-tight">tailwindcss:只需书写 HTML 代码，无需书写
            CSS，即可快速构建美观的网站。</span></p>
    <p class="my-2 leading-loose">tracking-normal: <span class="text-green-500 tracking-normal">tailwindcss:只需书写 HTML
            代码，无需书写 CSS，即可快速构建美观的网站。</span>
    </p>
    <p class="my-2 leading-loose">tracking-wide: <span class="text-yellow-500 tracking-wide">tailwindcss:只需书写 HTML 代码，无需书写
            CSS，即可快速构建美观的网站。</span></p>
    <p class="my-2 leading-loose">tracking-wider: <span class="text-purple-500 tracking-wider">tailwindcss:只需书写 HTML 代码，无需书写
            CSS，即可快速构建美观的网站。</span></p>
    <p class="my-2 leading-loose">tracking-widest: <span class="text-orange-500 tracking-widest">tailwindcss:只需书写 HTML
            代码，无需书写 CSS，即可快速构建美观的网站。</span>
    </p>
```

## 行高
```javascript
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
```
lineHeight是一个用于控制行高（行间距）的CSS属性。在Tailwind CSS中，lineHeight属性被封装为一个配置对象，其中包含了不同的取值选项。
<small>
none: 行高为1，即没有额外的行间距。<br/>
tight: 相对较紧凑的行高。<br/>
snug: 紧凑的行高，比tight稍微宽松。<br/>
normal: 正常的行高，即默认的行间距。<br/>
relaxed: 较宽松的行高，比normal稍微宽松。<br/>
loose: 宽松的行高，行间距较大。<br/>
3、4、5、6、7、8、9、10: 分别表示自定义的行高，以rem为单位。<br/>
</small>

```html
    <p class="my-2 leading-none">leading-none</p>
    <p class="my-2 leading-tight">leading-tight</p>
    <p class="my-2 leading-snug">leading-snug</p>
    <p class="my-2 leading-normal">leading-normal</p>
    <p class="my-2 leading-relaxed">leading-relaxed</p>
    <p class="my-2 leading-loose">leading-loose</p>
    <p class="my-2 leading-3">leading-3</p>
    <p class="my-2 leading-4">leading-4</p>
    <p class="my-2 leading-5">leading-5</p>
    <p class="my-2 leading-6">leading-6</p>
    <p class="my-2 leading-7">leading-7</p>
    <p class="my-2 leading-8">leading-8</p>
    <p class="my-2 leading-9">leading-9</p>
    <p class="my-2 leading-10">leading-10</p>
```

## 列表样式类型
```javascript
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
```
listStyleType是一个CSS属性，用于设置列表项前面的标记样式。
<small>
none: 列表项没有标记。<br/>
disc: 使用实心圆作为标记。<br/>
decimal: 使用数字作为标记。<br/>
</small>

```html
    <div class="my-4">
        <h2 class="text-xl font-bold">Unordered List</h2>
        <ul class="list-disc pl-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>

    <div class="my-4">
        <h2 class="text-xl font-bold">Ordered List</h2>
        <ol class="list-decimal pl-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
```

也可以自行配置
```javascript
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
```
```html
    <div class="my-4">
        <h2 class="text-xl font-bold">Square List</h2>
        <ol class="list-square pl-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>

    <div class="my-4">
        <h2 class="text-xl font-bold">Roman List</h2>
        <ol class="list-roman pl-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
```

## 列表样式图像
```javascript
    listStyleImage: {
      none: 'none',
    },
```
listStyleImage是tailwindcss中用于设置列表项符号样式的属性。它允许你使用图像作为列表项的符号。

```html
    <div class="h-screen p-40 flex justify-center">
        <ul class="list-image-[url(https://duringbug.cloud:9090/img/hot-deal.png)]">
            <li class="text-xl my-2 px-2">TailwindCSS</li>
            <li class="text-xl my-2 px-2">BulmaCSS</li>
            <li class="text-xl my-2 px-2">Bootstrap</li>
            <li class="text-xl my-2 px-2">Material UI</li>
            <li class="text-xl my-2 px-2">Chakra UI</li>
        </ul>
    </div>
```
## margin
```javascript
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
```

## 文本行数
```javascript
    lineClamp: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
    },
```
在 Tailwind CSS 中，lineClamp 是一个自定义类的配置项，用于控制文本的行数。它允许通过添加 .line-clamp-{n} 类来限制一个元素内文本的行数，其中 {n} 是可选的数字，表示要显示的最大行数。超过时被省略号截断。
```html
    <div class="w-[50px]">
        <p class="line-clamp-[10]">在 Tailwind CSS 中，lineClamp 是一个自定义类的配置项，用于控制文本的行数。它允许你通过添加 .line-clamp-{n}
            类来限制一个元素内文本的行数，其中
            {n}
            是可选的数字，表示要显示的最大行数。超过时被省略号截断。</p>
    </div>
```

## 最大高度
```javascript
    maxHeight: ({ theme }) => ({
      ...theme('spacing'),
      none: 'none',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
```
maxHeight 是一个自定义类的配置项，用于控制元素的最大高度。它允许你通过添加 .max-h-{value} 类来设置元素的最大高度，其中 {value} 可以是预定义的值，也可以是具体的像素值。
<small>
none：表示没有最大高度限制。
full：表示最大高度为父容器的100%。
screen：表示最大高度为屏幕的100%。
svh：表示最大高度为视口高度的100%。
lvh：表示最大高度为布局视口高度的100%。
dvh：表示最大高度为文档视口高度的100%。
min：表示最大高度为内容的最小高度。
max：表示最大高度为内容的最大高度。
fit：表示最大高度为内容的适合高度。
</small>

```html
    <div class="max-h-40 overflow-y-auto border border-gray-300 p-4 w-[300px]">
        <h1>这是一个使用 Tailwind CSS 的 maxHeight 示例</h1>
        <p class="overflow-hidden">
            Tailwind CSS 是一个功能强大的 CSS 框架，它提供了丰富的工具和实用的类来快速构建响应式的界面。
            通过使用 max-h 类名，我们可以轻松地限制一个元素的最大高度，并在内容溢出时自动添加滚动条。
            这是一段很长的文本，如果没有限制最大高度，它将会一直延伸下去，但是由于使用了 max-h-40 类，所以它最多只会显示 40px 的高度，并且在超出时显示滚动条。
        </p>
    </div>
```

## 最大宽度
```javascript
    maxWidth: ({ theme, breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
```
maxWidth 是 Tailwind CSS 中的一个自定义类配置项，用于控制元素的最大宽度。这个配置项是一个函数，接受两个参数：theme 和 breakpoints。

theme 参数用于获取 Tailwind CSS 中配置的尺寸（size）值。可以通过 theme('screens') 获取屏幕断点的配置，如 'sm'、'md' 等。
breakpoints 参数是一个包含不同屏幕断点的配置对象。
返回的对象包含了不同的最大宽度配置，具体如下：
<small>
none：表示没有最大宽度限制。
0：表示最大宽度为 0 像素。
xs、sm、md、lg、xl、2xl、3xl、4xl、5xl、6xl、7xl：表示具体的最大宽度值，如 '20rem'、'24rem' 等。
full：表示最大宽度为父容器的100%。
min：表示最大宽度为内容的最小宽度。
max：表示最大宽度为内容的最大宽度。
fit：表示最大宽度为内容的适合宽度。
prose：表示最大宽度为 65ch，适用于文本内容的阅读宽度。
通过这样的配置，你可以在项目中使用 max-w 类名，并根据需要设置元素的最大宽度。这提供了一种快速而灵活的方式来管理元素的宽度限制。
</small>

```html

    <div class="flex justify-center items-center h-screen">
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
            <h1 class="text-2xl font-bold mb-4">Tailwind CSS 最大宽度演示</h1>
            <p class="text-gray-600">
                新的变更日志模板 + 有史以来最大的 Tailwind UI 更新<br />
                日期2023 年 4 月 24 日星期一<br />

                亚当·瓦坦<br />
                @亚当瓦森<br />
                自从我们 12 月份发布协议模板以来，我还没有分享过 Tailwind UI 更新，但这并不是因为我们不忙。<br />

                在过去的四个月里，我们在 Tailwind UI 上所做的工作可能比以往任何时候都多，并且最终完成了我们打算实现的目标，我很高兴能为您展示一切！<br />

                ​
                提交：为您的下一个想法提供漂亮的变更日志模板<br />
                就在几天前，我们发布了Commit，这是我们为 Tailwind UI 设计的全新变更日志模板 - 当然是使用 Tailwind CSS 和 Next.js 构建的。<br />


            </p>
            <p class="text-gray-600 mt-4">
                公共变更日志已经成为一种非常流行的方式，可以让人们了解您一直在做的事情，并保持责任感并增强您的运输能力。当然，无论如何，它们都不是一个新概念，但我认为直到Linear开始发布到他们的变更日志网站后，其他人才对使用它们几乎作为公司博客的替代品感到兴奋。

                Commit 是我们对现代产品变更日志的看法，设计为单页网站，既可以作为您的项目主页，也可以作为您一直在处理的所有内容的提要。
            </p>
        </div>
    </div>
```

## 最小高度
```javascript
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
```
<small>
0: '0px'：设置最小高度为0像素。<br/>
full: '100%'：设置最小高度为100%（父元素的高度）。<br/>
screen: '100vh'：设置最小高度为视口高度的100%。<br/>
svh: '100svh'：设置最小高度为滚动视口高度的100%。<br/>
lvh: '100lvh'：设置最小高度为屏幕高度的100%。<br/>
dvh: '100dvh'：设置最小高度为可用窗口高度的100%。<br/>
min: 'min-content'：设置最小高度为内容的最小高度。<br/>
max: 'max-content'：设置最小高度为内容的最大高度。<br/>
fit: 'fit-content'：设置最小高度为内容的适合高度。<br/>
</small>

## 最小宽度
```javascript
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
```
<small>
0: '0px'：设置最小宽度为0像素。<br/>
full: '100%'：设置最小宽度为100%（父元素的宽度）。<br/>
min: 'min-content'：设置最小宽度为内容的最小宽度。<br/>
max: 'max-content'：设置最小宽度为内容的最大宽度。<br/>
fit: 'fit-content'：设置最小宽度为内容的适合宽度。<br/>
</small>

## 内容位置
```javascript
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
```
objectPosition是用于设置背景图片或被定位元素的位置的属性。
<small>
bottom: 'bottom'：设置背景图片或被定位元素底部与其容器对齐。
center: 'center'：设置背景图片或被定位元素与其容器中居中对齐。
left: 'left'：设置背景图片或被定位元素左侧与其容器对齐。
'left-bottom': 'left bottom'：设置背景图片或被定位元素左下角与其容器对齐。
'left-top': 'left top'：设置背景图片或被定位元素左上角与其容器对齐。
right: 'right'：设置背景图片或被定位元素右侧与其容器对齐。
'right-bottom': 'right bottom'：设置背景图片或被定位元素相右下角与其容器对齐。
'right-top': 'right top'：设置背景图片或被定位元素右上角与其容器对齐。
top: 'top'：设置背景图片或被定位元素顶部与其容器对齐。
</small>

```html
    <div class="bg-green-300 
                mx-16
                space-y-4
                p-2
                justify-between
                grid grid-rows-3 
                grid-flow-col">
        <img title="object-left-top" class="object-none object-left-top bg-gree-200 w-24 h-24 border-4 my-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
        <img title="object-left" class="object-none object-left bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png"> <img title="object-left-bottom"
            class="object-none object-left-bottom bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
        <img title="object-top" class="object-none object-top bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png"> <img title="object-center"
            class="object-none object-center bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png"> <img title="object-bottom"
            class="object-none object-bottom bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
        <img title="object-right-top" class="object-none object-right-top bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png"> <img title="object-right"
            class="object-none object-right bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
        <img title="object-right-bottom" class="object-none object-right-bottom bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
    </div>
```
也可以自定义配置
```javascript
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'custom-position': '20% 30%'
    },
```
等同于
```html
    <img title="object-right-bottom" class="object-none object-[20%_30%] bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
```

## 不透明度
```javascript
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
```
引用的有
```javascript
    backdropOpacity: ({ theme }) => theme('opacity'),
    backgroundOpacity: ({ theme }) => theme('opacity'),
    borderOpacity: ({ theme }) => theme('opacity'),
    divideOpacity: ({ theme }) => theme('borderOpacity'),
    placeholderOpacity: ({ theme }) => theme('opacity'),
    ringOpacity: ({ theme }) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    textOpacity: ({ theme }) => theme('opacity'),
```

## flex容器排列顺序
```javascript
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
```
请注意，在使用 order 属性时，需要确保父容器具有 flex 或 inline-flex 类，以便该属性生效。

```html
    <div class="flex">
        <div class="order-last">1</div>
        <div class="order-2">2</div>
        <div class="order-1">3</div>
        <div class="order-first">4</div>
    </div>
```

## 轮廓颜色
```javascript
    outlineColor: ({ theme }) => theme('colors'),
```
outlineColor 是一个用于设置元素轮廓颜色的 utility 类。

```html
     <button
        class="shadow-2xl m-2 outline outline-blue-500 border border-white bg-orange-400 rounded-lg w-[100px] aspect-video">outline-blue-500</button>
```
## 轮廓偏移量
```javascript
    outlineOffset: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
```
outlineOffset 是一个用于设置元素轮廓偏移量（outline offset）的 utility 类。

```html
    <button
        class="shadow-2xl m-2 outline outline-offset-1 outline-blue-500 border border-white bg-orange-400 rounded-lg w-[100px] aspect-video">outline-offset-1</button>
```

## 轮廓粗细
```javascript
    outlineWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
```
outlineWidth 是一个用于设置元素轮廓线宽度（outline width）的 utility 类。

```html
    <button
        class="shadow-2xl m-2 outline outline-offset-1 outline-4 outline-blue-500 border border-white bg-orange-400 rounded-lg w-[100px] aspect-video">outline-4</button>
```

## padding
```javascript
    padding: ({ theme }) => theme('spacing'),
```

## 占位符配置
```javascript
    placeholderColor: ({ theme }) => theme('colors'),
    placeholderOpacity: ({ theme }) => theme('opacity'),
```
placeholderColor 用于获取主题中的颜色配置。通过调用 theme('colors') 方法，可以获取到在 Tailwind CSS 配置文件中定义的所有颜色，然后将其应用于占位符颜色。

placeholderOpacity 用于获取主题中的不透明度配置。通过调用 theme('opacity') 方法，可以获取到在 Tailwind CSS 配置文件中定义的所有不透明度值，然后将其应用于占位符的不透明度。

```html
    <input type="text" class="placeholder-red-500 placeholder-opacity-50"
        placeholder="placeholder-red-500 placeholder-opacity-50">
```

## 环绕效果配置
```javascript
    ringColor: ({ theme }) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
    ringOffsetColor: ({ theme }) => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringOpacity: ({ theme }) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
```
ringColor 是用于设置元素环绕效果颜色的配置项。它允许你根据主题中定义的颜色值来自定义元素环绕效果的外观。

```html
    <button
        class="ring-4 ring-offset-2 ring-offset-red-500 ring-blue-500 ring-opacity-70 shadow-2xl m-2 border border-white bg-orange-400 rounded-lg w-[100px] aspect-video">
    </button>
```

<strong>
ring 和 outline 都是用于给元素添加外边框效果的属性，但它们之间有一些不同之处。

可见性和样式：
ring 属性可以创建一个可见的环绕效果，它会在元素周围绘制一个具有指定颜色和宽度的环。
outline 属性创建一个围绕元素的可见轮廓线，它可以具有指定的颜色、宽度和样式（如实线、虚线等）。
位置：
ring 属性位于元素内容和内边距之外，但在外边距之内。它不会改变元素的大小或布局。
outline 属性位于元素的外边界之外，不会占用元素的空间。
浏览器支持：
ring 是 Tailwind CSS 的一个自定义功能，需要使用 Tailwind CSS 框架来使用它。
outline 是 CSS 的一个标准属性，在大多数现代浏览器中都得到了支持。
因此，ring 属性提供了更灵活的环绕效果样式选项，而 outline 属性则提供了更通用的轮廓线样式选项。选择使用哪个属性取决于你想要实现的效果以及所使用的工具和框架。
</strong>

## 旋转角度
```javascript
    rotate: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
```
rotate 是一个自定义配置项，用于设置旋转角度的类名。它允许为元素应用不同的旋转效果，通过指定角度值来添加相应的类名。

```html
    <div class="flex justify-center items-center h-screen">
        <div class="rotate-0">No rotation</div>
        <div class="rotate-45">Rotate 45 degrees</div>
        <div class="rotate-90">Rotate 90 degrees</div>
        <div class="rotate-180">Rotate 180 degrees</div>
    </div>
```

## 饱和度
```javascript
    saturate: {
      0: '0',
      50: '.5',
      100: '1',
      150: '1.5',
      200: '2',
    },
```
saturate 是一个自定义配置项，用于设置饱和度的类名。它允许为元素应用不同的饱和度效果，通过指定饱和度值来添加相应的类名。

```html
    <div class="flex justify-center items-center h-screen">
        <div class="saturate-0 bg-orange-500">0% saturation</div>
        <div class="saturate-50 bg-orange-500">50% saturation</div>
        <div class="saturate-100 bg-orange-500">100% saturation</div>
        <div class="saturate-150 bg-orange-500">150% saturation</div>
    </div>
```
引用的有

```javascript
    backdropSaturate: ({ theme }) => theme('saturate'),
```
## 缩放比例
```javascript
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
```
用于设置缩放比例的类名。它允许为元素应用不同的缩放效果，通过指定缩放比例值来添加相应的类名。
```html
    <div class="flex justify-center items-center h-screen">
        <div class="scale-0">0% scale</div>
        <div class="scale-50">50% scale</div>
        <div class="scale-100">100% scale</div>
        <div class="scale-150">150% scale</div>
    </div>
```
引用的有

```javascript
    backdropGrayscale: ({ theme }) => theme('grayscale'),
```

## 响应式断点
```javascript
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
```
screens 是一个自定义配置项，用于设置响应式断点的类名。它允许根据不同的屏幕大小应用相应的样式规则。

```html
    <div class="bg-orange-500 sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500">
        bg-orange-500 sm:bg-red-500
        md:bg-blue-500 lg:bg-green-500
        xl:bg-yellow-500
    </div>
```
引用的有
```javascript
    maxWidth: ({ theme, breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
```

## 滚动外边距
```javascript
    scrollMargin: ({ theme }) => ({
      ...theme('spacing'),
    }),
```

scrollMargin 是一个自定义配置项，用于设置滚动边距的类名。它允许为具有滚动行为的元素添加滚动边距，以提供更好的滚动体验。因此，scroll-margin值代表定义了滚动捕捉区域的起始位置，该区域用于将该框捕捉到捕捉端口。

```html
    <div class="my-2 mx-auto snap-y h-[300px] w-[500px] overflow-y-scroll">
        <div class="scroll-mt-6 snap-start">
            <img class="" src="https://duringbug.cloud:9090/img/computer_bg3.jpg" />
        </div>
        <div class="scroll-mt-6 snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
        <div class="scroll-mt-6 snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg2.jpg" />
        </div>
        <div class="scroll-mt-6 snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg1.jpg" />
        </div>
        <div class="scroll-mt-6 snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
```

## 滚动内边距
```javascript
    scrollPadding: ({ theme }) => theme('spacing'),
```
scrollPadding 是一个自定义插件函数，用于设置滚动容器的内边距。这个函数允许根据主题配置文件中定义的间距值来设置滚动容器的内边距。

通常情况下，滚动容器不会自动考虑其内部内容的大小，因此当滚动到容器的边缘时，内容可能会被遮挡或部分隐藏。为了解决这个问题，可以在滚动容器上应用内边距，以便在滚动时留出一些空白的区域，使内容不会被遮挡。

```html
    <div class="my-2 scroll-pt-6 mx-auto snap-y h-[300px] w-[500px] overflow-y-scroll">
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg3.jpg" />
        </div>
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg2.jpg" />
        </div>
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg1.jpg" />
        </div>
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
```
<strong>
scrollMargin 设置的是滚动元素的外边距，用于控制滚动容器与其滚动元素之间的空白区域。<br/>
scrollPadding 设置的是滚动容器的内边距，用于在滚动时为内容留出一些空白区域，避免内容被遮挡或部分隐藏。<br/>
这两个自定义插件函数在处理滚动容器时可以一起使用，分别用于设置外边距和内边距，以便在滚动过程中保持合适的间距和可见性。
</strong>

## 复古滤镜
```javascript
    sepia: {
      0: '0',
      DEFAULT: '100%',
    },
```
sepia 是一个滤镜（filter）属性，用于将图像呈现为深褐色调效果。它可以用来创建旧照片的效果或添加一种复古的视觉感。

默认情况下，在 sepia 中，键 0 表示无 sepia 效果（即原始图像），而 DEFAULT 表示应用 100% 的 sepia 效果（完全的深褐色调）。

要使用 sepia 属性，你可以通过在 HTML 元素上添加相应的类来将其应用到图像上。在 Tailwind CSS 中，使用 filter 类来设置滤镜属性，然后使用 sepia-{value} 类来指定 sepia 效果的程度。
```html
    <div class="my-2 mx-auto  w-[500px] sepia-[50%]">
        <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
    </div>
```

引用的有
```javascript
    backdropSepia: ({ theme }) => theme('sepia'),
```

## 倾斜
```javascript
    skew: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
```
使用skew属性可以实现元素的倾斜效果
skew-x-6是可以在前面加负号的

```html
    <div class="my-2 mx-auto w-[500px] overflow-hidden hover:-skew-x-3 rounded-2xl">
        <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
    </div>
```

## 间距
```javascript
    space: ({ theme }) => ({
      ...theme('spacing'),
    }),
```
用于控制子元素之间的空间

```html
    <div class="flex space-x-4 justify-center">
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">01</div>
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">02</div>
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">03</div>
    </div>
    <div class="flex -space-x-4 justify-center">
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">01</div>
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">02</div>
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">03</div>
    </div>
```

## 定制间距
```javascript
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
```

自定义默认间距和尺寸比例

引用的有
```javascript
    borderSpacing: ({ theme }) => ({
      ...theme('spacing'),
    }),
    flexBasis: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
    }),
    gap: ({ theme }) => theme('spacing'),
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    inset: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    maxHeight: ({ theme }) => ({
      ...theme('spacing'),
      none: 'none',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    padding: ({ theme }) => theme('spacing'),
    scrollMargin: ({ theme }) => ({
      ...theme('spacing'),
    }),
    scrollPadding: ({ theme }) => theme('spacing'),
    space: ({ theme }) => ({
      ...theme('spacing'),
    }),
    textIndent: ({ theme }) => ({
      ...theme('spacing'),
    }),
    translate: ({ theme }) => ({
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
```
## svg描边颜色
```javascript
    stroke: ({ theme }) => ({
      none: 'none',
      ...theme('colors'),
    }),
```
stroke 用于设置 SVG 元素的描边颜色。

```html
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-none stroke-red-500">
        <circle cx="12" cy="12" r="10" />
    </svg>
```

## svg描边粗细
```javascript
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
```

```html
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-none stroke-red-500 stroke-2">
        <circle cx="12" cy="12" r="10" />
    </svg>
```
## 特定特性支持
```javascript
    supports: {},
```

使用supports-[...]修饰符根据用户浏览器是否支持特定功能来设置样式。

```javascript
    supports: {
      grid: 'display: grid',
    },
```

```html
    <div class="supports-grid:grid supports-grid:grid-cols-2">
        <div class="bg-blue-500 h-8 w-full"></div>
        <div class="bg-yellow-500 h-8 w-full"></div>
        <div class="bg-pink-500 h-8 w-full"></div>
    </div>
    <div class="supports-[display:grid]:grid supports-[display:grid]:grid-cols-2">
        <div class="bg-blue-500 h-8 w-full"></div>
        <div class="bg-yellow-500 h-8 w-full"></div>
        <div class="bg-pink-500 h-8 w-full"></div>
    </div>
```
## 数据属性
```javascript
    data: {},
```

在 Tailwind CSS 中，data 是一个自定义配置项，用于扩展或覆盖默认的数据配置。

data 配置项允许定义自己的数据集合，以供在项目中使用。可以在 tailwind.config.js 文件的 theme 对象下的 data 属性中进行配置。

这个配置项的主要作用是，可以向 Tailwind CSS 添加自定义的数据，并在样式类中使用这些数据。

例如，你可以在 data 中定义一些常见的数据，如字体列表、动画名称、动画延迟时间等等，然后在样式类中使用这些数据。

从而配置不同的主题色

data选项主要用于以下两个目的：

自定义变量：你可以在data对象中定义自己的变量，然后在整个Tailwind项目中使用这些变量。这样做的好处是，你可以将重复使用的值提取到变量中，使得在整个项目中统一和修改这些值变得更加方便。这可以帮助你更好地组织和管理你的CSS样式。

计算类名：除了定义变量外，data对象还可以用于计算类名，从而根据配置参数动态生成类名。这在某些情况下可以帮助你更加灵活地根据项目需求来生成特定的类名，而不需要手动编写每个类名。

需要注意的是，在Tailwind CSS的data选项中定义的变量只能在CSS文件中使用theme('data.variableName')语法来访问，而不能像普通的CSS变量一样使用var(--variableName)语法。这是因为Tailwind CSS的data选项并不是原生的CSS变量，而是一种特定于Tailwind的扩展。

```javascript
    data: {
      primaryColor: '#ef09ae',
      fontSize: {
        small: '12px',
        medium: '16px',
        large: '20px',
      },
    },
```
```html
<template>
    <button data-size="large" class="data-[size=large]:bg-blue-500 my-button w-[50px] h-[25px]">small</button>
    <button data-size="small" class="data-[size=large]:bg-blue-500 my-button w-[50px] h-[25px]">small</button>
</template>
<script lang="ts">
export default {
    data() {
        return {
        }
    }
}

</script>


<style scoped>
.my-button {
    background-color: theme('data.primaryColor');
    font-size: theme('data.fontSize.small');
}
</style>
```
以上体现了data属性的两个用法:
1.你可以在data对象中定义自己的变量。
2.使用data-*修饰符根据数据属性有条件地应用样式。
也可以在config里配置
```javascript
    data: {
      primaryColor: '#ef09ae',
      fontSize: {
        small: '12px',
        medium: '16px',
        large: '20px',
      },
      large: 'size~="large"',
    },
```
```html
 <button data-size="large" class="data-large:bg-blue-500 w-[50px] h-[25px]">large</button>
```

## 文本颜色
```javascript
    textColor: ({ theme }) => theme('colors'),
```
控制元素的文本颜色text-{color}/{opacity}

```html
    <p class="text-sky-400/20">text-sky-400</p>
    <p class="text-sky-400/40">text-sky-400</p>
    <p class="text-sky-400/60">text-sky-400</p>
    <p class="text-sky-400/80">text-sky-400</p>
    <p class="text-sky-400">text-sky-400</p>
```

## 文本装饰颜色与透明度
```javascript
    textDecorationColor: ({ theme }) => theme('colors'),
    textOpacity: ({ theme }) => theme('opacity'),
```

控制文本装饰颜色decoration-{color}/{opacity}

```html
    <p class="underline decoration-sky-500/100">decoration-sky-500</p>
```

## 文本修饰线粗细
```javascript
    textDecorationThickness: {
      auto: 'auto',
      'from-font': 'from-font',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
```
textDecorationThickness是Tailwind CSS中用于定义文本修饰线（text-decoration）的粗细（thickness）的一个自定义属性。它允许你定义不同粗细的文本修饰线样式，如下划线、删除线等。
```html
    <p class="underline decoration-sky-500/100 decoration-4">decoration-sky-500</p>
```

## 文本缩进
```javascript
    textIndent: ({ theme }) => ({
      ...theme('spacing'),
    }),
```
使用indent-{width}设置块中文本之前显示的空白空间（缩进）量。
```html
    <p class="indent-0">This text has no indent.</p>
    <p class="indent-4">This text has a 4px indent.</p>
    <p class="indent-8">This text has an 8px indent.</p>
```

## 文本装饰下偏移
```javascript
    textUnderlineOffset: {
      auto: 'auto',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
```
使用underline-offset-{width}更改文本下划线的偏移量。
```html
    <div class="flex justify-center items-center h-screen">
        <p class="underline decoration-sky-500/100 underline-offset-1">underline-offset-1</p>
        <p class="underline decoration-sky-500/100 underline-offset-2">underline-offset-2</p>
        <p class="underline decoration-sky-500/100 underline-offset-4">underline-offset-4</p>
        <p class="underline decoration-sky-500/100 underline-offset-8">underline-offset-8</p>
    </div>
```

## 原点旋转
```javascript
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
```
transformOrigin 是 Tailwind CSS 中用于设置变换原点（transform origin）的类名的一部分。通过这个类名，可以控制元素进行变换（比如旋转、缩放等）时的变换中心点。

在默认的 Tailwind CSS 配置中，transformOrigin 类名提供了一组预定义的变换原点选项，如 origin-center（中心）、origin-top（顶部中心）、origin-top-right（右上角）等。这些预定义的变换原点选项是用于设置 transform-origin CSS 属性的值。

```html
    <div class="flex justify-center items-center h-screen">
        <div class="my-2 mx-auto w-[500px] overflow-hidden rounded-2xl hover:origin-top-left hover:rotate-12">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
```
也可以自定义
```javascript
    transformOrigin: {
      'top-left-1/3-3/4': '33% 75%',
    }
```
```html
    <div class="flex justify-center items-center h-screen">
        <div class="my-2 mx-auto w-[500px] overflow-hidden rounded-2xl hover:origin-[33%_75%] hover:rotate-12">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
```

## 过渡延时
```javascript
    transitionDelay: {
      0: '0s',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
```

使用delay-{amount}来控制元素的转换延迟。

```html
    <div class="flex justify-center items-center h-screen">
        <div class="delay-700 w-[200px] aspect-square bg-blue-500 hover:bg-orange-500">delay-700</div>
    </div>
    <div class="flex justify-center items-center h-screen">
        <div class="my-2 mx-auto w-[500px] overflow-hidden rounded-2xl delay-700 hover:origin-[33%_75%] hover:rotate-12">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
```

## 过渡持续时间
```javascript
    transitionDuration: {
      DEFAULT: '150ms',
      0: '0s',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
```
使用duration-{amount}来控制元素的过渡持续时间。
```html
    <div class="flex justify-center items-center h-screen">
        <div
            class="my-2 mx-auto w-[500px] overflow-hidden rounded-2xl duration-150 hover:origin-[33%_75%] hover:rotate-12">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
```

## 过渡属性
```javascript
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
```
使用transition-{properties}指定哪些属性在更改时应进行转换。
```html
    <div class="flex justify-center items-center h-screen">
        <div
            class="transition hover:-translate-y-[200px] hover:rotate-12 w-[200px] aspect-square duration-150 bg-blue-500 hover:bg-orange-500">
            transition
        </div>
    </div>
    <div class="flex justify-center items-center h-screen">
        <div
            class="transition-colors hover:-translate-y-[200px] hover:rotate-12 w-[200px] aspect-square duration-150 bg-blue-500 hover:bg-orange-500">
            transition-colors
        </div>
    </div>
```

## 变换曲线
```javascript
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
```
使用ease-{timing}来控制元素的缓动曲线。
<small>
当使用 cubic-bezier(0.4, 0, 0.2, 1) 这个缓动函数时，它代表着一个动画的变化规律，含义如下：

0.4：动画开始时，元素在水平方向上移动得相对较快为0.4。
0：动画开始时，元素在垂直方向上保持静止，也就是不会上下移动为0。
0.2：动画结束时，元素在水平方向上移动得相对较慢为0.2。
1：动画结束时，元素在垂直方向上移动得相对较快为1。

linear: 线性过渡函数，表示动画在整个过渡期间保持匀速运动，没有加速或减速效果。
ease: 默认的缓动函数，也称为 ease-out，表示动画开始时较快，然后逐渐减慢到结束时。
ease-in: 加速缓动函数，表示动画开始时较慢，然后逐渐加速到结束时。
ease-out: 减速缓动函数，表示动画开始时较快，然后逐渐减慢到结束时，与 ease 是相反的效果。
ease-in-out: 先加速后减速缓动函数，表示动画开始时较慢，然后逐渐加速到中间，再逐渐减慢到结束时。
</small>


```html
    <div class="flex justify-center items-center h-screen">
        <button class="border px-2 transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            DEFAULT
        </button>

        <button class="border px-2 transition ease-linear hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            ease-linear
        </button>

        <button class="border px-2 transition ease-in hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            ease-in
        </button>

        <button class="border px-2 transition ease-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            ease-out
        </button>

        <button class="border px-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            ease-in-out
        </button>
        <button
            class="border px-2 transition ease-[cubic-bezier(0.95,0.05,0.795,0.035)] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            ease-[cubic-bezier(0.95,0.05,0.795,0.035)]
        </button>
    </div>
```

## 位移
```javascript
    translate: ({ theme }) => ({
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
```
在 Tailwind CSS 中，translate 是一个配置项，用于定义元素在水平和垂直方向上的位移（平移）。它返回一个包含键值对的对象，其中键表示平移的大小，而值表示对应的平移数值。可以加负号。

```html
    <div class="hover:translate-x-1/2 transition">hover:translate-x-1/2</div>
```

## 宽度
```javascript
    width: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      svw: '100svw',
      lvw: '100lvw',
      dvw: '100dvw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
```
<small>
auto: 表示宽度自动根据内容来调整，常用于自适应布局。
full: '100%'：表示元素的宽度为父容器的100%。
screen: '100vw'：表示元素的宽度为视口宽度的100%。
svw: '100svw'：表示元素的宽度为视口宽度的100%，不考虑滚动条的宽度。
lvw: '100lvw'：表示元素的宽度为视口宽度的100%，包括滚动条的宽度。
dvw: '100dvw'：表示元素的宽度为文档宽度的100%，包括溢出的内容。
min: 'min-content'：表示元素宽度根据其内容的大小自动调整为最小值。
max: 'max-content'：表示元素宽度根据其内容的大小自动调整为最大值。
fit: 'fit-content'：表示元素宽度根据其内容的大小自动调整为适合的值。
</small>

## 动画优化
```javascript
    willChange: {
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      transform: 'transform',
    },
```
willChange 是 Tailwind CSS 中的一个自定义类别，用于设置 CSS 属性 will-change 的取值。will-change 属性用于告诉浏览器某个元素将要发生变化，以便浏览器优化相应的渲染操作。
will-change 属性旨在作为处理已知性能问题时的最后手段。避免过多使用，或者仅仅因为预期会出现性能问题而使用，因为这实际上可能会导致页面性能降低。所以注意，will-change 属性具有一定的性能影响，应谨慎使用。只有在需要进行优化或通过显式指示以改善特定效果时才使用该属性。
```html
    <button class="hover:will-change-transform border px-2 transition ease-[cubic-bezier(0.95,0.05,0.795,0.035)] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            will-change-transform
    </button>
```
## 层叠顺序
```javascript
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
```
在 Tailwind CSS 中，zIndex用于定义元素的层叠顺序（z-index）。

```html
    <div class="flex justify-center items-center h-screen  -space-x-8">
        <div
            class="border-4 transition hover:-translate-y-1 hover:scale-110 hover:z-50 z-40 w-[100px] aspect-square rounded-full bg-pink-500 flex flex-col justify-center items-center">
            05</div>
        <div
            class="border-4 transition hover:-translate-y-1 hover:scale-110 hover:z-50 z-30 w-[100px] aspect-square rounded-full bg-pink-500 flex flex-col justify-center items-center">
            04</div>
        <div
            class="border-4 transition hover:-translate-y-1 hover:scale-110 hover:z-50 z-20 w-[100px] aspect-square rounded-full bg-pink-500 flex flex-col justify-center items-center">
            03</div>
        <div
            class="border-4 transition hover:-translate-y-1 hover:scale-110 hover:z-50 z-10 w-[100px] aspect-square rounded-full bg-pink-500 flex flex-col justify-center items-center">
            02</div>
        <div
            class="border-4 transition hover:-translate-y-1 hover:scale-110 hover:z-50 z-0 w-[100px] aspect-square rounded-full bg-pink-500 flex flex-col justify-center items-center">
            01</div>
    </div>
```