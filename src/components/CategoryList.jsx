import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react'
import {Pagination} from './index'

const CategoryList = () => {
    
    faker.seed(100)
    const [toogleUnique] = useState(false)
    const [products, setProducts] = useState([])
    const [currentPageProducts, setCurrentPageProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);
    const [pageRange] = useState(7);
    const [pageNumberButtons, setPageNumberButtons] = useState([])
    const [currentPageRange, setCurrentPageRange] = useState([])
    

    useEffect(() => {
        generateFakeData(100)
    },[])

    useEffect(() => {
        setCurrentPageProducts([...currentRecords])
        computeInitialPagination()
    }, [products])
    
    useEffect(() => {
        setCurrentPageProducts([...currentRecords])
    }, [currentPage])


    //fetching products..
    const generateFakeData = (count) => {
        const localProducts = []
        const productNames = new Set();

        if (!toogleUnique) {
            for (let i = 0; i < count; i++){ 
                localProducts.push({
                    id: faker.number.bigInt(),
                    productName: faker.commerce.product()
                })
            }
        } else {
            while(localProducts.length < count){
                const productName = faker.commerce.product()
                if (!productNames.has(productName)) {
                    productNames.add(productName)
                    localProducts.push({
                        id: faker.number.bigInt(),
                        productName: productName
                    })
                }
            } 
        }
        setProducts([...localProducts])
    }
    
    //computing pagination variables ...
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
    const numberOfPages = Math.ceil(products.length / recordsPerPage)
    
    //fn: compute pagination onpageLoad
    const computeInitialPagination = () => {
        const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1)
        setPageNumberButtons([...pageNumbers]) //Sets all page buttons ranging from 1..n
        let currentRangeStart = currentPage - 1
        setCurrentPageRange(() => pageNumbers.slice(currentRangeStart,pageRange))  //extracts first'n' group of buttons - 7 in this case. 
    }

    //fn: loadPrevPage
    const loadPrevPage = (currentPage) => {
        if (currentPage == (pageNumberButtons[0])) {
            alert("You are on the first page")
        }else if (currentPage == currentPageRange[0])
        {
            loadPrevSetOfPageButtons(currentPage-1)
        }else {
            setCurrentPage((currentPage) => currentPage-1)
        }
    }

    //fn: loadNextPage
    const loadNextPage = (currentPage) => {
        if (currentPage == (pageNumberButtons.slice(-1)[0])) {
            alert("You are on the last page")
        } else if(currentPage == (currentPageRange.slice(-1)[0])){
            loadNextSetOfPageButtons()
        }
        else {
            setCurrentPage((currentPage) => currentPage+1)
        }
    }
    

    //fn: loadNextSetOfPageButtons - loads next set of 'n' page buttons
    const loadNextSetOfPageButtons = () => {
        let startIndex = currentPageRange.slice(-1)[0]
        let endIndex = startIndex + pageRange
        let updatedPageButtons = pageNumberButtons.slice(startIndex, endIndex)
        
        if (startIndex>=(pageNumberButtons.slice(-1)[0])) {
           alert("Error!")
        } else {
            setCurrentPageRange([...updatedPageButtons])
            setCurrentPage(() => updatedPageButtons[0])
            
        }

    }

    //fn: loadPrevSetOfPageButtons
    const loadPrevSetOfPageButtons = (currentPage) => {
        console.log()
        let endIndex = currentPageRange[0]-1
        let startIndex = endIndex - pageRange
        let updatedPageButtons = pageNumberButtons.slice(startIndex, endIndex)
        
        if (startIndex < 0 )
        {
           alert("Error!")
        } else {
            setCurrentPageRange([...updatedPageButtons])
            if (currentPage) {
                setCurrentPage(() => updatedPageButtons.slice(-1)[0])
            } else {
                setCurrentPage(() => updatedPageButtons[0])
            }
            
        }
    }

    
    return (
        <section className='w-full mt-2 flex justify-center items-center'>
            <div className='w-[90%] sm:w-2/5 min-h-full 
                border-[#C1C1C1] border rounded-md flex flex-col justify-center items-center'
            >
                <h3 className='text-center 
                    sm:text-2xl text-xl font-bold mt-2 leading-normal'
                >
                    Please mark your interests!
                </h3>
                <p className="text-center text-sm mt-2 font-normal">We will keep you notified.</p>

                <div className='w-full px-10 flex flex-1 
                flex-col justify-center items-start mt-4 mb-2'
                >
                    <p className='text-lg 
                        font-semibold leading-normal'
                        >My saved interests!
                    </p>

                    {
                        currentPageProducts.map((product) => (
                            <div className="flex flex-1 justify-start items-center 
                                w-full mt-3 mb-2"
                                key={product.id}
                            >
                                <input type="checkbox" id="1"
                                    className=" checked:accent-black 
                                    w-[20px] h-[20px]"/>
                                <label htmlFor="1"
                                    className="px-2 text-l"
                                >
                                    {product.productName}
                                </label>
                            </div>
                        ))
                    }
                </div>
                <Pagination
                    numberOfPages={numberOfPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    currentPageRange={currentPageRange}
                    loadPrevPage={loadPrevPage}
                    loadNextPage={loadNextPage}
                    loadNextSetOfPageButtons={loadNextSetOfPageButtons}
                    loadPrevSetOfPageButtons={loadPrevSetOfPageButtons}
                    
                />
            </div>
        </section>
    );
}

export default CategoryList;
