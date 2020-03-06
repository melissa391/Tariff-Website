function dropdownOutput(){
  var dropdownOption = document.getElementById("dropdown");
  var option = dropdownOption.options[dropdownOption.selectedIndex].value;
  console.log(option);
  result(option)
}

function result(option){
  switch(option) {
    case 'eggs':
      // code block
      outputOnScreen('0%')
      break;
    case 'milk':
      // code block
      outputOnScreen('0%')
      break;
    case 'bacon':
      // code block
      outputOnScreen('0%')
      break;
    case 'bread':
        // code block
      outputOnScreen('0%')
      break;
    case 'butter':
        // code block
      outputOnScreen('0%')
      break;
    case 'strawberries':
        // code block
      outputOnScreen('0%')
      break;
    case 'potatoes':
        // code block
      outputOnScreen('0%')
      break;
    case 'lamb':
        // code block
      outputOnScreen('0%')
      break;
    case 'salmon':
        // code block
      outputOnScreen('0%')
      break;
    default:
      // code block
      console.log('unexpected')
  }


}
// This function outputs the different options to the screen
function outputOnScreen(output){
    //string interpolation
    // let numb = 2
    // console.log('I have ' + numb + 'cats');
    // console.log(`I have ${numb} cats`)
    document.getElementById("result").innerHTML = `The EU tariff is ${output}`;
}
