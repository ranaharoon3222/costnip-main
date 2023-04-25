import Navbar from '@/components/Navbar';
import Footer from '@/components/home/Footer';
import GraphPatterns from '@/components/products/GraphPatterns';
import ProductSlider from '@/components/products/ProductSlider';
import Properties from '@/components/products/Properties';
import SimilarProucts from '@/components/products/SimilarProucts';
import React from 'react';

const Products = () => {
    return (
        <div>
            <Navbar/>
            <ProductSlider/>
            <Properties/>
            <GraphPatterns/>
            <SimilarProucts/>
            <Footer/>
        </div>
    );
};

export default Products;