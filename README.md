# jsv-product-card

Test package to deploy in NPM
### JSarabia.dev

## Example
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jsv-product-card'
```

```
<ProductCard product={product} initialValues={{ count: 0, maxCount: 10, }}>
    { ({ count, increaseBy, isMaxCountReached, reset }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
      )
    }
</ProductCard>
```
