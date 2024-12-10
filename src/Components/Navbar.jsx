import React from 'react';
import { useTranslation } from 'react-i18next';
import Group from '../assets/Group.png';
import Heart from '../assets/Heart.svg';
import Logo from '../assets/Logo.png';
import Info from '../assets/Info.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='w-full'>
            <div className="w-full p-[20px] px-[200px] bg-[rgb(39,35,67)]">
                <div className="text-[rgb(143,141,157)] p-[10px] flex justify-between">
                    <p>{t('freeShipping')}</p>
                    <div className="flex gap-[20px]">
                        <details className='cursor-pointer'>
                            <summary>{t('language')}</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 bg-[rgb(39,35,67)]">
                                <li><a onClick={() => changeLanguage('uz')}>{t('uzbek')}</a></li>
                                <li><a onClick={() => changeLanguage('ru')}>{t('russian')}</a></li>
                                <li><a onClick={() => changeLanguage('en')}>{t('english')}</a></li>
                            </ul>
                        </details>
                        <p>{t('faqs')}</p>
                        <p>{t('needHelp')}</p>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="w-full p-[20px] px-[200px] bg-[#f0f2f3]">
                <div className="flex justify-between items-center p-[20px]">
                    <img src={Logo} alt="Logo" />
                    <input
                        className='p-[10px] w-[400px] border-none rounded-[4px]'
                        placeholder={t('searchPlaceholder')}
                        type="text"
                    />
                    <div className="flex items-center gap-[20px]">
                        <div className="w-[100px] bg-white p-[10px] border-none rounded-[4px] flex gap-[5px]">
                            <img src={Info} alt="Info" />
                            <div className="border-none rounded-[50%] w-[20px] h-[20px] bg-[rgb(0,117,128)] flex justify-center items-center">
                                <p className='text-white'>1</p>
                            </div>
                        </div>
                        <div className="w-[50px] bg-white p-[10px] border-none rounded-[4px] items-center justify-center flex gap-[5px]">
                            <img src={Heart} alt="Heart" />
                        </div>
                        <div className="w-[50px] bg-white p-[10px] border-none rounded-[4px] items-center justify-center flex gap-[5px]">
                            <a href="/login">
                                <img src={Group} alt="Group" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full border px-[200px]">
                <div className="flex justify-between items-center p-[20px]">
                    <div className="flex gap-[20px] items-center">
                        <div className="border p-[10px]">{t('allCategories')}</div>
                        <a href="/" className='hover:text-blue-400'>{t('home')}</a>
                        <a href="/shop" className='hover:text-blue-400'>{t('shop')}</a>
                        <a href="/product" className='hover:text-blue-400'>{t('product')}</a>
                        <a href="/pages" className='hover:text-blue-400'>{t('pages')}</a>
                        <a href="/about" className='hover:text-blue-400'>{t('about')}</a>
                    </div>
                    <p>{t('contact')}: (808) 555-0111</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
