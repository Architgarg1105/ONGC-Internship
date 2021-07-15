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
    Highcharts.chart('container', {
        chart: {
            marginLeft: 150,
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
            data: obj.data.cnpor
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: obj.data.dcal,
    
        }]
    });
    Highcharts.chart('container2', {
        chart: {
            marginLeft: 150,
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
            data: obj.data.dpor
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: obj.data.dt,
    
        }]
    });
    Highcharts.chart('container3', {
        chart: {
            marginLeft: 150,
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
            data: obj.data.gr
        }, {
            // name: 'SP',
            showInLegend:false,
            yAxis: 1,
            data: obj.data.itt,
    
        }]
    
    });
}
