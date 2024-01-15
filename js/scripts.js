var luasPersegi         = document.getElementById("luas-persegi");
var sideSquareLuas      = document.getElementById("square-side-luas");
var resultLuas          = document.getElementById("hasil-luas");
var btnHitungLuas       = document.getElementById("hitung-luas");
var btnResetLuas        = document.getElementById("reset-luas");
var alertErrorLuas      = document.getElementById("alert-error-luas");


var kelilingPersegi     = document.getElementById("keliling-persegi");
var sideSquareKeliling  = document.getElementById("square-side-keliling");
var resultKeliling      = document.getElementById("hasil-keliling");
var btnHitungKeliling   = document.getElementById("hitung-keliling");
var btnResetKeliling    = document.getElementById("reset-keliling");
var alertErrorKeliling  = document.getElementById("alert-error-keliling");

/**
 * Function to show luas-persegi section and reset keliling section
 */
function showLuas() {
    luasPersegi.style.display = "block";
    kelilingPersegi.style.display = "none";
    resetAll('keliling');
}

/**
 * Function to show keliling-persegi section and reset luas section
 */
function showKeliling() {
    luasPersegi.style.display = "none";
    kelilingPersegi.style.display = "block";
    resetAll('luas');
}

/**
 * Function to validate sisi based on the specified type.
 * @param {string} type - Type of calculation: 'keliling' | 'luas'
 * @returns {boolean}
 */
function validateSisi(type){
    if(type == 'luas'){
        if(sideSquareLuas.value == ''){
            alertErrorLuas.innerHTML = 'Masukan sisi terlebih dahulu';
            return false;
        }
    }else{
        if(sideSquareKeliling.value == ''){
            alertErrorKeliling.innerHTML = 'Masukan sisi terlebih dahulu';
            return false;
        }
    }

    return true;
}

/**
 * Function to show result of calculation based on type
 * @param {string} type 
 */
function showResult(type, result){
    if(type == 'luas'){
        resultLuas.innerHTML = result;
    }else{
        resultKeliling.innerHTML = result;
    }
}

/**
 * Function to reset input, alert, result based on type
 * @param {string} type 
 */
function resetAll(type){
    if(type == 'luas'){
        sideSquareLuas.value = '';
        showResult('luas', '');
        alertErrorLuas.innerHTML = '';
    }else{
        sideSquareKeliling.value = '';
        showResult('keliling', '');
        alertErrorKeliling.innerHTML = '';
    }
}

/**
 * function to calculate luas or keliling
 * @param {string} type 
 * @returns {float}
 */
function calculate(type){
    if(type == 'luas'){
        let sisi = sideSquareLuas.value;
        return parseFloat(sisi) * parseFloat(sisi);
    }else{
        let sisi = sideSquareKeliling.value;
        return 4 * parseFloat(sisi);
    }
}


btnHitungLuas.addEventListener("click", function(){
    let isValidSisi  = validateSisi('luas');
    if(isValidSisi){
        alertErrorLuas.innerHTML = '';
        let result = calculate('luas');
        showResult('luas', result)
    }
});

btnResetLuas.addEventListener("click", function(){
    resetAll('luas');
});

btnHitungKeliling.addEventListener("click", function(){
    let isValidSisi  = validateSisi('keliling');
    if(isValidSisi ){
        alertErrorKeliling.innerHTML = '';
        let result = calculate('keliling');
        showResult('keliling', result)
    }
});

btnResetKeliling.addEventListener("click", function(){
    resetAll('keliling');
});
