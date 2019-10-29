import Typography from 'typography';
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
  blockMarginBottom: 1,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  headerWeight: 500,
  scaleRatio: 1.5,
};

const typography = new Typography(theme);
const { rhythm, scale } = typography;

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export { typography as default, rhythm, scale };
