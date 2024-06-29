import Mock, { Random } from "mockjs";

const API_URL = import.meta.env.VITE_CGAME_API_URL;

Mock.mock(`${API_URL}/books`,'get', () => {
  let res = Mock.mock({
    "books|5-10": [{
      "_id": '@id',
      "title":'@title(3)',
      "cover":Random.image('200x100','#7987f2','@title(3)'),
      "author": {
        "_id": '@id',
        "full_name": '@name',
      }
    }]
  }).books
  return res;
});

Mock.mock(`${API_URL}/books/summary`, 'get', () => {
  return {
    "sumBook": Mock.mock('@integer(0, 10000)'),
    "sumAuthor": Mock.mock('@integer(0, 10000)'),
    "sumGenre": Mock.mock('@integer(0, 10000)'),
  }
});

Mock.mock(`${API_URL}/authors`,'get', () => {
  let res = Mock.mock({
    "authors|5-10": [{
      "_id": '@id',
      "full_name": '@name',
    }]
  }).authors
  return res;
});

Mock.mock(`${API_URL}/books/create`, 'post', (options) => {
  const data = JSON.parse(JSON.parse(options.body).body);
  let res = {
    ...data,
    author: {
      _id: data.author[0]
    },
    _id: Mock.mock('@id'),
    cover: Random.image('200x100','#7987f2')
  }
  console.log("post Res: " + JSON.stringify(res));
  return res;
});

Mock.mock(/books\/*/,'get', () => {
  let res = Mock.mock({
    "_id": '@id',
    "title":'@title(3)',
    "cover":Random.image('200x100','#7987f2','@title(3)'),
    "author": {
      "_id": '@id',
      "full_name": '@name',
    }
  })
  return res;
});