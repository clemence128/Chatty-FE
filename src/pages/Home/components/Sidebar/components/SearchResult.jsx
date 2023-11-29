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
    <div className='flex-1 overflow-y-scroll bg-base-100'>
      {result.length === 0 
      ? <div className='h-full flex items-center justify-center'>
        <p className='text-error'>Oops! No matching results found.</p>
      </div> 
      : result.map(el => <SearchResultItem result={el} key={el._id}/>)}
    </div>
  )
}
