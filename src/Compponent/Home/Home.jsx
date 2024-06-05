import React from 'react'
import '../Home/Home.css'
import AllPost from './AllPost'

function Home() {
  return (
    <div className='Home_container'>
      <section className='Home_hero_container'>

          <div className='home_hero_image'>
            <img src="./Images\Home-img\Blog-home-img.png" alt=""  />
          </div>

          <div className="home_hero_text_container">

              <div className="home-pre-header">Posted on <span>startup</span> </div>
              <h2>Step-by-step guide to choosing great font pairs</h2>
              <p>By <span>James West</span> |  May 23, 2022</p>
              <div className='text'>
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
              </div>
              <button>Read More</button>

          </div>
      </section>

      <section className="home_section_two">

        <div className="featured_post_container">
          <h1>Featured Post</h1>
          <div className="featured_img">
            <img src="./Images\Home-img\blog-home-img2.png" alt="" />
          </div>
          <small>By <span> John Doe</span>  | May 23 2022</small>
          <div className='featured_post_text'>
          Lorem ipsum dolor sit amet,
           consectetur adipiscing elit, sed do eiusmod tempor.
          </div>
          <p>
          Duis aute irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident.
          </p>
          <button>Read More</button>
        </div>

        <div className="all_post_container">
          <h1>All Post</h1>
.
.
          <div className='all_post_text'>
            <AllPost/>
            <AllPost/>
            <AllPost/>
            <AllPost/>
            <AllPost/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home