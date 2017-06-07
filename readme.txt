
#start mongodb
go to -> mongodb\bin
	run: mongo
	

#install express api dependencies
go to -> bookstore_restapi
		run: npm install
		
#install node dependencies
got to -> bookstore_restapi/client
    run:
		npm install
		

#make sure mongodb is running

#run express api
go to -> bookstore_restapi
		run: nodemon
		
#run angular typescript outo-compiter so that the code updates automaticly
got to -> bookstore_restapi/client
    run:
		npm start