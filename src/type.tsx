export interface User {
    uid: string;
    avatar: string;
    uname: string;
}

export interface CommentType {
    rpid: number;
    user: User;
    content: string;
    ctime: string;
    like: number;
}