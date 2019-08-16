import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBrandDetails } from '../actionCreators/chocolatebrandAC';
import style from '../css/Chocolates.module.css';

function BrandDetails(props) {
	useEffect(() => {
		props.dispatch(getBrandDetails(props.match.params.id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<form className={style.form1}>
			<div className={style.chocolates1}>
				{props.chocolates.map((b) => (
					<div key={b.id}>
						<li>
							{' '}
							<p className={style.txtstyle}>{b.name}</p>
							<div>
								<img src={b.image} alt=""/>
							</div>{' '}
							<p className={style.txtstyle}>{b.desc}</p>
						</li>
					</div>
				))}
			</div>
		</form>
	);
}

function mapStateToProps(state) {
	return {
		chocolates: state.brandDetails
	};
}

export default connect(mapStateToProps)(BrandDetails);
