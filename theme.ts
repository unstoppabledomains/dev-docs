import { darken, lighten, readableColor } from 'polished';
import { Colors, Theme, Typography } from './types';
import lightTheme from '@unstoppabledomains/ui-kit/styles';

export const theme = {
  // spacing: {
  //   unit: 5,
  //   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
  //   sectionVertical: ({ spacing }) => spacing.unit * 8,
  // },

  //breakpoints: {
  // xs: lightTheme.breakpoints.values.xs + (lightTheme.breakpoints.unit || 'px'),
  //   small: lightTheme.breakpoints.values.sm + (lightTheme.breakpoints.unit || 'px'),
  //   medium: lightTheme.breakpoints.values.md + (lightTheme.breakpoints.unit || 'px'),
  //   large: lightTheme.breakpoints.values.lg + (lightTheme.breakpoints.unit || 'px'),
  // },

  colors: {
    tonalOffset: lightTheme.palette.tonalOffset,
    primary: lightTheme.palette.primary,
    secondary: lightTheme.palette.secondary,
    text: lightTheme.palette.text,
    success: lightTheme.palette.success,
    warning: lightTheme.palette.warning,
    error: lightTheme.palette.error,
    info: lightTheme.palette.info,

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
      main: ({ colors }: {colors: Colors })  => colors.background,
      contrastText: ({ colors }: {colors: Colors })  => colors.text.primary,
     },
     footer: {
      main: ({ colors }: {colors: Colors })  => colors.background,
      contrastText: ({ colors }: {colors: Colors })  => colors.text.primary,
     },
 //    buttonColor: {
 //     main: '#E4E7EB',
 //     contrastText: 'black'
//     },
  },

  sidebar: {
    backgroundColor: '#fafafa',
    width: '260px',
  },
  // tocPanel: {
  //   width: '240px',
  // },

  typography: {
    fontSize: lightTheme.typography.fontSize,
    lineHeight: '1.5em',
    fontWeightRegular: lightTheme.typography.fontWeightRegular,
    fontWeightBold: lightTheme.typography.fontWeightBold,
    fontWeightLight: lightTheme.typography.fontWeightLight,
    fontFamily: lightTheme.typography.fontFamily,
    headings: {
      fontFamily: lightTheme.typography.fontFamily,
      fontWeight: '700',
    },
    
    heading1: lightTheme.typography.h1,
    // heading2: lightTheme.typography.h2,
    // heading3: lightTheme.typography.h3,
    // heading4: lightTheme.typography.h4,
    // heading5: lightTheme.typography.h5,
    // heading6: lightTheme.typography.h6,
    heading2: {
       color: ({ colors }: {colors: Colors })  => colors.text.secondary,
    },
    heading3: {
      color: ({ colors }: {colors: Colors })  => lighten(colors.tonalOffset, colors.text.secondary),
    },

    code: {
      fontSize: '13px',
      fontFamily: '"Source Code Pro", monospace',
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.04)',
      wrap: false,
    },

    links: {
      color: lightTheme.palette.link.main,
      visited: lightTheme.palette.link.dark || darken(lightTheme.palette.tonalOffset, lightTheme.palette.link.main),
      hover: lightTheme.palette.link.light || lighten(lightTheme.palette.tonalOffset, lightTheme.palette.link.main),
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
          backgroundColor: ({ colors }: {colors: Colors })  => lightTheme.palette.greyShades[50],//'#F5F7F9',
          textColor: ({ colors }: {colors: Colors }) => colors.text.primary,
          headingColor: ({ colors }: {colors: Colors })  => colors.text.primary,
          iconColor: ({ colors }: {colors: Colors })  => lightTheme.palette.iceBlue,//'#3455DB',
          // icon: '<svg ...',
        },
        attention: {
          backgroundColor: lightTheme.palette.blueGreyShades[50],//'#F5F7F9',
          textColor: ({ colors }: {colors: Colors })  => colors.text.primary,
          headingColor: ({ colors }: {colors: Colors })  => colors.text.primary,
          iconColor: ({ colors }: {colors: Colors }) => colors.primary.main,//'#3455DB',
          // icon: '<svg ...',
      },
        warning: {
          backgroundColor: ({ colors }: {colors: Colors })  => lightTheme.palette.greyShades[50],//'#F5F7F9',
          textColor: ({ colors }: {colors: Colors })  => colors.text.primary,
          headingColor: ({ colors }: {colors: Colors })  => colors.text.primary,
          iconColor: ({ colors }: {colors: Colors })  => colors.warning.main,//'#D4AD03',
          // icon: '<svg ...',
      },
        danger: {
          backgroundColor: lightTheme.palette.greyShades[50],
          textColor: ({ colors }: {colors: Colors })  => colors.text.primary,
          headingColor: ({ colors }: {colors: Colors })  => colors.text.primary,
          iconColor: lightTheme.palette.dangerShades[700],//'#E53935',
          // icon: '<svg ...',
      },
        success: {
          backgroundColor: ({ colors }: {colors: Colors })  => lightTheme.palette.greyShades[50],//'#F5F7F9',
          textColor:({ colors }: {colors: Colors })  => colors.text.primary,
          headingColor: ({ colors }: {colors: Colors })  => colors.text.primary,
          iconColor: ({ colors }: {colors: Colors })  => colors.success.main,//'#03AD13',
          // icon: '<svg ...',
        },
      },
    },
  },
};
