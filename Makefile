.PHONY: deploy deploy-backend deploy-front deploy-test

ifneq (,$(wildcard .env.deploy))
include .env.deploy
export
endif

deploy: deploy-backend deploy-front

deploy-backend:
	rsync -av --itemize-changes --delete \
		$(RSYNC_EXCLUDES) \
		portfolioBack/ \
		$(SERVER_USER)@$(SERVER_HOST):~/$(API_PATH)

deploy-front:
	npm --prefix front run build
	rsync -av --itemize-changes --delete \
		front/dist/ \
		$(SERVER_USER)@$(SERVER_HOST):~/$(FRONT_PATH)

deploy-test:
	rsync -av --itemize-changes --dry-run --delete \
		$(RSYNC_EXCLUDES) \
		portfolioBack/ \
		$(SERVER_USER)@$(SERVER_HOST):~/$(API_PATH)

	npm --prefix front run build
	rsync -av --itemize-changes --dry-run --delete \
		front/dist/ \
		$(SERVER_USER)@$(SERVER_HOST):~/$(FRONT_PATH)
