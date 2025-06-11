// src/pages/CartPage.jsx
import React, { useState } from 'react';
import { Container, Typography, Button, Box, Paper, Divider, IconButton, Avatar, Snackbar, Alert } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import StorefrontIcon from '@mui/icons-material/Storefront'; // ใช้ StorefrontIcon
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'; // เพิ่ม icon สำหรับ Empty State

function CartPage() {
  const { cartItems, removeItemFromCart, updateItemQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeItemFromCart(productId);
      setSnackbarMessage('ลบสินค้าออกจากตะกร้าแล้ว');
      setSnackbarSeverity('info');
    } else {
      updateItemQuantity(productId, newQuantity);
      setSnackbarMessage('อัปเดตจำนวนสินค้าแล้ว');
      setSnackbarSeverity('success');
    }
    setSnackbarOpen(true);
  };

  const handleRemoveItem = (productId, productName) => {
    removeItemFromCart(productId);
    setSnackbarMessage(`"${productName}" ถูกลบออกจากตะกร้าแล้ว`);
    setSnackbarSeverity('info');
    setSnackbarOpen(true);
  };

  const handleClearCart = () => {
    clearCart();
    setSnackbarMessage('ล้างตะกร้าสินค้าทั้งหมดแล้ว');
    setSnackbarSeverity('info');
    setSnackbarOpen(true);
  };

  const handleCheckout = () => {
    setSnackbarMessage('ดำเนินการชำระเงินเรียบร้อยแล้ว! ขอบคุณที่อุดหนุน');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 1500); // กลับหน้าแรกหลังจาก 1.5 วินาที
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="md" sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
        <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
          <Box sx={{ p: 4, mb: 3 }}>
            <SentimentDissatisfiedIcon sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} /> {/* Icon ใหม่ */}
            <Typography variant="h5" gutterBottom color="text.secondary">
              ตะกร้าสินค้าของคุณว่างเปล่า
            </Typography>
            <Typography variant="body1" color="text.disabled" sx={{ mb: 4 }}>
              ดูเหมือนคุณยังไม่ได้เพิ่มสินค้าใดๆ ลองเลือกซื้อสินค้าที่คุณชื่นชอบสิ!
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{ py: 1.5, borderRadius: 3, fontSize: '1.1rem' }}
              startIcon={<StorefrontIcon />}
            >
              กลับไปเลือกซื้อสินค้า
            </Button>
          </Box>
        </Paper>
        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%', borderRadius: 2 }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, mb: 4 }}>
        ตะกร้าสินค้าของคุณ
      </Typography>
      <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
        {cartItems.map((item) => (
          <Box
            key={item.product.id}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              mb: 2.5,
              pb: 2.5,
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              '&:last-child': { borderBottom: 'none', mb: 0, pb: 0 },
            }}
          >
            <Avatar
              src={item.product.imageUrl}
              alt={item.product.name}
              variant="rounded"
              sx={{ width: 100, height: 100, mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 }, borderRadius: 2, flexShrink: 0 }}
            />
            <Box sx={{ flexGrow: 1, width: { xs: '100%', sm: 'auto' } }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{item.product.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                ราคาต่อชิ้น: ฿{item.product.price.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  size="small"
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  sx={{ p: 0.5, borderRadius: 1 }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ mx: 1.5, minWidth: '24px', textAlign: 'center', fontWeight: 500 }}>{item.quantity}</Typography>
                <IconButton
                  size="small"
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  sx={{ p: 0.5, borderRadius: 1 }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
                <Typography variant="subtitle1" color="primary" sx={{ ml: 3, fontWeight: 700 }}>
                  รวม: ฿{(item.product.price * item.quantity).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Typography>
              </Box>
            </Box>
            <IconButton
              color="error"
              size="large"
              onClick={() => handleRemoveItem(item.product.id, item.product.name)}
              sx={{ mt: { xs: 2, sm: 0 }, ml: { xs: 0, sm: 2 } }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Divider sx={{ my: 4 }} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          bgcolor: 'background.default',
          p: 2,
          borderRadius: 2,
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>รวมราคาทั้งหมด:</Typography>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>฿{totalPrice.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mt: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClearCart}
            sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 }, py: 1.5, borderRadius: 3, fontSize: '1rem' }}
            startIcon={<DeleteIcon />}
          >
            ล้างตะกร้า
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckout}
            sx={{ py: 1.5, borderRadius: 3, fontSize: '1rem' }}
            startIcon={<ShoppingCartCheckoutIcon />}
          >
            ดำเนินการชำระเงิน
          </Button>
        </Box>
      </Paper>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%', borderRadius: 2 }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CartPage;