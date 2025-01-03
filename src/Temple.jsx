import React from 'react';
import '../scss/Temple.scss';
import Carousel from './carousel';

export default function Temple() {

    return (
        <>
            <main>
                <div id="section-1"><Carousel /></div>

                <div id="section-2">Section2</div>

                <div id="section-3">Section3</div>

                <div id="section-4">Section4</div>

            </main>
        </>
    )
}