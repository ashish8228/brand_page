
export default function Navigation(){
    return(
        
    <nav className="flex justify-between max-w-[1280px] m-auto h-12 items-center mt-10 ">
        <div >
          <img src="/images/brand_logo.png" alt="brand logo" />
        </div>

          
        <ul className="flex list-none gap-9">
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button className="bg-red-600  text-white font-[500] p-4 ">Login</button>  
    </nav>
       
    )
}