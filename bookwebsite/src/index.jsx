import {Footer} from "./Components/footer"
import { Header } from "./Components/header"
import {Reviews} from "./Components/reviews"
export const Salah = () => {



return (
	<>
   <Header/>




<section className="home" id="home">

    <div className="row">

        <div className="content">
            <h3>Welcome</h3>
            <p>To our book website! Here you will find a wide selection of books in various genres including fiction, non-fiction, mystery, romance, and more. Our easy-to-use website allows you to browse and purchase books with just a few clicks.</p>
        </div>

        <div className="swiper books-slider">
            <div className="swiper-wrapper">
                <a href="#" className="swiper-slide"><img src="image/book-1.png" alt=""></img></a>
                <a href="#" className="swiper-slide"><img src="image/book-2.png" alt=""></img></a>
                <a href="#" className="swiper-slide"><img src="image/book-3.png" alt=""></img></a>
                <a href="#" className="swiper-slide"><img src="image/book-4.png" alt=""></img></a>
                <a href="#" className="swiper-slide"><img src="image/book-5.png" alt=""></img></a>
                <a href="#" className="swiper-slide"><img src="image/book-6.png" alt=""></img></a>
            </div>
            <img src="image/stand.png" className="stand" alt=""></img>
        </div>

    </div>

</section><br/><br/>

	{// {<!-- home section ense  -->}
	}

		{// <!-- icons section starts  -->
		}
<center><h1 className="heading" styles={{paddingTop: 2+'%'}}> <span>Our Services</span></h1></center>
<section className="icons-container">
    <div className="icons">
        <img src="image/Discovery2.png" width="40%"/>
        <div className="content">
            <h3>Access and discovery</h3>
	{
		// <!-- <p>This service provides users with the ability to search for and discover library materials, such as books, 
                // journals, articles, and other resources.
            // </p> -->
		}
        </div>
    </div>

    <div className="icons">
        <img src="image/Secure2.png" width="50%"/>
        <div className="content">
            <h3>Digital lending</h3>
	{     // <!-- <p>This service allows users to borrow and read e-books, audiobooks, and other digital materials.</p> -->
	}
		</div>
    </div>

    <div className="icons">
        <img src="image/archive.png" width="40%"/>
        <div className="content">
            <h3>Special collections</h3>
        </div>
    </div>

    <div className="icons">
        <img src="image/Ebook.png" width="40%"/>
        <div className="content">
            <h3>E-book downloads</h3>
        </div>
    </div>

</section>
	{
//<!-- icons section ends -->

//</br></br><!-- featured section starts  -->
	}
<section className="featured" id="featured">

    <h1 className="heading"> <span>Books</span> </h1>

    <div className="swiper featured-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-1.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 1</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-2.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 2</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-3.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 3</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-4.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 4</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-5.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 5</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-6.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 6</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-7.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 7</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-8.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 8</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-9.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 9</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-10.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 10</h3>
                    <div className="price">Author: <b>Victor Hugo</b></div>
                    <a href="#" className="btn">Add to wish list</a>
                    <a href="#" className="btn">Add to plan list</a>
                </div>
            </div>

        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

    </div>

</section>
<section className="arrivals" id="arrivals">

    <h1 className="heading"> <span>Information</span> </h1>

    <div className="swiper arrivals-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-1.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 1</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>                
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-2.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 2</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>                
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-3.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 3</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>                
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-4.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 4</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-5.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 5</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="{{fontSize: medium;fontFamily:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);}}">
                        <a href="Login.html">Read More</a>
                    </div>                
                </div>
            </div>

        </div>

    </div>
    <div className="swiper arrivals-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-6.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 6</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-7.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 7</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-8.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 8</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>                
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-9.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 9</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide box">
                <div className="image">
                    <img src="image/book-10.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Book 10</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <a href="Login.html">Read More</a>
                    </div>                
                </div>
            </div>

        </div>

    </div>

</section>


<Reviews/>
<Footer/>
	{
// <div className="loader-container">
//     <img src="image/loader-img.gif" alt=""/>
// </div>
		
	}
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

<script src="js/script.js"></script>

	</>

		 );
};
