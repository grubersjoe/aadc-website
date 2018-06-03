import Typography from 'typography';
import { colorPrimary, colorText, colorSecondary } from './constants';

const theme = {
  title: 'SmartDriving',
  baseFontSize: '19px',
  baseLineHeight: 1.5,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyColor: colorText,
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 600,
  googleFonts: [
    {
      name: 'IBM Plex Sans',
      styles: ['400', '400i', '500', '600', '700'],
    },
  ],
  scaleRatio: 1.618,
};

theme.overrideThemeStyles = () => ({
  h1: {
    lineHeight: 1.3,
  },
  'h1, h2, h3': {
    color: colorPrimary,
  },
  'h2, h3, h4, h5, h6': {
    fontWeight: 600,
  },
  'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
    color: 'inherit',
  },
  a: {
    color: colorSecondary,
    textDecoration: 'none',
  },
  'p a': {
    borderBottom: '1px solid transparent',
  },
  'p a:hover': {
    borderBottom: `1px solid ${colorSecondary}`,
  },
  small: {
    fontSize: '85%',
  },
  hr: {
    height: '2px',
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
