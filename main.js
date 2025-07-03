// エラーが出たら教えてくれるコード
'use strict';

const metersSelect = document.getElementById('lengeMeters');
const changeSelect = document.getElementById('lengeChangeMeters');
const button = document.getElementById('pushButton');

button.addEventListener('click', () => {

  const textValue = parseFloat(document.getElementById('intejerText').value);
  const metersValue = parseFloat(metersSelect.value)
  const changeValue = parseFloat(changeSelect.value)

const result = textValue * metersValue / changeValue
console.log('変換結果:', result);


  document.getElementById('result').innerText =
    '変換結果' + result.toLocaleString(); 
});


