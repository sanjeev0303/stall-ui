import Image from 'next/image'
import React from 'react'

const Stall = () => {
    return (
        <div className='relative min-h-screen w-full bg-pink-300'>

            <div className='flex flex-col w-full items-center'>
                <div className=' w-[50vh] h-8 flex justify-between'>
                    <div className='h-full w-[3px] bg-black'></div>
                    <div className='h-full w-[3px] bg-black'></div>
                </div>
                <div className='bg-gray-300 h-[10vh] w-[65vh] flex justify-center items-center'>
                <div className='text-6xl text-black'>
                    Company Name
                </div>
            </div>
            </div>

            <div className='bg-gray-500 flex justify-center items-center h-[10vh] w-full mt-10'>
                <div className='text-3xl'>
                    Company Banner
                </div>
            </div>

            <div className='absolute bottom-0 right-[7.2vh] '>
                <Image src={"/avatar.png"} alt='erv' height={220} width={230} />
            </div>

            <div className='absolute bottom-0 right-0 h-[25vh] w-[40vh] overflow-hidden'>
    {/* Table Image as background */}
    <div className='absolute  bottom-0 right-[-15px] h-[50vh] w-[20vw] '>
        <Image 
            src={"/table.png"} 
            alt='Table' 
            width={100}
            height={100}
            className='h-full object-fit w-full absolute'
        />
    </div>

    {/* Logo Image above the table */}
    <div className='relative z-10 bottom-[-30px] right-[-10px] flex justify-center items-center h-full'>
        <Image 
            src={"/opexn_logo.png"} 
            width={250} 
            height={250} 
            alt='logo' 
        />
    </div>
</div>


        </div>
    )
}

export default Stall
