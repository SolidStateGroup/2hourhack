/**
 * Created by niallquinn on 22/08/2016.
 */

const TheComponent = class extends React.Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		return (

			<div className="app-container container">
				<h1>Why use Bootstrap?</h1>
				<p>Bootstrap’s flexbox grid includes support for every feature from their <a
					href="http://v4-alpha.getbootstrap.com/layout/grid/">default grid system</a>, and then some.</p>

				<p>It allows us to use all the regular repsonsive breakpoint classes without having to write an entire
					grid system from scratch</p>

				<ul>
					<li><a href="http://v4-alpha.getbootstrap.com/layout/grid#sass-mixins">Grid mixins</a> and <a
						href="http://v4-alpha.getbootstrap.com/layout/grid#predefined-classes">predefined classes</a>
						include support for flexbox. Just <a
							href="http://v4-alpha.getbootstrap.com/getting-started/flexbox">enable flexbox support</a>
						to utilize them as you would otherwise.
					</li>
					<li>Nesting, offsets, pushes, and pulls are all supported in the flexbox grid system.</li>
					<li>Flexbox grid columns without a set width will automatically layout with equal widths. For
						example, four columns will each automatically be 25% wide.
					</li>
					<li>Flexbox grid columns have significantly more alignment options available, including vertical
						alignment.
					</li>
					<li>Unlike the default grid system where a grid column starts as full-width in the <code>xs</code>
						tier, flexbox requires a <code>.col-(breakpoint)</code> class for each tier.
					</li>
				</ul>


				<h3>Familiar syntax</h3>

				<p>We need a grid system for any project we do, so the fact it has a familiar syntax that other
					potential new starters /front ends would be comfortable with is a bonus, and quicker to get them
					started with on the boilerplate then if we had our own custom grid styes (which would likely be
					based on a bootstrap style of grid anyway).</p>

				<h3>Well supported and well documented</h3>

				<p>Lots of examples available.</p>

				<h3>Lightweight</h3>

				<p>We only need to use the Bootstrap Grid system, The functional side of the boilerplate for popovers,
					modals etc can be done in React. So don’t need all the extra weight of the Bootstrap JS components
					etc.</p>


				<h3>Source files</h3>
				<p>The bootstrap source files are currently located in the <code>node_modules</code> folder, which
					allows for easy updating via npm.</p>

				<h3>Project SCSS files</h3>
				<p>Specifiic <code>scss</code> files created for the project and custom styles live in the styles
					directory. Include what you want from bootstrap in the <code>_bootstrap.scss</code> file located in
					the 3rdParty folder.</p>

				<p>Create your own project specific styles and put them in the relevant directory ie.
					<code>project</code> folder</p>

				<p>We overwrite Bootstraps variables in the <code>_variables.sccs</code> file located in our styles
					directory.</p>
			</div>

		);
	}
};

TheComponent.propTypes = {};

module.exports = TheComponent;

