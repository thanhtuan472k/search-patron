export interface IUser {
    Href: string
    UserId: number
    FirstName: string
    LastName: string
    Status: string
    SiteId: number
    IsPINLocked: boolean
    LoginName: string
    JWT: string
  }


export interface ILoginBody {
    userName: string
    password: string
    domain: string,
    timeToLive: number
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