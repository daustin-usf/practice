function process_form() {
    // get form object
    var fm = document.getElementById("my_form");
    // get output object
    var out = document.getElementById("display");
    // instantiate  object
    var dragon = new Dragon(fm);
    // output result
    out.innerHTML = dragon.sort();
}

function Dragon(fm) {
    // constructor
    this.input_feelings = fm.input_feelings.value;
    this.input_time = fm.input_time.value;
    this.input_favorite = fm.input_favorite.value;

    this.sort = function () {
        // sort result based on input
        if (this.input_feelings == 'yes' && this.input_time == 'lot' && this.input_favorite == 'yes') {
            return de1; // yes, lots of time, drogon
        } else if (this.input_feelings == 'yes' && this.input_time == 'lot' && this.input_favorite == 'smaug') {
            return de2; // yes, lots of time,  smaug
        } else if (this.input_feelings=='yes' && this.input_time == 'little' && this.input_favorite=='drogon') {
            return de3; // yes, just a little time, drogon
        } else if (this.input_feelings=='yes' && this.input_time == 'little' && this.input_favorite=='smaug') {
            return de4; // yes, just a little time, smaug
        } else if (this.input_feelings=='yes' && this.input_time == 'nowant' && this.input_favorite=='drogon') {
            return de5; // yes, absolutely no time, drogon
        } else if (this.input_feelings=='yes' && this.input_time == 'nowant' && this.input_favorite=='smaug') {
            return de6; // yes, absolutely no time, smaug
        } else if (this.input_feelings=='no' && this.input_time == 'lot' && this.input_favorite=='drogon') {
            return de7; // no, lots of time, drogon
        } else if (this.input_feelings=='no' && this.input_time == 'lot' && this.input_favorite=='smaug') {
            return de8; // no, lots of time, smaug
        } else if (this.input_feelings=='no' && this.input_time == 'little' && this.input_favorite=='drogon') {
            return de9; // no, just a little time, drogon
        } else if (this.input_feelings=='no' && this.input_time == 'little' && this.input_favorite=='smaug') {
            return de10; // no, just a little time, smaug
        } else if (this.input_feelings=='no' && this.input_time == 'nowant' && this.input_favorite=='drogon') {
            return de11; // no, absolutely no time, drogon
        } else if (this.input_feelings=='no' && this.input_time == 'nowant' && this.input_favorite=='smaug') {
            return de12; // no, absolutely no time, smaug
        }
    }
}

var d1 = {
    name: "Have fun riding your dragon! Drogon loves to give rides!",
    att: "Drogon is spirited, loyal, and brave",
    des: "He wants to protect and please you."
}
var d2 = {
    name: "Dragon2",
    att: "Attributes for Dragon2",
    des: "Tips about Dragon2 preference."
}
var d3 = {
    name: "Dragon3",
    att: "Attributes for Dragon3",
    des: "Tips about Dragon3 preference."
}
var d4 = {
    name: "Dragon4",
    att: "Attributes for Dragon4",
    des: "Tips about Dragon4 preference."
} 
var d5 = {
    name: "Dragon5",
    att: "Attributes for Dragon5",
    des: "Tips about Dragon5 preference."
}
var d6 = {
    name: "Dragon6",
    att: "Attributes for Dragon6",
    des: "Tips about Dragon5 preference."
 }
var d7 = {
    name: "Dragon7",
    att: "Attributes for Dragon6",
    des: "Tips about Dragon6 preference."
}
var d8 = {
    name: "Dragon8",
    att: "Attributes for Dragon8",
    des: "Tips about Dragon8 preference."
}
var d9 = {
    name: "Dragon9",
    att: "Attributes for Dragon9",
    des: "Tips about Dragon9 preference."
}
var d10 = {
    name: "Dragon10",
    att: "Attributes for Dragon10",
    des: "Tips about Dragon10 preference."
}
var d11 = {
    name: "Dragon11",
    att: "Attributes for Dragon10",
    des: "Tips about Dragon10 preference." 
} 
var d12 = {
    name: "Dragon12",
    att: "Attributes for Dragon10",
    des: "Tips about Dragon10 preference." 
}

var de1 = "Your match <b>" + d1.name + "</b> <br>" + d1.att + "<br>" + d1.des + ""
var de2 = "Your match <b>" + d2.name + "</b> <br>" + d2.att + "<br>" + d2.des + ""
var de3 = "Your match <b>" + d3.name + "</b> <br>" + d3.att + "<br>" + d3.des + ""
var de4 = "Your match <b>" + d4.name + "</b> <br>" + d4.att + "<br>" + d4.des + ""
var de5 = "Your match <b>" + d5.name + "</b> <br>" + d5.att + "<br>" + d5.des + ""
var de6 = "Your match <b>" + d6.name + "</b> <br>" + d6.att + "<br>" + d6.des + ""
var de7 = "Your match <b>" + d7.name + "</b> <br>" + d7.att + "<br>" + d7.des + ""
var de8 = "Your match <b>" + d8.name + "</b> <br>" + d8.att + "<br>" + d8.des + ""
var de9 = "Your match <b>" + d9.name + "</b> <br>" + d9.att + "<br>" + d9.des + ""
var de10 = "Your match <b>" + d10.name + "</b> <br>" + d10.att + "<br>" + d10.des + ""
var de11 = "Your match <b>" + d11.name + "</b> <br>" + d11.att + "<br>" + d11.des + ""
var de12 = "Your match <b>" + d12.name + "</b> <br>" + d12.att + "<br>" + d12.des + ""
