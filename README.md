# cclub

1. install json-server with "npm install -g json-server"
2. Create a .json file. ex- db.json
3. start the json server by "json-server --watch db.json"

How to add content (for now...)
=======================
 You will need to make changes in mocks/mock.json.

To add a topic you will need to add a key under init. Let's add a `Maths` topic. 

```
{ 
   'init': {
         'Maths': [{'name: 'Probability', url: 'probability'},
                        {name: 'Algebra', 'url': 'algebra'}]
    }
}
```

Here `Maths` corresponds to an array of objects, each object is an subtopic. The name of the subtopics will be `Probability` and 'Algebra' which will point to `/probability` and `/algebra` endpoints.

Now to add content for these endpoint, you will have to make a key of same name as the endpoint , here `algebra` and `probability`. 

```
'algebra': { 'lesson': 'Here is your algebra related content in markdown format'},
'probability': { 'lesson': 'Here is your probability related content in markdown format'}
```

To create the markdown use *[this](https://codepen.io/freeCodeCamp/full/JXrLLE)*.

You will also have to convert it to a single string for javascript (use babel for that).

Lastly send the PR
