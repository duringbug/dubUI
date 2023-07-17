# vue3+ts:tailwindcss的配置项详解(长文警告)

## 配置文件
直接上官方的默认配置代码，<span style="color:rgb(236, 72, 153)">注意content里的作用域</span>
```javascript
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
接下来一一详解
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
<small>duringbug.cloud是个人博客，欢迎访问</small>

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
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
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
