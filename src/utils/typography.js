import Typography from 'typography';

const colorPrimary = '#00336f';
const theme = {
  title: 'SmartDriving',
  baseFontSize: '18px',
  baseLineHeight: 1.61,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 700,
  googleFonts: [{
    name: 'Lato',
    styles: ['400', '400i', '700', '700i']
  }],
  scaleRatio: 1.618
};

theme.overrideThemeStyles = () => ({
  'h1, h2, h3, a': {
    color: colorPrimary,
  }
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
