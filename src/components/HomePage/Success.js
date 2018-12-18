import React,{Component} from 'react'
import './Success.css'
import {Carousel} from 'react-bootstrap'

class Success extends Component{
  render(){
    return(
      <div className="successParallax">
        <div className="carouselSuccess">
          <h1>347 success system</h1>
          <hr className="elearn"/>
          <Carousel slide>
            <Carousel.Item className="carouselItemSuccess">
              <img className="imgSuccess" width={100} height={100} src="http://www.bionic-power.com/wp-content/uploads/2016/09/company_george-400x400.png" />
              <Carousel.Caption>
                347 success system คือ ระบบสร้างรายได้ 180 วัน 1 ล้าน เพียงแค่เป็นสมาชิกกับเรา ฟรี ทำตามขั้นตอน ง่าย ๆ 3 ขั้นตอน คือ
                1. เรา ส่งเวบไซน์ให้เพื่อนที่เรารักหรือเพื่อนที่ต้องการมีรายได้ต่อเดือน 100,000 บาทขึ้นไป สามารถส่งได้ไม่จำกัด แต่เราต้องการเพียง 4 ท่านเท่านั้น ที่เข้าร่วมโครงการ กับเรา
                2. เมื่อทุกคนสมัครสมาชิกครบ 30 วัน ทุกคนเลือกซื้อสินค้าตามแพ็คเกจ ตามความต้องการ
                3. รับคอมมิสชั่น จากการซื้อสินค้าของสมาชิก โดยผ่านทางธนาคารที่ท่านได้แจ้งไว้
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItemSuccess">
              <img className="imgSuccess" width={100} height={100} src="http://www.bionic-power.com/wp-content/uploads/2016/09/company_george-400x400.png" />
              <Carousel.Caption>
                Your browser does not support HTML5 video.
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Success
