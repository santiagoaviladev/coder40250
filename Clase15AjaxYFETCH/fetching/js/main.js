 
 programarBotones();

 function programarBotones()
 {
   programarVerBlog();
   
 }

 function programarVerBlog()
 {
   const btn = document.getElementById("ver");
   btn.addEventListener("click", ()=>{
    cargarPosts();
   })
 }

 function cargarPosts(){
   fetch("https://jsonplaceholder.typicode.com/posts/")
   .then((res)=>res.json())
   .then((json)=>mostrarPosts(json))
   .catch((error)=>console.log(error))
   .finally(console.log("TAREA EJECUTADA"));
 }

 function mostrarPosts(posts)
 {
  const div = document.getElementById("appContainer");
  div.innerHTML="";
    posts.forEach((post)=>{
      mostrarPost(post);
    })
 }

 function mostrarPost(post){
  const div = document.getElementById("appContainer");
  const nodoPost = document.createElement("div")
  nodoPost.setAttribute("style", "border:1px solid blue;border-radius:20px;margin:10px;padding:2%")
  nodoPost.innerHTML=`<h3>${post.title}</h3>
                      <p>${post.body.substr(0,10)}...</p>
                      <button id="post-${post.id}">Ver Más</button>
                      <hr>`
  div.appendChild(nodoPost);

  programarVerPostDetallado(post.id)


 }

 function programarVerPostDetallado(id)
 {
     const btn = document.getElementById(`post-${id}`);
     btn.addEventListener("click", ()=>{cargarPostDetallado(id)})
 }

 function cargarPostDetallado(id){
  const div = document.getElementById("appContainer");
  div.innerHTML=""
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then((res)=>res.json())
   .then((json)=>mostrarPostDetallado(json))
   .catch((error)=>console.log(error))
   .finally(console.log("TAREA EJECUTADA"));

 }

 function mostrarPostDetallado(post)
 {
  const div = document.getElementById("appContainer");
  div.innerHTML=`<h1>${post.title}</h1>
                <p>${post.body}</p>`;
  
 }