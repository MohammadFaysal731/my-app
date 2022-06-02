/**
 * 
 * tow way to convert your assignment repository to your public repository. 
 * .first way
 *  
 * 1.find the link of the private repo of your assignment
 * 2.create a folder
 * 3.open cmd and cd to that folder[myAssignment]
 * 4.git clone --bare <private repo .git link>
 * 5.cd to the folder of the assignment .git folder
 * 6.go to github .com and create a public repo 
 * 7.git push --mirror <public repo .git link>
 * 
 * push code to the public repo from assignment folder of you computer
 * 1.git remote set-url origin <public repo .git link>
 * 
 * ---------
 * alternative:
 * 1.clone your public repo
 * 
 * 
 * app.use(cors({origin: 'আপনার ফায়ারবেইজের লাইভ লিংক'})

এর পর

git add .

git commit -m'msg',

git push, 

git push heroku main করেন.

এরপর

heroku restart কমান্ড টি দিন। 

সব চেক করে রিচেক রিকোয়েস্ট দিন।
 * 
 * 
*/