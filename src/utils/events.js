import gsap from 'gsap';

const indicators = document.getElementsByClassName('indicator');
const sections = document.getElementsByClassName('section');
const sectionVideos = document.getElementsByClassName('section-video');
let last = [null, null, null], vis = [0, 0, 0];

export const homeScroll = (e) => {
    for (let i = 0; i < 3; ++i) {
        const section = sections[i];
        const sectionVideo = sectionVideos[i];

        const sectionBB = section.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const sbbTop =  winHeight - sectionBB.top;
        const sbbView = sbbTop / winHeight;

        if (sbbView >= 0.5 && sbbView <= 1.5 && !vis[i]) {
            if (last[i]) last[i].kill(); 

            last[i] = gsap.to(sectionVideo, { duration: 0.3, opacity: 1, delay: 0.3 });
            sectionVideo.currentTime = 0;
            sectionVideo.play();
            indicators[i].classList.add('on');
            vis[i] = 1
        }
        
        if (vis[i] && (sbbView < 0.5 || sbbView > 1.5)) {
            if (last[i]) last[i].kill(); 

            last[i] = gsap.to(sectionVideo, { duration: 0.3, opacity: 0 });
            indicators[i].classList.remove('on');
            vis[i] = 0;
        }
    }
};