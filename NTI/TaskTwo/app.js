const mainURL = "https://jsonplaceholder.typicode.com/";
const apis = [
  {
    urlKeyWord: "posts",
    showKeyWord: "Posts Data",
    classes: "btn btn-danger mx-3",
    headers: ["userId", "id", "title", "body"],
  },
  {
    urlKeyWord: "comments",
    showKeyWord: "Comments Data",
    classes: "btn btn-warning mx-3",
    headers: ["postId", "id", "name", "email", "body"],
  },
  {
    urlKeyWord: "photos",
    showKeyWord: "Photos Data",
    classes: "btn btn-success mx-3",
    headers: ["albumId", "id", "title", "url", "thumbnailUrl"],
  },
  {
    urlKeyWord: "todos",
    showKeyWord: "ToDos Data",
    classes: "btn btn-dark mx-3",
    headers: ["userId", "id", "title", "completed"],
  },
];


const Buttons = document.querySelector("#Buttons");
const data = document.querySelector("#data");


let createMyOwnElement = (parent,element, classes,txt,attributes = []) => {

  let myEl = document.createElement(element);
  if(classes) myEl.classList = classes;
  myEl.innerText = txt;
  parent.appendChild(myEl);
  attributes.forEach(attr => myEl[attr.attrName] = attr.attrVal)
  // [ {attrName:"src", attrVal:ele.val} ]
  return myEl;

}

apis.forEach((api) => {
  btn = document.createElement("button");
  btn.innerText = api.showKeyWord;
  btn.classList = api.classes;
  Buttons.appendChild(btn);
  btn.addEventListener("click", async function () {
    document.querySelector("#heads").innerHTML = "";
    document.querySelector("#body").innerHTML = "";
    let myResult = await (
      await fetch(`${mainURL}${api.urlKeyWord}`)
    ).json();
   




    const heads = document.querySelector("#heads");
    const body = document.querySelector("#body");

    api.headers.forEach((head,i)=>{
      createMyOwnElement(heads,"th",null,head)
      console.log(head["thumbnailUrl"]);


    });
  
    
    myResult.forEach((res) => {
    
      let tr =  createMyOwnElement(body,"tr",null,null)
      api.headers.forEach((head, i) => {
        
        let td = createMyOwnElement(tr,"td",null,res[head])
      
        if(api.headers.includes("thumbnailUrl") & i == 4 || api.headers.includes("url") & i == 3 ){
          createMyOwnElement(td,"img","w-100",null,[{attrName:"src",attrVal:res["thumbnailUrl"]},{attrName:"src",attrVal:res["url"]}])
        }
       
      
    

      });
     
    });
  });
});
