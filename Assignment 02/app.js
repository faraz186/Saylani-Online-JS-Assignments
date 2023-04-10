//  ******************Task # 01********************

function ConcactNumber(val1) {
    return function(x) {
      return x + val1;
    }
  }
  
const result = ConcactNumber(5);
  
console.log(result(25));


//  ******************Task # 02********************


function SearchingValue(arr, value) 
{
    if (arr.length === 0) 
    {
      return false;
    } 
    
    else if (arr[0] === value) 
    {
      return true;
    }
    
    else 
    {
      return SearchingValue(arr.slice(1), value);
    }
  }

//   const arr = []; When we take emypty array that's mean the searching value is zero.

  const Arr = [22,78,109,47,33,71,17,3,0,1];

  console.log(SearchingValue(Arr, 3));

  console.log(SearchingValue(Arr, 100)); 
  

//  ******************Task # 03********************

function addPara(text) 
{
    let paragraph = document.createElement('p');
 
    paragraph.innerHTML = text;
    paragraph.style.fontSize = "39px";
    paragraph.style.backgroundColor = "#000000";
    paragraph.style.color = "white";
    paragraph.style.textAlign = "center";

    const getPara = document.getElementById("para");
    
    getPara.appendChild(paragraph);

}
  
addPara('Welcome to the Saylani Online JS Class..');
  

//  ******************Task # 04********************


function addListItem(items) 
{
    const listItem = document.createElement('li');

    listItem.innerHTML = items;
    
    const list = document.getElementById('ListItems');
    
    list.appendChild(listItem);
}
  
addListItem('Apple');


//  ******************Task # 05********************

  
function changeBackgroundColor(element, color) 
{
    element.style.backgroundColor = color;
}
  

let myElement = document.getElementById('bgColor');

changeBackgroundColor(myElement, 'blue');
  


//  ******************Task # 06********************
  

function SaveObject(key, obj) 
{
    const CovertIntoJson = JSON.stringify(obj);
    
    localStorage.setItem(key, CovertIntoJson);
}
  
const UserObject1 = { 
    name: 'Mohammad Faraz', 
    age: 22 
};

SaveObject('User-object', UserObject1);
  


//  ******************Task # 07********************


function getObjectFromLocalStorage(key) 
{
    const json = localStorage.getItem(key);
    
    return JSON.parse(json);
  }

const UserObject2 = getObjectFromLocalStorage('User-object');

console.log(UserObject2);
  

//  ******************Task # 08********************


function saveObjectPropertiesToLocalStorage(getObj) 
{
    for (let properites in getObj) 
    {

      const value = getObj[properites];

    //   console.log(value);

      localStorage.setItem(properites, JSON.stringify(value));
    }
    
    const newUserObject = {

    };
    
    for (let i = 0; i < localStorage.length; i++) 
    {

      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      
      newUserObject[key] = JSON.parse(value);
    }
    
    return newUserObject;
}
  
const myObject = [{ 
    name: 'John', 
    age: 30 
},
{ 
    name: 'Junaid Ansari', 
    age: 49 
}];

  const savedObject = saveObjectPropertiesToLocalStorage(myObject[1]);
  
  console.log(savedObject);

  