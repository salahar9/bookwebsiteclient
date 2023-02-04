import axios from "../api/axiosAuth"
import {api} from "../api/"
import {useEffect,useState} from "react"
import {Link, Route} from "react-router-dom";

export const Home=()=>{
	const [books,setBooks]=useState([]);
	useEffect(()=>{
		const d = async ()=>{
			const data= await axios.post(`${api}/api/user/getbooks`);
		if( data.data.status){
			console.log(data);
			setBooks(data.data.books);
		}			
		}
		d();

	},[])
	return(
		<ul style={{paddingTop:225+"px"}}>
		{
			books.map((book,i)=>{
				return( 
					<li key={book.id}>
					<Link to={`/book/${book.id}`}>{book.nomLivre}</Link>
          				</li>
					)
			}
			)
		}
		</ul>
	)


}
