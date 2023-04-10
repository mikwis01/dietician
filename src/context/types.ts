export interface AppType {
  readonly mobileNavOn: boolean
}

export interface AppContextType {
  readonly app: AppType | undefined
  readonly handleToggleMobileNav: () => void
}
