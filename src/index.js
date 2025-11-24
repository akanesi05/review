console.log("JS読めてる？");


const onClickAdd = () => {
    //テキストボックスの値を取得し、初期化
    const  inputText = document.getElementById("add-text").value;
    console.log(inputText);
    document.getElementById("add-text").value= "";
    //liタグを生成
    const li=document.createElement("li");
    console.log(li);
    //divタグを生成
    const div=document.createElement("div");
    div.className="list-row";
    console.log(div);
    //pタグを生成
    const p=document.createElement("p");
    p.className="todo-item";
    p.innerText=inputText;
    div.appendChild(p);
    li.appendChild(div);
    console.log(div);
    document.getElementById("incomplete-list").appendChild(li);

}
document.getElementById("add-button").addEventListener("click", onClickAdd);
