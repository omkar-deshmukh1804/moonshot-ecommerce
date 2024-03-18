import { useEffect, useState } from 'react';
import {TfiAngleDoubleLeft, TfiAngleDoubleRight} from 'react-icons/tfi'

const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1)
    const [pageRange] = useState(7);
    const [currentPageRange, setCurrentPageRange] = useState([])

    useEffect(() => {
        let currentRangeStart = currentPage - 1
        setCurrentPageRange(() => pageNumbers.slice(currentRangeStart,pageRange))
        setCurrentPage(currentPage)

    },[0])

    const handlePartialRenderNext = () => {
        let startIndexOfNextRange = currentPageRange.length
        let endIndexOfNextRange = startIndexOfNextRange + pageRange
        setCurrentPageRange(() => pageNumbers.slice(startIndexOfNextRange,endIndexOfNextRange))
        setCurrentPage(currentPageRange.length+1)
    }

    const handlePartialRenderPrev = () => {
        let endIndexOfPrevRange = (currentPageRange[0]) - 1
        let startIndexOfPrevRange = (endIndexOfPrevRange - pageRange)
        setCurrentPageRange(() => pageNumbers.slice(startIndexOfPrevRange,endIndexOfPrevRange))
        setCurrentPage(startIndexOfPrevRange+1)
        
    }

    
    return (
        <div className="w-full px-5
            flex justify-start items-center flex-wrap gap-5 mb-5"
        >
            <TfiAngleDoubleLeft
                onClick={handlePartialRenderPrev}
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
            <TfiAngleDoubleRight
                onClick={handlePartialRenderNext}
            />

        </div>
    );
}

export default Pagination;
