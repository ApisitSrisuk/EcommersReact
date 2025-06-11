// src/components/Header.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Drawer, List, ListItem, ListItemText, Divider, Box, Avatar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { cartItems, totalItemsInCart, removeItemFromCart, updateItemQuantity, totalPrice } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeItemFromCart(productId);
    } else {
      updateItemQuantity(productId, newQuantity);
    }
  };

  const list = () => (
    <Box
      sx={{ width: { xs: '100%', sm: 380 }, overflowY: 'auto', p: 2 }}
      role="presentation"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" component="div">
          ตะกร้าสินค้า ({totalItemsInCart} ชิ้น)
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List disablePadding>
        {cartItems.length === 0 ? (
          <ListItem sx={{ py: 3 }}>
            <ListItemText primary="ไม่มีสินค้าในตะกร้า" primaryTypographyProps={{ textAlign: 'center', color: 'text.secondary' }} />
          </ListItem>
        ) : (
          cartItems.map((item) => (
            <ListItem
              key={item.product.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                py: 1.5,
                mb: 1.5,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              <Avatar
                src={item.product.imageUrl}
                alt={item.product.name}
                variant="rounded"
                sx={{ width: 70, height: 70, mr: 2 }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 600 }}>
                  {item.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ฿{item.product.price.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}** {/* แก้ไขตรงนี้ */}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <IconButton
                    size="small"
                    onClick={(e) => { e.stopPropagation(); handleQuantityChange(item.product.id, item.quantity - 1); }}
                    disabled={item.quantity <= 1}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography sx={{ mx: 1, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</Typography>
                  <IconButton
                    size="small"
                    onClick={(e) => { e.stopPropagation(); handleQuantityChange(item.product.id, item.quantity + 1); }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="subtitle1" color="primary" sx={{ ml: 2, fontWeight: 600 }}>
                    ฿{(item.product.price * item.quantity).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}** {/* แก้ไขตรงนี้ */}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                color="error"
                onClick={(e) => { e.stopPropagation(); removeItemFromCart(item.product.id); }}
                sx={{ ml: 2 }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItem>
          ))
        )}
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>รวมทั้งหมด:</Typography>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>฿{totalPrice.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}**</Typography> {/* แก้ไขตรงนี้ */}
      </Box>
      {cartItems.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ py: 1.5, borderRadius: 3 }}
          onClick={toggleDrawer(false)}
          component={Link}
          to="/cart"
        >
          ดูตะกร้า / ดำเนินการชำระเงิน
        </Button>
      )}
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/" color="inherit" startIcon={<StorefrontIcon sx={{ fontSize: 28 }} />} sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
            Apple Shop
          </Button>
        </Typography>
        <IconButton color="inherit" onClick={toggleDrawer(true)} aria-label="shopping cart">
          <Badge badgeContent={totalItemsInCart} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </AppBar>
  );
}

export default Header;