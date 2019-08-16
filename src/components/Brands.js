import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getBrandDetails, getChocolateBrand } from '../actionCreators/chocolatebrandAC';
import BrandsItem from './BrandsItem';

function Brands(props) {
	useEffect(() => {
		props.dispatch(getChocolateBrand());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleBrandsClick = (id) => {
		props.dispatch(getBrandDetails(id));
	};
	if (!props.isLoggedIn) {
		alert('Please login ');
		return <Redirect to="/login" />;
	}
	return (
		<div>
			{props.brands.map((b) => (
				<BrandsItem
					key={b.id}
					id={b.id}
					name={b.name}
					desc={b.desc}
					logo={b.logo}
					handleClick={handleBrandsClick}
				/>
			))}
		</div>
	);
}
function mapStateToProps(state) {
	return {
		brands: state.Brands,
		isLoggedIn: state.isLoggedIn
	};
}
export default connect(mapStateToProps)(Brands);
