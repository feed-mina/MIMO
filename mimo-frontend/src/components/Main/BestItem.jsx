import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
function BestItem({item}) {
    return (
        <div className='bestitem'>
            <h1>
                피부톤별 화장품 추천</h1>
            <NavLink to={
                item.Url
            }>
                <img className="main_event1"
                    src={
                        item.imgUrl
                    }/></NavLink>

            <h1 className='main_prod'>
                {
                item.title
            }</h1>
            <p>{
                item.price
            }</p>
            <p className="main_prod_gray">
                {
                item.content
            }</p>
        </div>
    )
}

export default BestItem
