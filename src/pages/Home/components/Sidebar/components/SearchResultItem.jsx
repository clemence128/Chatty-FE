import React from 'react'

export default function SearchResultItem({result}) {
    const {_id, name, avatar} = result;
  return (
    <div>{name}</div>
  )
}
