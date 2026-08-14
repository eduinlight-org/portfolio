SHELL=/bin/bash

JS_IMAGE_NAME=portfolio-js
CONTAINER_WORKING_DIR=/home/node/app
PROD_COMPOSE=docker compose -f deploy/docker-compose.prod.yaml

# Every task runs inside the dev image, so no local Node toolchain is required.
DOCKERIZED=docker run --rm \
	-v .:$(CONTAINER_WORKING_DIR) -w $(CONTAINER_WORKING_DIR) \
	$(JS_IMAGE_NAME)

all: install

reinstall: uninstall install

install: env compose-build pnpm-install compose-up welcome

uninstall: compose-down

reset: uninstall install

start: compose-up welcome

stop: compose-down

restart:
	@docker compose up -d --force-recreate

env:
	@test -f .env || (cp .env.dist .env && echo "✔ .env created from .env.dist")

pnpm-install:
	@docker run --rm -e CI=true -v .:$(CONTAINER_WORKING_DIR) -w $(CONTAINER_WORKING_DIR) $(JS_IMAGE_NAME) pnpm install --no-frozen-lockfile

format:
	@$(DOCKERIZED) pnpm exec biome format --write .

lint:
	@$(DOCKERIZED) pnpm exec biome lint --write .

check:
	@$(DOCKERIZED) pnpm exec biome check --write .

tsc:
	@$(DOCKERIZED) pnpm run typecheck

test:
	@$(DOCKERIZED) pnpm test

build:
	@$(DOCKERIZED) pnpm build

full-check: tsc check test build

compose-build:
	@docker compose build

compose-up:
	@docker compose up -d

compose-down:
	@docker compose down

logs:
	@docker compose logs -f web

shell:
	@docker compose exec web bash

prod-build:
	@$(PROD_COMPOSE) build

prod-up:
	@$(PROD_COMPOSE) up -d

prod-down:
	@$(PROD_COMPOSE) down

welcome:
	@echo ""
	@echo "Portfolio is now running!"
	@echo ""
	@echo -e "  - Site:  \033[34mhttp://localhost:$${PORT:-3000}\033[0m"
	@echo ""
	@echo "Quick Commands:"
	@echo "  - make stop        - Stop the stack"
	@echo "  - make logs        - Follow the dev server output"
	@echo "  - make check       - Format & lint code"
	@echo "  - make full-check  - Typecheck, lint, test and build"
	@echo "  - make reset       - Clean reset"
	@echo ""

.PHONY: all reinstall install uninstall reset start stop restart env pnpm-install \
	format lint check tsc test build full-check compose-build compose-up compose-down \
	logs shell prod-build prod-up prod-down welcome
