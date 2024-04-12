document.querySelectorAll(".reveal").forEach((elem)=>{
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");
    spanParent.classList.add("parent");
    spanChild.classList.add("child");
    spanChild.textContent = elem.textContent;
    spanParent.append(spanChild);
    elem.innerHTML = ''
    elem.appendChild(spanParent)
})
