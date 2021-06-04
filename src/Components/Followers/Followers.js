import React from 'react';
import './Followers.scss'

const followStat = [{
    title: 'synths',
    value: 42,
    id: 1
}, {
    title: 'followers',
    value: 110,
    id: 2
}, {
    title: 'following',
    value: 322,
    id: 3
}]

export default function Followers() {
        const stat = followStat.map(({title, value, id}) => {
            return(
                <div className='followers-item' key={id}>
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