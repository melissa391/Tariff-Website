function dropdownOutput(){
  var dropdownOption = document.getElementById("dropdown");
  var option = dropdownOption.options[dropdownOption.selectedIndex].value;
  console.log(option);
  result(option)
}
// I chose to use a switch statement instead of if/ else because it is more efficient.
function result(option){
  switch(option) {
    case 'eggs':
      // code block
      outputOnScreen('7.7%')
      break;
    case 'milk':
      // code block
      outputOnScreen('79%')
      break;
    case 'bacon':
      // code block
      outputOnScreen('10%')
      break;
    case 'bread':
        // code block
      outputOnScreen('9.7%')
      break;
    case 'butter':
        // code block
      outputOnScreen('41%')
      break;
    case 'strawberries':
        // code block
      outputOnScreen('11.2% (1 Jan–30 Apr, 1 Aug–31 Dec) 12.8% (1 May–31 Jul)')
      break;
    case 'potatoes':
        // code block
      outputOnScreen('4.5%')
      break;
    case 'lamb':
        // code block
      outputOnScreen('12.85%')
      break;
    case 'salmon':
        // code block
      outputOnScreen('2%')
      break;
    default:
      // code block
      outputOnScreen.style.height = "0";
      console.log('unexpected')
  }


}
// This function outputs the different options to the screen
function outputOnScreen(output){
    //string interpolation
    // let numb = 2
    // console.log('I have ' + numb + 'cats');
    // console.log(`I have ${numb} cats`)
    document.getElementById("result").innerHTML = `The EU tariff will be ${output}`;
}
