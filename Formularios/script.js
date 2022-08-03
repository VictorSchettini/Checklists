
function displayRadioValue() {
    var ele = document.getElementsByName('Alarme Sonoro de Translação.');

        for(i = 0; i < ele.length; i++) {
            if (ele[0].checked) {
                document.getElementById("result").innerHTML
                            = "Normal";
            } else {
                document.getElementById("result").innerHTML
                            = "Urgente";
            }
}
}
