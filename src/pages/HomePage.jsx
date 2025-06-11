// src/pages/HomePage.jsx
import React from 'react';
import { Container, Typography, Grid, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function HomePage() {
  const theme = useTheme();
  // isSmallScreen สามารถนำไปใช้ปรับ UI อื่นๆ เพิ่มเติมได้ตามต้องการ
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

  // กรองสินค้าแนะนำ (เช่น iPhone 15 Pro Max, MacBook Air M3, iPad Pro M4, AirPods Pro)
  const featuredProducts = products.filter(product =>
    ['apple-iphone-15-pro-max', 'apple-macbook-air-m3-15-inch', 'apple-ipad-pro-m4-13-inch', 'apple-airpods-pro-2nd-gen-usb-c']
    .includes(product.id)
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 0, mb: 8, p: { xs: 0, sm: 2 } }}> {/* เพิ่ม mb ให้ Container หลัก */}
      {/* --- Hero Section --- */}
      <Box
        sx={{
          backgroundImage: 'url(/images/hero-banner.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '350px', sm: '450px', md: '550px' }, // เพิ่มความสูง Hero Section เล็กน้อย
          borderRadius: { xs: 0, sm: 3 }, 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'common.white', 
          position: 'relative',
          overflow: 'hidden',
          mb: 6, // เพิ่ม mb ให้ Hero Section
        }}
      >
        {/* Overlay ที่เป็นสีน้ำเงินเข้มโปร่งแสง + เบลอพื้นหลัง */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(21, 101, 192, 0.6)', // ค่า RGB ของ #1565C0 (primary.dark) พร้อม Opacity 60%
            backdropFilter: 'blur(10px)', // เพิ่มระดับเบลอเป็น 10px
            WebkitBackdropFilter: 'blur(10px)', 
            zIndex: 1, 
          }}
        />
        <Box sx={{ zIndex: 2, p: { xs: 2, md: 4 } }}> {/* เพิ่ม padding responsive */}
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' }, // เพิ่มขนาดตัวอักษร
              textShadow: '3px 3px 6px rgba(0,0,0,0.6)', // เพิ่มเงาข้อความให้เข้มขึ้น
              mb: { xs: 1.5, sm: 2.5 }, // ปรับ mb
            }}
          >
            สัมผัสประสบการณ์ Apple ที่เหนือกว่า
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.7rem' }, // เพิ่มขนาดตัวอักษร
              mb: { xs: 3, sm: 5 }, // ปรับ mb
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // เพิ่มเงาข้อความรองให้เข้มขึ้น
              maxWidth: '800px', // เพิ่ม maxWidth
              lineHeight: 1.5, // ปรับ lineHeight
            }}
          >
            เลือกซื้อ iPhone, Mac, iPad และอุปกรณ์เสริมล่าสุด พร้อมข้อเสนอพิเศษ
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 1.8, // เพิ่ม padding แนวตั้ง
              px: 5, // เพิ่ม padding แนวนอน
              fontSize: '1.2rem', // เพิ่มขนาดตัวอักษรในปุ่ม
              borderRadius: 3, 
              boxShadow: '0px 8px 20px rgba(0,0,0,0.35)', // เพิ่มเงาปุ่มให้เข้มขึ้น
              '&:hover': {
                boxShadow: '0px 12px 30px rgba(0,0,0,0.45)', // เงาปุ่มเมื่อ hover เข้มขึ้น
                transform: 'translateY(-4px)', // ยกปุ่มขึ้นมากขึ้น
              },
            }}
          >
            ช้อปเลย!
          </Button>
        </Box>
      </Box>

      {/* --- Featured Products Section --- */}
      <Box sx={{ my: 7 }}> {/* เพิ่ม my ให้มีระยะห่างมากขึ้น */}
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 5, color: 'text.primary' }}> {/* เพิ่ม mb ให้หัวข้อ */}
          สินค้าแนะนำสำหรับคุณ
        </Typography>
        <Grid container spacing={4} justifyContent="center"> {/* เพิ่ม spacing */}
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* --- All Products Section --- */}
      <Box sx={{ my: 7 }}> {/* เพิ่ม my ให้มีระยะห่างมากขึ้น */}
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 5, color: 'text.primary' }}> {/* เพิ่ม mb ให้หัวข้อ */}
          สินค้าทั้งหมด
        </Typography>
        <Grid container spacing={4}> {/* เพิ่ม spacing */}
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default HomePage;