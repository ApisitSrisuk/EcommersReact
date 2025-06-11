// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Snackbar, Alert, Box, Avatar } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addItemToCart } = useCart();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarProduct, setSnackbarProduct] = useState(null); // เก็บข้อมูลสินค้าที่ถูกเพิ่ม
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItemToCart(product, 1);
    setSnackbarMessage(`เพิ่มลงตะกร้าแล้ว`); // ข้อความสั้นลง
    setSnackbarProduct(product); // เก็บข้อมูลสินค้า
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Card sx={{
      maxWidth: 320,
      margin: 'auto',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 3,
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
      },
    }}>
      <CardActionArea component={Link} to={`/products/${product.id}`} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="220"
          image={product.imageUrl}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ minHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis', mb: 1, fontWeight: 600 }}>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ minHeight: '2.5em', overflow: 'hidden', textOverflow: 'ellipsis', mb: 1 }}>
            {product.description.substring(0, 70)}{product.description.length > 70 ? '...' : ''}
          </Typography>
          <Typography variant="h5" color="primary" sx={{ mt: 1, fontWeight: 700 }}>
            ฿{product.price.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {/* แก้ไขตรงนี้ */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'space-between', p: 2, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAddToCart}
          sx={{ flexGrow: 1, mr: 1 }}
        >
          เพิ่ม
        </Button>
        <Button
          size="medium"
          color="secondary"
          variant="outlined"
          startIcon={<InfoIcon />}
          component={Link}
          to={`/products/${product.id}`}
          sx={{ flexGrow: 1, ml: 1 }}
        >
          รายละเอียด
        </Button>
      </CardActions>

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
    </Card>
  );
}

export default ProductCard;