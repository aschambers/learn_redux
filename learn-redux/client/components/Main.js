// need react module
import React from 'React'
// router uses link method of react-router.
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				{/*pass on parents elements down to children (single.js and photogrid.js)*/}
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});
// export the const Main in this file/available for use in another file.
export default Main;