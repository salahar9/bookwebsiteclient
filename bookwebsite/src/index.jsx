import {Books} from "./Components/bestbooks";
import {Footer} from "./Components/footer"
import { Header } from "./Components/header"
import {Main} from "./Components/main"
import {Reviews} from "./Components/reviews"
import {Services} from "./Components/services";
//import "./js/script.js"
// import ScriptTag from 'react-script-tag';

export const Salah = () => {



return (
	<>
   <Header/>




<Main/>
	{// {<!-- home section ense  -->}
	}

		{// <!-- icons section starts  -->
		}
	{
//<!-- icons section ends -->

//</br></br><!-- featured section starts  -->
	}
	<Services/>
<Books/>
<Reviews/>
<Footer/>
	{
		
	// <ScriptTag isHydrating={true} type="text/javascript" src="js/script.js" />
	}
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

<script src="js/script.js"></script>

	</>

		 );
};
