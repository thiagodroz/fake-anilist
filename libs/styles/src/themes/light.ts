const fonts = {
  families: {
    body: 'Overpass',
    heading: 'Overpass',
    mono: 'monospace',
  },
  sizes: {
    xsm: {
      size: '13px',
      lineHeight: '17px',
    },
    sm: {
      size: '15px',
      lineHeight: '19px',
    },
    md: {
      size: '17px',
      lineHeight: '21px',
    },
    lg: {
      size: '22px',
      lineHeight: '25px',
    },
    xlg: {
      size: '24px',
      lineHeight: '27px',
    },
    xxlg: {
      size: '42px',
      lineHeight: '45px',
    },
  },
  styles: {
    normal: 'normal',
    italic: 'italic',
  },
  weights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
};

export const lightTheme = {
  name: 'Light',
  breakpoints: [899],
  colors: {},
  fonts,
  spacing: {
    none: '0',
    xxsm: '3px',
    xsm: '6px',
    sm: '9px',
    md: '18px',
    lg: '27px',
    xlg: '36px',
    xxlg: '63px',
    xxxlg: '81px',
    auto: 'auto',
  },
};
