var defaultConfig = require('tailwindcss/defaultConfig')

var colors = {
    'transparent': 'transparent',
    'black':         '#21252B',
    'white':         '#ffffff',
    'grey':          '#B6B7BD',
    'grey-light':    '#E2E2E2',
    'grey-lighter':  '#F6F6F6',
    'grey-lightest': '#FAFAFA',
    'orange':        '#f96854',
    'blue':          '#1aafff',
    'blue-light':    '#9cd7ff',
}

var units = {
    'px': '1px',
    '0': '0',
    'sm': '4px',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '64px',
    '7': '80px',
    '8': '120px',
    '9': '240px'
}

module.exports = {

    /*
    |-----------------------------------------------------------------------------
    | Colors                                   https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    | .error { color: config('colors.red') }
    |
    */

    colors: colors,


    /*
    |-----------------------------------------------------------------------------
    | Screens                       https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    |
    | Class name: .{screen}:{utility}
    |
    */

    screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
    },


    /*
    |-----------------------------------------------------------------------------
    | Fonts                                     https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    | Class name: .font-{name}
    |
    */

    fonts: {
        'heading': [
            'bebas-neue',
            'sans-serif'
        ],
        'sans': [
            'proxima-nova',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
        ]
    },


    /*
    |-----------------------------------------------------------------------------
    | Text sizes                          https://tailwindcss.com/docs/text-sizing
    |-----------------------------------------------------------------------------
    |
    | Class name: .text-{size}
    |
    */

    textSizes: {
        'sm':   '18px',
        'base': '20px',
        'lg':   '26px',
        'xl':   '40px',
        '2xl':  '60px',
        '3xl':  '70px',
    },


    /*
    |-----------------------------------------------------------------------------
    | Font weights                        https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    | Class name: .font-{weight}
    |
    */

    fontWeights: {
        'normal':    400,
        'bold':      700,
    },


    /*
    |-----------------------------------------------------------------------------
    | Leading (line height)               https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    | Class name: .leading-{size}
    |
    */

    leading: {
        'none':   1,
        'tight':  1.25,
        'normal': 1.5,
        'loose':  2,
    },


    /*
    |-----------------------------------------------------------------------------
    | Tracking (letter spacing)        https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    | Class name: .tracking-{size}
    |
    */

    tracking: {
        'tight':  '-0.05em',
        'normal': '-0.03em',
        'wide':   '0.25em',
    },


    /*
    |-----------------------------------------------------------------------------
    | Text colors                          https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    | Class name: .text-{color}
    |
    */

    textColors: colors,


    /*
    |-----------------------------------------------------------------------------
    | Background colors              https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    | Class name: .bg-{color}
    |
    */

    backgroundColors: colors,


    /*
    |-----------------------------------------------------------------------------
    | Border widths                      https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    | Class name: .border{-side?}{-width?}
    |
    */

    borderWidths: {
        default: '1px',
        '0':     '0',
        '2':     '2px',
        '4':     '4px',
        '8':     '8px',
    },


    /*
    |-----------------------------------------------------------------------------
    | Border colors                      https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    | Class name: .border-{color}
    |
    */

    borderColors: Object.assign({ default: colors['grey-light'] }, colors),



    /*
    |-----------------------------------------------------------------------------
    | Border radius                     https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    | Class name: .rounded{-radius?}
    |
    */

    borderRadius: {
        default: '.2rem',
        'lg':    '.75rem',
        'full':  '9999px',
        'none':  '0',
    },


    /*
    |-----------------------------------------------------------------------------
    | Width                                     https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    | Class name: .w-{size}
    |
    */

    width: {
        'auto':   'auto',
        'px':     '1px',
        '1':      '0.25rem',
        '2':      '0.5rem',
        '3':      '0.75rem',
        '4':      '1rem',
        '6':      '1.5rem',
        '8':      '2rem',
        '10':     '2.5rem',
        '12':     '3rem',
        '16':     '4rem',
        '24':     '6rem',
        '32':     '8rem',
        '48':     '12rem',
        '64':     '16rem',
        '120':    '30rem',
        '1/2':    '50%',
        '1/3':    '33.33333%',
        '2/3':    '66.66667%',
        '1/4':    '25%',
        '3/4':    '75%',
        '1/5':    '20%',
        '2/5':    '40%',
        '3/5':    '60%',
        '4/5':    '80%',
        '1/6':    '16.66667%',
        '5/6':    '83.33333%',
        'full':   '100%',
        'screen': '100vw',
    },


    /*
    |-----------------------------------------------------------------------------
    | Height                                   https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your height utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale plus some other
    | common use-cases. You can, of course, modify these values as
    | needed.
    |
    | Class name: .h-{size}
    |
    */

    height: {
        'auto':   'auto',
        'px':     '1px',
        '1':      '0.25rem',
        '2':      '0.5rem',
        '3':      '0.75rem',
        '4':      '1rem',
        '6':      '1.5rem',
        '8':      '2rem',
        '10':     '2.5rem',
        '12':     '3rem',
        '14':     '3.5rem',
        '16':     '4rem',
        '24':     '6rem',
        '32':     '8rem',
        '48':     '12rem',
        '64':     '16rem',
        '128':    '32rem',
        'full':   '100%',
        'screen': '100vh',
        'screen-app': 'calc(100vh - 4rem)',
        'screen-site': 'calc(100vh - 6rem)',
    },


    /*
    |-----------------------------------------------------------------------------
    | Minimum width                         https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    |
    */

    minWidth: {
        '0':    '0',
        'full': '100%',
    },


    /*
    |-----------------------------------------------------------------------------
    | Minimum height                       https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by default. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    |
    */

    minHeight: {
        '0':      '0',
        'full':   '100%',
        'screen': '100vh'
    },


    /*
    |-----------------------------------------------------------------------------
    | Maximum width                         https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based scale and a "full width" size,
    | which is basically a reset utility. You can, of course,
    | modify these values as needed.
    |
    | Class name: .max-w-{size}
    |
    */

    maxWidth: {
        '2xs':  '10rem',
        'xs':   '20rem',
        'sm':   '30rem',
        'md':   '40rem',
        'lg':   '50rem',
        'xl':   '60rem',
        '2xl':  '70rem',
        '3xl':  '80rem',
        '4xl':  '90rem',
        '5xl':  '100rem',
        'full': '100%',
    },


    /*
    |-----------------------------------------------------------------------------
    | Maximum height                       https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    |
    */

    maxHeight: {
        'full':   '100%',
        'screen': '100vh',
    },


    /*
    |-----------------------------------------------------------------------------
    | Padding                                 https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your padding utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .p{side?}-{size}
    |
    */

    padding: units,


    /*
    |-----------------------------------------------------------------------------
    | Margin                                   https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your margin utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .m{side?}-{size}
    |
    */

    margin: Object.assign({ 'auto': 'auto' }, units),


    /*
    |-----------------------------------------------------------------------------
    | Negative margin                 https://tailwindcss.com/docs/negative-margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your negative margin utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default we
    | provide matching values to the padding scale since these utilities
    | generally get used together. You can, of course, modify these
    | values as needed.
    |
    | Class name: .-m{side?}-{size}
    |
    */

    negativeMargin: units,


    /*
    |-----------------------------------------------------------------------------
    | Shadows                                 https://tailwindcss.com/docs/shadows
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the defaults we provide, it's possible to apply multiple shadows
    | per utility using comma separation.
    |
    | If a `default` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    |
    */

    shadows: {
        default: '0 16px 26px -8px rgba(0,0,0,.15)',
        'lg': '0 15px 40px 15px rgba(0,0,0,.6)',
        'none':  'none',
    },

    /*
    |-----------------------------------------------------------------------------
    | Z-index                                 https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your z-index utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .z-{index}
    |
    */

    zIndex: {
        '0':    0,
        '10':   10,
        '20':   20,
        '30':   30,
        '40':   40,
        '50':   50,
        'auto': 'auto',
    },


    /*
    |-----------------------------------------------------------------------------
    | Opacity                                 https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your opacity utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .opacity-{name}
    |
    */

    opacity: {
        '0':   '0',
        '25':  '.25',
        '50':  '.5',
        '75':  '.75',
        '100': '1',
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG fill                                    https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG fill colors. By default we just provide
    | `fill-current` which sets the fill to the current text color. This lets you
    | specify a fill color using existing text color utilities and helps keep the
    | generated CSS file size down.
    |
    | Class name: .fill-{name}
    |
    */

    svgFill: {
        'current': 'currentColor',
    },


    /*
    |-----------------------------------------------------------------------------
    | SVG stroke                                  https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG stroke colors. By default we just provide
    | `stroke-current` which sets the stroke to the current text color. This lets
    | you specify a stroke color using existing text color utilities and helps
    | keep the generated CSS file size down.
    |
    | Class name: .stroke-{name}
    |
    */

    svgStroke: {
        'current': 'currentColor',
    },


    /*
    |-----------------------------------------------------------------------------
    | Modules                   https://tailwindcss.com/docs/configuration#modules
    |-----------------------------------------------------------------------------
    |
    | Here is where you control which modules are generated and what variants are
    | generated for each of those modules.
    |
    | Currently supported variants: 'responsive', 'hover', 'focus'
    |
    | To disable a module completely, use `false` instead of an array.
    |
    */

    modules: {
        appearance:           ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColors:     ['responsive', 'hover'],
        backgroundPosition:   ['responsive'],
        backgroundRepeat:     ['responsive'],
        backgroundSize:       ['responsive'],
        borderColors:         ['responsive', 'hover'],
        borderRadius:         ['responsive'],
        borderStyle:          ['responsive'],
        borderWidths:         ['responsive', 'hover'],
        cursor:               ['responsive'],
        display:              ['responsive'],
        flexbox:              ['responsive'],
        float:                ['responsive'],
        fonts:                ['responsive'],
        fontWeights:          ['responsive', 'hover'],
        height:               ['responsive'],
        leading:              ['responsive'],
        lists:                ['responsive'],
        margin:               ['responsive'],
        maxHeight:            ['responsive'],
        maxWidth:             ['responsive'],
        minHeight:            ['responsive'],
        minWidth:             ['responsive'],
        negativeMargin:       ['responsive'],
        opacity:              ['responsive', 'hover'],
        overflow:             ['responsive'],
        padding:              ['responsive'],
        pointerEvents:        ['responsive'],
        position:             ['responsive'],
        resize:               ['responsive'],
        shadows:              ['responsive', 'hover'],
        svgFill:              [],
        svgStroke:            [],
        textAlign:            ['responsive'],
        textColors:           ['responsive', 'hover', 'group-hover'],
        textSizes:            ['responsive'],
        textStyle:            ['responsive', 'hover'],
        tracking:             ['responsive'],
        userSelect:           ['responsive'],
        verticalAlign:        ['responsive'],
        visibility:           ['responsive'],
        whitespace:           ['responsive'],
        width:                ['responsive'],
        zIndex:               ['responsive'],
    },

    plugins: [
        require('tailwindcss/plugins/container')({
            center: true,
            padding: '2rem',
        })
    ],


    /*
    |-----------------------------------------------------------------------------
    | Advanced Options          https://tailwindcss.com/docs/configuration#options
    |-----------------------------------------------------------------------------
    */

    options: {
        prefix:    '',
        important: false,
        separator: ':',
    },

}
