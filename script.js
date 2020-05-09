function showTime() {
    var date = new Date();
    var h = date.getHours(); //0=>23
    var m = date.getMinutes(); //0=>59
    var s = date.getSeconds(); //0=>59


    if (h == 0)
        h = 24;
    
    h = (h<10) ? "0" + h : h + "";
    
    m = (m<10) ? "0" + m : m + "";
    
    s = (s<10) ? "0" + s : s + "";
    
    console.log(h);
    console.log(m);
    console.log(s);
    var hour = document.getElementById("hour");
    console.log(hour);
    document.getElementById("hour").innerText = h;
    document.getElementById("min").innerText = m;
    document.getElementById("sec").innerText = s;

    setTimeout(showTime, 1000);
}

showTime();