import React from 'react'

function NewItem() {
    return (
        <div className='newitemlist'>
            <h1>
                봄이니까 설레는 신상 아이템</h1>
            <NavLink to={
                item.Url
            }>
                <img className="eimage3"
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

export default NewItem
