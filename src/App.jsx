import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import github from './imgs/ghub.png'
import { paintPart } from './redux/mainSlice';
import Button from './components/Button';
import Interesting from './components/Interesting';

function App() {
  const filed = useSelector((state) => state.main.filed)
  const dispatch = useDispatch();
  
  const paint = (idxVer, idxHor) => {
    dispatch(paintPart([idxVer, idxHor]))
  }

  return (
    <div className='wrapper'>
      <h1>Life Game</h1>
    <div className='container'>
      {
        filed.map((elem, idxVer) => 
          elem.map((elem,idxHor) => 
            <div 
              key={[idxVer, idxHor]} 
              className= {`part ${elem === 'x' ? 'painted' : ''}`}
              onClick={() => paint(idxVer, idxHor)}
              ></div>          
          )
        )
      }
    </div>
    <Button/>
    <Interesting/>
    <div className="gh-block">
        <a href='https://github.com/Vas11a/life-game'><img src={github} alt="Git Hub" /></a>
    </div>
    </div>
  );
}

export default App;
