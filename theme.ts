import { darken, lighten, readableColor } from 'polished';
import { Colors, Theme, Typography } from './types';

const udTheme = {
  // spacing: {
  //   unit: 5,
  //   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
  //   sectionVertical: ({ spacing }) => spacing.unit * 8,
  // },
  // breakpoints: {
  //   xs: 0,
  //   small: '550px',
  //   medium: '900px',
  //   large: '1200px',
  // },
  colors: {
    tonalOffset: 0.3,
    primary: {
      main: '#0D67FE',
      light: ({ colors }: { colors: Colors }) =>
        lighten(colors.tonalOffset, colors.primary.main),
      dark: ({ colors }: { colors: Colors }) =>
        darken(colors.tonalOffset, colors.primary.main),
      contrastText: ({ colors }: { colors: Colors }) =>
        readableColor(colors.primary.main),
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#424242',
      secondary: '#0D67FE',
    },
    // border: {
    //   dark: 'rgba(0,0,0, 0.15)',
    //   light: '#ffffff',
    // },
    // responses: {
    //   success: {
    //     color: ({ colors }: {colors: Colors })  => colors.success.main,
    //     backgroundColor: ({ colors }: {colors: Colors })  => transparentize(0.9, colors.success.main),
    //   },
    //   error: {
    //     color: ({ colors }: {colors: Colors })  => colors.error.main,
    //     backgroundColor: ({ colors }: {colors: Colors })  => transparentize(0.9, colors.error.main),
    //   },
    //   redirect: {
    //     color: ({ colors }: {colors: Colors })  => colors.warning.main,
    //     backgroundColor: ({ colors }: {colors: Colors })  => transparentize(0.9, colors.responses.redirect.color),
    //   },
    //   info: {
    //     color: ({ colors }: {colors: Colors })  => colors.info.main,
    //     backgroundColor: ({ colors }: {colors: Colors })  => transparentize(0.9, colors.responses.info.color),
    //   },
    // },
    http: {
      get: '#6bbd5b',
      post: '#248fb2',
      put: '#9b708b',
      options: '#d3ca12',
      patch: '#e09d43',
      delete: '#e27a7a',
      basic: '#999',
      link: '#31bbb6',
      head: '#c167e4',
    },
    navbar: {
      main: ({ colors }: { colors: Colors }) => colors.secondary.main,
      contrastText: 'black',
    },
    footer: {
      main: '#E4E7EB',
      contrastText: 'black',
    },
    //    buttonColor: {
    //     main: '#E4E7EB',
    //     contrastText: 'black'
    //     }, custom button color for portal homepage, not being used
  },
  sidebar: {
    backgroundColor: '#fafafa',
    width: '260px',
  },
  // tocPanel: {
  //   width: '240px',
  // },

  typography: {
    fontSize: '18px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: '"Source Sans Pro", sans-serif',
    headings: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: '600',
    },
    heading1: {
      //   fontSize: '1.85714em',
      //   fontWeight: '600',
      //   fontFamily: ({ typography }) => typography.headings.fontFamily,
      //   lineHeight: ({ typography }) => typography.lineHeight,
      color: ({ colors }: { colors: Colors }) => colors.text.secondary,
      capitalize: true,
    },
    heading2: {
      //   fontSize: '1.57143em',
      //   fontWeight: '600',
      color: ({ colors }: { colors: Colors }) => colors.text.secondary,
      //   fontFamily: ({ typography }) => typography.headings.fontFamily,
      //   lineHeight: ({ typography }) => typography.lineHeight,
      //   capitalize: false,
    },
    heading3: {
      //   fontSize: '1.27em',
      //   fontWeight: '600',
      color: ({ colors }: { colors: Colors }) =>
        lighten(0.2, colors.text.secondary),
      //   fontFamily: ({ typography }) => typography.headings.fontFamily,
      //   lineHeight: ({ typography }) => typography.lineHeight,
      //   capitalize: false,
    },
    // heading4: {
    // // ...
    // },
    // heading5: {
    // // ...
    // },
    // heading6: {
    // // ...
    // },
    code: {
      fontSize: '13px',
      fontFamily: '"Source Code Pro", sans-serif',
      // fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.04)',
      wrap: false,
    },
    links: {
      color: ({ colors }: { colors: Colors }) => colors.text.secondary,
      visited: ({ typography }: { typography: Typography }) =>
        typography.links.color,
      hover: ({ typography }: { typography: Typography }) =>
        lighten(0.3, typography.links.color),
    },
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: '40%',
    // textColor: '#ffffff',
  },
  schema: {
    nestedBackground: '#fafafa',
    // linesColor: theme => lighten( theme.colors.tonalOffset, desaturate(theme.colors.tonalOffset, theme.colors.primary.main) ),
    // defaultDetailsWidth: '75%',
    typeNameColor: (theme: Theme) => theme.colors.text.secondary,
    typeTitleColor: (theme: Theme) => theme.schema.typeNameColor,
    // requireLabelColor: theme => theme.colors.error.main,
    // labelsTextSize: '0.9em',
    // nestingSpacing: '1em',
    // arrow: {
    //   size: '1.1em',
    //   color: theme => theme.colors.text.secondary,
    // },
  },
  // codeBlock: {
  //   backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
  //   tokens: {},
  // },
  components: {
    alert: {
      variants: {
        info: {
          backgroundColor: '#F5F7F9',
          textColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          headingColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          iconColor: '#3455DB',
          // icon: '<svg ...',
        },
        attention: {
          backgroundColor: '#F5F7F9',
          textColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          headingColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          iconColor: '#3455DB',
          // icon: '<svg ...',
        },
        warning: {
          backgroundColor: '#F5F7F9',
          textColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          headingColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          iconColor: '#D4AD03',
          // icon: '<svg ...',
        },
        danger: {
          backgroundColor: '#F5F7F9',
          textColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          headingColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          iconColor: '#E53935',
          // icon: '<svg ...',
        },
        success: {
          backgroundColor: '#F5F7F9',
          textColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          headingColor: ({ colors }: { colors: Colors }) => colors.text.primary,
          iconColor: '#03AD13',
          // icon: '<svg ...',
        },
      },
    },
  },
};

export { udTheme as theme };
