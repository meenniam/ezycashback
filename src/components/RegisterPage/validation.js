import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
  var errors={}
  if(validator.isEmpty(data.fistName)){
    errors.fistName= "กรุณาใส่ชื่อ"
  }

  if(validator.isEmpty(data.lastName)){
    errors.lastName= "กรุณาใส่นามสกุล"
  }

  if(validator.isEmpty(data.idNumber)){
    errors.idNumber= "กรุณาใส่เลขบัตรประชาชน"
  }
  else if((data.idNumber.length <13) || (data.idNumber.length >13)) {
    errors.idNumber= "เลขบัตรประชาชนต้อง 13 หลัก"
  }

  if(validator.isEmpty(data.birthDate)){
    errors.birthDate= "กรุณาใส่วันเกิด"
  }

  if(validator.isEmpty(data.phoneNumber)){
    errors.phoneNumber= "กรุณาใส่เบอร์มือถือ"
  }

  else if((data.phoneNumber.length <10) || (data.phoneNumber.length >10)) {
    errors.phoneNumber= "เบอร์มือถือต้อง 10 หลัก"
  }

  if(validator.isEmpty(data.accountNumber)){
    errors.accountNumber= "กรุณาใส่เลขบัญชี"
  }
  else if(((data.accountNumber.length <10))){
    errors.accountNumber= "เลขบัญชีต้อง 10 หรือ 13 หลัก"
  }
  else if (((data.accountNumber.length ===11) || (data.accountNumber.length ===12))) {
    errors.accountNumber= "เลขบัญชีต้อง 10 หรือ 13 หลัก"
  }
  else if(((data.accountNumber.length >13))){
    errors.accountNumber= "เลขบัญชีต้อง 10 หรือ 13 หลัก"
  }

  if(validator.isEmpty(data.address)){
    errors.address= "กรุณาใสที่อยู่"
  }


  if(validator.isEmpty(data.tumbol)){
    errors.tumbol= "กรุณาใส่ตำบล"
  }

  if(validator.isEmpty(data.amper)){
    errors.amper= "กรุณาใส่อำเภอ"
  }

  if(validator.isEmpty(data.jangwad)){
    errors.jangwad= "กรุณาใส่จังหวัด"
  }

  if(validator.isEmpty(data.postNumber)){
    errors.postNumber= "กรุณาใส่รหัรหัสไปรษณีย์"
  }

  else if((data.postNumber.length <5) || (data.postNumber.length >5)) {
    errors.postNumber= "รหัสไปรษณีย์ต้อง 5 หลัก"
  }



  return {
    errors,
    isValid: isEmpty(errors)
  }
}
