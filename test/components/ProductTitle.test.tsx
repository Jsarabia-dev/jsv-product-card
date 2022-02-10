import React from "react";
import renderer from 'react-test-renderer';

import {ProductTitle} from "../../src";
import {ProductCard} from "../../src/components/ProductCard";

// @ts-ignore
import {products} from "../data/products";

const product1 = products[0];

describe('ProductTitle Tests', () => {

  test('Should render the component with personalized title', () => {
    const wrapper = renderer.create(
      <ProductTitle title={'Custom Title'} className={'custom-class'}/>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should render component with the title of product', () => {
    const wrapper = renderer.create(
      <ProductCard  product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

});
