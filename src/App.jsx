// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'; // เพิ่ม Box
import theme from './theme';

import { CartProvider } from './context/CartContext';

import Header from './components/header';
// import Footer from './components/Footer'; // หากคุณต้องการเพิ่ม Footer

import HomePage from './pages/Homepage'; // <-- ตรงนี้เป็นตัว h เล็ก
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <CartProvider>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: 'calc(100vh - 64px)' }}>
            {/* minHeight: 'calc(100vh - 64px)' คือการกำหนดความสูงของ main content ให้เต็มหน้าจอ ลบความสูงของ Header ออก */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              {/* เพิ่ม Route สำหรับหน้าอื่นๆ ที่นี่ */}
            </Routes>
          </Box>
          {/* <Footer /> */}
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;