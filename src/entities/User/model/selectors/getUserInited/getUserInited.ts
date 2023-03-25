import { StateSchema } from '@/app/providers/StoreProvider'

export const getUserInited = (state: StateSchema) => state.User._inited
