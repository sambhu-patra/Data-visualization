function noOfPolicies (county) {
    let object = {};
      for(let val of county){
        let County = val.county;
        if(object[County]){
          object[County] += 1;
        }else {
          object[County] = 1;
        }
      }
      return object
  }
  module.exports = noOfPolicies;