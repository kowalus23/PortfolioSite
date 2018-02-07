import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';



export class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="title-about">
                    <p>
                        <span data-text="A">A</span><span data-text="B">B</span><span
                        data-text="O">O</span><span data-text="U">U</span><span data-text="T">T</span>
                    </p>
                </div>
                <div className="text-about">
                    <p>Moja kariera zawodowa była mocno związana z handlem, głównie międzynarodowym. Z tego
                        doświadczenia wyniosłem bardzo dużo niezbędnej wiedzy zarówno marketingowej jak i
                        przedsiębiorczej. Jednakże z miłości do technologii, zależało mi na czymś więcej, żeby
                        zakasać rękawy i rozwinąć w sobie głęboką pasję tworzenia, nie tylko grafik, ale i
                        aplikacji, gier, systemów. Poznać ten świat od jego wewnętrznej strony (od kodu). Zawsze
                        fascynowałem się tym jak tworzone są gry czy też aplikacje, dlatego tym bardziej środowisko
                        programistyczne mnie bardzo absorbuje.</p>
                </div>
                <div className="return-btn">
                    <Link to="/">
                        <button><span>RETURN</span></button>
                    </Link>
                </div>
                <div className="skills-about">
                    <div className="Iam">
                        <p>I'm learning and using:</p>
                        <b>
                            <div className="innerIam">
                                HTML <span>/</span> CSS <span>/</span> SASS<br/>
                                JS <span>/</span> REACT <span>/</span> jQuery<br/>
                                BOOTSTRAP <span>/</span> WEBPACK <span>/</span> GIT<br/>
                                ADOBE CC <span>(</span> PS<span>,</span> AI<span>,</span> AE <span>)</span> <br/>
                                <span>open for more <span>/</span> new as well!</span>
                            </div>
                        </b>

                    </div>
                </div>
            </div>
        )
    }
}