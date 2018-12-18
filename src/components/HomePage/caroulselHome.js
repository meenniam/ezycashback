import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap'

class CaroulselHome extends Component{
  render(){
    return(
      <div>
        <Carousel slide>
          <Carousel.Item>
            <img width={1600} height={600} src="https://studiokaioti.com/wp-content/uploads/sites/4/2017/02/LEADER-3-1600x700.png" />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <video width="1550" height="660" controls >
              <source src="https://firebasestorage.googleapis.com/v0/b/cbsmartlife-ca1e5.appspot.com/o/Video%2F-%20%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7-%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%A5%E0%B8%81%E0%B9%81%E0%B8%95%E0%B9%89%E0%B8%A1%20CB%20%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87!!!%20-%20YouTube.MP4?alt=media&token=414315ee-9eba-4f91-8d35-b285c6d1ae9c" type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    )
  }
}

export default CaroulselHome
