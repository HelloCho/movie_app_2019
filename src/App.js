import React from 'react';
import PropTypes from "prop-types";

const foodList = [
  {
      id:1,
      rating:4,
      name:"Salad",
      image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&w=1000&q=80"},
  {
      id:2,
      rating:3,
      name:"Hamburger",
      image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190725-delish-air-fryer-burger-ehg-vertical-2-1565299632.png?crop=1.00xw:0.667xh;0,0.193xh&resize=480:*"},
  {
      id:3,
      rating:1,
      name:"Pizza",
      image:"https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg"},
  {
      id:4,
      rating:5,
      name:"Turkey",
      image:"https://o.aolcdn.com/images/dims3/GLOB/crop/7216x4733+0+281/resize/1028x675!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Ff399350347cf76a6e1045da718c853ff%2F205833374%2Fholiday-turkey-dinner-picture-id836012728"},
  {
      id:5,
      rating:7,
      name:"Pasta",
      image:"https://amp.insider.com/images/5ad792ffbd967146008b45d9-750-562.jpg"},
  {
      id:6,
      rating:6,
      name:"Salmon",
      image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/22/0/FNCC_bobby-flay-salmon-brown-sugar-mustard_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541357316.jpeg"},
]

function Food({name, picture, rating}) {
  return <div>
    <h1>I like {name}</h1>
    <p>{rating} / 5.0</p>
    <img src={picture} width='500' height='500' alt={name}/>
  </div>;
}
Food.propTypes = {
  name : PropTypes.string.isRequired,
  foodImage : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}
function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}


function App() {
  return (<div className="App">
    <h1>Hello!!</h1>
    {/* {foodList.map(food => {
      return <Food key={food.id} name={food.name} picture={food.image} />;
    })}
    <hr/> */}
    {foodList.map(renderFood)}
  </div>);
}

export default App;
