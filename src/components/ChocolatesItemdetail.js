import React, { useEffect } from 'react';
import style from '../css/Chocolates.module.css';
import { getChocolateDetails } from '../actionCreators/chocolateAC';
import { connect } from 'react-redux';

function ChocolatesItemDetails(props) {
	useEffect(() => {
		props.dispatch(getChocolateDetails(props.match.params.id));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={style.chocolates1}>
			<p className={style.txtstyle}> {props.chocolateDetail.name}</p>
			<img src={props.chocolateDetail.image} alt="" />
			<div className={style.txtstyle}>{props.chocolateDetail.desc}</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		chocolateDetail: state.chocolateDetail
	};
}
export default connect(mapStateToProps)(ChocolatesItemDetails);
