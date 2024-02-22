let x;

const post = {
    title: "Post one",
    id: 1,
    body: "This is the body"
}

const str = JSON.stringify(post);

const obj = JSON.parse(str)

x = obj;
x = str;

const posts = [
    {
        title: "Post one",
        id: 1,
        body: "This is the body"
    },
    {
        title: "Post two",
        id: 2,
        body: "This is the body"
    },
    {
        title: "Post three",
        id: 3,
        body: "This is the body"
    }
]

const str2 = JSON.stringify(posts);
x = str2;

const str3 = JSON.parse(str2);
x = str3;

console.log(x);