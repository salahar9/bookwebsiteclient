export const Services = ()=>{
	return (

<>
<center><h1 className="heading" styles={{paddingTop: 2+'%'}}> <span>Our Services</span></h1></center>
<section className="services icons-container">
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
		</>
	)
}
