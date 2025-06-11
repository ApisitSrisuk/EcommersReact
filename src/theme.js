// src/theme.js
import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196F3', 
      light: '#64B5F6', 
      dark: '#1565C0',  
      contrastText: common.white,
    },
    secondary: {
      main: '#FFCA28', 
      light: '#FFEB3B', 
      dark: '#FFB300',  
      contrastText: common.black,
    },
    error: {
      main: '#E53935', 
    },
    warning: {
      main: '#FFB300', 
    },
    info: {
      main: '#03A9F4', 
    },
    success: {
      main: '#4CAF50', 
    },
    background: {
      default: '#FDFDFD', 
      paper: common.white, 
    },
    text: {
      primary: '#333333', 
      secondary: '#757575', 
      disabled: '#BDBDBD',
    },
    divider: '#EEEEEE', 
  },
  typography: {
    fontFamily: 'Kanit, sans-serif', 
    h3: {
      fontWeight: 700,
      fontSize: '2.8rem',
      // ปรับ marginBottom เล็กน้อย
      marginBottom: '1.5rem', 
      color: '#1565C0', 
    },
    h4: {
      fontWeight: 600,
      fontSize: '2.2rem',
      // ปรับ marginBottom เล็กน้อย
      marginBottom: '1rem', 
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.7rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.3rem',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      // เพิ่ม letterSpacing เล็กน้อย
      letterSpacing: '0.01em', 
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em', 
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.03em',
      fontSize: '1.0rem',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          // ปรับเงาให้ดูมีมิติและนุ่มนวลขึ้น
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.08)', 
          transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)', // ใช้ cubic-bezier เพื่อ animation ที่ราบรื่น
          '&:hover': {
            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.12)', 
            transform: 'translateY(-3px)', // ยกขึ้นมากขึ้นอีกนิด
          },
        },
        containedPrimary: {
          backgroundColor: '#2196F3',
          '&:hover': {
            backgroundColor: '#1565C0',
          },
        },
        outlinedSecondary: {
          borderColor: '#FFCA28',
          color: '#FFCA28',
          '&:hover': {
            borderColor: '#FFB300',
            color: '#FFB300',
            backgroundColor: 'rgba(255, 202, 40, 0.08)',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.04)',
          }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          // ปรับเงาให้ดูละมุนและกระจายตัวมากขึ้น
          boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.06)', 
          transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-10px)', // ยก Card ขึ้นมากขึ้นอีกนิด
            boxShadow: '0px 20px 50px rgba(0, 0, 0, 0.12)', // เงาเข้มขึ้นและกระจายตัวมากขึ้นเมื่อ hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.04)', // ลดความเข้มเงา AppBar เล็กน้อย
          backgroundColor: common.white,
          color: '#333333',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          boxShadow: '0px 15px 45px rgba(0, 0, 0, 0.15)', // เพิ่มความเข้มเงา Drawer เล็กน้อย
          backgroundColor: '#FBFBFB',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
          },
          // เพิ่ม transition ให้กับ TextField เพื่อความนุ่มนวล
          '& .MuiOutlinedInput-notchedOutline': {
            transition: 'border-color 0.3s ease-in-out',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2196F3 !important', // ให้ border สี primary เมื่อ hover
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1565C0 !important', // ให้ border สี primary.dark เมื่อ focus
            borderWidth: '2px !important', // เพิ่มความหนาเมื่อ focus
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          alignItems: 'center',
          padding: '14px 20px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)', // ปรับเงา Alert
        },
        icon: {
          fontSize: 28,
          marginRight: 12,
        },
        message: {
          fontWeight: 600,
          fontSize: '1.0rem',
        }
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      }
    },
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },
  },
});

export default theme;