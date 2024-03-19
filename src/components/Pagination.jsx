import { useEffect, useState } from 'react';
import { TfiAngleLeft, TfiAngleRight, TfiAngleDoubleLeft, TfiAngleDoubleRight } from 'react-icons/tfi'


const Pagination = ({
    numberOfPages,
    currentPage,
    setCurrentPage,
    currentPageRange,
    loadPrevPage,
    loadNextPage,
    loadNextSetOfPageButtons,
    loadPrevSetOfPageButtons
    
    }) => {

    return (
        <div className="w-full px-5
            flex justify-start items-center flex-wrap gap-5 mb-5"
        >
            <TfiAngleDoubleLeft
                onClick={() => loadPrevSetOfPageButtons()}
            />
            <TfiAngleLeft
                onClick={() => loadPrevPage(currentPage)}
            />
            {
                
                currentPageRange.map((page,index) => (
                    <p key={index}
                        className={`text-xl font-medium
                        ${currentPage == page ? 'text-black' : 'text-[#ACACAC]'}`}
                    >
                        <a onClick={() => setCurrentPage(page)} href="#">
                            {page}
                        </a>
                        
                    </p>
                ))
            }
            <TfiAngleRight
                onClick={() => loadNextPage(currentPage)}
            />
            <TfiAngleDoubleRight
                onClick={() => loadNextSetOfPageButtons()}
            />

        </div>
    );
}

export default Pagination;
