import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer id='footer'>
                <div className='social-media'>
                    <div className='icon'><img src="assets/fb_logo.svg"/></div>
                    <div className='icon'><img src="assets/insta_logo.svg" /></div>
                    <div className='icon'><img src="assets/twitch_logo.svg" /></div>
                    <div className='icon'><img src="assets/twitter_logo.svg" /></div>
                    <div className='icon'><img src="assets/youtube_logo.svg" /></div>
                </div>

                <div className='misc'>
                    <div class='misc-link'>Get the IMDb App</div>
                    <div class='misc-link'>Help</div>
                    <div class='misc-link'>Site Index</div>
                    <div class='misc-link'>IMDbPro</div>
                    <div class='misc-link'>IMDb TV</div>
                    <div class='misc-link'>Box Office Mojo</div>
                    <div class='misc-link'>Press Room</div>
                    <div class='misc-link'>Advertising</div>
                </div>

                <div className='misc'>
                    <div class='misc-link'>Jobs</div>
                    <div class='misc-link'>Conditions of Use</div>
                    <div class='misc-link'>Privacy Policy</div>
                    <div class='misc-link'>Internet-Based Ads</div>
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