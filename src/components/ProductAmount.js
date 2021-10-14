import React from 'react';
import PropTypes from 'prop-types';

function ProductAmount(props) {
    const { cartProducts } = props;
    return (
        <div className="app__navbar__cart__amount">
            (
            {cartProducts.reduce((accumulator, item) => {
                return accumulator + item.count;
            }, 0)}
            )
        </div>
    );
}

ProductAmount.propTypes = {};

export default ProductAmount;
