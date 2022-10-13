import profilePhoto from './../../../assets/profile.png'

function Main() {
	return (
		<section className="h-[calc(100vh-80px)] flex items-center justify-center">
		  <div className="w-[70%] flex justify-between items-center">
	        <div>
	          <h1 className="font-bold text-7xl w-[262px]">Gustavo Ferreira</h1>
	          <p className="text-xl w-[206px]"><span id="underline-text">Fu</span>ll-stack developer</p>
	        </div>
	        <div>
	      	  <img className="max-w-[400px]" src={profilePhoto} alt="Gustavo profile photo."/>
	        </div>
	      </div>
	    </section>
    )
}

export default Main