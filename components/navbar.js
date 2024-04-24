

const navbar=()=>{
    return `<nav class="navbar navbar-expand-lg  ">
    <div class="container-fluid">
        <img id="logo"src="https://cdn.dribbble.com/users/78422/screenshots/3267342/media/55cada9460510c0695fd3c242da948e8.jpg?compress=1&resize=400x300&vertical=top" class="logo "alt="">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/cart.html">cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/pages/admin.html">admin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/product.html">product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/pages/login.html">login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/sign.html">sign</a>
          </li>
         
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button type="button" class="btn btn-outline-primary">search</button>
        </form>
      </div>
    </div>
  </nav>`

}
export default navbar