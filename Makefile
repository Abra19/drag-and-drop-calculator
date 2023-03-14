install:
	make -C calculator install

lint:
	make -C calculator lint

start:
	make -C calculator start

build:
	make -C calculator build

.PHONY: build