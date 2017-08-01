function ajax(a, b, c) {
    c = new XMLHttpRequest;
    c.open('GET', a);
    c.onload = b;
    c.send()
}
var start;

function measure(handleData) {
    start = window.performance.now();
    ajax('https://www.cuby-hebergs.com/dl/speed/text10.jpg', function() {
        handleData(Delay = window.performance.now() - start);
    });
}
measure(function(output) {
    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }
    var d = new Date;
    var time1 = d.getTime();
    var url = "https://www.cuby-hebergs.com/dl/speed/text10.jpg?s=" + time1;
    $.get(url, function(data, textStatus) {
        var d1 = new Date;
        var time = Math.round((d.getTime() - time1) / 10) / 100;
        var cost = d1.getTime() - time1;
        if (Delay < 1000) {
            var speed = Math.round((data.length * 1000) / (cost - (Math.round(Delay + 7))));
        } else {
            var speed = Math.round((data.length * 1000) / (cost - (Math.round(+7.00))));
        }
        var pageDivs = $("#speedtest").html(roundToTwo(speed / 1024 / 1024) + " Mo/s " + "(" + roundToTwo(roundToTwo(speed / 1024 / 1024) * 8) + " Mb/s)");
    });
});
