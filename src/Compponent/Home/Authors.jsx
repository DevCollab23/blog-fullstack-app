
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import React from 'react'
import { useState } from 'react'

function Authors() {

    const [Authors, setAuthors]= useState([
        {Author: 'Floyd Miles', Profession:'Content Writer', Images:'Images/Blog-home-img7.png',id:1 },
        {Author: 'Jenny Wilson', Profession:'Creative Director', Images: '/Images/Blog-home-img5.png', id:2 },
        {Author: 'Leslie Alexander', Profession:'Web Engineer', Images:"/Images/Blog-home-img4.png", id:3},
        {Author: 'Dianne Russell', Profession:'Software Engineer', Images:"/Images/Blog-home-img6.png", id:4}
        ])

  return (
    <div className='Author_list'>
        {
            Authors.map((Author)=>(
                <div className="Author_details" key={Author.id}>

                <div className="Author_img">
                    <img src={Author.Images} alt="" />
                </div>
                    <div className="Author_name">{Author.Author}</div>
                    <div className="Author_profession">{Author.Profession}</div>
                    <div className="Author_socials">
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaLinkedin/>
                    </div>

                </div>
            ))
        }

    </div>
  )
}
export default Authors