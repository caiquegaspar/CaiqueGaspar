if [ "$CF_PAGES_BRANCH" == "main" ]; then
    directory=dist

    if [ ! -d $directory ]; then
        mkdir -p $directory
        cp index.html $directory
        cp -r css images js $directory
    fi

elif [ "$CF_PAGES_BRANCH" == "develop" ]; then

    npm run build

fi
