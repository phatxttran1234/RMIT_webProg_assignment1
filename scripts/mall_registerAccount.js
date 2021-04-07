let formForOwner = document.querySelector(".forOwner");

let radioForOwner = document.querySelector("#storeOwner");

radioForOwner.addEventListener("change", () => {
    /*
    if (radioForOwner.checked) formForOwner.classList.add("hidden");
    else formForOwner.classList.remove("hidden");
    */
   console.log(radioForOwner.checked);
});

