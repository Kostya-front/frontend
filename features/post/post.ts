import {defineStore} from "pinia";
import {ref} from "@vue/reactivity";
import instance from "~/shared/api/axios";

export interface IPost {
    title: string
    short_description: string
    createdAt: string
}

export const usePostStore = defineStore('post', () => {
    const posts = ref<IPost[]>([])

    async function getPosts() {
        const {data} = await instance.get<IPost[]>('/post')
        posts.value = data
    }

    return {
        posts,
        getPosts
    }
})