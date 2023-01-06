import React from 'react'
import Card from './Card'
import gun from '../imgs/gun.png'
import accelator from '../imgs/accelator.png'
import glider from '../imgs/glider.png'
import pulsar from '../imgs/pulsar.png'
import ship from '../imgs/ship.png'
import lighthouse from '../imgs/lighthouse.png'


export default function Interesting() {
  return (
    <div>
        <h1>Interesting</h1>
        <div className="cards-block">
              <Card img={gun} text="Gun"/>
              <Card img={accelator} text="Accelator" />
              <Card img={glider} text="Glider" />
              <Card img={pulsar} text="Pulsar" />
              <Card img={ship} text="Ship" />
              <Card img={lighthouse} text="Lighthouse" />
        </div>
    </div>
  )
}
