import React, { Component } from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {
    return (
        <div>
            <Sparklines height={100} width={160} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean"/>
            </Sparklines>
        </div>
    );
}