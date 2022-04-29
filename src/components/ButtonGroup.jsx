import React from 'react'
import { OutlineButton } from './Button'
import { useDispatch,useSelector } from 'react-redux'
import { collectionChange } from '../features/collections/changeCollectionsSlice'
import { changeCategory } from '../features/collections/categorySlice'
import {useParams} from 'react-router-dom'
const ButtonGroup = props => {
    const {category} = useParams()
    const {btnState} = props
    const dispatch = useDispatch()
    const stateCollection = useSelector(state => state.changeCollections[btnState])
    const categoryState = useSelector(state => state.category.productCategory)
    let bts = null
    if (category === undefined) {
         bts = [
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
    }
    else if (category === 'nam' || 'nu') {
            bts = [
                {
                    type: 'hot',
                    title:'hot'
                },
                {
                    type:'ao',
                    title:'Áo'
                },
                {
                    type: 'quan',
                    title:'Quần'
                }
            ]
    }
   const  onClicked = (btnType) => {
       if (category === undefined) {
        dispatch(collectionChange({[btnState]: btnType}))
       }
       else if (category === 'nam' || 'nu') {
        dispatch(changeCategory({productCategory: btnType}))
       }
   }
    return (
        <div className="btns-group">
            {
                bts.map((btn,index)=> (
                    <OutlineButton  key={index} onClick = {() => onClicked(btn.type)} 
                    className = {category === undefined ? stateCollection === btn.type ? 'active' : '' : categoryState === btn.type ? 'active' : ''}
                    >{btn.title}</OutlineButton>
                    // <button  key={index} onClick = {() => dispatch(collectionChange({typeCollection: btn.type}))}>{btn.title}</button>
                ))
            }
        </div>
    )
}

export default ButtonGroup