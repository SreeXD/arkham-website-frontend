import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import * as events from '../../utils/events.js';
import { HomeWrapper, Intro, IntroContainer, 
         Sections, Section, SectionContent, SectionVideo, SectionTitle, SectionText,
         Indicators, Indicator, ButtonGroup1, Button1, Button2, Text1, Text2, AboutUs, About, Top, JoinSection } from './HomeStyles.js';

import introAnim from '../../assets/media/intro_anim.mp4';
import anim1 from "../../assets/media/a.mp4";
import anim2 from "../../assets/media/b.mp4";
import anim3 from "../../assets/media/c.mp4";

const Home = () => {
    useEffect(() => {
        document.addEventListener('scroll', events.homeScroll);

        return () => {
            document.removeEventListener('scroll', events.homeScroll);
        };
    }, []);

    return (
        <HomeWrapper>
            <IntroContainer>
                <Intro src={introAnim} autoPlay muted></Intro>
            </IntroContainer>

            <Sections className='sections'>
                <Indicators>
                    <Indicator className='indicator' />
                    <Indicator className='indicator' />
                    <Indicator className='indicator' />
                </Indicators>

                <Section className='section'>
                    <SectionContent>
                        <SectionTitle>
                            Cool people
                        </SectionTitle>

                        <SectionText>
                            We’re a group of people interested in gaming, anime, movies, science etc
                        </SectionText>
                        
                        <a target="_blank" href={window.env.INVITE}>
                            <Button2 color='#4881db'>Become one of us</Button2>
                        </a>
                    </SectionContent>

                    <SectionVideo src={anim1} className='section-video' muted autoPlay></SectionVideo>
                </Section>

                <Section className='section'>
                    <SectionContent>
                        <SectionTitle>
                            We share a lot
                        </SectionTitle>

                        <SectionText>
                            Memes, art, breath-taking pictures... its a crime to enjoy them alone
                        </SectionText>

                        <Text1>
                            check out art and pictures from our members
                        </Text1>

                        <ButtonGroup1>
                            <Link to='/arts'>
                                <Button1 color='#9057EE'>Art</Button1>
                            </Link>

                            <Link to='/pictures'>
                                <Button1 color='#14DBDB'>Pictures</Button1>
                            </Link>
                        </ButtonGroup1>
                    </SectionContent>

                    <SectionVideo src={anim2} className='section-video' muted autoPlay></SectionVideo>
                </Section>
               
                <Section className='section'>
                    <SectionContent>
                        <SectionTitle>
                            A Lot of bots!
                        </SectionTitle>

                        <SectionText>
                            We're a mini community for dank, karuta, tofu, owo and more!
                        </SectionText>

                        <Text2>
                            Learn more about these bots <Top href='https://top.gg/' target='_blank'>here</Top>
                        </Text2>
                    </SectionContent>
         
                    <SectionVideo src={anim3} className='section-video' muted autoPlay></SectionVideo>
                </Section>
            </Sections>

            <JoinSection>
                <h1>Join Arkham!</h1>

                <p>So what are you thinking about? Join arkham right now! <br /> unless you are from figma and want to sue me for stealing your website design.. please don't :c</p>

                <iframe className='widget' src={`https://discord.com/widget?id=${window.env.GUILDID}&theme=dark`} allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

                <div className='join-marquee'>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                    <span>{window.env.INVITE.substr(8)}</span>
                </div>
            </JoinSection>
            
        </HomeWrapper>
    );
};

export default Home;