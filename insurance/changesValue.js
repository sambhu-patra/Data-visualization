function noOfPolicyWithIncreaseDecrease (jsonData){
    var result = jsonData.map(function(element) {
        if (element.tiv_2011>element.tiv_2012){
            var obj = Object.assign({}, element);
            obj.value = 'Decrease';
            return obj;
        }else if (element.tiv_2011==element.tiv_2012){
            var obj = Object.assign({}, element);
            obj.value = 'No Change';
            return obj;
        }
        else{
            var obj = Object.assign({}, element);
            obj.value = 'Increase';
            return obj;
        }
            })
      let res = result;
      return final(res);  
}

function final (result){
    let finalResult = {};
    for (let i = 0;i<result.length;i++){
        let res1 = {}
        let policy = result.filter(a=>a.county==result[i].county)
    for (let val of policy){
        let con = val.value;
        if (res1[con]){
            res1[con] += 1;
        }
        else {
            res1[con] =1;
        }
    }
    finalResult[result[i].county] = res1;
    
}
return finalResult;
}
module.exports = noOfPolicyWithIncreaseDecrease;