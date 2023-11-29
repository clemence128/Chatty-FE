import React from 'react'
import SearchResultItem from './SearchResultItem'

export default function SearchResult({loading, result, isSearching}) {
  if(!isSearching) return <></>

  if(loading){
    return <div className='flex-1 flex items-center justify-center'>
      <span className='loading loading-spinner loading-lg text-primary'></span>
    </div>
  }
  return (
    <div className='flex-1'>
      {result.map(el => <SearchResultItem result={el} key={el._id}/>)}
    </div>
  )
}
