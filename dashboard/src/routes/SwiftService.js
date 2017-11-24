import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import Service from '../components/Service/Service';
import MainLayout from '../components/MainLayout/MainLayout';

function SwiftService({ dispatch,location,monitor }) {

  	return (
    	<MainLayout location={location}>
    		<div>
    			<Service />
    		</div>
    	</MainLayout>
  	);
}

function mapStateToProps({ monitor }){
	return { monitor }
}

export default connect()(SwiftService);