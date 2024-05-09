import './ServicesPage.css'
import Card from "./Card/Card"
function ServicesPage() {
  return (
    <div className='servicepage'>
        <h1 className='ServiceHeading'>Services</h1>
      <div className="services">
      
        <Card tittle="Car Pooling" disc="gfdgdgfddg"/>
        <Card tittle="Public transport" disc="gfdgdgfddg" />
        <Card tittle="Walking / Cycling" disc="gfdgdgfddg"/>
      </div>

    </div>
  );
}

export default ServicesPage;
