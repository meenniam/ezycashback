import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
  var errors={}
  if(validator.isEmpty(data.userID)){
    errors.userID= "กรุณาใส่เลขบัตรประชาชน"
  }
  else if ((data.userID.length < 13)||(data.userID.length > 13)) {
    errors.userID= "เลขบัตรประชาชนต้อง 13 หลัก"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
