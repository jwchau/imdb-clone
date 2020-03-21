import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer id='footer'>
                <div className='social-media'>
                    <FontAwesomeIcon key={0} className='fai github' icon={faGithub}/>
                    {/* https://github.com/jwchau */}
                    <FontAwesomeIcon key={1} className='fai faLinkedin' icon={faLinkedin}/>
                    {/* https://linkedin.com/in/jwchau */}
                    <FontAwesomeIcon key={1} className='fai faAngellist' icon={faAngellist}/>
                    {/* https://angel.co/john-chau-4 */}
                    
                    {/* <div className='icon'><img src={window.instaURL} /></div> */}
                </div>

                <div className='dead misc'>
                    <div className='misc-link'>Get the IMDb App</div>
                    <div className='misc-link'>Help</div>
                    <div className='misc-link'>Site Index</div>
                    <div className='misc-link'>IMDbPro</div>
                    <div className='misc-link'>IMDb TV</div>
                    <div className='misc-link'>Box Office Mojo</div>
                    <div className='misc-link'>Press Room</div>
                    <div className='misc-link'>Advertising</div>
                </div>

                <div className='dead misc'>
                    <div className='misc-link'>Jobs</div>
                    <div className='misc-link'>Conditions of Use</div>
                    <div className='misc-link'>Privacy Policy</div>
                    <div className='misc-link'>Internet-Based Ads</div>
                </div>
       

                

                <div className='company-logo'> ∞ </div>
                <div className='founded'>© 1900-2077 by John, Inc.</div>
            </footer>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);