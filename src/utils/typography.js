import Typography from 'typography';

const colorPrimary = '#00336f';
const theme = {
  title: 'SmartDriving',
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 600,
  boldWeight: 600,
  googleFonts: [{
    name: 'IBM Plex Sans',
    styles: ['400', '400i', '500', '600']
  }],
  scaleRatio: 1.618
};

theme.overrideThemeStyles = () => ({
  'h1, h2, h3, a': {
    color: colorPrimary,
  },
  'a': {
    textDecoration: 'none',
  },
  'p a': {
    fontWeight: 500,
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
