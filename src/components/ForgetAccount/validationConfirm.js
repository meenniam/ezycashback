import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
  var errors={}

  if(validator.isEmpty(data.phone)){
    errors.phone = 'กรุณากรอกเลขท้าย 4 หลัก'
  }
  else if ((data.phone.length < 4)||(data.phone.length > 4)) {
    errors.phone = 'กรอกเลขท้ายจำนวน 4 หลักเท่านั้น'
  }

  if(validator.isEmpty(data.password)){
    errors.password = 'กรุณากรอกรหัสผ่าน'
  }
  else if ((data.password.length < 4)) {
    errors.password = 'รหัสผ่านต้อง 4 ตัวขึ้นไป'
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
