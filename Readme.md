Hi Viewers Thankyou For Visiting this Repo 

Endpoints for this API is 

GET:http://localhost:8080/task
</br>
ADD:http://localhost:8080/task (just do post request here)
</br>
DELETE:http://localhost:8080/task/id       (Provide id of the task you want to delete)
</br>
UPDATE:http://localhost:8080/task/id       (Provide id of the task you want to update)


Commands for setting NodeJs project with typescript
</br>
npm init -y
</br>
npm init -D typescript @types/express ts-node nodemon
</br>
npm i express
</br>
npx tsc --init
</br>
uncomment rootDir in tsconfig.json
"rootDir":"./src"
</br>
</br>
uncomment outDir in tsconfig.json
"outDir":"./dist"
</br>
In package.json do this inside script object 

"watch":"tsc -w",
"start": "tsc && nodemon dist/app.js"
