var val1 = "Hello, ";
console.log(val1 + "World!");
//変数の上書きや再宣言が可能
var val1 = "Goodbye, ";
console.log(val1 + "World!");
val1 = "Goodbye, ";//代入
//上のようにvarで宣言した変数は再宣言や上書きが可能

let val2 = "let変数";
console.log(val2);
//letは再宣言不可、上書きは可能
//let val2 = "再宣言";//エラー
val2 = "let変数を上書き";
console.log(val2);

const val3 = "const変数";
console.log(val3);
//constは再宣言、上書き不可
//const val3 = "再宣言";//エラー
//val3 = "上書き";//エラー
//constは再宣言再代入不可

const person = {
  name: "Ai",
  age: 30
};
console.log(person);
//オブジェクトはプロパティの変更が可能
person.name = "Aiko";
person.age = 31;
console.log(person);

//テンプレート文字列
const mes = `私の名前は${person.name}です。年齢は${person.age}歳です。`;
console.log(mes);

const nu ='L';
const mes2 = `私が${nu}です。`;
console.log(mes2);

//func1という関数を定義
function func1(str1) {
    return str1;
}
const result1 = func1("こんにちは");
console.log(result1); 

function func2(str) {
    return str;
}

console.log(func2('おはよう')); 
//アロー関数
//基本構文
//const func4 = () =>{}
const func3 =() =>{
    return "おはようございます";
}
console.log(func3());

const func4 = (str) =>{
    return str;
}
console.log(func4("こんばんは"));
const result2 = func4("さようなら");
console.log(result2);

///🧠 Step 1：関数としてまとめたい動作は？

// 2つの数を受け取る（これが引数）

// その2つを足す

// 足した結果を返す

// 🧩 Step 2：登場人物を整理

// 関数の「名前」 → 呼びやすく、意味がわかるものにしよう

// 「引数」 → 2つ必要（例：aとb とか number1 と number2）

// 関数の「中で行う処理」 → 足す（加算）

// 「返り値」 → 加算した結果（a + b）

const func5 = (a,b) =>{
    return a + b;
}
result3 = func5(10,20);
console.log(result3)
// アロー関数 func5 を定義
// → 「2つのもの（aとb）を受け取って戻す関数」

// a + b が return される
// → 足し算の結果が返される

// func5(10, 20)
// → 呼び出して "10" と "20" を渡す
// → 計算結果「30」が返ってくる

// result3 にその返り値を代入
// → console.log(result3) → 30

//q1
const func6 = (food) =>{
    return `${food}が好きです`;
}
result5 = func6('焼肉')
console.log(result5)

const func7 = (num)=>{
    return num +10;
}
result6 = func7(100);
console.log(result6);

const func8 = (age) => {
    return age;
};
result7 = func8(30);
console.log(result7);
if (result7 <= 20)
{console.log('若いです');}
else
{console.log('大人ですね');}


const func9 = (str1, str2) =>{
    return str1 + str2;
}
result8 =func9("Hello", "World")
console.log(result8);

const compareNums = (a, b) => {
  if (a === b) {
    return "同じです";
  } else if (a > b) {
    return `${a}のほうが大きい`;
  } else {
    return `${b}のほうが大きい`;
  }
};
console.log(compareNums(5, 5));   // 同じです
console.log(compareNums(10, 3));  // 10のほうが大きい
console.log(compareNums(4, 7));   // 7のほうが大きい

//分割代入
const myProfile = {
    name: "Ai",
    age: 30,
};

console.log(`名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`);
//分割代入を用いて、プロパティを変数に代入
const {name, age} = myProfile;
const mes3 = `名前は${name}です。年齢は${age}歳です。`;
console.log(mes3);

const myProfile2 = ['Ai', 49];
const mes4 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(mes4);
//分割代入
const [name2, age2] = myProfile2;
const mes5 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(mes5);

const seyhello = (name) => console.log(`こんにちは、${name}さん！`);
seyhello('太郎');

const myp ={
    age3:31
}

const {age3} = myp;
console.log(age3);

const pet='ハムカツ'
const petfood = 'ペレット'
// const petmes = `${pet}の好きな食べ物は${petfood}です。`
// console.log(petmes);

const mypet = {
    pet,
    petfood
}
console.log(`${pet}の好きな食べ物は${petfood}です。`);

//配列の展開
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

const namelist = ['田中', '山田', '佐藤'];
const namelist2 = namelist.map((name) =>{
    if (name === '佐藤'){
        return name;
    } else {
        return `${name}さん`;
    }
})
console.log(namelist2);

const val5 = 50 >90 ? '大きいです' : '小さいです';
console.log(val5);

const val6 = num == 0 ? 'ゼロ' : '小さいです';
