import React, { useEffect, useState } from 'react'
import ConservationsContainer from './ConservationsContainer'
import Search from './Search';
import SearchResult from './SearchResult';
import { getConservations } from '../../../../../redux/conservationSlice';
import {useDispatch} from "react-redux"

export default function SidebarContent() {

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConservations())
  
  }, [])

  return (
    <div className='h-full flex flex-col'>
      <Search search={search} setIsSearching={setIsSearching} isSearching={isSearching} setSearch={setSearch} setIsLoading={setIsLoading} setSearchResult={setSearchResult}/>
      {isSearching 
        ? <SearchResult loading={isLoading} result={searchResult} isSearching={isSearching}/>
        : <ConservationsContainer/>
      }
    </div>
  )
}
