import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  // Define light theme CSS variables
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '--background-color': '#fff',
          '--text-color': '#000',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  // Define dark theme CSS variables
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '--background-color': '#333',
          '--text-color': '#fff',
        },
      },
    },
  },
});

const getTheme = (mode) => {
  switch (mode) {
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};

export default getTheme;
