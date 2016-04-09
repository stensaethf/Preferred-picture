#!/bin/bash
read -p "Refreshing the DB. Are you sure you're not on prod? " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Exiting due to uncertainty! KTHXBAI"
    exit 1
fi

echo "Killing old mongod servers..."
killall mongod > /dev/null
wait $!
sleep 1

echo "Removing and remaking disk files..."
rm -rf .mongo
mkdir -p .mongo/db .mongo/log
chmod -R 777 .mongo

echo "Starting mongod server..."
mongod -f ./mongoconf.yml --noauth > /dev/null

echo "Creating users and auth..."
mongo < ./seeds/create_admin.js > /dev/null
wait $!

echo "Stopping server..."
killall mongod
wait $!
sleep 1
rm .mongo/log/*
sleep 1

echo "Restarting with auth..."
mongod -f ./mongoconf.yml > /dev/null
sleep 1

# echo "Creating seed data..."
# node ./seeds/seed_all.js > /dev/null
# node ./seeds/makeTags.js > /dev/null

echo "Database refresh complete!"
echo ""
