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

  if((!validator.isEmpty(data.password))&&validator.isEmpty(data.confirmPassword)){
    errors.confirmPassword = 'กรุณายืนยันรหัสผ่าน'
  }
  else if (data.password != data.confirmPassword) {
    errors.confirmPassword = 'รหัสผ่านไม่ตรงกัน'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
