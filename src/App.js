import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'; 
import profile from './assets/profile.png'

class App extends Component {
	state = { displayBio: false };

	toggleDisplayBio = () => {
		this.setState({displayBio: !this.state.displayBio});
	}

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is Omar. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Downey and enjoy coding every day.</p>
                            <p>My favorite languages are Python and JavaScript.</p>
                            <p>Besides coding, I also love dicovering new music and spending time with my dog Jimmy.</p>
							<div>
								<button onClick={this.toggleDisplayBio}>Show Less</button>
							</div>
                        </div>
                     ) : (
						 <div>
							 <button onClick={this.toggleDisplayBio}>Read more</button>
						 </div>
					 )
                }
				<hr />
				<Projects />
				<hr />
				<SocialProfiles />
            </div>
        )
    }
}

export default App;
