export interface IUser {
    _id: string
    first_name: string
    last_name: string
    email: string
    password: string
    avatar: string
    date: string
    __v: number
}

export interface Token {
    token: string
    refreshToken: string
}

export interface ILoginBody {
    email: string
    password: string
}

export interface IPatronQuery {
    passport: string
    dob: string
}

export interface IPatron {
    Href: string
    PersonId: number
    PatronNumber: number
    DateEnrolled: string
    DateOfBirth?: string
    FirstName: string
    MiddleName?: string
    LastName: string
    PreferredName?: string
    NameSuffix?: string
    Gender?: number
    GradingId: number
    IsDeceased: boolean
    IsDeleted: boolean
    Title?: string
    NationalityIso?: string
    PlayerGroupIds?: number[]
    Occupation: any
    PictureRef?: string
    LastVisit: any
    Banned: boolean
    Relevance: number
    Cards: any
    Identifications: any
    Communications: any
}