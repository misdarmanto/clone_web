APP_NAME = satu_data_app
BUILD_DIR = dist
SERVER_USER = root
SERVER_IP = 192.168.1.100
SERVER_PATH = /var/www/satu_data
SSH_KEY = ~/.ssh/id_rsa

NPM = npm
VITE = npx vite
SCP = scp -i $(SSH_KEY)
SSH = ssh -i $(SSH_KEY) $(SERVER_USER)@$(SERVER_IP)

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
	rm -rf $(BUILD_DIR) || true
	$(VITE) build

.PHONY: deploy
deploy: build
	$(SCP) -r $(BUILD_DIR)/* $(SERVER_USER)@$(SERVER_IP):$(SERVER_PATH)
	$(SSH) "cd $(SERVER_PATH) && ls -la"

.PHONY: start
start:
	$(SSH) "cd $(SERVER_PATH) && pm2 serve $(SERVER_PATH) 3000 --spa --no-daemon"

.PHONY: stop
stop:
	$(SSH) "pm2 stop all || echo 'No processes to stop'"

.PHONY: restart
restart: stop start
