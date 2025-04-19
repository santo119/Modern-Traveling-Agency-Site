
import React from 'react';
import Image from 'next/image';


const page = () => {
    return (
        <div>
            <h2 className='text-center items-center justify-center text-3xl p-4 m-4'>Why Choose This Country</h2>
            <div className='grid md:grid-cols-3 gap-5 ml-8'>
                <div >
                    
                <Image
                    src="/images/c1.svg"
                    alt="image 2"
                    width={100}  
                    height={100}
                    />
                   <h2 className='text-xl'>Best Price Guarantee</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Lorem ipsum dolor sit amet.</p>
                </div>
                <div>

                <div >
                    
                    <Image
                        src="/images/c2.svg"
                        alt="image 2"
                        width={100}  
                        height={100}
                        />
                       <h2 className='text-xl'>Easy & Quick Booking</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>
                <div>
                <div>
                    
                    <Image
                        src="/images/c3.svg"
                        alt="image 2"
                        width={100}  
                        height={100}
                        />
                       <h2 className='text-xl'>Customer Care 24/7</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;