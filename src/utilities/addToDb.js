import { toast } from "react-toastify";

const getStoredReadList = () =>{
    // read-list
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
            return []
    }
}

const addToStoredReadList = (id)  =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, `Already exists in the read list`)
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
        toast.success('This Book is added to the read-list')
    }
}




const getStoredWishlist = () => {
    const storedList =  localStorage.getItem('wishlist');
    if(storedList){
        const storedListStr = JSON.parse(storedList);
        return storedListStr
    }
    else {
        return []
    }
}

const addToWishlist = (id) =>{
    const storedList = getStoredWishlist();
    if(storedList.includes(id)){
        alert(`${id} Already exists in wishlist`)
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wishlist', storedListStr)
    }
}


export {addToStoredReadList,getStoredReadList,getStoredWishlist,addToWishlist }