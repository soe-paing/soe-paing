import React from 'react';
import './about.css';
import myImg from '../../assests/img/my-img.jpg'
import skills from '../../assests/img/skills.svg'
import Skills from '../../components/svg/skills';

export default function About() {
    const aboutMe = [
        {title: "A Front End Developer : ", descrip: "with a passion for crafting seamless and visually appealing digital experiences. Armed with a keen eye for design and a love for clean, efficient code, I bring to life the creative visions of websites and applications."},
        {title: "Experience", descrip: "1 year"},
        {title: "Age", descrip: "23 years old"},
        {title: "Location", descrip: "Mandalay, Myanmar"},
        {title: "GitHub", descrip: "https://github.com/herry-jacker/"},
        {title: "Certificates", descrip: ["Professional Web Developer(fairway)", "ITPEC (IP)"]},
        {title: "Other Experience", descrip: ["fO supervisor / assistant manager <br/> ( sagaing golden world hotel )", "web designer ( Vertical Solution Group )"]}
    ]
  return (
    <>
    <div className='about-section'>
        <h2 className='text-light fw-bold text-center colorP'>About My Resume</h2>
        <div className='container'>
            <div className='d-flex justify-content-center row'>
                <div className='col-12 col-sm-10 col-md-6 d-flex align-items-center justify-content-center'>
                    <img src={myImg}></img>
                </div>
                <div className='col-12 col-sm-10 col-md-6 text-light'>
                    <div>
                        <strong>A Front End Developer : </strong><span>with a passion for crafting seamless and visually appealing digital experiences. Armed with a keen eye for design and a love for clean, efficient code, I bring to life the creative visions of websites and applications.</span>
                    </div>
                    <table>
                        <tr>
                            <td>Experience : </td>
                            <td>1 year</td>
                        </tr>
                        <tr>
                            <td>Age : </td>
                            <td>23 years old</td>
                        </tr>
                        <tr>
                            <td>Location : </td>
                            <td>Mandalay, Myanmar</td>
                        </tr>
                        <tr>
                            <td>GitHub : </td>
                            <td>https://github.com/herry-jacker/</td>
                        </tr>
                        <tr>
                            <td>Certificates :</td>
                            <td>Professional Web Developer (fairway)</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                Other Experiences:
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2}>
                                <details>
                                    <summary>Seemore</summary>
                                    <li className='text-light'>FO supervisor / assistant manager <br/> ( sagaing golden world hotel )</li>
                                    <li className='text-light'>Web designer <br/> ( Vertical Solution Group )</li>
                                </details>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div className='skills-section'>
        <div className='container'>
            <Skills/>
        </div>
    </div>
    </>
  )
}
