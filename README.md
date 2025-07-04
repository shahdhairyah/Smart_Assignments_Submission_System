# Smart Assignments Submission System - Makefile
# High-level automation for development and deployment

# Variables
PROJECT_NAME = smart-assignments-system
DB_NAME = smart_assignments
DB_USER = root
DB_HOST = localhost
WEB_ROOT = /var/www/html/$(PROJECT_NAME)
BACKUP_DIR = ./backups
LOG_DIR = ./logs

# Colors for output
RED = \033[0;31m
GREEN = \033[0;32m
YELLOW = \033[1;33m
BLUE = \033[0;34m
NC = \033[0m # No Color

# Default target
.PHONY: help
help:
	@echo "$(BLUE)Smart Assignments Submission System - Available Commands$(NC)"
	@echo ""
	@echo "$(GREEN)Setup Commands:$(NC)"
	@echo "  install          - Install and setup the complete system"
	@echo "  setup-db         - Create database and import schema"
	@echo "  setup-files      - Set up file permissions and directories"
	@echo ""
	@echo "$(GREEN)Development Commands:$(NC)"
	@echo "  dev              - Start development environment"
	@echo "  test             - Run basic system tests"
	@echo "  clean            - Clean temporary files and logs"
	@echo ""
	@echo "$(GREEN)Database Commands:$(NC)"
	@echo "  db-backup        - Create database backup"
	@echo "  db-restore       - Restore database from backup"
	@echo "  db-reset         - Reset database to initial state"
	@echo ""
	@echo "$(GREEN)Deployment Commands:$(NC)"
	@echo "  deploy           - Deploy to production server"
	@echo "  deploy-staging   - Deploy to staging environment"
	@echo "  status           - Check system status"

# Installation and Setup
.PHONY: install
install: setup-directories setup-db setup-files
	@echo "$(GREEN)✓ Installation completed successfully!$(NC)"
	@echo "$(YELLOW)Access your system at: http://localhost/$(PROJECT_NAME)$(NC)"

.PHONY: setup-directories
setup-directories:
	@echo "$(BLUE)Creating project directories...$(NC)"
	@mkdir -p $(BACKUP_DIR)
	@mkdir -p $(LOG_DIR)
	@mkdir -p uploads/assignments
	@mkdir -p uploads/submissions
	@mkdir -p temp
	@echo "$(GREEN)✓ Directories created$(NC)"

.PHONY: setup-db
setup-db:
	@echo "$(BLUE)Setting up database...$(NC)"
	@mysql -u $(DB_USER) -p -e "CREATE DATABASE IF NOT EXISTS $(DB_NAME);"
	@if [ -f database/schema.sql ]; then \
		mysql -u $(DB_USER) -p $(DB_NAME) < database/schema.sql; \
		echo "$(GREEN)✓ Database schema imported$(NC)"; \
	else \
		echo "$(YELLOW)⚠ Database schema file not found$(NC)"; \
	fi
	@if [ -f database/sample_data.sql ]; then \
		mysql -u $(DB_USER) -p $(DB_NAME) < database/sample_data.sql; \
		echo "$(GREEN)✓ Sample data imported$(NC)"; \
	fi

.PHONY: setup-files
setup-files:
	@echo "$(BLUE)Setting up file permissions...$(NC)"
	@chmod -R 755 .
	@chmod -R 777 uploads/
	@chmod -R 777 temp/
	@chmod -R 755 logs/
	@if [ -f config/database.php.example ]; then \
		cp config/database.php.example config/database.php; \
		echo "$(YELLOW)⚠ Please update config/database.php with your settings$(NC)"; \
	fi
	@echo "$(GREEN)✓ File permissions set$(NC)"

# Development
.PHONY: dev
dev:
	@echo "$(BLUE)Starting development environment...$(NC)"
	@php -S localhost:8000 -t .
	@echo "$(GREEN)✓ Development server started at http://localhost:8000$(NC)"

.PHONY: test
test:
	@echo "$(BLUE)Running system tests...$(NC)"
	@php -l index.php && echo "$(GREEN)✓ PHP syntax check passed$(NC)" || echo "$(RED)✗ PHP syntax errors found$(NC)"
	@if [ -f tests/test.php ]; then \
		php tests/test.php; \
	else \
		echo "$(YELLOW)⚠ No test files found$(NC)"; \
	fi

.PHONY: clean
clean:
	@echo "$(BLUE)Cleaning temporary files...$(NC)"
	@rm -rf temp/*
	@rm -rf logs/*.log
	@find . -name "*.tmp" -delete
	@find . -name "*~" -delete
	@echo "$(GREEN)✓ Cleanup completed$(NC)"

# Database Management
.PHONY: db-backup
db-backup:
	@echo "$(BLUE)Creating database backup...$(NC)"
	@mkdir -p $(BACKUP_DIR)
	@mysqldump -u $(DB_USER) -p $(DB_NAME) > $(BACKUP_DIR)/$(DB_NAME)_$(shell date +%Y%m%d_%H%M%S).sql
	@echo "$(GREEN)✓ Database backup created$(NC)"

.PHONY: db-restore
db-restore:
	@echo "$(BLUE)Restoring database from backup...$(NC)"
	@echo "$(YELLOW)Available backups:$(NC)"
	@ls -la $(BACKUP_DIR)/*.sql 2>/dev/null || echo "$(RED)No backups found$(NC)"
	@read -p "Enter backup filename: " backup_file; \
	if [ -f "$(BACKUP_DIR)/$$backup_file" ]; then \
		mysql -u $(DB_USER) -p $(DB_NAME) < $(BACKUP_DIR)/$$backup_file; \
		echo "$(GREEN)✓ Database restored$(NC)"; \
	else \
		echo "$(RED)✗ Backup file not found$(NC)"; \
	fi

.PHONY: db-reset
db-reset:
	@echo "$(RED)⚠ This will delete all data! Are you sure? (y/N)$(NC)"
	@read -p "" confirm; \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		mysql -u $(DB_USER) -p -e "DROP DATABASE IF EXISTS $(DB_NAME);"; \
		make setup-db; \
		echo "$(GREEN)✓ Database reset completed$(NC)"; \
	else \
		echo "$(YELLOW)Database reset cancelled$(NC)"; \
	fi

# Deployment
.PHONY: deploy
deploy:
	@echo "$(BLUE)Deploying to production...$(NC)"
	@make db-backup
	@rsync -avz --exclude='.git' --exclude='temp' --exclude='logs' ./ $(WEB_ROOT)/
	@echo "$(GREEN)✓ Production deployment completed$(NC)"

.PHONY: deploy-staging
deploy-staging:
	@echo "$(BLUE)Deploying to staging environment...$(NC)"
	@echo "$(YELLOW)Staging deployment - implement your staging logic here$(NC)"

.PHONY: status
status:
	@echo "$(BLUE)System Status Check$(NC)"
	@echo "$(YELLOW)Database Connection:$(NC)"
	@mysql -u $(DB_USER) -p$(DB_PASS) -e "SELECT 1;" 2>/dev/null && echo "$(GREEN)✓ Database OK$(NC)" || echo "$(RED)✗ Database Error$(NC)"
	@echo "$(YELLOW)Web Server:$(NC)"
	@curl -s http://localhost/$(PROJECT_NAME) >/dev/null && echo "$(GREEN)✓ Web Server OK$(NC)" || echo "$(RED)✗ Web Server Error$(NC)"
	@echo "$(YELLOW)File Permissions:$(NC)"
	@[ -w uploads/ ] && echo "$(GREEN)✓ Upload directory writable$(NC)" || echo "$(RED)✗ Upload directory not writable$(NC)"
	@[ -w temp/ ] && echo "$(GREEN)✓ Temp directory writable$(NC)" || echo "$(RED)✗ Temp directory not writable$(NC)"

# Utility Commands
.PHONY: logs
logs:
	@echo "$(BLUE)Recent system logs:$(NC)"
	@tail -n 50 logs/error.log 2>/dev/null || echo "$(YELLOW)No error logs found$(NC)"

.PHONY: update
update:
	@echo "$(BLUE)Updating system...$(NC)"
	@git pull origin main
	@make clean
	@echo "$(GREEN)✓ System updated$(NC)"

.PHONY: info
info:
	@echo "$(BLUE)System Information$(NC)"
	@echo "Project: $(PROJECT_NAME)"
	@echo "Database: $(DB_NAME)"
	@echo "Web Root: $(WEB_ROOT)"
	@echo "PHP Version: $(shell php -v | head -n 1)"
	@echo "MySQL Version: $(shell mysql --version)"
