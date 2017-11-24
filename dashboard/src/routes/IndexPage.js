import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import Index from '../components/IndexPage/Index';

function IndexPage( {loaction} ) {
    return (
            <MainLayout location={location}>
                <div>
                    <Index />
                </div>
            </MainLayout>
        );
}

export default connect()(IndexPage);
