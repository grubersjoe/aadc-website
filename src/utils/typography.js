import Typography from 'typography';
import { colors } from './constants';

const theme = {
  title: 'SmartDriving',
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  boldWeight: 600,
  bodyColor: colors.text,
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyWeight: 400,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  headerWeight: 600,
  scaleRatio: 1.618,
  googleFonts: [
    {
      name: 'IBM Plex Sans',
      styles: ['400', '400i', '500', '600', '700'],
    },
  ],
};

theme.overrideThemeStyles = () => ({
  'h1, h2, h3': {
    color: colors.primary,
  },
  'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
    color: 'inherit',
  },
  h1: {
    lineHeight: 1.3,
  },
  h2: {
    marginBottom: '1rem',
  },
  small: {
    fontSize: '90%',
  },
  a: {
    color: colors.secondary,
    textDecoration: 'none',
  },
  'p a': {
    borderBottom: '1px solid transparent',
  },
  'p a:hover': {
    borderBottom: `1px solid ${colors.secondary}`,
  },
  hr: {
    height: '2px',
  },
  li: {
    marginBottom: '0.5rem',
  },
  dt: {
    fontWeight: 500,
  },
  dd: {
    marginBottom: '0.5rem',
    padding: '0.25rem 0 0 1.5rem',
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
