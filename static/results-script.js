function choose(id) {
    buses = document.getElementsByClassName("bus");
    for (var i = 0; i < buses.length; i++) {
        var bus = buses.item(i);
        if (bus.id != id) {
            bus.style.display = "none";
        }
    }
    document.getElementById("back").style.display = "block";
    document.getElementById("confirm").style.display = "block";
}

function unchoose() {
    buses = document.getElementsByClassName("bus");
    for (var i = 0; i < buses.length; i++) {
        var bus = buses.item(i);
        bus.style.display = "flex";
    }
    document.getElementById("back").style.display = "none";
    document.getElementById("confirm").style.display = "none";
    document.getElementById("qr").style.display = "none";
}

function confirm() {
    document.getElementById("qr").style.display = "block";
}

document.getElementById("body").style.display = "block";