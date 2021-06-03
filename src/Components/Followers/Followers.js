import React from 'react';
import './Followers.scss'

const followStat = [{
    title: 'synths',
    value: 42
}, {
    title: 'followers',
    value: 110
}, {
    title: 'following',
    value: 322
}]

export default function Followers() {
        const stat = followStat.map(({title, value}) => {
            return(
                <div className='followers-item'>
                    <span className='followers-value'>{value}</span>
                    <span className='followers-title'>{title}</span>
                </div>
            )
        })
    return(
        <div className='followers-block'>
            {stat}
        </div>
    )
}