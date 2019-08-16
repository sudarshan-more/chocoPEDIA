import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../css/Search.css';
import '../css/Chocolates.module.css';
import { getsearch } from '../actionCreators/searchAC';

function Search(props) {
	useEffect(
		() => {
			props.dispatch(getsearch(props.match.params.searchval));
		},
		[ props ]
	);

	return (
		<div>
			<form>
				<div>
					<h1 align="center">searchedchocolates</h1>
					{props.searchedchocolate &&
						props.searchedchocolate.length > 0 &&
						props.searchedchocolate.map((c) => (
							<ol align="center" key={c.id}>
								{c.name}
								<img src={c.image} alt="" />
							</ol>
						))}
				</div>
				<div>
					<h1 align="center">searchedbrand</h1>
					{props.searchedbrand.map((b) => (
						<ol align="center" key={b.id}>
							{b.name}
							<img src={b.logo} alt="" />
						</ol>
					))}
				</div>
			</form>
		</div>
	);
}
function mapStateToProps(state) {
	return {
		searchval: state.searchval,
		searchedchocolate: state.searchedchocolate,
		searchedbrand: state.searchedbrand
	};
}
const connectedcomponent = connect(mapStateToProps);
export default connectedcomponent(Search);
