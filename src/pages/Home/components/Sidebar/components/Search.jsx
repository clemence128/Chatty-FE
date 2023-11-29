import React from 'react'
import UserService from "./../../../../../services/user.api"
import { IoMdSearch, IoMdClose } from "react-icons/io";

export default function Search({search, setSearch, setIsLoading, setSearchResult, setIsSearching, isSearching}) {
  
  const serachSubmitHandler = async(e) => {
    e.preventDefault();
    setIsSearching(true);
    setIsLoading(true);
    const data = await UserService.searchUsers(search);
    setSearchResult(data.data);
    setIsLoading(false);
  }

  const closeSearchHandler = (e) => {
    e.preventDefault();
    setIsSearching(false);
    setSearch("")
  }

  return (
    <form onSubmit={serachSubmitHandler} className='relative'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Enter name' className='p-2 bg-white w-full outline-none border focus:ring-primary focus:border-primary text-base-content transition'/>
      {isSearching ?
        <button type='button' onClick={closeSearchHandler} className='outline-none btn btn-sm btn-ghost rounded-none h-full flex items-center justify-center absolute top-0 right-0'>
          <IoMdClose className='w-5 h-5'/>
        </button>
        : <button className='outline-none btn btn-sm btn-ghost rounded-none h-full flex items-center justify-center absolute top-0 right-0'>
          <IoMdSearch className='w-5 h-5'/>
        </button>}
    </form>
  )
}
