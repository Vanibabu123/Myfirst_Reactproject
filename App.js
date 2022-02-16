import logo from './logo.svg';
import './App.css';
import ProductCard from './productCard';
import Card from './card';

function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Card productName="iphone"></Card>
        </div>
      
        <div className="col-lg-3">
          <Card productName="Samsung"></Card>
        </div>
        <div className="col-lg-3">
          <Card productName="One Plus"></Card>
        </div>
        
        <div className="col-lg-3">
          <Card productName="Xiomi"></Card>
        </div>
        
      </div>
    </div>
   </>  
  );
}

export default App;
