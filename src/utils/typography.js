import Typography from 'typography';

const colorPrimary = '#00336f';
const theme = {
  title: 'SmartDriving',
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 700,
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
  'h1, h2, h3, a': {
    color: colorPrimary,
  },
  a: {
    textDecoration: 'none',
  },
  'p a': {
    borderBottom: '1px solid transparent',
  },
  'p a:hover': {
    borderBottom: `1px solid ${colorPrimary}`,
  },
  small: {
    fontSize: '85%',
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
