var myData = ["apollo intensa emozione", "jetstream sc250", "aspid ifr", "mclaren", "porshe 718 boxter", "audi r8", "ferrari f50 spider", "maserati alfieri", "tvr chimaera", "lamborghini huracan", "koenigsegg jesko", "gta spano", "buggati chiron", "ariel atom"];

$(document).ready(function () {
    renderButton();
    function renderButton() {
        $("#allbuttons").empty();

        for (var index = 0; index < myData.length; index++) {
            console.log(myData);

            let newButton = $("<button>");
            newButton.addClass("itembutton");
            newButton.addClass("btn btn-succes");
            newButton.text(myData[index]);
            newButton.attr("data-name", myData[index]);
            $("#allbuttons").append(newButton);
        
        }
    }
});