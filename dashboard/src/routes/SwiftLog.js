import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import Monitor from '../components/Monitor';
import MainLayout from '../components/MainLayout/MainLayout';

function SwiftLog({ dispatch,location,monitor }) {

  	return (
    	<MainLayout location={location}>
    		<div className={styles.normal}>
    			<Monitor />
    		</div>
    	</MainLayout>
  	);
}

function mapStateToProps({ monitor }){
	return { monitor }
}

export default connect()(SwiftLog);