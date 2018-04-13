const inputTypesValid = {
    isEmailAddress:(str) =>{
        let pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return pattern.test(str)  // returns a boolean
    },
    isNumericData:(str) => {
      console.log('type ' ,typeof str);
      if (typeof str === 'number') return true
      return false
    },
    isNotEmpty: (str) =>{
        let pattern =/\S+/
        return pattern.test(str)  // returns a boolean
    },
    isNumber:(str) =>{
        let pattern = /^\d+$/
        return pattern.test(str)  // returns a boolean
    },
    isSame:(str1,str2) => {
        return str1 === str2
    }
}

const resValidetion = (res, wantedStat = 20 ) => {
  reg = RegExp('^'+ wantedStat)
  status = res.status
  pass = reg.test(status)

  return {pass, status}
}


module.exports = {
  resValidetion,
  inputTypesValid,
}
