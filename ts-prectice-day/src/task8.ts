interface MyDocument {
    title: string;
    content: string;
    author: string;
}

type Draft<T> = {
   readonly [key in keyof T]?: T[key]
}


const myDraft : Draft<MyDocument> = {
    title: "draft title"
}

// myDraft.title = "ada"