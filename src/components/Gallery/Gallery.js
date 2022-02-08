import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import * as S from './GalleryStyles.js';

import controlLeft from '../../assets/media/left.png';
import controlRight from '../../assets/media/right.png';

const Gallery = ({ type }) => {
    const onResize = () => setDims({ width: window.innerWidth, height: window.innerHeight });
    const onScroll = (e) => {
        if (data.current.completed || data.current.lastDate == data.current.lastDatePrev || fetching.current)
            return;

        const bottom = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight

        if (bottom <= 40) {
            getImages(data.current.lastDate);
            data.current.lastDatePrev = data.current.lastDate;
        }
    };

    const fetching = useRef(false)

    const [state, setState] = useState({
        images: [],
        key: 0
    });

    const [dims, setDims] = useState({});

    const data = useRef({
        lastDatePrev: null,
        lastDate: new Date(),
        completed: 0
    });

    const getImages = async (date) => {
        fetching.current = true;

        const url = `${window.env.SERVER}/image/get30`;
        const res = await axios.get(url, {
            params: {
                type: type,
                date: date
            }
        });

        const map = {};

        if (res.data.images.length < 30) 
            data.current.completed = 1;

        for (let i = 0; i < res.data.images.length; ++i) {
            const img = res.data.images[i];

            if (!(img.userId in map)) {
                try {
                    const res2 = await axios.get(`${window.env.SERVER}/image/author/${img.userId}`);

                    map[img.userId] = { 
                        av: `https://cdn.discordapp.com/avatars/${img.userId}/${res2.data.avatar}`,
                        user: res2.data.username 
                    };
                }

                catch (error) { }
            }

            state.images.push({
                src: `${window.env.SERVER}/image/get/${img.filename}.${img.extension}`,
                width: img.width,
                height: img.height,
                av: map[img.userId]?.av,
                user: map[img.userId]?.user ?? 'unknown user'
            });
            
            setState({ ...state });
        }

        if (state.images.length) 
            data.current.lastDate = res.data.images.at(-1).date;

        fetching.current = false 
        onScroll()
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        window.addEventListener('scroll', onScroll);
        
        const fetch = async () => {
            await getImages(new Date().toISOString());
        };

        fetch();

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const onClick = (e) => {
        const key = parseInt(e.currentTarget.getAttribute('data-key'));
        const img = state.images[key];
        const disp = document.querySelector('#display');
        
        disp.querySelector('#display__user-name').innerHTML = img.user;
        disp.querySelector('#display__user-image').src = img.av;
        disp.querySelector('#display__image').src = img.src;

        disp.style.cssText += `
            visibility: visible;
            z-index: 2;
        `;

        setState({...state, key: key});
    };

    const onClose = (e) => {
        const disp = document.querySelector('#display');

        disp.style.cssText += `
            visibility: hidden;
            z-index: -1;
        `;
    };

    const slide = (e, i) => {
        let key = state.key + i;

        if (key < 0 || key >= state.images.length)
            return;

        setState({...state, key});
        const img = state.images[key];
        const disp = document.querySelector('#display');
        
        disp.querySelector('#display__user-name').innerHTML = img.user;
        disp.querySelector('#display__user-image').src = img.av;
        disp.querySelector('#display__image').src = img.src;

        const cr = disp.querySelector('#display__control-right');
        const cl = disp.querySelector('#display__control-left');

        cr.disabled = (key == state.images.length - 1);
        cr.style.opacity = (key == state.images.length - 1) ? 0.5 : 1;
        
        cl.disabled = (key == 0);
        cl.style.opacity = (key == 0) ? 0.5 : 1;
    };

    const images = () => {           
        const ret = [];
        let i = 0;
        
        while (i < state.images.length) {
            let j = i;
            let maxh = 0, totw = 0, asum = 0;
            let maxc = Math.ceil(window.innerWidth / 200); 

            do {
                let img = state.images[j];

                maxh = Math.max(maxh, img.height);
                asum += img.width / img.height;
                totw = asum * maxh;
                ++j;
            }
            while (j < state.images.length && maxh * (document.body.clientWidth - 10 * (j - i)) / totw > 200 && --maxc > 0);

            for (let k = i; k < j; ++k) {
                let img = state.images[k];
                let ht = Math.floor(maxh * (document.body.clientWidth - 10 * (j - i)) / totw);
                let wt = Math.floor(img.width / img.height * ht);
                data.current[k] = { ht, wt }

                ret.push(                      
                    <S.ImageContainer key={k} data-key={k} onClick={onClick}>
                        <S.UserContainer>
                            <img src={img.av}></img>
                            <p>{img.user}</p>
                        </S.UserContainer>
                        
                        <img className='image' src={img.src} width={wt.toString()} height={ht.toString()}></img>
                    </S.ImageContainer>
                );
            } 

            i = j;
        }

        return ret;
    };

    const slideImages = () => {
        const ret = [];

        let len = (window.innerWidth <= 800 ? 3 : 5); 
        let i = Math.max(0, state.key - (len == 3 ? 1 : 2));
        i = Math.min(i, Math.max(0, state.images.length - len));
    
        for (let j = i; j < Math.min(state.images.length, i + len); j++) 
            ret.push({ ...state.images[j], key: j});

        return ret;
    };

    return (
        <S.Gallery>
            {images()}

            <S.Display id='display'>
                <div id='display__inner'>
                    <div id='display__user'>
                        <img id='display__user-image'></img>
                        <p id='display__user-name'></p>
                        <button id='display__close' onClick={onClose}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <span id='display__hr' />

                    <div id='display__image-container'>
                        <button id='display__control-left' onClick={(e) => slide(e, -1)}>
                            <img src={controlLeft}></img>
                        </button>

                        <button id='display__control-right' onClick={(e) => slide(e, 1)}>
                            <img src={controlRight}></img>
                        </button>

                        <img id='display__image'></img>
                    </div>

                    <div id='display__slide'>
                        <div id='display__slide-inner'>
                            {slideImages().map((img, i) => (
                                <img key={i} src={img.src} className={(img.key == state.key) ? 'active' : ''} onClick={e => slide(e, img.key - state.key)}></img>
                            ))}
                        </div>
                    </div>
                </div>
            </S.Display>
        </S.Gallery>
    );
};

export default Gallery;