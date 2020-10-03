// const fetch = require('node-fetch');
function fetchData (){
  fetch("./output.json")
    .then(res=> res.json())
    .then((json)=>{
        let result = json;
        visualiZation(result.storeData)
    })
}
fetchData();

function visualiZation (object){
    let series = []; 
    for (let val in object){
        series.push([val,object[val]])
    }

    Highcharts.chart('noOfPolicies', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Calculate number\'s of county'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Verdana, sans-serif',
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'county'
            }
        },
        series: [{
            name: 'county',
            data: series
        }]
    });
}

// ---------------------------Changes Values with increase and decrease--------------------------------------------

function fetchChangesValueData (){
    fetch("./changesValue.json")
      .then(res=> res.json())
      .then((json)=>{
          let results = json;
          changesValueVisualize(results.noOfChangesValue);
      });
  }
fetchChangesValueData();

function changesValueVisualize(object){
    let increase = [];
    let decrease = [];
    let no_Change = [];
    let policy = [];

    for (let val in object){
        policy.push(val)
        increase.push(object[val]["Increase"]);
        decrease.push(object[val]["Decrease"]||"");
        no_Change.push(object[val]["No Change"]||"");
    }
    // console.log(no_Change)

    Highcharts.chart('increaseDecrease', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Calculate number of policies which has incresed or decreased in between tiv_2011 and tiv_2012'

        },
        xAxis: {
            categories: policy
        },
        yAxis: {
            min: 0,
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Increase',
            data: increase
        }, {
            name: 'Decrease',
            data: decrease
        }, {
            name: 'No Change',
            data: no_Change
        }]
    });
}

// ----------------------------Get construction----------------------------------------------------

function fetchConstructionData (){
    fetch("./construction.json")
      .then(res=> res.json())
      .then((json)=>{
          let result = json;
          constructionVisualize(result.noOfConstruction);
      });
  }
fetchConstructionData();

function constructionVisualize(object){
    let Masonry = [];
    let Wood = [];
    let ReinforcedConcrete = [];
    let ReinforcedMasonry = [];
    let SteelFrame = [];
    let policy = [];

    for (let val in object){
    policy.push(val)
    Masonry.push(object[val]["Masonry"]||"");
    Wood.push(object[val]["Wood"]);
    ReinforcedConcrete.push(object[val]["Reinforced Concrete"]||"");
    ReinforcedMasonry.push(object[val]["Reinforced Masonry"]||"");
    SteelFrame.push(object[val]["Steel Frame"]||"");
    }

    Highcharts.chart('construction', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked graph with  different construction'
        },
        xAxis: {
            categories: policy,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'policy'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Masonry',
            data: Masonry

        }, {
            name: 'Wood',
            data: Wood    
        }, {
            name: 'Reinforced Concrete',
            data: ReinforcedConcrete

        }, {
            name: 'Reinforced Masonry',
            data: ReinforcedMasonry

        },{
            name: 'Steel Frame',
            data: SteelFrame 
        }]
    });
}


            
