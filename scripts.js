function makeTitle () {
    let location = window.location.pathname.split('/');
    location = location[location.length - 2];
    location = location.charAt(0).toUpperCase() + location.slice(1)
    document.getElementById('page-title').innerHTML = `m4nxt - ${location}`
}

function load () {
    makeTitle();
    document.getElementById('header').innerHTML = `
    <div class="logo-container">
        <a href="../home/index.html">
            <img class="logo" src="../images/logo.svg" alt="logo">
        </a>
        <a href="index.html">
            <p class="logo-text">m4nxt</p>
        </a>
    </div>
    <div class="nav-panel">
        <div class="search-bar">
            <form id="form"> 
                <input type="search" id="query" name="q" placeholder="Search...">
                <button>Search</button>
            </form>
        </div>
        <a href="../home/index.html">
            <p>Home</p>
        </a>
        <a href="../projects/index.html">
            <p>Projects</p>
        </a>
        <a href="../contact/index.html">
            <p>Contact</p>
        </a>
    </div>`;
}