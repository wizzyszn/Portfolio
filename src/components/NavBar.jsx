import { Link } from "react-router-dom";
function NavBar() {
    return ( <div className="flex bg-[#1c1c1c] rounded-2xl p-2 min-w-[100%] whitespace-nowrap font-bold text-lg text-gray-300 justify-end  border border-[#232323]" >
        <div className="mr-auto py-3 tracking-widest"><Link to={'/'} ><strong>#</strong>WizTECH</Link></div>
        <div className="flex gap-20">
            <div className="py-3"><Link to={'/'} > Home</Link></div>
            <div className="py-3"><Link to={'/Projects'} className="" > Projects</Link></div>   
            <div className="py-3"><Link to={''} className="" > About Me</Link></div>
            <div className="flex gap-2 border border-[#363636] bg-[#222222] rounded-lg py-1 px-1"> 
            <div className="rounded-lg px-10 py-2 bg-[#2a2a2a]"><Link to={''} >Hire Me</Link></div> <span className="h-[30px] mt-2 w-[1px] bg-[#363636]"></span>
            <div className="bg-white text-black px-10 py-2 rounded-lg font-normal "><Link to={''}>copy Email</Link></div>
            </div>
        </div>
        
    </div> );
}

export default NavBar;