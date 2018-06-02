import React from 'react';

const HomePage = ({ history }) => {
    return (
        <div>
            <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui text container">
                    <h1 className="ui inverted stackable header">
                        <img
                            className="ui image massive"
                            src="/assets/logo.png"
                            alt="logo"
                        />
                        <div className="content">Re-vents</div>
                    </h1>
                    <h2>Do whatever you want to do</h2>
                    <div
                        onClick={() => history.push('/events')}
                        className="ui huge white inverted button"
                    >
                        Get Started
                        <i className="right arrow icon" />
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <a href="http://www.freepik.com" title="Freepik" />
                <a href="https://www.flaticon.com/" title="Flaticon" />
                <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                />
            </div>
        </div>
    );
};

export default HomePage;
