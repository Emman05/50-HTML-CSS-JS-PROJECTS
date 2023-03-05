const countersEl = document.querySelectorAll(".counter")

countersEl.forEach((counterEl) => {
    counterEl.innerText = "0";

    function incrementCounter() {
        let currentNum = +counterEl.innerText;
        const dataCiel = counterEl.getAttribute("data-ceil");
        const increment = dataCiel / 15
        currentNum = Math.ceil (currentNum + increment)
        if(currentNum < dataCiel){
            counterEl.innerText = currentNum
            setTimeout(incrementCounter,50)
        }else{
            counterEl.innerText = dataCiel
        } 
    }
});