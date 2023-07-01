const inputBox = document.getElementById('inputList');
const submitButton = document.getElementById('submitButton');
const ulList = document.getElementById('ulList');
const stringArray = [];

function addList(){
    const stringValue = inputBox.value;
    stringArray.push(stringValue);
    displayList();
    inputBox.value="";
}
function deleteList(index){
    stringArray.splice(index,1);
    displayList();
}
function displayList(){
    ulList.innerHTML = "";
    stringArray.forEach((value,index) => {
        const liItem = document.createElement('li');
        liItem.innerHTML=value;
        const delBtn = document.createElement('button');
        delBtn.innerHTML= 'delete';
        ulList.appendChild(liItem);
        ulList.appendChild(delBtn);
        
    delBtn.addEventListener('click', ()=> deleteList(index));
    })
}