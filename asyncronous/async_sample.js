function syncCode() {
    var outputText = "";
    outputText += "Going to kitchen\n";
    outputText += "Put water to the kitchen\n";
    outputText += "Plug the kettle\n";
    outputText += "Water boils for 5 mins. I'm waiting till it's boiled.\n";
    outputText += "Water is boiled. Now i put suger and tea leaves to a cup\n";
    outputText += "Pour water into the cup and stir\n";
    document.getElementById('sync-output').innerText = outputText;
}

function asyncCode() {
    var outputText = "";
    outputText += "Going to kitchen\n";
    outputText += "Put water to the kitchen\n";
    outputText += "Plug the kettle\n";
    outputText += "Water will boils for 5 mins. I'll do some other stuff.\n";
    setTimeout(function(){
        outputText += "Water is boiled. Now i put suger and tea leaves to a cup\n";
        outputText += "Pour water into the cup and stir\n";
        document.getElementById('async-output').innerText = outputText;
    },5000)
    outputText += "Water is still boiling, untill then i put suar and tea leaves to a cup\n";
    document.getElementById('async-output').innerText = outputText;
    
}