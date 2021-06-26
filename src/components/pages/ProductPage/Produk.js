import React from 'react';
import Product from '../../Product';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';

function Produk() {
  return (
    <>
      <Product {...homeObjOne} />
      <Product {...homeObjTwo} />
      <Product {...homeObjThree} />
      <Product {...homeObjFour} />
    </>
  );
}

export default Produk;