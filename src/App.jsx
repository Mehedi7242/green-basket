
import './App.css'
import Banner from './components/Banner';
import ComboSelector from './components/ComboSelector';
import ProductCategory from './components/ProductCategory';
import ProductContainer from './components/ProductContainer';


function App() {
  return (
    <>
      <Banner></Banner>
      <ProductCategory></ProductCategory>
      <ProductContainer></ProductContainer>
      <ComboSelector></ComboSelector>
    </>
  )
}

export default App
