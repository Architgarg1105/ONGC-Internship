// var filevalue=getElementById("lasfile").value;
function lasfilefunc()
{
    x="hi";
    console.log("hi");
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
            console.log(obj.data);
            _display(obj);
        }
    });
    console.log("hello");
}
function _display(obj)
{
    var strt=obj.well.STRT.value;
    document.getElementById("strt").innerHTML=strt;
    var stop=obj.well.STOP.value;
    document.getElementById("stop").innerHTML=stop;
    var step=obj.well.STEP.value;
    document.getElementById("step").innerHTML=step;
    var comp=obj.well.COMP.value;
    document.getElementById("comp").innerHTML=comp;
    var null1=obj.well.NULL.value;
    document.getElementById("null1").innerHTML=null1;
    var well=obj.well.WELL.value;
    document.getElementById("well").innerHTML=well;
    var fld=obj.well.FLD.value;
    document.getElementById("fld").innerHTML=fld;
    var loc=obj.well.LOC.value;
    document.getElementById("loc").innerHTML=loc;
    var srvc=obj.well.SRVC.value;
    document.getElementById("srvc").innerHTML=srvc;
    var ctry=obj.well.CTRY.value;
    document.getElementById("ctry").innerHTML=ctry;
    var stat=obj.well.STAT.value;
    document.getElementById("stat").innerHTML=stat;
    var cnty=obj.well.CNTY.value;
    document.getElementById("cnty").innerHTML=cnty;
    var date=obj.well.DATE.value;
    document.getElementById("date").innerHTML=date;
    var uwi=obj.well.UWI.value;
    document.getElementById("uwi").innerHTML=uwi;

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
            data: obj.data.cali
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: obj.data.cond,
    
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
            data: obj.data.dfar
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: obj.data.dnear,
    
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
            data: obj.data.gamn
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: obj.data.neut,
    
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
            data: obj.data.pr
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: obj.data.sp,
    
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
            data: obj.data.neut
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: obj.data.pr,
    
        }]
    
    });
    document.getElementById("myForm").style.display = "none";
}
