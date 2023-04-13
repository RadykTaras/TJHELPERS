

const navLink = document.querySelectorAll(".nav_item");

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
    let current = document.querySelector(".active");
    current.className = current.className.replace(" active", "");
    this.className += " active";
    activePage(this);
  })
};

const homeBtn = document.querySelector(".home_button");

homeBtn.addEventListener("click", function (){
  let current = document.querySelector(".active"),
    newActive = document.querySelector(".courses_link");
  current.className = current.className.replace(" active", "");
  newActive.className += " active";
})

const activePage = (active_link) =>{
  let current = document.querySelectorAll(".page"),
    currentId = active_link.id;
  for(let i = 0; i < current.length; i++){
    if(!current[i].className.search(currentId)){
      current[i].style.display = "block";
    }
    else {
      current[i].style.display = "none";
    }
  } 
}

activePage(document.querySelector(".active"));

//table

const tableStorage = {
  table:[
    ['Historical','Ukranian history','Master degree','Full course'],
    ['Scientific','Match','Master degree','Full course'],
    ['Scientific','Match','Bachelor degree','Evening course'],
    ['Historical','General history','Bachelor degree','Full course'],
    ['Historical','General history','Master degree','Full course'],
    ['Scientific','Chemistry','Bachelor degree','Evening course'],
    ['Scientific','Chemistry','Master degree','Full course'],
    ['Humanitarian','General psychology','Master degree','Full course'],
    ['Humanitarian','Journalism','Bachelor degree','Full course'],
    ['Humanitarian','Social science','Bachelor degree','Full course'],
    ['Humanitarian','Advocacy','Master degree','Full course'],
    ['Humanitarian','Child psychology','Bachelor degree','Full course']
  ]
}

const imgSRC = (facultet) =>{
  return `./img/${facultet}.png`
}

const table = document.querySelector('.table');

const creatTable = (newTable) =>{
  for(key in newTable){
    for(let i=0; i<newTable[key].length; i++){
      let row = document.createElement('tr')
      row.className = 'table_row';
      row.innerHTML = `
      <td class="table_col"> <div class="facultet_col"> <img class="facultet_logo" src="${imgSRC(newTable[key][i][0])}" alt="cafedra logo"> ${newTable[key][i][0]} </div> </td>
      <td class="table_col">${newTable[key][i][1]}</td>
      <td class="table_col">${newTable[key][i][2]}</td>
      <td class="table_col">${newTable[key][i][3]}</td>
      `
      table.appendChild(row);
    }
  }
}

creatTable(tableStorage);

const rad = document.querySelectorAll(".courses_type");

for (var i = 0; i < rad.length; i++) {
  rad[i].addEventListener("click", function() {
    const rows = document.querySelectorAll(".table_row");
    clearTable(rows);
    checkRadio(this);
  })
}

const checkRadio = (input) =>{
  for(key in tableStorage){
    for(let j=0; j<tableStorage[key].length; j++){
      if(input != false){
        if(!input.id.search(`${tableStorage[key][j][2]}`) && checkSelector(tableStorage[key][j][0])){
          addFields(tableStorage[key][j]);
        }
      }
      else {
        if(checkSelector(tableStorage[key][j][0])){
          addFields(tableStorage[key][j])
        }
      }
    }
  }
}

const addFields = (field) =>{
  let row = document.createElement('tr')
  row.className = 'table_row';
  row.innerHTML = `
  <td class="table_col"> <div class="facultet_col"> <img class="facultet_logo" src="${imgSRC(field[0])}" alt="cafedra logo">${field[0]} </div></td>
  <td class="table_col">${field[1]}</td>
  <td class="table_col">${field[2]}</td>
  <td class="table_col">${field[3]}</td>
  `
  table.appendChild(row);
}

const clearTable = (rows) =>{
  for(key in tableStorage){
    for( let i=0; i<rows.length; i++){
      table.removeChild(document.querySelector('.table_row'));
    }
  }
}

const selector = document.querySelector(".selectorList");
selector.addEventListener('change', function(){
  let status = false;
  for (let i = 0; i < rad.length; i++) {
    
    if(rad[i].checked == true){
      const rows = document.querySelectorAll(".table_row");
      clearTable(rows);
      checkRadio(rad[i]);
      status = true;
    }
  }
  if(status == false){
    const rows = document.querySelectorAll(".table_row");
    clearTable(rows);
    checkRadio(status);
  }
})

const checkSelector = (row) =>{
  const selector = document.querySelector(".selectorList");
  if(!selector.value.search(`${row}`) || selector.value == "selectValue"){
    return true;
  }
}