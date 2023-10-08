import React ,{useState} from 'react';
import meow from './pics/meow.png';
import backgroundImage1 from './pics/273400317-fe0a38ce-9504-41b0-b8d6-4ac6eb557998.png';

function Profile(){
    const [isOpen, setIsOpen] = useState(1);
    
    const handleClick1=(e)=>{
        setIsOpen(1)
    }
    const handleClick2=(e)=>{
        setIsOpen(0)
    }

    return (
        <div className='font-bold bg-black text-white bg-fixed bg-cover bg-center pb-40 ' style={{backgroundImage:`url(${backgroundImage1})`}}>

            <div class="relative pt-10">
                <img src={meow} alt="Cover Photo" class="w-4/5 md:w-4/5 lg:w-1/2 xl:w-1/2 sm:w-4/5 mx-auto rounded-3xl h-40 object-cover"/>   
                <img src={meow} alt="Profile Photo" class="w-40 h-40 rounded-full border-4 border-black absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-1/2"/>       
                <div class="w-6 h-6 rounded-full absolute bottom-0 left-1/3 transform translate-x-12 translate-y-16 bg-green-600"></div>
                <div class="flex justify-center mt-20 absolute bottom-0 left-1/3 transform translate-x-24 translate-y-20">
                <div class="grid">
                    <div >Smooth Operator</div>
                    <div>Full Stack Developer</div>
                    <div>⭐ 4.2</div>
                </div>
            </div>
            </div>

            <div className='flex justify-center mt-40'>
                <div className='w-1/2 flex justify-start'>
                    <div className='grid'>
                        <button onClick={handleClick1}>Recent Events</button>
                        <div className={isOpen?'h-1 w-20 bg-orange-700':'h-1 w-20 bg-black'}></div>
                        </div>
                    <div className='grid'>
                        <button className='ml-8' onClick={handleClick2} >Registered Events</button>
                        <div className={isOpen?'h-1 w-28 ml-8 bg-black':'h-1 w-28 ml-8 bg-orange-700'}></div>
                    </div>
                </div>
            </div>
            {isOpen ? (
                <div class="flex flex-wrap w-3/5 m-auto  ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-700  m-auto mt-10">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Recent Events</div>
                    <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-700 mt-10  m-auto">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Recent Events</div>
                    <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            </div>
            ):(
                <div class="flex flex-wrap w-3/5 m-auto">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-500 m-auto mt-10">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Registered Events</div>
                    <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-500 m-auto mt-10">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Registered Events</div>
                    <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            </div>)
            }

        </div>
    )
}
export default Profile;