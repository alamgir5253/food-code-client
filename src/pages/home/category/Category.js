import React from 'react';
import  categoryimage1 from '../../../resource/category/category-image-1.jpg'
import  categoryimage2 from '../../../resource/category/category-image-2.jpg'
import  categoryimage3 from '../../../resource/category/category-image-3.jpg'
import './Category.css'
const Category = () => {
  return (
    <section>
      <div className='section-title'>
      <h1>OUR FOOD CATEGORIES</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='category-container'>
          <div className='image-container'>
          <img className='category-image' src={categoryimage1} alt="" />
          </div>
          <h2 className='category-title'>Beef Steak</h2>
          <p className='category-discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nam molestias recusandae quisquam incidunt molestiae accusamus dolorum quas nobis, dolore temporibus cumque maxime rem est aliquam et beatae modi voluptatem neque iure. Vitae voluptas quis architecto explicabo vero molestias aliquam nihil dicta quo beatae, dignissimos quasi illo voluptate optio numquam!</p>
          <button className='category-btn'>check item</button>
        </div>
        <div className='category-container'>
          <div className='image-container'>
          <img className='category-image' src={categoryimage2} alt="" />
          </div>
          <h2 className='category-title'>Miscellaneous</h2>
          <p className='category-discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nam molestias recusandae quisquam incidunt molestiae accusamus dolorum quas nobis, dolore temporibus cumque maxime rem est aliquam et beatae modi voluptatem neque iure. Vitae voluptas quis architecto explicabo vero molestias aliquam nihil dicta quo beatae, dignissimos quasi illo voluptate optio numquam!</p>
          <button className='category-btn'>check item</button>
        </div>
        <div className='category-container'>
          <div className='image-container'>
          <img className='category-image' src={categoryimage3} alt="" />
          </div>
          <h2 className='category-title'>Elegant Apparel</h2>
          <p className='category-discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nam molestias recusandae quisquam incidunt molestiae accusamus dolorum quas nobis, dolore temporibus cumque maxime rem est aliquam et beatae modi voluptatem neque iure. Vitae voluptas quis architecto explicabo vero molestias aliquam nihil dicta quo beatae, dignissimos quasi illo voluptate optio numquam!</p>
          <button className='category-btn'>check item</button>
        </div>
      </div>
    </section>
  );
};

export default Category;