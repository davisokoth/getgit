echo "Beginning build..."
echo "==================================="
echo ""
ngtw build && ng build --prod --base-href / --build-optimizer --output-hashing=all
echo ""
echo "Now deploying..."
echo ""
rm -r /var/www/html/*
cp -r dist/* /var/www/html/
echo ""
echo "====================================="
echo "End build "
