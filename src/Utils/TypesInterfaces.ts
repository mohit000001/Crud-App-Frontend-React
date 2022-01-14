interface Student {
    id: number | string
    name: string,
    age: number,
    class: string,
    section: string
}
interface updateRequest {
    query: {
        id: number | string
    },
    data: {
        name: string,
        age: number,
        class: string,
        section: string
    }
}
export type { Student, updateRequest }