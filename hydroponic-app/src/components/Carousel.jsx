import React from 'react'
import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div>
        <div className={styles.parent}>
            <img src='https://cdn.pixabay.com/photo/2017/03/13/12/16/greenhouse-2139526__480.jpg' alt="nature1" />
            <img src='https://media.istockphoto.com/id/615420436/photo/food-production-in-hydroponic-plant-lettuce.jpg?s=612x612&w=0&k=20&c=U2pqQ9YBwG53zbehepR3IwQyHTySk0W1LJcJzbnJkdk=' alt="nature1" />
            <img src='https://c8.alamy.com/comp/WA2GR8/fresh-organic-vegetable-grown-using-aquaponic-or-hydroponic-farming-WA2GR8.jpg' alt="nature1" />
        </div>
    </div>
  )
}

export default Carousel