init:
	@ echo "❯ Installing node_modules for Hexo..."
	@ sudo npm install
	@ echo "❯ Installing node_modules for DL theme..."
	@ npm install -g gulp
	@ cd themes/dl/assets && sudo npm install

serve:
	@ echo "❯ Initializing server..."
	@ hexo serve

watch:
	@ echo "❯ Watching..."
	@ cd themes/dl/assets && gulp

clean:
	@ echo "❯ Cleaning..."
	@ hexo clean

gen:
	@ echo "❯ Minifying assets..."
	@ cd themes/dl/assets && gulp prod --production && cd ../../../
	@ echo "❯ Generating..."
	@ hexo generate

deploy:
	@ echo "❯ Deploying to denislefevre.com..."
	@ hexo deploy
