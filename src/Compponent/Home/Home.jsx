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
          <div className='all_post_text'>
            <AllPost/>
            <AllPost/>
            <AllPost/>
            <AllPost/>
            <AllPost/>
          </div>
        </div>
      </section>

      <section className="home_section_three">
        <div className="section_three_container">

        <div className="about_us_container">
          <div className='about_us'>About Us</div>
          <h1>
            We are a community of content writers who share their 
            learnings
          </h1>
          <div className='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sunt, illo. Lorem ipsum dolor sit. Lorem ipsum dolor 
              sit amet consectetur adipisicing elit. Voluptatibus 
              nulla eos suscipit nostrum praesentium eligendi
               tempore sapiente sunt 
              reprehenderit ipsam!
          </div>
          <div className='read_more'>Read more</div>

        </div>

        <div className="about_us_container">
          <div className="about_us">Our Mission</div>
          <h1>
            Creating Valuable content for
             creatives all around the world
          </h1>
          <div className='p'>
            Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Rerum eaque consectetur, qui veniam autem dolores
            pariatur Lorem ipsum dolor sit amet consectetur adipisicing elit.
            ex perferendis repellendus deleniti? Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Molestiae, error.
          </div>
        </div>
        </div>
      </section>

      <section className="home_section_four">
        <h1>Choose A Category</h1>

        <div className="category_container">
          <div className='category_container_box'>
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet 
              consectetur adipisic elit. Lorem 
              ipsum dolor 
              sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className='category_container_box'>
            <h3>StartUp</h3>
            <p>Lorem ipsum dolor sit amet 
              consectetur adipisic elit. Lorem 
              ipsum dolor 
              sit amet consectetur adipisicing elit
            </p>
          </div>
          <div className='category_container_box'>
            <h3>Economy</h3>
            <p>Lorem ipsum dolor sit amet 
              consectetur adipisic elit. Lorem 
              ipsum dolor 
              sit amet consectetur adipisicing eli
            </p>
          </div>
          <div className='category_container_box'>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet 
              consectetur adipisic elit. Lorem 
              ipsum dolor 
              sit amet consectetur adipisicing eli
            </p>
          </div>
        </div>
          
      </section>

      <section className='home_section_five'>
        <div className="section_five_img_cont">
          <img src="./Images\Home-img\Blog-home-img3.png" alt="" />
          <div className='section_five_text_cont'>
            <div className='sub_header'>
              Why WE Started
            </div>
            <h2 className='section_five_header'>
              It started out as a simple 
              idea and evolved into passion
            </h2>
            <p className='section_five_p'>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Culpa, sequi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Esse, illo.
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Vitae, nobis!
            </p>

            <button className='section_five_button'>Discover our story</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home