export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            <i className="fas fa-book"></i> Bookly
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="Search here..."
              id="search-box"
            ></input>
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a
              href="./Login.html"
>
	  {
		  //style="font-size:x-large;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
	  }
              Sign In
            </a>
            <a
              href="./Register.html">
	  { //   style="font-size: x-large;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
	  }
              Sign Up
            </a>
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#featured">Books</a>
            <a href="#arrivals">Information</a>
            <a href="#reviews">Client's Reviews</a>
          </nav>
        </div>
      </header>
      <nav className="bottom-navbar">
        <a href="#home" className="fas fa-home"></a>
        <a href="#featured" className="fas fa-list"></a>
        <a href="#arrivals" className="fas fa-tags"></a>
        <a href="#reviews" className="fas fa-comments"></a>
        <a href="#blogs" className="fas fa-blog"></a>
      </nav>
    </>
  );
};
