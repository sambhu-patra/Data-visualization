function differentConstruction (jsonData){
    let result = {};
    for (let i = 0;i<jsonData.length;i++){
        let res = {}
        let Construction = jsonData.filter(a=>a.county==jsonData[i].county)
        for (let val of Construction){
            let con = val.construction;
            if (res[con]){
                res[con] += 1;
            }
            else {
                res[con] =1;
            }
        }
        result[jsonData[i].county] = res;  
    }
    return result;
}
module.exports = differentConstruction;