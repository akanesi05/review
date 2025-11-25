console.log("JS読めてる？");


const onClickAdd = () => {
    //テキストボックスの値を取得し、初期化
    const  inputText = document.getElementById("add-text").value;
    console.log(inputText);
    document.getElementById("add-text").value= "";
    createIncompleteTodo(inputText);
    //liタグを生成
    

}
document.getElementById("add-button").addEventListener("click", onClickAdd);
const createIncompleteTodo = (todo) => {
    const li=document.createElement("li");
    console.log(li);
    //divタグを生成
    const div=document.createElement("div");
    div.className="list-row";
    console.log(div);
    //pタグを生成
    const p=document.createElement("p");
    p.className="todo-item";
    
    p.innerText = todo
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //押された完了ボタンの親タグ（li）を未完了ボタンと削除ボタンを削除
        const movetarget = completeButton.closest("li");
        console.log(movetarget);
        completeButton.nextSibling.remove();
        completeButton.remove();
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText);
            backButton.closest("li").remove();
        })
        movetarget.firstElementChild.appendChild(backButton);
        document.getElementById("complete-list").appendChild(movetarget);
    })
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
     deleteButton.addEventListener("click", () => {
       const deleteTarget = deleteButton.closest("li");
       console.log(deleteTarget);
       document.getElementById("incomplete-list").removeChild(deleteTarget);
    })
    console.log(completeButton);
    console.log(deleteButton);

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    console.log(div);
    document.getElementById("incomplete-list").appendChild(li);
}
