import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

const HooksIceCreamContainer = () => {
    const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of iceCream - {numOfIceCream} </h2>
        <button onClick={() => dispatch(buyIceCream())}>buy ice cream</button>
    </div>
  )
}

export default HooksIceCreamContainer;