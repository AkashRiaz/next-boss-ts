interface UserAccount {
    id: number;
    userName: string;
    password: string;
}


type PublicUser = Omit<UserAccount, "password">