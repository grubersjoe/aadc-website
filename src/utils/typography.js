import Typography from 'typography';
import { colorPrimary, colorSecondary } from './constants';

const theme = {
  title: 'SmartDriving',
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 600,
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['400', '400i', '600', '700', '800'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['400', '400i', '600', '600i', '700', '700i'],
    },
    {
      name: 'IBM Plex Sans',
      styles: ['400', '400i', '600', '600i', '700', '700i'],
    },
  ],
  scaleRatio: 1.618,
};

theme.overrideThemeStyles = () => ({
  'h1, h2, h3': {
    color: colorPrimary,
  },
  'h1 a, h2 a, h3 a': {
    color: 'inherit',
  },
  a: {
    fontWeight: 600,
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
  }
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
