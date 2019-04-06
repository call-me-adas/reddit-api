# Interview task

### Installation
* `npm install` or `yarn`

### Development 
* run `npm start` which will start `ng serve`

# Questions

##### 1. Explain your choices regarding stack used as well as alternatives and their pros and cons
`I choose Angular7 and ngrx because i like ng architecutre and homogeneity in making projects.
Biggest pros of using these frameworks are scalability and nice tools in expanding. One of cons is definitely
time.`
#####  2. How would you go with application internationalisation?
`I would implement i18n module in AppModule. Then use pipe in view.`
#####  3. What could impact this application's performance most in longer term and what would be your ways to optimize it?
`Very long list. I would implement Virtual Scroll with Angular CDK`
#####  4. What if you had to make it work on lower-end devices and slow internet connection? What trade-offs would have to be made?
`I will implement pagination for mobile devices for list`
#####  5. How would you report and collect errors from application?
`We can collect errors in ngrx. We handle them in effects. We can send them automatically when it occurs.`
#####  6. How long did it take you to code this app?
`Around 10 hours`
