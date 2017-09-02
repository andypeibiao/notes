import React from 'react';
import ReactDOM from 'react-dom';
import {DatePicker} from 'antd';
import moment from 'moment';
import './index.css';

const { RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';

ReactDOM.render(
    <div>
        <DatePicker format={dateFormat}/>
        <br />
        <RangePicker
            defaultValue={[moment(), moment('2017/08/31', dateFormat)]}
            format={dateFormat}
        />
    </div>
    , document.getElementById("demo")
);