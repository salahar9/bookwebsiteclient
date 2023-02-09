import axios from "../api/axiosAuth"
import {api} from "../api/"
import {useEffect,useState} from "react"
import {useParams} from "react-router-dom";
import {Books} from "./bestbooks";
import {Reviews} from "./reviews";

export const BookDetails =()=>{
	const [book,setBook]=useState({});
	const [wishlisted,setWishlisted]=useState(false);
	const id= useParams();
	useEffect(()=>{
		const d = async ()=>{
			const data= await axios.post(`${api}/api/user/bookdetail`,{
				id:id.id
			});
		if( data.data.status){
			console.log(data);
			setBook(data.data.book);
		}			
		}
		d();

	},[])
	const addWishList= ()=>{

		const d = async ()=>{
			const data= await axios.post(`${api}/api/user/wishlist/add`,
{


"book": {
            "id": id.id
           
        }
}

			);
		if( data.data.status){
			console.log(data);
			setWishlisted(true);
		}			

		}
		d();
}

	return (
<>


<section className="home" id="home">

    <div className="row">

        <div className="content">
            <h3 styles="font-size: xx-large;">Informations</h3>
            <p><b styles="color: rgb(44, 133, 11);font-family: cursive;font-size: large;">Book Name : </b>{book.nomLivre}</p>
            <p><b styles="color: rgb(44, 133, 11);font-family: cursive;font-size: large;">Author Name : </b>{book.nomAuteur}</p>
            <p><b styles="color: rgb(44, 133, 11);font-family: cursive;font-size: large;">Edition : </b>{book.edition}</p>
            <p><b styles="color: rgb(44, 133, 11);font-family: cursive;font-size: large;">Maison Edition : </b>{book.maisonEdition}</p>

            <p><b styles="color: rgb(44, 133, 11);font-family: cursive;font-size: large;">Description : </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur adipisci necessitatibus amet doloribus facilis cupiditate laboriosam ducimus tempore similique. Dignissimos ullam dolorem deleniti voluptatem nesciunt officiis culpa dolore harum.</p>
            <button onClick={addWishList}  type="submit" action=""><a  href="#" className={wishlisted ?"btn done":"btn"} style={{fontSize: "small"}}>{wishlisted ? "Added": "Add to wishlist"}</a></button>
            <button type="submit" action=""><a href="#" className="btn" style={{fontSize:"small"}}>Add to plan list</a></button>
            <button type="submit" action=""><a href="#" className="btn" style={{fontSize:"small"}}>Click Here To Download</a></button>
        </div>

        <div className="swiper books-slider">
            <div>
                <a href="#" className="swiper-slide"><img src="/image/book-1.png" alt=""/></a>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>

    </div>

</section>



		{'genres' in book  &&  <Books title="Similar Books" genre={book.genres} />}
		{'genres' in book  &&  <Reviews title="Similar Books" reviews={book.reviews} />}
<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>our locations</h3>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> Casablanca Sidi Othman </a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> books </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> client'reviews </a>
            <a href="#"> <i className="fas fa-arrow-right"></i> information </a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> 060000000 </a>
            <a href="#"> <i className="fas fa-envelope"></i> EnsamCasa@gmail.com </a>
            <img src="image/worldmap.png" className="map" alt=""/>
        </div>
        
    </div>

    <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
    </div>

    <div className="credit"> Made with 💖 by <span>SAKINI Oussama | ANIBA Souhail | BELHIAK Salah-Eddine</span></div>

</section>




</>
	)
}
