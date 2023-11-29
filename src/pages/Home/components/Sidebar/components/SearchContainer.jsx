import React, { useState } from 'react'
import Search from './Search'
import SearchResult from "./SearchResult"

export default function SearchContainer() {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

  return (
    <div className='h-full flex flex-col'>
        <Search search={search} setIsSearching={setIsSearching} isSearching={isSearching} setSearch={setSearch} setIsLoading={setIsLoading} setSearchResult={setSearchResult}/>
        <SearchResult loading={isLoading} result={searchResult} isSearching={isSearching}/>
    </div>
  )
}
