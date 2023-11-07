function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.queryselector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setattribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setattribute("src", "./assets/avatar.png")
  }
}
