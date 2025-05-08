import React from 'react'

const Footer = () => {
    return (
        <footer className='pb-10 max-[650px]:pb-2'>
            <div className="container">
                <div className="py-9 pl-[58px] pr-[42px] flex items-center justify-between bg-[#F5F6F9] rounded-full max-[990px]:flex-col-reverse max-[990px]:rounded-[20px] max-[990px]:pl-[42px] max-[650px]:py-10 max-[650px]:px-[27px]">
                    <div className='flex items-center max-[990px]:flex-col max-[990px]:text-center'>
                        <img src="/images/logo.svg" alt="" className='mr-12 max-[1050px]:mr-8 max-[990px]:hidden' />
                        <p className='text-sm font-medium mr-9 max-[1050px]:mr-5 max-[990px]:mr-0 max-[990px]:mb-6'>
                            &copy; 2025 Fit.Expert. Wszystkie prawa zastrzeżone.
                        </p>
                        <a href="#" className='text-sm font-bold'>Privacy policy</a>
                    </div>
                    <div className="flex items-center max-[990px]:flex-col max-[990px]:mb-[100px] max-[650px]:w-full">
                        <img src="/images/logo.svg" alt="" className='hidden mb-[58px] max-[990px]:block max-[650px]:w-[147px]' />
                        <ul className='flex items-center gap-4 mr-8 max-[990px]:gap-[34px] max-[990px]:mr-0 max-[990px]:mb-12'>
                            <li>
                                <a href="#" className='duration-300 opacity-100 hover:opacity-70'>
                                    <img src="/icons/x-logo.svg" alt="" className='max-[990px]:w-8' />
                                </a>
                            </li>
                            <li>
                                <a href="#" className='duration-300 opacity-100 hover:opacity-70'>
                                    <img src="/icons/instagram-logo.svg" alt="" className='max-[990px]:w-8' />
                                </a>
                            </li>
                            <li>
                                <a href="#" className='duration-300 opacity-100 hover:opacity-70'>
                                    <img src="/icons/facebook-logo.svg" alt="" className='max-[990px]:w-8' />
                                </a>
                            </li>
                        </ul>
                        <a href="https://tally.so/r/mYeEoz" className='block max-[650px]:w-full'>
                            <button className='py-2.5 px-4 rounded-full bg-black text-sm font-bold text-[#F0F0F0] duration-300 border-2 border-black hover:bg-white hover:text-black max-[990px]:py-4 max-[990px]:px-10 max-[650px]:w-full'>Dołącz do testerów</button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer