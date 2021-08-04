import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Temp from '../components/Temp'
import { fetchHtml } from '../Redux/Actions/Appactions'
import Editor from './Editor'

const Editors = ({ match }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHtml(match.params.id))
    }, [dispatch, match])
    const { data } = useSelector(state => state.template)
    return (
        <div>
            {data ? <Editor Temp={<Temp></Temp>} id={match.params.id} ></Editor> : (
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    )
}

export default Editors
