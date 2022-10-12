import {useContext} from 'react'
import UserInfo from '../context/UserInfoProvider'

const useInfoProvider = () => {
  return useContext(UserInfo);
}

export default useInfoProvider