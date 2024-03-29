export {
  userReducer,
  userActions
}
  from './model/slice/userSlice'

export { getUserRoles, isUserAdmin, isUserManager } from './model/selectors/roleSelectors'

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserInited } from './model/selectors/getUserInited/getUserInited'

export type { UserSchema,  User} from './model/types/user'
export { UserRole } from '@/entities/User/model/consts/consts'
