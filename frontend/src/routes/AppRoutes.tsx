import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { NewsPage } from '../pages/NewsPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ServicesPage } from '../pages/ServicesPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>);

}