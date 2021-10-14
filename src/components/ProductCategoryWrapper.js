import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

function ProductCategoryWrapper(props) {
    const { products, handleAddProduct } = props;
    const categories = products.reduce((allProducts, current) => {
        return allProducts.includes(current.category)
            ? allProducts
            : allProducts.concat([current.category]);
    }, []);

    return (
        <div className="app__product-wrapper">
            {categories.map((category) => {
                const productItems = products.filter(
                    (prod) => prod.category === category,
                );
                const firstProduct = productItems[0];
                return (
                    <>
                        <h2 className="app__product-wrapper-title">
                            {firstProduct.category}
                        </h2>
                        {productItems.map((item) => (
                            <ProductItem
                                item={item}
                                handleAddProduct={handleAddProduct}
                            />
                        ))}
                    </>
                );
            })}
        </div>
    );
}

ProductCategoryWrapper.propTypes = {};

export default ProductCategoryWrapper;
