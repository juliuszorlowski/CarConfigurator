function Box(id, photo, name, desc) {
    this.id = id;
    this.photo = photo;
    this.name = name;
    this.desc = desc;
}

let carBoxData = [];
carBoxData[0] = new Box("Rio", "img/miniatures/rio.png", "Rio", "Od 48 990 zł");
carBoxData[1] = new Box("Ceed", "img/miniatures/ceed.png", "Ceed", "Od 65 990 zł");
carBoxData[2] = new Box("CeedKombi", "img/miniatures/ceed_kombi.png", "Ceed Kombi", "Od 69 990 zł");
carBoxData[3] = new Box("Sportage", "img/miniatures/sportage.jpg", "Sportage", "Od 79 990 zł");
carBoxData[4] = new Box("Optima", "img/miniatures/optima.png", "Optima", "Od 91 990 zł");

let rio = new Auto("Rio", "M", "1.2 MPi 5 MT 84 KM", 48990);
let ceed = new Auto("Ceed", "S", "1.0 T-GDi 100 KM 6MT", 65990);
let ceedKombi = new Auto("Ceed Kombi", "S", "1.0 T-GDi 100 KM 6MT", 69990);
let sportage = new Auto("Sportage", "S", "1.6 GDi 6MT 2WD 132 KM", 79990);
let optima = new Auto("Optima", "M", "2.0 DOHC 6MT 163 KM", 91990);

function Trim(model, id, name, engineOptions) {
    this.model = model;
    this.id = id;
    this.name = name;
    this.engineOptions = engineOptions;
}

let rioTrimArray = [];
let ceedTrimArray = [];
let ceedKombiTrimArray = [];
let sportageTrimArray = [];
let optimaTrimArray = [];

rioTrimArray[0] = new Trim("Rio", "M", "M", [ [ "1.2 MPi 5 MT 84 KM", 48990 ], [ "1.0 T-GDi 5MT 100 KM", 54990 ], [ "1.0 T-GDi 6MT 120 KM", 55990 ] ] );
rioTrimArray[1] = new Trim("Rio", "L", "L", [ [ "1.2 MPi 5 MT 84 KM", 55990 ] , [ "1.0 T-GDi 5MT 100 KM", 60990 ], [ "1.0 T-GDi 6MT 120 KM", 62990 ], [ "1.0 T-GDi 7DCT 120 KM", 68990] ] );
rioTrimArray[2] = new Trim("Rio", "GT", "GT Line", [ [ "1.2 MPi 5 MT 84 KM", 64990 ] , [ "1.0 T-GDi 5MT 100 KM", 69990 ], [ "1.0 T-GDi 6MT 120 KM", 71990 ], [ "1.0 T-GDi 7DCT 120 KM", 77990 ] ] );
ceedTrimArray[0] = new Trim("Ceed", "S", "S", [ [ "1.0 T-GDi 100 KM 6MT", 65990 ], [ "1.0 T-GDi 120 KM 6MT", 67990 ], [ "1.4 T-GDi 140 KM 6MT", 72490 ], [ "1.6 CRDi SCR 115 KM 6MT", 77990 ] ] );
ceedTrimArray[1]= new Trim("Ceed", "M", "M", [ [ "1.0 T-GDi 100 KM 6MT", 73490 ], [ "1.0 T-GDi 120 KM 6MT", 75490 ], [ "1.4 T-GDi 140 KM 6MT", 79990 ], [ "1.6 CRDi SCR 115 KM 6MT", 85490 ], [ "1.4 T-GDi 140 KM 7DCT", 85990 ], [ "1.6 CRDi SCR 135 KM 6MT", 88490 ], [ "1.6 CRDi SCR 115 KM 7DCT", 91490 ], [ "1.6 CRDi SCR 135 KM 7DCT", 94490 ] ] );
ceedTrimArray[2] = new Trim("Ceed", "L", "L", [ [ "1.0 T-GDi 100 KM 6MT", 79990 ], [ "1.0 T-GDi 120 KM 6MT", 81990 ], [ "1.4 T-GDi 140 KM 6MT", 86490 ], [ "1.6 CRDi SCR 115 KM 6MT", 90990 ], [ "1.4 T-GDi 140 KM 7DCT", 92490 ], [ "1.6 CRDi SCR 135 KM 6MT", 93990 ], [ "1.6 CRDi SCR 115 KM 7DCT", 96990 ], [ "1.6 CRDi SCR 135 KM 7DCT", 99990 ] ] );
ceedTrimArray[3] = new Trim("Ceed", "BL", "Business Line", [ [ "1.0 T-GDi 100 KM 6MT", 85990 ], [ "1.0 T-GDi 120 KM 6MT", 87990 ], [ "1.4 T-GDi 140 KM 6MT", 92490 ], [ "1.6 CRDi SCR 115 KM 6MT", 96990 ], [ "1.4 T-GDi 140 KM 7DCT", 98490 ], [ "1.6 CRDi SCR 135 KM 6MT", 99990 ], [ "1.6 CRDi SCR 115 KM 7DCT", 102990 ], [ "1.6 CRDi SCR 135 KM 7DCT", 105990 ] ] );
ceedTrimArray[4] = new Trim("Ceed", "GTL", "GT Line", [ [ "1.0 T-GDi 120 KM 6MT", 97490 ], [ "1.4 T-GDi 140 KM 6MT", 101990 ], [ "1.6 CRDi SCR 115 KM 6MT", 106490 ], [ "1.4 T-GDi 140 KM 7DCT", 107990 ], [ "1.6 CRDi SCR 135 KM 6MT", 109490 ], [ "1.6 CRDi SCR 115 KM 7DCT", 112490 ], [ "1.6 CRDi SCR 135 KM 7DCT", 115490 ] ] );
ceedTrimArray[5] = new Trim("Ceed", "BLP", "Business Line Plus", [ [ "1.0 T-GDi 100 KM 6MT", 90990 ], [ "1.0 T-GDi 120 KM 6MT", 92990 ], [ "1.4 T-GDi 140 KM 6MT", 97490 ], [ "1.6 CRDi SCR 115 KM 6MT", 101990 ], [ "1.4 T-GDi 140 KM 7DCT", 103490 ], [ "1.6 CRDi SCR 135 KM 6MT", 104990 ], [ "1.6 CRDi SCR 115 KM 7DCT", 107990 ], [ "1.6 CRDi SCR 135 KM 7DCT", 110990 ] ] );
ceedKombiTrimArray[0] = new Trim("Ceed Kombi", "S", "S", [ [ "1.0 T-GDi 100 KM 6MT", 69990 ], [ "1.0 T-GDi 120 KM 6MT", 71990 ], [ "1.4 T-GDi 140 KM 6MT", 76490 ], [ "1.6 CRDi SCR 115 KM 6MT", 81990 ] ] );
ceedKombiTrimArray[1] = new Trim("Ceed Kombi", "M", "M", [ [ "1.0 T-GDi 100 KM 6MT", 77490 ], [ "1.0 T-GDi 120 KM 6MT", 79490 ], [ "1.4 T-GDi 140 KM 6MT", 83990 ], [ "1.6 CRDi SCR 115 KM 6MT", 89490 ], [ "1.4 T-GDi 140 KM 7DCT", 89990 ], [ "1.6 CRDi SCR 135 KM 6MT", 92490 ], [ "1.6 CRDi SCR 115 KM 7DCT", 95490 ], [ "1.6 CRDi SCR 135 KM 7DCT", 98490 ] ] );
ceedKombiTrimArray[2] = new Trim("Ceed Kombi", "L", "L", [ [ "1.0 T-GDi 100 KM 6MT", 84990 ], [ "1.0 T-GDi 120 KM 6MT", 86990 ], [ "1.4 T-GDi 140 KM 6MT", 91490 ], [ "1.6 CRDi SCR 115 KM 6MT", 95990 ], [ "1.4 T-GDi 140 KM 7DCT", 97490 ], [ "1.6 CRDi SCR 135 KM 6MT", 98990 ], [ "1.6 CRDi SCR 115 KM 7DCT", 101990 ], [ "1.6 CRDi SCR 135 KM 7DCT", 104990 ] ] );
ceedKombiTrimArray[3] = new Trim("Ceed Kombi", "GTL", "GT Line", [ [ "1.0 T-GDi 120 KM 6MT", 102490 ], [ "1.4 T-GDi 140 KM 6MT", 106990 ], [ "1.6 CRDi SCR 115 KM 6MT", 111490 ], [ "1.4 T-GDi 140 KM 7DCT", 112990 ], [ "1.6 CRDi SCR 135 KM 6MT", 114490 ], [ "1.6 CRDi SCR 115 KM 7DCT", 114990 ], [ "1.6 CRDi SCR 135 KM 7DCT", 120490 ] ] );
ceedKombiTrimArray[4] = new Trim("Ceed Kombi", "BL", "Business Line", [ [ "1.0 T-GDi 100 KM 6MT", 90990 ], [ "1.0 T-GDi 120 KM 6MT", 92990 ], [ "1.4 T-GDi 140 KM 6MT", 97490 ], [ "1.6 CRDi SCR 115 KM 6MT", 101990 ], [ "1.4 T-GDi 140 KM 7DCT", 103490 ], [ "1.6 CRDi SCR 135 KM 6MT", 104990 ], [ "1.6 CRDi SCR 115 KM 7DCT", 107990 ], [ "1.6 CRDi SCR 135 KM 7DCT", 110990 ] ] );
ceedKombiTrimArray[5] = new Trim("Ceed Kombi", "BLP", "Business Line Plus", [ [ "1.0 T-GDi 100 KM 6MT", 95990 ], [ "1.0 T-GDi 120 KM 6MT", 97990 ], [ "1.4 T-GDi 140 KM 6MT", 102490 ], [ "1.6 CRDi SCR 115 KM 6MT", 106990 ], [ "1.4 T-GDi 140 KM 7DCT", 108490 ], [ "1.6 CRDi SCR 135 KM 6MT", 109990 ], [ "1.6 CRDi SCR 115 KM 7DCT", 112990 ], [ "1.6 CRDi SCR 135 KM 7DCT", 115990 ] ] );
sportageTrimArray[0] = new Trim("Sportage", "S", "S", [ [ "1.6 GDi 6MT 2WD 132 KM", 79990 ] ]);
sportageTrimArray[1] = new Trim("Sportage", "M", "M", [ [ "1.6 GDi 6MT 2WD 132 KM", 85490 ], [ "1.6 T-GDi 6MT 2WD 177 KM", 94490 ], [ "1.6 T-GDi 140 KM 6MT", 98490 ], [ "1.6 T-GDi 7DCT 2WD 177 KM", 101490 ], [ "1.6 T-GDi 6MT 4WD 177 KM", 102490 ], [ "1.6 CRDi SCR 7DCT 2WD 136 KM", 107490 ], [ "1.6 CRDi SCR 6MT 4WD 136 KM", 108490 ], [ "1.6 T-GDi 7DCT 4WD 177 KM", 98490 ] ] );
sportageTrimArray[2] = new Trim("Sportage", "L", "L", [ [ "1.6 GDi 6MT 2WD 132 KM", 94490 ], [ "1.6 T-GDi 6MT 2WD 177 KM", 103490 ], [ "1.6 T-GDi 140 KM 6MT", 107490 ], [ "1.6 T-GDi 7DCT 2WD 177 KM", 110490 ], [ "1.6 T-GDi 6MT 4WD 177 KM", 111490 ], [ "1.6 CRDi SCR 7DCT 2WD 136 KM", 116490 ], [ "1.6 CRDi SCR 6MT 4WD 136 KM", 117490 ], [ "1.6 T-GDi 7DCT 4WD 177 KM", 118490 ], [ "1.6 CRDi SCR 7DCT 4WD 136 KM", 124490 ] ] );
sportageTrimArray[3] = new Trim("Sportage", "BL", "Business Line", [ [ "1.6 GDi 6MT 2WD 132 KM", 98490 ], [ "1.6 T-GDi 6MT 2WD 177 KM", 107490 ], [ "1.6 T-GDi 140 KM 6MT", 111490 ], [ "1.6 T-GDi 7DCT 2WD 177 KM", 114490 ], [ "1.6 T-GDi 6MT 4WD 177 KM", 115490 ], [ "1.6 CRDi SCR 7DCT 2WD 136 KM", 120490 ], [ "1.6 CRDi SCR 6MT 4WD 136 KM", 121490 ], [ "1.6 T-GDi 7DCT 4WD 177 KM", 122490 ], [ "1.6 CRDi SCR 7DCT 4WD 136 KM", 128490 ] ] );
sportageTrimArray[4] = new Trim("Sportage", "BLP", "Business Line Plus", [ [ "1.6 GDi 6MT 2WD 132 KM", 100490 ], [ "1.6 T-GDi 6MT 2WD 177 KM", 109490 ], [ "1.6 T-GDi 140 KM 6MT", 113490 ], [ "1.6 T-GDi 7DCT 2WD 177 KM", 116490 ], [ "1.6 T-GDi 6MT 4WD 177 KM", 117490 ], [ "1.6 CRDi SCR 7DCT 2WD 136 KM", 122490 ], [ "1.6 CRDi SCR 6MT 4WD 136 KM", 123490 ], [ "1.6 T-GDi 7DCT 4WD 177 KM", 124490 ], [ "1.6 CRDi SCR 7DCT 4WD 136 KM", 130490 ] ] );;
sportageTrimArray[5] = new Trim("Sportage", "GTL", "GT Line", [ [ "1.6 GDi 6MT 2WD 132 KM", 118490 ], [ "1.6 T-GDi 6MT 2WD 177 KM", 125490 ], [ "1.6 T-GDi 140 KM 6MT", 126490 ], [ "1.6 T-GDi 7DCT 2WD 177 KM", 131490 ], [ "1.6 T-GDi 6MT 4WD 177 KM", 132490 ], [ "1.6 CRDi SCR 7DCT 2WD 136 KM", 133490 ], [ "1.6 CRDi SCR 6MT 4WD 136 KM", 139490 ], [ "1.6 T-GDi 7DCT 4WD 177 KM", 144490 ], [ "1.6 CRDi SCR 7DCT 4WD 136 KM", 151490 ] ] );;
optimaTrimArray[0] = new Trim("Optima", "M", "M", [ [ "2.0 DOHC 6MT 163 KM", 91990 ], [ "1.6 T-GDi 180 KM 7DCT", 98990 ], [ "1.6 CRDi SCR 6MT 136 KM", 98990 ], [ "1.6 CRDi SCR 7DCT 2WD 136 KM", 105990 ]] );
optimaTrimArray[1] = new Trim("Optima", "L", "L", [ [ "2.0 DOHC 6MT 163 KM", 103990 ], [ "1.6 T-GDi 180 KM 7DCT", 110990 ], [ "1.6 CRDi SCR 6MT 136 KM", 110990 ], [ "1.6 CRDi SCR 7DCT 2WD 136 KM", 117990 ]] );
optimaTrimArray[2] = new Trim("Optima", "GTL", "GT Line", [ [ "1.6 T-GDi 180 KM 7DCT", 132990 ], [ "1.6 CRDi SCR 6MT 136 KM", 132990 ], [ "1.6 CRDi SCR 7DCT 2WD 136 KM", 139990 ]] );

// import carBoxData from "./carbox.js";

let buildCarBox = function(carBox) {

    let div = document.createElement('div');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');

    let body = document.querySelector(".interface");

    body.append(div);
    div.append(a);
    a.append(img);
    a.append(h4);
    a.append(p);

    h4.innerHTML = carBox.name;
    p.innerHTML = carBox.desc;
    img.setAttribute("src", carBox.photo);
    a.setAttribute("href", "#");
    a.setAttribute("class", carBox.id);
    div.setAttribute("class", "carBox");

};

carBoxData.forEach(carBox => buildCarBox(carBox));

// global table id variables
let tableId = 0;
let trNr = 0;
let modelChoice;

function Auto(model, trim, engine, horsepower, drive, transmission, totalprice) {
    this.model = model;
    this.trim = trim;
    this.engine = engine;
    this.totalprice = totalprice;
    this.createTrim = function(trimArray) {
        let getHeader = document.querySelector(".header");
        getHeader.innerHTML = "";
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = "";
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        getInterface.append(div1);
        getInterface.append(div2);
        getInterface.append(div3);
        getInterface.append(div4);
        div1.setAttribute("class", "steps");
        div2.setAttribute("class", "photo");
        div3.setAttribute("class", "options");
        div4.setAttribute("class", "summary");

        this.createHeader();
        // this.createSteps();
        this.createPhoto(trimArray[0]);
        let h3 = document.createElement('h3');
        let getOptions = document.querySelector(".options");
        getOptions.append(h3);
        h3.innerHTML = "Wybierz wersję";

        for (let i = 0; i < trimArray.length; i++) {
            this.createOptions(trimArray[i]);
        }
        createSummary(trimArray[0], 0);
        trimEventListener(trimArray);
    }
    this.createHeader = function() {
        let h2 = document.createElement('h2');
        let getHeader = document.querySelector(".header");
        getHeader.append(h2);
        h2.innerHTML = "KONFIGURATOR";
    }
    /*this.createSteps = function() {
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        let li4 = document.createElement('li');
        let li5 = document.createElement('li');
        let a1 = document.createElement('a');
        let a2 = document.createElement('a');
        let a3 = document.createElement('a');
        let a4 = document.createElement('a');
        let a5 = document.createElement('a');
        let getSteps = document.querySelector(".steps");
        getSteps.append(ul);
        ul.append(li1);
        ul.append(li2);
        ul.append(li3);
        ul.append(li4);
        ul.append(li5);
        li1.append(a1);
        li2.append(a2);
        li3.append(a3);
        li4.append(a4);
        li5.append(a5);
        a1.setAttribute("href", "#");
        a1.setAttribute("class", "active");
        a1.textContent = "Wersja";
        a2.setAttribute("href", "#");
        a2.textContent = "Styl";
        a3.setAttribute("href", "#");
        a3.textContent = "Opcje";
        a4.setAttribute("href", "#");
        a4.textContent = "Dodatki";
        a5.setAttribute("href", "#");
        a5.textContent = "Podsumowanie";
    }*/
    this.createPhoto = function(option) {
        let div = document.createElement('div');
        let button = document.createElement('button');
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        let getPhoto = document.querySelector(".photo");
        getPhoto.append(div);
        div.append(button);
        div.append(img1);
        div.append(img2);
        button.setAttribute("type", "button");
        button.setAttribute("class", "return");
        button.setAttribute("onclick", "location.reload()");
        button.textContent = "Powrót";
        img1.setAttribute("class", "logo");
        let loc1 = 'img/logos/' + option.model.toLowerCase() + '_logo.png';
        img1.setAttribute("src", loc1);
        img2.setAttribute("class", "big");
        let loc2 = 'img/images/' + option.model.toLowerCase() + '_front.png';
        img2.setAttribute("src", loc2);
    }
    this.createOptions = function(option) {
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let div = document.createElement('div');
        let getOptions = document.querySelector(".options");
        getOptions.append(h4);
        getOptions.append(p);
        getOptions.append(div);
        h4.innerHTML = option.name;
        p.innerHTML = "Wybierz silnik";
        div.setAttribute("class", option.id);
        this.createTable(option);
        modelChoice = option.model;
    }
    this.createTable = function(option) {
        let id = option.id;
        let getTrimTable = document.querySelector("." + id);
        let table = document.createElement('table');

        let array = option.engineOptions;
        let rows = array.length;
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');

            tr.appendChild( document.createElement('td') );
            tr.appendChild( document.createElement('td') );

            tr.cells[0].appendChild( document.createTextNode(array[i][0]) )
            tr.cells[1].appendChild( document.createTextNode(array[i][1] + ' zł') );

            table.appendChild(tr);
            let trId = 'tr' + trNr;
            tr.setAttribute("id", trId)
            trNr++;
        }  

        getTrimTable.appendChild(table);
        table.setAttribute("id", tableId);
        tableId++;
    }
}
function createSummary(trimArray, option) {
    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    let p1 = document.createElement('p1');
    let p2 = document.createElement('p2');
    let p3 = document.createElement('p3');

    let getSummary = document.querySelector(".summary");
    getSummary.innerHTML = "";
    getSummary.append(h3);
    getSummary.append(div);
    div.append(p1);
    div.append(p2);
    div.append(p3);

    h3.innerHTML = "Podsumowanie (Twoja konfiguracja)";
    div.setAttribute("class", "summaryTable")
    let array = [];
    array.push([ "Wersja: ", trimArray.name ])
    array.push([ "Silnik: ", trimArray.engineOptions[option][0] ]);
    array.push([ "Cena: ", trimArray.engineOptions[option][1] + ' zł' ]);
    createSummaryTable(array);
}
function createSummaryTable(array) {
    let getSummaryTable = document.querySelector(".summaryTable");
    let table = document.createElement('table');

    let rows = array.length;
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );

        tr.cells[0].appendChild( document.createTextNode(array[i][0]) )
        tr.cells[1].appendChild( document.createTextNode(array[i][1]) );

        table.appendChild(tr);
    }
    getSummaryTable.appendChild(table);
}

// CarBox Event Listeners
let clickRio = document.querySelector(".Rio");
clickRio.addEventListener("click", function() {
    rio.createTrim(rioTrimArray);
});
let clickCeed = document.querySelector(".Ceed");
clickCeed.addEventListener("click", function() {
    ceed.createTrim(ceedTrimArray);
});
let clickCeedKombi = document.querySelector(".CeedKombi");
clickCeedKombi.addEventListener("click", function() {
    ceedKombi.createTrim(ceedKombiTrimArray);
});
let clickSportage = document.querySelector(".Sportage");
clickSportage.addEventListener("click", function() {
    sportage.createTrim(sportageTrimArray);
});
let clickOptima = document.querySelector(".Optima");
clickOptima.addEventListener("click", function() {
    optima.createTrim(optimaTrimArray);
});

// Trim Event Listener
function trimEventListener(trimArray) {
    let defaultTrimOption = document.querySelector("#tr0");
    defaultTrimOption.setAttribute("class", "activeTr");
    switch (modelChoice) {
        case "Rio":
            // "M" trim
            listenRio(0, 0, 0);
            listenRio(0, 1, 1);
            listenRio(0, 2, 2);
            // "L" trim
            listenRio(1, 0, 3);
            listenRio(1, 1, 4);
            listenRio(1, 2, 5);
            listenRio(1, 3, 6);
            // "GTL" trim
            listenRio(2, 0, 7);
            listenRio(2, 1, 8);
            listenRio(2, 2, 9);
            listenRio(2, 3, 10);
        break;
        case "Ceed":
            // "S" trim
            listenCeed(0, 0, 0);
            listenCeed(0, 1, 1);
            listenCeed(0, 2, 2);
            listenCeed(0, 3, 3);
            // "M" trim
            listenCeed(1, 0, 4);
            listenCeed(1, 1, 5);
            listenCeed(1, 2, 6);
            listenCeed(1, 3, 7);
            listenCeed(1, 4, 8);
            listenCeed(1, 5, 9);
            listenCeed(1, 6, 10);
            listenCeed(1, 7, 11);
            // "L" trim
            listenCeed(2, 0, 12);
            listenCeed(2, 1, 13);
            listenCeed(2, 2, 14);
            listenCeed(2, 3, 15);
            listenCeed(2, 4, 16);
            listenCeed(2, 5, 17);
            listenCeed(2, 6, 18);
            listenCeed(2, 7, 19);
            // "BL" trim
            listenCeed(3, 0, 20);
            listenCeed(3, 1, 21);
            listenCeed(3, 2, 22);
            listenCeed(3, 3, 23);
            listenCeed(3, 4, 24);
            listenCeed(3, 5, 25);
            listenCeed(3, 6, 26);
            listenCeed(3, 7, 27);
            // "GTL" trim
            listenCeed(4, 0, 28);
            listenCeed(4, 1, 29);
            listenCeed(4, 2, 30);
            listenCeed(4, 3, 31);
            listenCeed(4, 4, 32);
            listenCeed(4, 5, 33);
            listenCeed(4, 6, 34);
            // "BLP" trim
            listenCeed(5, 0, 35);
            listenCeed(5, 1, 36);
            listenCeed(5, 2, 37);
            listenCeed(5, 3, 38);
            listenCeed(5, 4, 39);
            listenCeed(5, 5, 40);
            listenCeed(5, 6, 41);
            listenCeed(5, 7, 42);
        break;
        case "Ceed Kombi":
            // "S" trim
            listenCeedKombi(0, 0, 0);
            listenCeedKombi(0, 1, 1);
            listenCeedKombi(0, 2, 2);
            listenCeedKombi(0, 3, 3);
            // "M" trim
            listenCeedKombi(1, 0, 4);
            listenCeedKombi(1, 1, 5);
            listenCeedKombi(1, 2, 6);
            listenCeedKombi(1, 3, 7);
            listenCeedKombi(1, 4, 8);
            listenCeedKombi(1, 5, 9);
            listenCeedKombi(1, 6, 10);
            listenCeedKombi(1, 7, 11);
            // "L" trim
            listenCeedKombi(2, 0, 12);
            listenCeedKombi(2, 1, 13);
            listenCeedKombi(2, 2, 14);
            listenCeedKombi(2, 3, 15);
            listenCeedKombi(2, 4, 16);
            listenCeedKombi(2, 5, 17);
            listenCeedKombi(2, 6, 18);
            listenCeedKombi(2, 7, 19);
            // "BL" trim
            listenCeedKombi(3, 0, 20);
            listenCeedKombi(3, 1, 21);
            listenCeedKombi(3, 2, 22);
            listenCeedKombi(3, 3, 23);
            listenCeedKombi(3, 4, 24);
            listenCeedKombi(3, 5, 25);
            listenCeedKombi(3, 6, 26);
            listenCeedKombi(3, 7, 27);
            // "GTL" trim
            listenCeedKombi(4, 0, 28);
            listenCeedKombi(4, 1, 29);
            listenCeedKombi(4, 2, 30);
            listenCeedKombi(4, 3, 31);
            listenCeedKombi(4, 4, 32);
            listenCeedKombi(4, 5, 33);
            listenCeedKombi(4, 6, 34);
            // "BLP" trim
            listenCeedKombi(5, 0, 35);
            listenCeedKombi(5, 1, 36);
            listenCeedKombi(5, 2, 37);
            listenCeedKombi(5, 3, 38);
            listenCeedKombi(5, 4, 39);
            listenCeedKombi(5, 5, 40);
            listenCeedKombi(5, 6, 41);
            listenCeedKombi(5, 7, 42);
        break;
        case "Sportage":
            // "S" trim
            listenSportage(0, 0, 0);
            // "M" trim
            listenSportage(1, 0, 1);
            listenSportage(1, 1, 2);
            listenSportage(1, 2, 3);
            listenSportage(1, 3, 4);
            listenSportage(1, 4, 5);
            listenSportage(1, 5, 6);
            listenSportage(1, 6, 7);
            listenSportage(1, 7, 8);
            // "L" trim
            listenSportage(2, 0, 9);
            listenSportage(2, 1, 10);
            listenSportage(2, 2, 11);
            listenSportage(2, 3, 12);
            listenSportage(2, 4, 13);
            listenSportage(2, 5, 14);
            listenSportage(2, 6, 15);
            listenSportage(2, 7, 16);
            listenSportage(2, 8, 17);
            // "BL" trim
            listenSportage(3, 0, 18);
            listenSportage(3, 1, 19);
            listenSportage(3, 2, 20);
            listenSportage(3, 3, 21);
            listenSportage(3, 4, 22);
            listenSportage(3, 5, 23);
            listenSportage(3, 6, 24);
            listenSportage(3, 7, 25);
            listenSportage(3, 8, 26);
            // "BLP" trim
            listenSportage(4, 0, 27);
            listenSportage(4, 1, 28);
            listenSportage(4, 2, 29);
            listenSportage(4, 3, 30);
            listenSportage(4, 4, 31);
            listenSportage(4, 5, 32);
            listenSportage(4, 6, 33);
            listenSportage(4, 6, 34);
            listenSportage(4, 6, 35);
            // "GTL" trim
            listenSportage(5, 0, 36);
            listenSportage(5, 1, 37);
            listenSportage(5, 2, 38);
            listenSportage(5, 3, 39);
            listenSportage(5, 4, 40);
            listenSportage(5, 5, 41);
            listenSportage(5, 6, 42);
            listenSportage(5, 7, 43);
            listenSportage(5, 8, 44);
        break;
        case "Optima":
            // "M" trim
            listenOptima(0, 0, 0);
            listenOptima(0, 1, 1);
            listenOptima(0, 2, 2);
            listenOptima(0, 3, 3);
            // "M" trim
            listenOptima(1, 0, 4);
            listenOptima(1, 1, 5);
            listenOptima(1, 2, 6);
            listenOptima(1, 3, 7);
            // "GTL" trim
            listenOptima(2, 0, 8);
            listenOptima(2, 1, 9);
            listenOptima(2, 2, 10);
        break;
    }
}
function listenRio(tableNo, trNo, trId) {
    let trimOption = document.querySelector('#tr' + trId);
    trimOption.addEventListener("click", function() {
        let previousTrimOption = document.querySelector(".activeTr")
        previousTrimOption.setAttribute("class", "inactiveTr");
        trimOption.setAttribute("class", "activeTr");
        rio.trim = rioTrimArray[tableNo].name;
        rio.engine = rioTrimArray[tableNo].engineOptions[trNo][0];
        rio.totalprice = rioTrimArray[tableNo].engineOptions[trNo][1];
        createNewSummary();
    });
}
function listenCeed(tableNo, trNo, trId) {
    let trimOption = document.querySelector('#tr' + trId);
    trimOption.addEventListener("click", function() {
        let previousTrimOption = document.querySelector(".activeTr")
        previousTrimOption.setAttribute("class", "inactiveTr");
        trimOption.setAttribute("class", "activeTr");
        ceed.trim = ceedTrimArray[tableNo].name;
        ceed.engine = ceedTrimArray[tableNo].engineOptions[trNo][0];
        ceed.totalprice = ceedTrimArray[tableNo].engineOptions[trNo][1];
        createNewSummary();
    });
}
function listenCeedKombi(tableNo, trNo, trId) {
    let trimOption = document.querySelector('#tr' + trId);
    trimOption.addEventListener("click", function() {
        let previousTrimOption = document.querySelector(".activeTr")
        previousTrimOption.setAttribute("class", "inactiveTr");
        trimOption.setAttribute("class", "activeTr");
        ceedKombi.trim = ceedKombiTrimArray[tableNo].name;
        ceedKombi.engine = ceedKombiTrimArray[tableNo].engineOptions[trNo][0];
        ceedKombi.totalprice = ceedKombiTrimArray[tableNo].engineOptions[trNo][1];
        createNewSummary();
    });
}
function listenSportage(tableNo, trNo, trId) {
    let trimOption = document.querySelector('#tr' + trId);
    trimOption.addEventListener("click", function() {
        let previousTrimOption = document.querySelector(".activeTr")
        previousTrimOption.setAttribute("class", "inactiveTr");
        trimOption.setAttribute("class", "activeTr");
        sportage.trim = sportageTrimArray[tableNo].name;
        sportage.engine = sportageTrimArray[tableNo].engineOptions[trNo][0];
        sportage.totalprice = sportageTrimArray[tableNo].engineOptions[trNo][1];
        createNewSummary();
    });
}
function listenOptima(tableNo, trNo, trId) {
    let trimOption = document.querySelector('#tr' + trId);
    trimOption.addEventListener("click", function() {
        let previousTrimOption = document.querySelector(".activeTr")
        previousTrimOption.setAttribute("class", "inactiveTr");
        trimOption.setAttribute("class", "activeTr");
        optima.trim = optimaTrimArray[tableNo].name;
        optima.engine = optimaTrimArray[tableNo].engineOptions[trNo][0];
        optima.totalprice = optimaTrimArray[tableNo].engineOptions[trNo][1];
        createNewSummary();
    });
}
function createNewSummary() {
    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    let p1 = document.createElement('p1');
    let p2 = document.createElement('p2');
    let p3 = document.createElement('p3');

    let getSummary = document.querySelector(".summary");
    getSummary.innerHTML = "";
    getSummary.append(h3);
    getSummary.append(div);
    div.append(p1);
    div.append(p2);
    div.append(p3);

    h3.innerHTML = "Podsumowanie (Twoja konfiguracja)";
    div.setAttribute("class", "summaryTable")

    let array = [];
    switch (modelChoice) {
        case "Rio":
            array.push([ "Wersja: ", rio.trim ])
            array.push([ "Silnik: ", rio.engine ]);
            array.push([ "Cena: ", rio.totalprice + ' zł' ]);
        break;
        case "Ceed":
            array.push([ "Wersja: ", ceed.trim ])
            array.push([ "Silnik: ", ceed.engine ]);
            array.push([ "Cena: ", ceed.totalprice + ' zł' ]);
        break;
        case "Ceed Kombi":
            array.push([ "Wersja: ", ceedKombi.trim ])
            array.push([ "Silnik: ", ceedKombi.engine ]);
            array.push([ "Cena: ", ceedKombi.totalprice + ' zł' ]);
        break;
        case "Sportage":
            array.push([ "Wersja: ", sportage.trim ])
            array.push([ "Silnik: ", sportage.engine ]);
            array.push([ "Cena: ", sportage.totalprice + ' zł' ]);
        break;
        case "Optima":
            array.push([ "Wersja: ", optima.trim ])
            array.push([ "Silnik: ", optima.engine ]);
            array.push([ "Cena: ", optima.totalprice + ' zł' ]);
        break;
    }

    createSummaryTable(array);
}
