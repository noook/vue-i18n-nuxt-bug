nvm:
	. ${NVM_DIR}/nvm.sh && nvm use

start:
	make nvm
	node --inspect=9244 ./node_modules/.bin/nuxt dev

install:
	make nvm
	npm install