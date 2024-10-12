import { CommentType } from "./type";

export const sortByLike = (comments: CommentType[]) => {
    const result: CommentType[] = comments.sort((a, b) => {
        return a.like - b.like;
    });
    return result
}

export const sortByDate = (comments: CommentType[]) => {
    const year = new Date().getFullYear();
    const result: CommentType[] = comments.sort((a, b) => {
        const dateA = new Date(`${year}-${a.ctime.replace(' ', 'T')}`);
        const dateB = new Date(`${year}-${b.ctime.replace(' ', 'T')}`);
        return dateA.valueOf() - dateB.valueOf();
    });

    return result
}