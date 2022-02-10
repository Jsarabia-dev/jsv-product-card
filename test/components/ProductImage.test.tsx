import React from "react";
import renderer from 'react-test-renderer';

import {ProductCard} from "../../src/components/ProductCard";
import {ProductImage} from "../../src";

// @ts-ignore
import {products} from "../data/products";

const productWithImage = products[1];

describe('ProductImage Tests', () => {

  test('Should render the component with personalized img', () => {
    const wrapper = renderer.create(
      <ProductImage img={'fake-img'} className={'custom-class'}/>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should render component with the img of product', () => {
    const wrapper = renderer.create(
      <ProductCard  product={productWithImage}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

});
