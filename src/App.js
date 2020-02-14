import React from 'react';
import '@automattic/calypso-color-schemes';
import { Button, Card } from '@automattic/components';
import Gridicon from 'gridicons';

import './app.scss';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			step: 0,
		}
	};

	nextStep = () => {
		let { step } = this.state;
		step++;

		this.setState( { step } );
	};

	renderQuickStartCard = () => {
		return (
			<>
				<Card className="placeholder__checklist" />
				<Card className="quick-start">
					<h3 className="card__heading">Set up time with an expert</h3>
					<div className="card__faces">
						<img className="card__faces-face" src="https://1.gravatar.com/avatar/794d92c8978dce970a84901e89a44d0b?s=80&d=identicon&r=G" />
						<img className="card__faces-face" src="https://0.gravatar.com/avatar/fafc2374c06e05eb9a1217214cb1b25d?s=80&d=identicon&r=G" />
						<img className="card__faces-face" src="https://0.gravatar.com/avatar/c8642ef9c5c3ef3491cf2659c345f0e9?s=80&d=identicon&r=G" />
						<img className="card__faces-face" src="https://2.gravatar.com/avatar/57509a6de7585125357530e2f3c3af1b?s=80&d=identicon&r=G" />
						<img className="card__faces-face" src="https://2.gravatar.com/avatar/e589ec6c9b981d9da221f206f49dec3d?s=80&d=identicon&r=G" />
					</div>
					<p className="card__description">
						Schedule a one-on-one orientation session to set up your site and learn more about WordPress.com
					</p>
					<Button onClick={ this.nextStep }>Find a time</Button>
				</Card>
			</>
		);
	};

	renderScheduler = () => {
		return (
			<Card className="scheduler">
				<img src="https://wordpress.com/calypso/images/illustrations/illustration-start.svg" />
				<h2 className="card__heading scheduler__heading">WordPress.com Quick Start Session Scheduler</h2>
				<p className="card__description scheduler__description">
					Use the tool below to book your in-depth support session.
				</p>

				<Button onClick={ this.nextStep }>Complete scheduling flow</Button>
			</Card>
		);
	};

	renderScheduledSessionCard = () => {
		return (
			<>
				<Card className="placeholder__checklist" />
				<Card className="quick-start">
					<Gridicon icon="calendar" className="session__icon" />
					<h3 className="card__heading">Your Quick Start Session</h3>
					<div className="quick-start__date-time">
						<h5>Friday, February 14</h5>
						<span>10:15am EST</span>
					</div>
				</Card>
			</>
		);
	};

	render() {
		const { step } = this.state;

		return (
			<div className="container">
				{ step === 0 && this.renderQuickStartCard() }

				{ step === 1 && this.renderScheduler() }

				{ step === 2 && this.renderScheduledSessionCard() }
			</div>
		);
	}
}

export default App;
