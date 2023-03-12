install:
	make -C calculator install

lint:
	make -C calculator lint

start:
	make -C calculator start

test:
	make -C calculator test

build:
	npm run build

.PHONY: test build