// src/pages/ProductDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Box, Button, TextField, Snackbar, Alert, Paper, Avatar, Skeleton, List, ListItem, ListItemText, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItemToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // เพิ่ม loading state
  const [quantity, setQuantity] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarProduct, setSnackbarProduct] = useState(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    // Simulate API call or data fetching delay
    setLoading(true);
    const foundProduct = products.find((p) => p.id === id);
    setTimeout(() => {
      setProduct(foundProduct);
      setLoading(false);
    }, 500); // Simulate 0.5 second loading
  }, [id]);

  const handleAddToCart = () => {
    if (quantity < 1 || isNaN(quantity)) {
      setSnackbarMessage('โปรดระบุจำนวนที่ถูกต้อง (อย่างน้อย 1 ชิ้น)');
      setSnackbarSeverity('warning');
      setSnackbarOpen(true);
      return;
    }
    addItemToCart(product, quantity);
    setSnackbarMessage(`เพิ่มลงตะกร้าแล้ว (${quantity} ชิ้น)`);
    setSnackbarProduct(product);
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (event.target.value === '') {
      setQuantity('');
    } else {
      setQuantity(1);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  if (loading) {
    // Skeleton UI ขณะโหลด
    return (
      <Container maxWidth="lg" sx={{ mt: 5, mb: 6 }}>
        <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
          <Grid container spacing={{ xs: 3, md: 5 }}>
            <Grid item xs={12} md={6}>
              <Skeleton variant="rectangular" width="100%" height={{ xs: 250, md: 400 }} sx={{ borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Skeleton variant="text" width="80%" height={60} />
              <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="90%" height={20} sx={{ mb: 3 }} />
              <Skeleton variant="text" width="40%" height={40} sx={{ mb: 3 }} />
              <Skeleton variant="rectangular" width="100%" height={50} />
              <Skeleton variant="rectangular" width="60%" height={50} sx={{ mt: 2 }} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" align="center" color="error" gutterBottom>
          ไม่พบสินค้า
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
          กลับสู่หน้าหลัก
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 6 }}>
      <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.imageUrl}
              alt={product.name}
              sx={{
                width: '100%',
                height: { xs: 250, md: 400 },
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.08)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
              {product.description}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 2, fontWeight: 700 }}>
              ราคา: ฿{product.price.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>

            {/* --- Specifications Section --- */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <Box sx={{ mt: 4, mb: 4, bgcolor: 'background.default', p: 2, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'text.primary' }}>
                  คุณสมบัติและตัวเลือก
                </Typography>
                <List dense disablePadding>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <ListItem key={key} disableGutters sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={<Typography variant="body2" sx={{ fontWeight: 500 }}>{key.replace(/_/g, ' ').toUpperCase()}:</Typography>}
                        secondary={
                          Array.isArray(value) ?
                            value.map((item, index) => (
                              <Typography component="span" variant="body2" key={index} sx={{ mr: 1 }}>
                                {item}{index < value.length - 1 ? ',' : ''}
                              </Typography>
                            ))
                            :
                            <Typography component="span" variant="body2">{value}</Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 4 }}>
              <TextField
                label="จำนวน"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                sx={{ width: 120, mr: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleAddToCart}
                startIcon={<AddShoppingCartIcon />}
                sx={{ py: 1.5, borderRadius: 3 }}
              >
                เพิ่มลงตะกร้า
              </Button>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/')}
              startIcon={<ArrowBackIcon />}
              sx={{ borderRadius: 3 }}
            >
              กลับสู่หน้าสินค้า
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Snackbar Component */}
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{
            width: '100%',
            minWidth: 300,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            p: 1.5
          }}
        >
          {snackbarProduct && (
            <Avatar
              src={snackbarProduct.imageUrl}
              alt={snackbarProduct.name}
              sx={{ width: 48, height: 48, mr: 2, borderRadius: 1 }}
              variant="rounded"
            />
          )}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {snackbarMessage}
            </Typography>
            {snackbarProduct && (
              <Typography variant="body2" color="text.secondary">
                "{snackbarProduct.name}" ถูกเพิ่มลงตะกร้าเรียบร้อย
              </Typography>
            )}
          </Box>
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ProductDetailPage;