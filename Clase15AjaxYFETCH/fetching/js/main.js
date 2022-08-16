
programarBotones();

function programarBotones() {
  programarVerBlog();
  programarCrearPost();
  programarVerProductos();

}

function programarVerBlog() {
  const btn = document.getElementById("ver");
  btn.addEventListener("click", () => {
    cargarPosts();
  })
}

function programarCrearPost() {
  const btn = document.getElementById("admin");
  btn.addEventListener("click", () => {
    crearPost();
  })
}

function programarVerProductos()
{
  fetch("/js/data/products.data.json")
  .then((res) => res.json())
  .then((json) => console.log(json));
}

async function cargarPosts() {
 /* fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => res.json())
    .then((json) => mostrarPosts(json))
    .catch((error) => console.log(error))
    .finally(console.log("TAREA EJECUTADA")); */

    let res = await fetch("https://jsonplaceholder.typicode.com/posts/")
    let json = await res.json();
    mostrarPosts(json);
}

function mostrarPosts(posts) {
  const div = document.getElementById("appContainer");
  div.innerHTML = "";
  posts.forEach((post) => {
    mostrarPost(post);
  })
}

function mostrarPost(post) {
  const div = document.getElementById("appContainer");
  const nodoPost = document.createElement("div")
  nodoPost.setAttribute("style", "border:1px solid blue;border-radius:20px;margin:10px;padding:2%")
  nodoPost.innerHTML = `<h3>${post.title}</h3>
                      <p>${post.body.substr(0, 10)}...</p>
                      <button id="post-${post.id}">Ver Más</button>
                      <hr>`
  div.appendChild(nodoPost);

  programarVerPostDetallado(post.id)


}

function programarVerPostDetallado(id) {
  const btn = document.getElementById(`post-${id}`);
  btn.addEventListener("click", () => { cargarPostDetallado(id) })
}

function cargarPostDetallado(id) {
  const div = document.getElementById("appContainer");
  div.innerHTML = ""
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((json) => mostrarPostDetallado(json))
    .catch((error) => console.log(error))
    .finally(console.log("TAREA EJECUTADA"));

}

function mostrarPostDetallado(post) {
  const div = document.getElementById("appContainer");
  div.innerHTML = `<h1>${post.title}</h1>
                <p>${post.body}</p>`;

}

function crearPost() {
  let title = prompt("Titulo")
  let body = prompt("Contenido")
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => alert("Se creó el post "+json.id+" "+json.title))
    .catch((error)=>alert(error));

}