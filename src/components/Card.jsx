import React from 'react'
import { writeFigure } from '../redux/mainSlice';
import { useDispatch } from 'react-redux'

export default function Card({img, text}) {
    const dispatch = useDispatch();
    const paintFigure = () => {
        dispatch(writeFigure(text))
    }
  return (
      <div className="cart" onClick={paintFigure}>
          <div className="card-img">
              <img src={img} alt="cart-img" />
          </div>
          <div className="cart-text">
              {text}
          </div>
      </div>
  )
}
