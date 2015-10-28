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
	@ echo "❯ Deploying to denislefevre.com..."
	@ hexo deploy