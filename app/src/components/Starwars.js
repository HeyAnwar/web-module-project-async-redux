import { useEffect } from 'react';
import { connect } from 'react-redux';
import { data } from '../actions/index'

const CharacterList = (props) => {
    useEffect(() => {
        props.data();
    }, [])
    return (
        <div className='container'>
            
        </div>
    )
}