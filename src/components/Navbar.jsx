import { useState } from "react"
import todo from "../assets/icon-todo.svg"
import calender from '../assets/icon-calendar.svg'
import reminder from '../assets/icon-reminders.svg'
import planning from '../assets/icon-planning.svg'
import arrowdown from "../assets/icon-arrow-down.svg"
import arrowup from "../assets/icon-arrow-up.svg"
import menu from  "../assets/icon-menu.svg"
import closemenu from "../assets/icon-close-menu.svg"

const Navbar = () => {

  const [Featureon, setFeatureon] = useState(false);

function togglefeature(){
  setFeatureon(!Featureon)
  setcompany(false)
}

const [company, setcompany] = useState(false);

function togglecompany(){
  setcompany(!company)
  setFeatureon(false)
}

const [ mmenu, setmenu ] = useState(false)

function togglemenu(){
  setmenu(!mmenu)
}

  return (
    <div className="container mx-auto px-3 py-3 relative">
        <nav className = "justify-between top-0 flex items-center lg:mb-5">
          <div className = "flex">
            <div className="">
                <h2 className="text-7xl lg:text-3xl mb-10 lg:mb-5 font-bold tracking-tighter">snap</h2>
            </div>

            <div className=" gap-10 mx-10 text-2 my-2 hidden lg:flex">
              <div className="flex hover:text-gray-950">
              <a 
              href="#"
              onClick={togglefeature}
              ><p>Features</p></a>
              {Featureon === true? (<img src={arrowdown} className="h-2 ml-1 mt-3" />) : (<img src={arrowup} className="h-2 ml-1 mt-3" />)}
              
              </div>
              
              
            <div className="flex">
              <a 
              href="#" className="hover:text-gray-950"
              onClick={togglecompany}
              ><p>Company</p></a>
            {company === true? (<img src={arrowdown} className="h-2 ml-1 mt-3" />) : (<img src={arrowup} className="h-2 ml-1 mt-3" />)}

            </div>
              <a className="hover:text-gray-950" href="#"><p>Careers</p></a>
              <a className="hover:text-gray-950" href="#"><p>About</p></a>              

            </div>
          </div>

            <div className="hidden justify-between px-4 mr-7 gap-10 lg:flex">
              <a 
              href="#">Login</a>

              <a href="#"
              className=" border border-neutral-600 px-5 py-1 rounded-xl"
              >Register</a>

            
            </div>
            <div className="lg:hidden">
                  { mmenu === true? (<a onClick={togglemenu} href="#"><img src={closemenu} /></a>) : 
                
                (<a onClick={togglemenu} href="#"><img src={menu} /></a>)}
              </div>

           

        </nav>

        {Featureon === true && 
                <div className="hidden left-20 top-12 lg:flex absolute lg:flex-col z-20 bg-white text-xs p-2.5 rounded-md w-28 items-center justify-center " >

                    <div className="flex mb-1.5">
                      <a href="#"><img className = "mr-2" src={todo} /></a>
                      <a href="#"><p>Todo List</p></a>
                    </div>

                    <div className="flex mb-1.5">
                      <a href="#"><img className = "mr-2" src={calender} /></a>
                      <a href="#"><p>Calendar</p></a>
                    </div>

                    <div className="flex mb-1.5">
                      <a href="#"><img className = " ml-2 mr-2.5" src={reminder} /></a>
                      <a href="#"><p>Reminders</p></a>
                    </div>

                    <div className="flex mb-1.5x">
                      <a href="#"><img className = "mr-2" src={planning} /></a>
                      <a href="#"><p>Planning</p></a>
                    </div>

                </div>
              }
{/* conditional rendering for company dropdown */}

{company === true && 
                <div className="left-52 top-12 flex absolute flex-col z-20 bg-white text-xs p-2.5 rounded-md w-22 items-center justify-center " >

                    <div className="flex flex-col mb-1.5">
                      <a href="#"><p>History</p></a>
                      <a href="#"><p>Our Team</p></a>
                      <a href="#"><p>Blog</p></a>
                    </div>

                </div>
              }

{mmenu === true &&
<div className="relative">
                    
                    <div className="w-3/4 right-0  bg-white absolute z-20 rounded-lg h-96 mb-10 lg:hidden">
                              <div className="flex flex-col right-40 p-7 h-autorelative">

              <div className="flex hover:text-gray-950">
              <a 
              href="#"
              onClick={togglefeature}
              ><p>Features</p></a>
              {Featureon === true? (<img src={arrowup} className="h-2 ml-1 mt-3" />) : (<img src={arrowdown} className="h-2 ml-1 mt-3" />)}
              </div>
              
                <div className="right-14 top-12 flex flex-col z-20 bg-white text-sm p-2.5 rounded-md w-28 items-center justify-center " >

                    <div className="flex mb-1.5">
                      <a href="#"><img className = "mr-2" src={todo} /></a>
                      <a href="#"><p>Todo List</p></a>
                    </div>

                    <div className="flex mb-1.5">
                      <a href="#"><img className = "mr-2" src={calender} /></a>
                      <a href="#"><p>Calendar</p></a>
                    </div>

                    <div className="flex mb-1.5">
                      <a href="#"><img className = " ml-2 mr-2.5" src={reminder} /></a>
                      <a href="#"><p>Reminders</p></a>
                    </div>

                    <div className="flex mb-1.5x">
                      <a href="#"><img className = "mr-2" src={planning} /></a>
                      <a href="#"><p>Planning</p></a>
                    </div>

                </div>
              
              
              
            <div className="flex">
              <a 
              href="#" className="hover:text-gray-950"
              onClick={togglecompany}
              ><p>Company</p></a>
            {company === true? (<img src={arrowdown} className="h-2 ml-1 mt-3" />) : (<img src={arrowup} className="h-2 ml-1 mt-3" />)}

          
                <div className="right-48 top-16 flex flex-col z-20 bg-white text-sm p-3.5 mt-4 rounded-md items-center justify-center " >

                    <div className="flex flex-col mb-1.5">
                      <a href="#"><p>History</p></a>
                      <a href="#"><p>Our Team</p></a>
                      <a href="#"><p>Blog</p></a>
                    </div>

                </div>
              

            </div>
              <a className="hover:text-gray-950" href="#"><p>Careers</p></a>
              <a className="hover:text-gray-950" href="#"><p>About</p></a>              

            </div>

            <div className=" justify-between px-4  gap-2 ">
              <a 
              href="#">Login</a>

              <a href="#"
              className=" border border-neutral-600 px-5 py-1 gap-4 rounded-xl mb-10"
              >Register</a>

            
            </div>
          </div>






                                   
          </div>}
          </div>)}


export default Navbar