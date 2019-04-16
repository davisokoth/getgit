echo "Beginning build..."
echo "==================================="
echo ""
ngtw build && ng build --prod --base-href / --build-optimizer --output-hashing=all
echo ""
echo "Now deploying..."
echo ""
sudo rm -r /var/www/html/*
sudo cp -r dist/getgit/* /var/www/html/
echo ""
echo "====================================="
echo "End build "
