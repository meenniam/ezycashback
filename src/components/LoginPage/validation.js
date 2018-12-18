import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
  var errors={}
  if(validator.isEmpty(data.username)){
    errors.username= "กรุณาใส่ username"
  }

  if(validator.isEmpty(data.password)){
    errors.password= "กรุณาใส่รหัสผ่าน"
  }
  else if (data.password.length < 4 ) {
    errors.password= "รหัสผ่านต้อง 4 ตัวขึ้นไป"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
