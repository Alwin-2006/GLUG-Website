
import { Link } from 'react-router-dom';
import linux from '../assets/linux.png';
function Navbar() {
    return (
        <nav className="bg-black w-full  flex justify-between text-white p-7 items-center space-grotesk md:flex items-center gap-5">
            <Link to="/" className=" text-2xl font-bold flex md:flex-row items-center md:gap-2">  
            <div className='w-1/5 bg-white md:w-1/10'><img src={linux} /></div> 
            <ul className="flex flex-col justify-center ml-2">
                <li>GLUG</li>
                <li>NITC</li>
            </ul>
            </Link>
            <div className="flex gap-10 justify-between items-center">
                <Link to="/" className=" bg-orange-500 rounded-xl px-3 py-1 flex justify-center">Home</Link>
                <Link to="/about" >About us</Link>
                <Link to="/projects" >Projects</Link>
                <Link to="/linux-guide" >Linux Installation Guide</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contribute" className="text-orange-500 font-thin bg-gray-800 rounded-xl px-3 py-1 ">Contribute</Link>  
            </div>
        </nav>
    );
}

export default Navbar;