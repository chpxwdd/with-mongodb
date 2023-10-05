export interface IInputHeadToHead {
    h2h: string
    optional?: {
        date?: Date // 'YYYY-MM-DD
        league?: number
        season?: number
        last?: number
        from?: Date
        to?: Date
        venue?: number
        status?: string
        timezone?: string
    }
}