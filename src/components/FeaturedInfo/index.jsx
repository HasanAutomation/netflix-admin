import React from 'react';
import './FeaturedInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featured-item'>
        <span className='featured-title'>Revenue</span>
        <div className='featured-money-container'>
          <span className='featured-money'>INR 2240</span>
          <span className='featured-money-rate'>
            -11.4
            <ArrowDownward className='featured-icon negetive' />
          </span>
        </div>
        <span className='featured-sub'>Compared to Last month</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Sales</span>
        <div className='featured-money-container'>
          <span className='featured-money'>INR 2240</span>
          <span className='featured-money-rate'>
            11.4
            <ArrowUpward className='featured-icon' />
          </span>
        </div>
        <span className='featured-sub'>Compared to Last month</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Cost</span>
        <div className='featured-money-container'>
          <span className='featured-money'>INR 2240</span>
          <span className='featured-money-rate'>
            -11.4
            <ArrowDownward className='featured-icon negetive' />
          </span>
        </div>
        <span className='featured-sub'>Compared to Last month</span>
      </div>
    </div>
  );
}
