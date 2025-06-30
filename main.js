// エラーが出たら教えてくれるコード
'use strict';

// 0~99の整数がランダムで含まれる配列の作成
function createRandomArray(count) {
  const kara = [];
  for (var i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    kara.push(randomNumber);
  }
  return kara
}

// ===================================================

//指定された配列の中身を指定の数字で掛ける
function multiplyArray(array, num) {
  return array.map(item => item * num)
}

// ===================================================

// ユーザーの値をJSで読み取る
// const count = Number(document.getElementById('countInput').value);
// const num = Number(document.getElementById('multiplyInput').value);

// countを使ったランダム配列の作成
// const array = createRandomArray(count);

// numを使って配列に掛け算をする
// const resultArray = multiplyArray(array, num);

// 結果を画面に表示する
// document.getElementById('result').textContent =
//   '元の配列' + array + '掛ける数' + resultArray;

//  ボタンの要素を取得する
const button = document.getElementById('pushButton');

button.addEventListener('click', () => {

  const count = Number(document.getElementById('countInput').value);
  const num = Number(document.getElementById('multiplyInput').value);

  const array = createRandomArray(count);
  const resultArray = multiplyArray(array, num);
  document.getElementById('result').innerHTML =
    '元の配列: [' + array.join(", ") + ']<br>' +
    '掛けた数: [' + resultArray.join(", ") + ']';
});



