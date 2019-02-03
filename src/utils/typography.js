import Typography from 'typography';
import color from 'color';
import { colors } from './constants';

// eslint-disable-next-line
import 'typeface-ibm-plex-sans';

const theme = {
  title: 'SmartDriving',
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  boldWeight: 600,
  bodyColor: colors.text,
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyWeight: 400,
  blockMarginBottom: 0.85,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  headerWeight: 600,
  scaleRatio: 1.5,
};

theme.overrideThemeStyles = () => ({
  // Typographys JS doesn't support breakpoints so far
  // See https://github.com/KyleAMathews/typography.js/issues/75
  // This is a very ugly workaround:
  '@media (max-width: 767px) { html { font-size: 16px } }': {},

  'h1, h2, h3': {
    lineHeight: 1.3,
  },
  'h1 a, h2 a, h3 a': {
    color: colors.primary,
  },
  h2: {
    marginBottom: '0.75rem',
    fontWeight: 500,
  },
  a: {
    color: colors.secondary,
    textDecoration: 'none',
    transition: '0.25s background-color ease-in-out',
  },
  'article a:hover, main a:hover': {
    backgroundColor: color(colors.secondary).fade(0.94).string(),
  },
  small: {
    fontSize: '90%',
  },
  hr: {
    height: '2px',
  },
  li: {
    marginBottom: '0.25rem',
  },
  'dl, ul': {
    marginBottom: '1.5rem',
  },
  dt: {
    fontWeight: 400,
  },
  dd: {
    marginBottom: '0.75rem',
    padding: '0.25rem 0 0 1rem',
  },
  section: {
    marginBottom: '1.5rem',
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
