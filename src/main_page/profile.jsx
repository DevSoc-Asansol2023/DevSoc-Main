import React from 'react'
import meow from './pics/meow.png'
function Profile(){
    return (
        <div className='font-bold bg-black text-white h-screen'>

            <div class="relative pt-10">
                <img src={meow} alt="Cover Photo" class="w-4/5 mx-auto rounded-3xl h-40 object-cover"/>   
                <img src={meow} alt="Profile Photo" class="w-40 h-40 rounded-full border-4 border-black absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"/>       
                <div class="w-6 h-6 rounded-full absolute bottom-0 left-1/2 transform translate-x-12 translate-y-16 bg-green-600"></div>
            </div>

            <div class="flex justify-center mt-20">
                <div class="grid">
                    <div >Smooth Operator</div>
                    <div>Full Stack Developer</div>
                    <div>⭐ 4.2</div>
                </div>
            </div>

            <div className='flex justify-center mt-10'>
                <div className='w-4/5 flex justify-start'>
                    <button className='ml-8'>Recent Events</button>
                    <button className='ml-8'>Registered Events</button>
                </div>
            </div>

        </div>
    )
}
export default Profile;