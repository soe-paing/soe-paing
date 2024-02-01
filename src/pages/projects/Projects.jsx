import React, { useContext } from 'react';
import './projects.css';
import projectI1 from '../../assests/img/project1.png';
import projectI2 from '../../assests/img/project2.png';
import projectI3 from '../../assests/img/project3.png';
import Btn from '../../components/buttons/Btn';
import useIntersectionObserver from '../../customHook/useInterSectionObserver';
import { ActiveContext } from '../../Container';

export default function Projects({id}) {
    const {activeItem, setActiveItem} = useContext(ActiveContext);
    const targetRef = useIntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveItem(id);
        }
      });
    }, { threshold: 0.5 });

    const projects = [
        {
            img: projectI3,
            title: "International Space Station",
            descrip: "Let's live view where the International Space Station at. (Be patient and wait the loading of 3D modal.)",
            include: [
                {language: "JS", percent: "94.0%"},
                {language: "html", percent: "4.1%"},
                {language: "CSS", percent: "1.9%"},
            ],
            view: "https://herry-jacker.github.io/international-space-station/",
            source: "https://github.com/Herry-Jacker/international-space-station"
        },
        {
            img: projectI1,
            title: "Todo List",
            descrip: "List your todo-list and plan daily or upcoming 30 days!",
            include: [
                {language: "html", percent: "55.9%"},
                {language: "JS", percent: "34.4%"},
                {language: "CSS", percent: "9.7%"},
            ],
            view: "https://herry-jacker.github.io/SKYLIST/",
            source: "https://github.com/Herry-Jacker/SKYLIST"
        },
        {
            img: projectI2,
            title: "Typing Test",
            descrip: "How many WPM can you type(only Eng text) with this web? This is easy to test like monkeytype.com.",
            include: [
                {language: "JS", percent: "85.9%"},
                {language: "CSS", percent: "9.3%"},
                {language: "html", percent: "4.8%"},
            ],
            view: "https://herry-jacker.github.io/Skytype/",
            source: "https://github.com/Herry-Jacker/Skytype"
        }
    ]

  return (
    <div ref={targetRef} className='projects-section' id='projects'>
        <h2 className='fw-bold text-center colorP'>My Projects</h2>
        <div className='container'>
            <div className='row justify-content-between'>
                {
                    projects.map( prj => (
                        <div className="p-4 p-md-3 col-12 col-md-6">
                            <div className='cardC'>
                                <img src={prj.img} className='projectImg'/>
                                <div>
                                    <div className='clickPath'>
                                    </div>
                                    <div className='action'>
                                        <div>
                                            <h4 className='ms-3'>{prj.title}</h4>
                                            <span>{prj.descrip}</span>
                                        </div>
                                        <div className='text-center'>
                                            <div>
                                            {
                                                prj.include.map(inc => (
                                                    <>
                                                    <span className='mx-2'>
                                                        <strong className='colorP'>{inc.language} - </strong>
                                                        {inc.percent}
                                                    </span>
                                                    </>
                                                ))
                                            }
                                            </div>
                                            <a href={prj.view}><Btn text="view web page" /></a>
                                            <a href={prj.source}><Btn text="view Source"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
