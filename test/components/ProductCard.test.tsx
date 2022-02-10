import React from "react";
import renderer from 'react-test-renderer';

import {ProductCard} from "../../src/components/ProductCard";

// @ts-ignore
import {products} from "../data/products";

const productWithImage = products[1];

const { act } = renderer;

describe('ProductImage Tests', () => {

  test('Should render the component with the childrens', () => {
    const wrapper = renderer.create(
      <ProductCard product={productWithImage}>
        {
          () => (
            <h1>Product Card</h1>
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should increment the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={productWithImage}>
        {
          ({count, increaseBy}) => (
            <>
              <h1>Product Card</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)}/>
            </>
          )
        }
      </ProductCard>
    )

    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  })

});
