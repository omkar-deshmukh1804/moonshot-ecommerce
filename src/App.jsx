import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Header from './components/Header'
import SaleBanner from './components/SaleBanner';
import CategoryList from './components/CategoryList';

function App() {

  faker.seed(100)
  const[products, setProducts] = useState([])

  useEffect(() => {
    generateFakeData()
  },[])

  const generateFakeData = () => {
    let localProduct = []
    for (let i = 0; i < 20; i++){
      localProduct.push({
        productID: i,
        productName : faker.commerce.product()
      })
    }
    setProducts([...localProduct])
  }

  return (
    <>
      <Header />
      <SaleBanner />
      <CategoryList products={products} />

    </>
  )
}

export default App
