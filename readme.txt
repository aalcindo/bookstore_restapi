#mongodb instalation 
1 - download and install in C:/
2 - create: (use windows cmd)
	C:\mongodb\data\db         //create dirs data and db
	C:\mongodb\log\mongo.log    //create fir log and file mongo.log
3 - run command in 'C:\mongodb\bin>' to have mongodb be a service
      mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\
mongodb\log\mongo.log --logappend --rest
4 - start mongodb service(run command in 'C:\mongodb\bin>'):
      net start MongoDB

5 - open mongo shell(run command in 'C:\mongodb\bin>')
       mongo


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
