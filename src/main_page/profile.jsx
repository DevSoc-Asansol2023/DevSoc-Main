import React ,{useState} from 'react';
import meow from './pics/meow.png';
import backgroundImage1 from './pics/273400317-fe0a38ce-9504-41b0-b8d6-4ac6eb557998.png';

function Profile(){
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);


    return (
        <div className='font-bold bg-black text-white h-screen' style={{backgroundImage:`url(${backgroundImage1})`}}>

            <div class="relative pt-10">
                <img src={meow} alt="Cover Photo" class="lg:w-1/2 md:w-4/5 sm:w-4/5 mx-auto rounded-3xl h-40 object-cover"/>   
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
                        <button>Recent Events</button>
                        <div className='h-1 w-20 bg-orange-700'></div>
                        </div>
                    <div className='grid'>
                        <button className='ml-8'>Registered Events</button>
                        <div className='h-1 w-28 ml-8 bg-orange-700'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile;