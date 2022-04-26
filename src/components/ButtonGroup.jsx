import React from 'react'
import { OutlineButton } from './Button'
import { useDispatch,useSelector } from 'react-redux'
import { collectionChange } from '../features/collections/changeCollectionsSlice'
const ButtonGroup = props => {
    const dispatch = useDispatch()
    const typeCollection = useSelector(state => state.changeCollections.typeCollection)
    const bts = [
        {
            type: 'cafe',
            title:'Cafe'
        },
        {
            type:'mat-chim',
            title:'Mắt chim'
        },
        {
            type: 'coolmax',
            title:'Coolmax'
        },
        {
            type: 'airycool',
            title:'Airy cool'
        },
        {
            type: 'vo-hau',
            title:'Vỏ hàu'
        },
        {
            type: 'compact',
            title:'Cool compact'
        },
        {
            type: 'airmax',
            title:'Airmax'
        },
        {
            type: 'askin',
            title:'askin'
        }
    ]
    return (
        <div className="btns-group">
            {
                bts.map((btn,index)=> (
                    <OutlineButton  key={index} onClick = {() => dispatch(collectionChange({typeCollection: btn.type}))} 
                    className = {typeCollection === btn.type ? 'active' : ''}
                    >{btn.title}</OutlineButton>
                    // <button  key={index} onClick = {() => dispatch(collectionChange({typeCollection: btn.type}))}>{btn.title}</button>
                ))
            }
        </div>
    )
}

export default ButtonGroup