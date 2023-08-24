const friends = ['mamun', 'abdul', 'solimullah', 'habibullah', 'emon'];

const findLength = (friends) =>{
    let newFriends = [];
    for(friend of friends){
        const length = friend.length;
        if(length % 2 === 0){
            newFriends.push(friend);
        }
    }
    return newFriends;
}

const result = findLength(friends);
console.log(result);