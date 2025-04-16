const input = document.getElementById('input')

function appendButton(value){
    input.value = input.value + value
}

function clearButton(){
    input.value = " "
}

function deleteButton(){
    input.value = input.value.toString().slice(0 , -1)
}

function showResult(){
    try{
        input.value = eval(input.value)
    }
    catch{
        input.value = "error"
    }
}