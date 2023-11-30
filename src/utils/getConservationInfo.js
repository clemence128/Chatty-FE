const getConservationInfo = (conservation, currentUserId) => {
    
    const {isGroup, users, name, avatar} = conservation;
    if(isGroup) return {name, avatar};

    const info = users.filter(user => user._id !== currentUserId)[0];
    return {name: info.name, avatar: info.avatar}
}

export default getConservationInfo;