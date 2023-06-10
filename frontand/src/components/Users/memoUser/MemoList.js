import React , {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux';


import { fetchMemo } from '../../../api/memo';
import { setMemo }  from '../../../Store/memoSlice'
import MemoCard from './MemoCard';

const MemoList = () => {

  const memo = useSelector (state=>state.memo)
  console.log('memo',memo)

const dispatch = useDispatch()
const getMemo = async()=>{
  const data = await fetchMemo()
  // console.log(data.memo,'data get  ')
  dispatch(setMemo(data.memo))
}

useEffect(()=>{
  getMemo()
},[])




  return (
    <div>{
    memo.map( (el)=>(<MemoCard minimemo={el} />))
    }
    </div>
  )
}

export default MemoList