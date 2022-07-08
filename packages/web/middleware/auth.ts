import { useSession } from "@tg/stores/session";


export default defineNuxtRouteMiddleware((to, from) => {
	// const session = useSession()
	// auth
	if (true) {
		// 未登入
		sessionStorage.clear()
		console.log('權限不足');
		return navigateTo('/login')
	}
})
