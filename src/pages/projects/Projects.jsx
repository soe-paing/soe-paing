import React from 'react';
import './projects.css';
import styled from 'styled-components';

const Card = styled.div`
    border-radius: 8px;
    padding: 5px;
    aspect-ratio: 5/2;
    background-color: var(--primary);
    box-shadow: 2px 2px 9px rgba(175,165,145,0.8);
    backdrop-filter: blur(28px) !important;
`

export default function Projects() {
  return (
    <div className='projects-section'>
        <h2 className='text-light fw-bold text-center colorP'>My Projects</h2>
        <div className='container'>
            <div className='row justify-content-between'>
                <div className="p-4 p-md-3 col-12 col-md-6">
                    <Card/>
                </div>
                <div className="p-4 p-md-3 col-12 col-md-6">
                    <Card/>
                </div>
            </div>
            <div className='row justify-content-between'>
                <div className="p-4 p-md-3 col-12 col-md-6">
                    <Card/>
                </div>
                <div className="p-4 p-md-3 col-12 col-md-6">
                    <Card/>
                </div>
            </div>
        </div>
    </div>
  )
}
