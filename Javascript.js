


//deimal to binary function using bigint
function decimaltobinary(value){
    //let value = document.getElementById('Link').value
    let decimalToBinary = BigInt(value).toString(2)
   // alert("DecimalToBinary: " + decimalToBinary)
    console.log("DecimalToBinary: " + decimalToBinary)

    //only show the first 32 didgits of deimalToBinary value
    let binary32 = decimalToBinary.slice(0,31)
    //alert("Binary32: " + binary32)
    console.log("Binary32: " + binary32)

    return binary32

}

//funcation that gets a value from the user then calls the decimaltobinary function then converts it to denary
function binarytodecimal(){

    var el = document.createElement('a');
    el.href = document.getElementById('Link').value;
    //split the pathname from / to get the second level location
    var secondLevelLocation = el.pathname.split('/')[4];


    let value = secondLevelLocation

    //let value = document.getElementById('Link').value

    let decimamlToBinary = decimaltobinary(value)
    let Binary32ToDecimal = parseInt(`${decimamlToBinary}`, 2)
    //alert("32BinToDecimal: " + parseInt(`${decimamlToBinary}`, 2));
    //alert("32BinToDecimal: " + Binary32ToDecimal)
    console.log("32BinToDecimal: " + Binary32ToDecimal)
    console.log(timeConverter(Binary32ToDecimal))
    alert(timeConverter(Binary32ToDecimal))

}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
//console.log(timeConverter(0));








/* 
/**
 * @param {Number} value
 * @param {Number} [bitCount = 0]
 * 
 * @returns {String} binary representation of the two's complement of `value`.
 */
/*
function twosComplement(value, bitCount) {
    
    let binaryStr;
    
    if (value >= 0) {
      let twosComp = value.toString(2);
      binaryStr    = padAndChop(twosComp, '0', (bitCount || twosComp.length));
    } else {
      binaryStr = (Math.pow(2, bitCount) + value).toString(2);
      
      if (Number(binaryStr) < 0) {
        return undefined
      }
    }
    
    return `0b${binaryStr}`;
    //alert(`Binary: ${binaryStr}`);
    //console.log(`Binary: ${binaryStr}`);

  }
  
  
  /**
   * @param {String} str
   * @param {String} padChar
   * @param {Number} length
   */
  /*
  function padAndChop(str, padChar, length) {
    return (Array(length).fill(padChar).join('') + str).slice(length * -1);
  }
  

  function binarytodecimal(){
    let value = document.getElementById('Link').value

    let decimamlToBinary = twosComplement(value, 32)
    //let Binary32ToDecimal = parseInt(`${decimamlToBinary}`, 2)
   // alert("32BinToDecimal: " + parseInt(`${decimamlToBinary}`, 2)); 
    alert("32BinToDecimal: " + decimamlToBinary)

  }

  */