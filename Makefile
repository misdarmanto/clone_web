include .env
export

NPM = npm
VITE = npx vite
SCP = scp -i $(VITE_SSH_KEY)
SSH = ssh -i $(VITE_SSH_KEY) $(VITE_SERVER_USER)@$(VITE_SERVER_IP)

.PHONY: help
help:
	@echo "Available commands:"
	@echo ""
	@echo "make dev        - run development server"
	@echo "make build      - Build production app"
	@echo "make start      - Start app with PM2"
	@echo "make stop       - Stop app in PM2"
	@echo "make restart    - Restart app in PM2"
	@echo "make deploy     - Build and deploy to server"
	@echo ""

.PHONY: dev
dev:
	$(VITE)

.PHONY: build
build:
	rm -rf $(VITE_BUILD_DIR) || true
	$(VITE) build

.PHONY: deploy
deploy: build
	$(SCP) -r $(VITE_BUILD_DIR)/* $(VITE_SERVER_USER)@$(VITE_SERVER_IP):$(VITE_SERVER_PATH)
	$(SSH) "cd $(VITE_SERVER_PATH) && ls -la"

.PHONY: start
start:
	$(SSH) "cd $(VITE_SERVER_PATH) && pm2 serve $(VITE_SERVER_PATH) 3006 --spa --no-daemon"

.PHONY: stop
stop:
	$(SSH) "pm2 stop all || echo 'No processes to stop'"

.PHONY: restart
restart: stop start
