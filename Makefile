init:
	@ echo "❯ Installing node_modules for Hexo..."
	@ sudo npm install
	@ echo "❯ Installing node_modules for DL theme..."
	@ npm install -g gulp
	@ cd themes/dl/source && sudo npm install

serve:
	@ echo "❯ Initializing server..."
	@ hexo serve

watch:
	@ echo "❯ Watching..."
	@ cd themes/dl/source && gulp

gen:
	@ echo "❯ Generating..."
	@ hexo generate

deploy:
	@ echo "❯ Minifying CSS and JS assets..."
	@ cd themes/dl/source && gulp prod --production && cd ../../../
	@ echo "❯ Deploying to denislefevre.com..."
	@ hexo deploy
