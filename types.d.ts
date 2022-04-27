interface Spacing {
  unit: number;
  sectionHorizontal: number;
  sectionVertical: number;
}

interface Navbar {
  fontSize: string;
}

interface Sidebar {
  spacing: {};
  topOffset: number;
  leftOffset: number;
}

interface Breakpoints {
  small: string;
  medium: string;
  large: string;
}

interface Colors {
  background: string;
  navbar: {
    gradient: string;
  };
  primary: {
    main: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    contrastText: string;
  };
  tonalOffset: number;
  // errors: string,
  // warning: string,
  // info: string,
  // success: string,
  text: {
    primary: string;
    secondary: string;
  };
  http: {
    get: string;
    post: string;
    put: string;
    options: string;
    patch: string;
    delete: string;
    basic: string;
    link: string;
    head: string;
  };
}

interface Typography {
  fontSize: string;
  lineHeight: string;
  fontWeightRegular: string;
  fontWeightBold: string;
  fontWeightLight: string;
  fontFamily: string;
  headings: {
    fontFamily: string;
    fontWeight: string;
  };
  rightPanelHeading: {};
  code: {
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    color: string;
    backgroundColor: string;
    wrap: boolean;
  };
  links: {
    color: string;
    visited: string;
    hover: string;
  };
}

interface RightPanel {
  backgroundColor: string;
  width: string;
}

interface Schema {
  nestedBackground: string;
  typeNameColor: string;
}

interface Theme {
  spacing: Spacing;
  navbar: Navbar;
  sidebar: Sidebar;
  breakpoints: Breakpoints;
  colors: Colors;
  typography: Typography;
  rightPanel: RightPanel;
  schema: Schema;
}

export { Theme, Colors, Typography };
