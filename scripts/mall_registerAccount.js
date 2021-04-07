function handleClick(evt){
    let formForOwner = document.querySelector(".forOwner");

    if (evt.value == "storeOwner") formForOwner.classList.remove("hidden");
    else formForOwner.classList.add("hidden");
}