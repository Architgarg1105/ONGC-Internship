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
    var name1;
    var name2;
    var name3;
    var name4;
    var name5;
    var name6;
    var name7;
    var name8;
    var name9;
    var name10;
    var count=0;
    var seriesshow11=0;
    var seriesshow12=0;
    var seriesshow21=0;
    var seriesshow22=0;
    var seriesshow31=0;
    var seriesshow32=0;
    var seriesshow41=0;
    var seriesshow42=0;
    var seriesshow51=0;
    var seriesshow52=0;
    var emptylist=[];
    var obj;
function lasfilefunc()
{
    
    var numberList = document.getElementById("numberList");
    var tablebody = document.getElementById("tablebody");
    var firstfirst = document.getElementById("firstfirst");
    var firstsecond = document.getElementById("firstsecond");
    var secondfirst = document.getElementById("secondfirst");
    var secondsecond = document.getElementById("secondsecond");
    var thirdfirst = document.getElementById("thirdfirst");
    var thirdsecond = document.getElementById("thirdsecond");
    var fourthfirst = document.getElementById("fourthfirst");
    var fourthsecond = document.getElementById("fourthsecond");
    var fifthfirst = document.getElementById("fifthfirst");
    var fifthsecond = document.getElementById("fifthsecond");
    lasdata = new FormData($('#lasfile')[0]);
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
            obj=JSON.parse(data);
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
            var maxval=Math.round(arraydata.max());
            var minval=Math.round(arraydata.min());
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
                firstfirst.appendChild(ptag1);
                firstfirst.appendChild(span2);
                firstfirst.appendChild(span1);
                $("#firstfirst p, #firstfirst span").css('display', 'inline-block');
                $("#firstfirst p").css({'color': 'blue','font-weight': 'bold'});
                highc1(arraydata,str);
                count++;
            }
            else if(count==1)
            {
                firstsecond.appendChild(ptag1);
                firstsecond.appendChild(span2);
                firstsecond.appendChild(span1);
                $("#firstsecond p, #firstsecond span").css('display', 'inline-block');
                $("#firstsecond span").css({'font-weight': 'bold','color': 'black'});
                $("#firstsecond ").css({'color': 'red','font-weight': 'bold'});
                highc2(arraydata,str);
                count++;
            }
            else if(count==2)
            {
                secondfirst.appendChild(ptag1);
                secondfirst.appendChild(span2);
                secondfirst.appendChild(span1);
                $("#secondfirst p, #secondfirst span").css('display', 'inline-block');
                $("#secondfirst p").css({'color': 'blue','font-weight': 'bold'});
                highc3(arraydata,str);
                count++;
            }
            else if(count==3)
            {
                secondsecond.appendChild(ptag1);
                secondsecond.appendChild(span2);
                secondsecond.appendChild(span1);
                $("#secondsecond p, #secondsecond span").css('display', 'inline-block');
                $("#secondsecond span").css({'font-weight': 'bold','color': 'black'});
                $("#secondsecond ").css({'color': 'red','font-weight': 'bold'});
                highc4(arraydata,str);
                count++;
            }
            else if(count==4)
            {
                thirdfirst.appendChild(ptag1);
                thirdfirst.appendChild(span2);
                thirdfirst.appendChild(span1);
                $("#thirdfirst p, #thirdfirst span").css('display', 'inline-block');
                $("#thirdfirst p").css({'color': 'blue','font-weight': 'bold'});
                highc5(arraydata,str);
                count++;
            }
            else if(count==5)
            {
                thirdsecond.appendChild(ptag1);
                thirdsecond.appendChild(span2);
                thirdsecond.appendChild(span1);
                $("#thirdsecond p, #thirdsecond span").css('display', 'inline-block');
                $("#thirdsecond span").css({'font-weight': 'bold','color': 'black'});
                $("#thirdsecond ").css({'color': 'red','font-weight': 'bold'});
                highc6(arraydata,str);
                count++;
            }
            else if(count==6)
            {
                fourthfirst.appendChild(ptag1);
                fourthfirst.appendChild(span2);
                fourthfirst.appendChild(span1);
                $("#fourthfirst p, #fourthfirst span").css('display', 'inline-block');
                $("#fourthfirst p").css({'color': 'blue','font-weight': 'bold'});
                highc7(arraydata,str);
                count++;
            }
            else if(count==7)
            {
                fourthsecond.appendChild(ptag1);
                fourthsecond.appendChild(span2);
                fourthsecond.appendChild(span1);
                $("#fourthsecond p, #fourthsecond span").css('display', 'inline-block');
                $("#fourthsecond span").css({'font-weight': 'bold','color': 'black'});
                $("#fourthsecond ").css({'color': 'red','font-weight': 'bold'});
                highc8(arraydata,str);
                count++;
            }
            else if(count==8)
            {
                fifthfirst.appendChild(ptag1);
                fifthfirst.appendChild(span2);
                fifthfirst.appendChild(span1);
                $("#fifthfirst p, #fifthfirst span").css('display', 'inline-block');
                $("#fifthfirst p").css({'color': 'blue','font-weight': 'bold'});
                highc9(arraydata,str);
                count++;
            }
            else if(count==9)
            {
                fifthsecond.appendChild(ptag1);
                fifthsecond.appendChild(span2);
                fifthsecond.appendChild(span1);
                $("#fifthsecond p, #fifthsecond span").css('display', 'inline-block');
                $("#fifthsecond span").css({'font-weight': 'bold','color': 'black'});
                $("#fifthsecond ").css({'color': 'red','font-weight': 'bold'});
                highc10(arraydata,str);
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
function highc1(arraydata,str)
{
    h11=arraydata;
    name1=str;
}
function highc2(arraydata,str)
{
    h12=arraydata;
    name2=str;
}
function highc3(arraydata,str)
{
    h21=arraydata;
    name3=str;
}
function highc4(arraydata,str)
{
    h22=arraydata;
    name4=str;
}
function highc5(arraydata,str)
{
    h31=arraydata;
    name5=str;
}
function highc6(arraydata,str)
{
    h32=arraydata;
    name6=str;
}
function highc7(arraydata,str)
{
    h41=arraydata;
    name7=str;
}
function highc8(arraydata,str)
{
    h42=arraydata;
    name8=str;
}
function highc9(arraydata,str)
{
    h51=arraydata;
    name9=str;
}
function highc10(arraydata,str)
{
    h52=arraydata;
    name10=str;
}
function _display(obj)
{
    Highcharts.chart('container', {
        chart: {
            zoomType: 'x',
            plotBackgroundColor:'#fff',
            // marginLeft: 150,
            inverted: true,
        },
        tooltip: {

            formatter: function() {
                return '<b>'+'Depth:' +'</b>'+ this.x + '</b><br/>' +
                    '<b>'+this.series.name +'</b>'+ ': ' + this.y + '<br/>';
            },
            positioner: function(labelWidth, labelHeight, point) {
                var tooltipX = point.plotX + 20;
                var tooltipY = point.plotY - 30;
                return {
                    x: tooltipX,
                    y: tooltipY
                };
            }
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
            name: name1,
            showInLegend:false,
            yAxis: 0,
            data: seriesshow11==0 ? h11 : emptylist,
            
        }, {
            name: name2,
            showInLegend:false,
            yAxis: 1,
            color: 'red',
            data: seriesshow12==0 ? h12 : emptylist,
    
        }]
    });
    Highcharts.chart('container2', {
        chart: {
            // marginLeft: 150,
            zoomType: 'x',
            inverted: true,
        },
        tooltip: {

            formatter: function() {
                return '<b>'+'Depth:' +'</b>'+ this.x + '</b><br/>' +
                    '<b>'+this.series.name +'</b>'+ ': ' + this.y + '<br/>';
            },
            positioner: function(labelWidth, labelHeight, point) {
                var tooltipX = point.plotX + 20;
                var tooltipY = point.plotY - 30;
                return {
                    x: tooltipX,
                    y: tooltipY
                };
            }
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
            name: name3,
            showInLegend:false,
            yAxis: 0,
            data: seriesshow21==0 ? h21 : emptylist,
        }, {
            name: name4,
            showInLegend:false,
            yAxis: 1,
            color: 'red',
            data: seriesshow22==0 ? h22 : emptylist,
    
        }]
    });
    Highcharts.chart('container3', {
        chart: {
            // marginLeft: 150,
            zoomType: 'x',
            inverted: true,
        },
        tooltip: {

            formatter: function() {
                return '<b>'+'Depth:' +'</b>'+ this.x + '</b><br/>' +
                    '<b>'+this.series.name +'</b>'+ ': ' + this.y + '<br/>';
            },
            positioner: function(labelWidth, labelHeight, point) {
                var tooltipX = point.plotX + 20;
                var tooltipY = point.plotY - 30;
                return {
                    x: tooltipX,
                    y: tooltipY
                };
            }
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
            name: name5,
            showInLegend:false,
            yAxis: 0,
            data: seriesshow31==0 ? h31 : emptylist,
        }, {
            name: name6,
            showInLegend:false,
            yAxis: 1,
            color: 'red',
            data: seriesshow32==0 ? h32 : emptylist,
    
        }]
    
    });
    Highcharts.chart('container4', {
        chart: {
            // marginLeft: 150,
            zoomType: 'x',
            inverted: true,
        },
        tooltip: {

            formatter: function() {
                return '<b>'+'Depth:' +'</b>'+ this.x + '</b><br/>' +
                    '<b>'+this.series.name +'</b>'+ ': ' + this.y + '<br/>';
            },
            positioner: function(labelWidth, labelHeight, point) {
                var tooltipX = point.plotX + 20;
                var tooltipY = point.plotY - 30;
                return {
                    x: tooltipX,
                    y: tooltipY
                };
            }
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
            name: name7,
            showInLegend:false,
            yAxis: 0,
            data: seriesshow41==0 ? h41 : emptylist,
        }, {
            name: name8,
            showInLegend:false,
            yAxis: 1,
            color: 'red',
            data: seriesshow42==0 ? h42 : emptylist,
    
        }]
    
    });
    Highcharts.chart('container5', {
        chart: {
            // marginLeft: 150,
            zoomType: 'x',
            inverted: true,
        },
        tooltip: {

            formatter: function() {
                return '<b>'+'Depth:' +'</b>'+ this.x + '</b><br/>' +
                    '<b>'+this.series.name +'</b>'+ ': ' + this.y + '<br/>';
            },
            positioner: function(labelWidth, labelHeight, point) {
                var tooltipX = point.plotX + 20;
                var tooltipY = point.plotY - 30;
                return {
                    x: tooltipX,
                    y: tooltipY
                };
            }
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
            name: name9,
            showInLegend:false,
            yAxis: 0,
            data: seriesshow51==0 ? h51 : emptylist,
        }, {
            name: name10,
            showInLegend:false,
            yAxis: 1,
            color: 'red',
            data: seriesshow52==0 ? h52 : emptylist,
    
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
    $('.center').show('slow', function() {
      });
    $('.upperheading').show('slow', function() {
      });
    $('.lowerheading').show('slow', function() {
      });
    $('.tree').show('slow', function() {
    });
    $('.lasdata').show('slow', function() {
    });
      
}
function clearhtml()
{
    document.getElementById("container").innerHTML = "";
    document.getElementById("container2").innerHTML = "";
    document.getElementById("container3").innerHTML = "";
    document.getElementById("container4").innerHTML = "";
    document.getElementById("container5").innerHTML = "";
}
function firstfirstcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('firstfirstcheckbox').checked) {
        seriesshow11=0;
    }
    else
    {
        seriesshow11=1;
    }
    _display(obj);
}
function firstsecondcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('firstsecondcheckbox').checked) {
        seriesshow12=0;
    }
    else
    {
        seriesshow12=1;
    }
    _display(obj);
}

function secondfirstcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('secondfirstcheckbox').checked) {
        seriesshow21=0;
    }
    else
    {
        seriesshow21=1;
    }
    _display(obj);
}
function secondsecondcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('secondsecondcheckbox').checked) {
        seriesshow22=0;
    }
    else
    {
        seriesshow22=1;
    }
    _display(obj);
}


function thirdfirstcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('thirdfirstcheckbox').checked) {
        seriesshow31=0;
    }
    else
    {
        seriesshow31=1;
    }
    _display(obj);
}
function thirdsecondcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('thirdsecondcheckbox').checked) {
        seriesshow32=0;
    }
    else
    {
        seriesshow32=1;
    }
    _display(obj);
}

function fourthfirstcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('fourthfirstcheckbox').checked) {
        seriesshow41=0;
    }
    else
    {
        seriesshow41=1;
    }
    _display(obj);
}
function fourthsecondcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('fourthsecondcheckbox').checked) {
        seriesshow42=0;
    }
    else
    {
        seriesshow42=1;
    }
    _display(obj);
}

function fifthfirstcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('fifthfirstcheckbox').checked) {
        seriesshow51=0;
    }
    else
    {
        seriesshow51=1;
    }
    _display(obj);
}
function fifthsecondcheckboxfunc()
{
    clearhtml();
    if (document.getElementById('fifthsecondcheckbox').checked) {
        seriesshow52=0;
    }
    else
    {
        seriesshow52=1;
    }
    _display(obj);
}