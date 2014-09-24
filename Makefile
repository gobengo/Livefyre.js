.PHONY: all build node_modules_prod

all: build

build: node_modules

dist: node_modules_prod
	npm run build && npm run build-non-min

version:
	./node_modules/.bin/json -E 'this.version="$(v)"' -f package.json -I
	./node_modules/.bin/json -E 'this.version="$(v)"' -f bower.json -I

# if package.json changes, install
node_modules: package.json
	npm install
	./node_modules/bower/bin/bower install
	(cd ./lib/lfpackages && make build)
	touch $@

node_modules_prod:
	npm install --production
	./node_modules/bower/bin/bower install --production --force-latest
	(cd ./lib/lfpackages && make build)

test: build
	npm test

clean:
	rm -rf node_modules lib dist

package: dist

run: server

server: build
	npm start

lint: build
	./node_modules/jshint/bin/jshint src

env=dev
deploy: dist
	./node_modules/.bin/lfcdn -e $(env)

env=dev
build=1
deploy_build: dist
	./node_modules/.bin/lfcdn -e $(env) --build=$(build)
