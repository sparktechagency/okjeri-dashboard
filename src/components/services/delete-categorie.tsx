import React from "react";


interface DeleteCategorieProps {
    open: boolean;
    setIsOpen: (value: boolean) => void;
}

const DeleteCategorie:React.FC<DeleteCategorieProps> = ({ open, setIsOpen }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center  bg-white p-4">
                <div className="flex flex-col items-center text-center max-w-md w-full space-y-4">
                    <svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 3.11111H33L29.8571 0H14.1429L11 3.11111H0V9.33333H44M3.14286 49.7778C3.14286 51.428 3.8051 53.0107 4.9839 54.1776C6.1627 55.3444 7.7615 56 9.42857 56H34.5714C36.2385 56 37.8373 55.3444 39.0161 54.1776C40.1949 53.0107 40.8571 51.428 40.8571 49.7778V12.4444H3.14286V49.7778Z" fill="#EF4444" />
                    </svg>

                    <h2 className="text-[18px] font-semibold text-[#EF4444]">Are you sure to  delete <br /> this category ?</h2>
                    <p className="text-[14px] text-[#AFAFAF] leading-relaxed">
                        Service providers will not be able to <br /> find this category.
                    </p>
                    <div className="flex justify-between gap-4 w-full mt-4">
                        <button
                            onClick={() => setIsOpen(!open)}
                            className="w-[50%] border font-semibold  py-3 px-2 rounded-full cursor-pointer">canecel</button>
                        <button
                            onClick={() => setIsOpen(!open)}
                            className="w-[50%] bg-[#EF4444] text-[#ffff] font-semibold py-3 px-2 rounded-full cursor-pointer">Yes, delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteCategorie
