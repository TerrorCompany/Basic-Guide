let imageMenu = document.getElementById("menu-setting");
let imageActivateHud = document.getElementById("activate-hud");
let imageNewHud = document.getElementById("new-hud");
let imageActivateNameTag = document.getElementById("activate-nametag");
let imageBindGuns = document.getElementById("bind-armas")
let imageBindGuns2 = document.getElementById("bind-armas2")
let modal = document.getElementById("modal");
const resizeImage = ({ target }) => {
  const imageElement = document.createElement("img");
  imageElement.src = target.currentSrc;
  modal.style.display = "flex";
  modal.appendChild(imageElement);
}
const closeImg = () => {
  const imageNode = modal.querySelector("img")
  modal.removeChild(imageNode)
  modal.style.display = "none";
}
imageMenu.addEventListener("click", resizeImage);
imageActivateHud.addEventListener("click", resizeImage);
imageNewHud.addEventListener("click", resizeImage);
imageActivateNameTag.addEventListener("click", resizeImage);
imageBindGuns.addEventListener("click", resizeImage);
imageBindGuns2.addEventListener("click", resizeImage);
modal.addEventListener("click", closeImg);


