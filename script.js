setInterval(() => {
    let searchInput = document.querySelector(".gsc-input input");
    if (!searchInput) return;
    let query = searchInput.value.trim().toLowerCase();
    
    document.querySelectorAll(".site-box").forEach(box => {
        box.classList.remove("highlight");
        if (query.length > 2 && box.innerText.toLowerCase().includes(query)) {
            box.classList.add("highlight");
        }
    });
}, 500);
