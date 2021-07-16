// var filevalue=getElementById("lasfile").value;
var h11;
    var h12;
    var h21;
    var h22;
    var h31;
    var h32;
    var h41;
    var h42;
    var h51;
    var h52;
    var count=0;
function lasfilefunc()
{
    
    
    var numberList = document.getElementById("numberList");
    var tablebody = document.getElementById("tablebody");
    var firstgraph = document.getElementById("firstgraph");
    var secondgraph = document.getElementById("secondgraph");
    var thirdgraph = document.getElementById("thirdgraph");
    var fourthgraph = document.getElementById("fourthgraph");
    var fifthgraph = document.getElementById("fifthgraph");
    var lasdata = new FormData($('#lasfile')[0]);
    console.log(lasdata);
    console.log("hi");
    $.ajax({
        type: 'POST',
        data: lasdata,
        withCredentials:true,
        processData:false,
        url: 'http://127.0.0.1:5000/uploader',
        crossDomain:true,
        contentType:false,
        cache:false,
        success:function(data)
        {
            console.log("successful");
            // console.log(data);
            var obj=JSON.parse(data);
            // console.log(obj.data);
            traverse(obj.data);
            traverse1(obj.well);
            _display(obj);
        }
    });
    console.log("hello");
}
Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
function traverse(o) {
    for (var i in o) {
        if (!!o[i] && typeof(o[i])=="object") {
            var arraydata=o[i];
            var midspace= ':';
            var maxval=arraydata.max();
            var minval=arraydata.min();
            var minmaxval=String(minval)+'-'+String(maxval);
            var temp=i;
            var str=temp.toUpperCase()
            var ptag1 = document.createElement("p");
            var str1 = document.createTextNode(str);
            ptag1.appendChild(str1);
            var span1 = document.createElement("span");
            var spanvalue = document.createTextNode(minmaxval);
            span1.appendChild(spanvalue);
            var span2 = document.createElement("span");
            var spanvalue = document.createTextNode(midspace);
            span2.appendChild(spanvalue);
            console.log(ptag1);
            if(i=="dept")
            {
                continue;
            }
            if(count==0)
            {
                firstgraph.appendChild(ptag1);
                firstgraph.appendChild(span2);
                firstgraph.appendChild(span1);
              
                $("#firstgraph p, #firstgraph span").css('display', 'inline-block');
                $("#firstgraph p").css({'color': 'blue','font-weight': 'bold'});
                highc1(arraydata);
                count++;
            }
            else if(count==1)
            {
           
                firstgraph.appendChild(ptag1);
                firstgraph.appendChild(span2);
                firstgraph.appendChild(span1);
                $("#firstgraph p, #firstgraph span").css('display', 'inline-block');
                $("#firstgraph span").css({'font-weight': 'bold','color': 'black'});
                $("#firstgraph ").css({'color': 'red','font-weight': 'bold'});
                highc2(arraydata);
                count++;
            }
            else if(count==2)
            {
                secondgraph.appendChild(ptag1);
                secondgraph.appendChild(span2);
                secondgraph.appendChild(span1);
                $("#secondgraph p, #secondgraph span").css('display', 'inline-block');
                $("#secondgraph p").css({'color': 'blue','font-weight': 'bold'});
                highc3(arraydata);
                count++;
            }
            else if(count==3)
            {
                secondgraph.appendChild(ptag1);
                secondgraph.appendChild(span2);
                secondgraph.appendChild(span1);
                $("#secondgraph p, #secondgraph span").css('display', 'inline-block');
                $("#secondgraph span").css({'font-weight': 'bold','color': 'black'});
                $("#secondgraph ").css({'color': 'red','font-weight': 'bold'});
                highc4(arraydata);
                count++;
            }
            else if(count==4)
            {
                thirdgraph.appendChild(ptag1);
                thirdgraph.appendChild(span2);
                thirdgraph.appendChild(span1);
                $("#thirdgraph p, #thirdgraph span").css('display', 'inline-block');
                $("#thirdgraph p").css({'color': 'blue','font-weight': 'bold'});
                highc5(arraydata);
                count++;
            }
            else if(count==5)
            {
                thirdgraph.appendChild(ptag1);
                thirdgraph.appendChild(span2);
                thirdgraph.appendChild(span1);
                $("#thirdgraph p, #thirdgraph span").css('display', 'inline-block');
                $("#thirdgraph span").css({'font-weight': 'bold','color': 'black'});
                $("#thirdgraph ").css({'color': 'red','font-weight': 'bold'});
                highc6(arraydata);
                count++;
            }
            else if(count==6)
            {
                fourthgraph.appendChild(ptag1);
                fourthgraph.appendChild(span2);
                fourthgraph.appendChild(span1);
                $("#fourthgraph p, #fourthgraph span").css('display', 'inline-block');
                $("#fourthgraph p").css({'color': 'blue','font-weight': 'bold'});
                highc7(arraydata);
                count++;
            }
            else if(count==7)
            {
                fourthgraph.appendChild(ptag1);
                fourthgraph.appendChild(span2);
                fourthgraph.appendChild(span1);
                $("#fourthgraph p, #fourthgraph span").css('display', 'inline-block');
                $("#fourthgraph span").css({'font-weight': 'bold','color': 'black'});
                $("#fourthgraph ").css({'color': 'red','font-weight': 'bold'});
                highc8(arraydata);
                count++;
            }
            else if(count==8)
            {
                fifthgraph.appendChild(ptag1);
                fifthgraph.appendChild(span2);
                fifthgraph.appendChild(span1);
                $("#fifthgraph p, #fifthgraph span").css('display', 'inline-block');
                $("#fifthgraph p").css({'color': 'blue','font-weight': 'bold'});
                highc9(arraydata);
                count++;
            }
            else if(count==9)
            {
                fifthgraph.appendChild(ptag1);
                fifthgraph.appendChild(span2);
                fifthgraph.appendChild(span1);
                $("#fifthgraph p, #fifthgraph span").css('display', 'inline-block');
                $("#fifthgraph span").css({'font-weight': 'bold','color': 'black'});
                $("#fifthgraph ").css({'color': 'red','font-weight': 'bold'});
                highc10(arraydata);
                count++;
            }
            var newNumberListItem = document.createElement("li");
            var temp=i;
            // console.log(o[i]);
            var str=temp.toUpperCase()
            var numberListValue = document.createTextNode(str);
            newNumberListItem.appendChild(numberListValue);
            numberList.appendChild(newNumberListItem);
            traverse(i);
        } else {
            // console.log(i, o[i]);
        }
    }
}
function traverse1(o) {
    for (var i in o) {
        if (!!o[i] && typeof(o[i])=="object") {
            var newNumberListItem = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var spa = document.createElement("td");
            var temp=i;
            var str=temp.toUpperCase()
            var tempvalue=o[i].value;
            var temp1=" ";
            p1 = document.createTextNode(str);
            p2 = document.createTextNode(tempvalue);
            p3 = document.createTextNode(temp1);
            td1.appendChild(p1);
            spa.appendChild(p3);
            td2.appendChild(p2);
            newNumberListItem.appendChild(td1);
            newNumberListItem.appendChild(spa);
            newNumberListItem.appendChild(td2);
            tablebody.appendChild(newNumberListItem);
            traverse1(i);
        } else {
            // console.log(i, o[i]);

        }
    }
}
function highc1(arraydata)
{
    h11=arraydata;
}
function highc2(arraydata)
{
    h12=arraydata;
}
function highc3(arraydata)
{
    h21=arraydata;
}
function highc4(arraydata)
{
    h22=arraydata;
}
function highc5(arraydata)
{
    h31=arraydata;
}
function highc6(arraydata)
{
    h32=arraydata;
}
function highc7(arraydata)
{
    h41=arraydata;
}
function highc8(arraydata)
{
    h42=arraydata;
}
function highc9(arraydata)
{
    h51=arraydata;
}
function highc10(arraydata)
{
    h52=arraydata;
}
function _display(obj)
{
    // var strt=obj.well.STRT.value;
    // document.getElementById("strt").innerHTML=strt;
    // var stop=obj.well.STOP.value;
    // document.getElementById("stop").innerHTML=stop;
    // var step=obj.well.STEP.value;
    // document.getElementById("step").innerHTML=step;
    // var comp=obj.well.COMP.value;
    // document.getElementById("comp").innerHTML=comp;
    // var null1=obj.well.NULL.value;
    // document.getElementById("null1").innerHTML=null1;
    // var well=obj.well.WELL.value;
    // document.getElementById("well").innerHTML=well;
    // var fld=obj.well.FLD.value;
    // document.getElementById("fld").innerHTML=fld;
    // var loc=obj.well.LOC.value;
    // document.getElementById("loc").innerHTML=loc;
    // var srvc=obj.well.SRVC.value;
    // document.getElementById("srvc").innerHTML=srvc;
    // var ctry=obj.well.CTRY.value;
    // document.getElementById("ctry").innerHTML=ctry;
    // var stat=obj.well.STAT.value;
    // document.getElementById("stat").innerHTML=stat;
    // var cnty=obj.well.CNTY.value;
    // document.getElementById("cnty").innerHTML=cnty;
    // var date=obj.well.DATE.value;
    // document.getElementById("date").innerHTML=date;
    // var uwi=obj.well.UWI.value;
    // document.getElementById("uwi").innerHTML=uwi;

    Highcharts.chart('container', {
        chart: {
            // marginLeft: 150,
            inverted: true,
        },
        title: {
            text: ''
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'center',
            x: 100,
            y: -20,
            itemMarginBottom: 15,
            verticalAlign: 'top',
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        padding: 30,
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        xAxis: {
            
            minorTickInterval: 'auto',
            tickInterval: 20,
            categories: obj.data.dept,
            min: 0,
            max: 200,
            scrollbar: {
                enabled: true
            }
        },
    
        yAxis: [{
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            min: 20,
            max: 100,
            type: 'logarithmic',
            opposite: true,
        }, {
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            opposite: true,
        }],
        series: [{
            // name: 'GR',
            showInLegend:false,
            yAxis: 0,
                data: h11
            
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: h12,
    
        }]
    });
    Highcharts.chart('container2', {
        chart: {
            // marginLeft: 150,
            inverted: true,
        },
        title: {
            text: ''
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'center',
            x: 100,
            y: -20,
            itemMarginBottom: 15,
            verticalAlign: 'top',
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        padding: 30,
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            visible: true,
            minorTickInterval: 'auto',
            tickInterval: 20,
            categories: obj.data.dept,
            min: 0,
            max: 200,
            scrollbar: {
                enabled: true
            }
        },
    
        yAxis: [{
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            min: 20,
            max: 100,
            type: 'logarithmic',
            opposite: true,
        }, {
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            opposite: true,
        }],
        series: [{
            // name: 'GR',
            showInLegend:false,
            yAxis: 0,
            data: h21
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: h22,
    
        }]
    });
    Highcharts.chart('container3', {
        chart: {
            // marginLeft: 150,
            inverted: true,
        },
        title: {
            text: ''
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'center',
            x: 100,
            y: -20,
            itemMarginBottom: 15,
            verticalAlign: 'top',
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        padding: 30,
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            visible: true,
            minorTickInterval: 'auto',
            tickInterval: 20,
            categories: obj.data.dept,
            min: 0,
            max: 200,
            scrollbar: {
                enabled: true
            }
        },
    
        yAxis: [{
            // visible:false,
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            min: 20,
            max: 100,
            type: 'logarithmic',
            opposite: true,
        }, {
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            opposite: true,
        }],
        series: [{
            // name: 'GR',
            showInLegend:false,
            yAxis: 0,
            data: h31
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: h32,
    
        }]
    
    });
    Highcharts.chart('container4', {
        chart: {
            // marginLeft: 150,
            inverted: true,
        },
        title: {
            text: ''
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'center',
            x: 100,
            y: -20,
            itemMarginBottom: 15,
            verticalAlign: 'top',
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        padding: 30,
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            visible: true,
            minorTickInterval: 'auto',
            tickInterval: 20,
            categories: obj.data.dept,
            min: 0,
            max: 200,
            scrollbar: {
                enabled: true
            }
        },
    
        yAxis: [{
            // visible:false,
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            min: 20,
            max: 100,
            type: 'logarithmic',
            opposite: true,
        }, {
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            opposite: true,
        }],
        series: [{
            // name: 'GR',
            showInLegend:false,
            yAxis: 0,
            data: h41
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: h42,
    
        }]
    
    });
    Highcharts.chart('container5', {
        chart: {
            // marginLeft: 150,
            inverted: true,
        },
        title: {
            text: ''
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'center',
            x: 100,
            y: -20,
            itemMarginBottom: 15,
            verticalAlign: 'top',
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        padding: 30,
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            visible: true,
            minorTickInterval: 'auto',
            tickInterval: 20,
            categories: obj.data.dept,
            min: 0,
            max: 200,
            scrollbar: {
                enabled: true
            }
        },
    
        yAxis: [{
            // visible:false,
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            min: 20,
            max: 100,
            type: 'logarithmic',
            opposite: true,
        }, {
            labels: {
                enabled: false
            },
            minorTickInterval: 'auto',
            title: {
                text: ' '
            },
            opposite: true,
        }],
        series: [{
            // name: 'GR',
            showInLegend:false,
            yAxis: 0,
            data: h51
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: h52,
    
        }]
    
    });
    document.getElementById("myForm").style.display = "none";

    $('.firstgraph').css({
        'border-right': '1px solid black'
    });
    $('.secondgraph').css({
        'border-right': '1px solid black'
    });
    $('.thirdgraph').css({
        'border-right': '1px solid black'
    });
    $('.fourthgraph').css({
        'border-right': '1px solid black'
    });
    $('.fifthgraph').css({
        'border-right': '1px solid black'
    });
    $('.center').toggle('slow', function() {
      });
}
