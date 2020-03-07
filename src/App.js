import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Header from './Components/Header.js'
import Skillset from './Components/Skillset.js';
import ResumeItem from './Components/ResumeItem.js';
import Link from './Components/Link.js';

import imgScoreGriffith from './images/ScoreGriffith.png'

const Container = styled.div`
    max-width:1140px;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: 768px) {
        padding: 0 30px;
    }
`;

const ResumeTitle = styled.h3`
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 35px;

    @media(max-width:768px){
        font-size:11px;
    }
`;

const Blockquote = styled.blockquote`
    font-size: 32px;
    line-height: 1.5em;
    opacity: 0.6;
    max-width: 970px;
    font-weight: 300;
    margin: 0 0 80px;
    p{
        margin: 0;
    }
    @media(max-width:768px){
        text-align: center;
        font-size: 17px;
        margin-bottom: 50px;
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    font-size: 17px;
    font-weight: 500;
    opacity: 0.85;
`;

const App = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = event => {
        i18n.changeLanguage(i18n.language !== 'fr' ? 'fr' : 'en');
    };

    return (
        <Container className="App">
            <Header handleLanguageChange={handleLanguageChange} language={i18n.language} />
            <Blockquote>
                <p>{t('entete.1.prelink')}<Link href={t('entete.1.links.1.href')} title={t('entete.1.links.1.title')} />{t('entete.1.postlink')}</p>
                <p>
                    {t('entete.2.prelink')}<Link href={t('entete.2.links.1.href')} title={t('entete.2.links.1.title')} />{t('entete.2.postlink')}&nbsp;
                    {t('entete.3.prelink')}<Link href={t('entete.3.links.1.href')} title={t('entete.3.links.1.title')} /> & <Link href={t('entete.3.links.2.href')} title={t('entete.3.links.2.title')} />{t('entete.3.postlink')}&nbsp;
                    {t('entete.4.prelink')}
                </p>
            </Blockquote>
            <section>
                <ResumeTitle>{t('competences.title')}</ResumeTitle>
                <Skillset details={[
                    {
                        title: t('competences.details.en.title'),
                        content: t('competences.details.en.content')
                    },
                    {
                        title: t('competences.details.de.title'),
                        content: t('competences.details.de.content')
                    },
                    {
                        title: t('competences.details.webdev.title'),
                        content: t('competences.details.webdev.content')
                    },
                    {
                        title: t('competences.details.dbdev.title'),
                        content: t('competences.details.dbdev.content')
                    },
                    {
                        title: t('competences.details.appdev.title'),
                        content: t('competences.details.appdev.content')
                    },
                    {
                        title: t('competences.details.devops.title'),
                        content: t('competences.details.devops.content')
                    },
                    {
                        title: t('competences.details.project.title'),
                        content: t('competences.details.project.content')
                    },
                    { content: t('competences.details.linux.content') },
                    { content: t('competences.details.locomotion.content') },
                ]} />
                <ResumeTitle>{t('experience.title')}</ResumeTitle>
                <ResumeItem
                    title={t('experience.items.projects.title')}
                    links={[
                        {
                            href: t('experience.items.projects.links.1.href'),
                            title: t('experience.items.projects.links.1.title')
                        },
                        {
                            href: t('experience.items.projects.links.2.href'),
                            title: t('experience.items.projects.links.2.title')
                        }
                    ]}
                    details={[
                        t('experience.items.projects.details.1'),
                        t('experience.items.projects.details.2'),
                        t('experience.items.projects.details.3'),
                        t('experience.items.projects.details.4'),
                        t('experience.items.projects.details.5'),
                        t('experience.items.projects.details.6')
                    ]}
                    dates={t('experience.items.projects.dates')}
                />
                <ResumeItem
                    title={t('experience.items.exo.title')}
                    links={[
                        {
                            href: t('experience.items.exo.links.1.href'),
                            title: t('experience.items.exo.links.1.title')
                        }
                    ]}
                    details={[
                        t('experience.items.exo.details.1'),
                        t('experience.items.exo.details.2'),
                        t('experience.items.exo.details.3'),
                        t('experience.items.exo.details.4'),
                        t('experience.items.exo.details.5'),
                        t('experience.items.exo.details.6'),
                        t('experience.items.exo.details.7')
                    ]}
                    dates={t('experience.items.exo.dates')}
                />

                <ResumeItem
                    title={t('experience.items.griffith.title')}
                    links={[
                        {
                            href: t('experience.items.griffith.links.1.href'),
                            title: t('experience.items.griffith.links.1.title')
                        }
                    ]}
                    details={[
                        t('experience.items.griffith.details.1'),
                        t('experience.items.griffith.details.2')
                    ]}
                    detailsLinks={[{ href: imgScoreGriffith, title: t('experience.items.griffith.detailsLinks.1.title') }]}
                    dates={t('experience.items.griffith.dates')}
                />
                <ResumeItem
                    title={t('experience.items.exo.title')}
                    links={[
                        {
                            href: t('experience.items.exo.links.1.href'),
                            title: t('experience.items.exo.links.1.title')
                        }
                    ]}
                    details={[
                        t('experience.items.exo.details.1'),
                        t('experience.items.exo.details.2'),
                        t('experience.items.exo.details.3'),
                        t('experience.items.exo.details.4'),
                        t('experience.items.exo.details.5'),
                        t('experience.items.exo.details.6'),
                        t('experience.items.exo.details.7')
                    ]}
                    dates={t('experience.items.exo.dates')}
                />
                <ResumeItem
                    title={t('experience.items.monabee.title')}
                    links={[
                        {
                            href: t('experience.items.monabee.links.1.href'),
                            title: t('experience.items.monabee.links.1.title')
                        }
                    ]}
                    details={[
                        t('experience.items.monabee.details.1'),
                        t('experience.items.monabee.details.2')
                    ]}
                    dates={t('experience.items.monabee.dates')}
                />
                <ResumeItem
                    title={t('experience.items.icof.title')}
                    links={[
                        {
                            href: t('experience.items.icof.links.1.href'),
                            title: t('experience.items.icof.links.1.title')
                        }
                    ]}
                    details={[
                        t('experience.items.icof.details.1'),
                        t('experience.items.icof.details.2')
                    ]}
                    dates={t('experience.items.icof.dates')}
                />
                <ResumeItem
                    title={t('experience.items.mache.title')}
                    links={[
                        {
                            href: t('experience.items.mache.links.1.href'),
                            title: t('experience.items.mache.links.1.title')
                        }
                    ]}
                    details={[
                        t('experience.items.mache.details.1'),
                        t('experience.items.mache.details.2'),
                        t('experience.items.mache.details.3')
                    ]}
                    dates={t('experience.items.mache.dates')}
                />
            </section >
            <Footer>
                {t('footer.title')}&nbsp;
                <Link href={t('footer.link.href')} title={t('footer.link.title')} />
            </Footer>
        </Container >
    );
}

export default App;
