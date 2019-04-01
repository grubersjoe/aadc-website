import color from 'color';

const containerWidth = 620; // px

const colors = {
  primary: 'hsl(212, 100%, 22%)',
  secondary: 'hsl(210, 64%, 37%)',
  text: 'hsl(212, 100%, 8%)',
  textMuted: color('hsl(212, 100%, 8%)')
    .fade(0.3)
    .string(),
};

const fontSizes = {
  large: '112%',
  small: '90%',
};

export { containerWidth, colors, fontSizes };
