import React from 'react';
import PropTypes from 'prop-types';

function FileList(props) {

    return <ul>
        {props.my_list.map(item => (<li key={item.id}> {item}</li>))}
    </ul>;
}

export default FileList

FileList.propTypes = {
    my_list: PropTypes.string,
    url: PropTypes.string
};