# Render pdf
yarn go

# Get git branch for custom naming scheme.
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
if [ $branch = "master" ]; then
    branch=""
else
    branch="_${branch}"
fi
name="Royce_Schultz_Resume${branch}"

echo Naming PDF...
cp build/resume.pdf $name.pdf

# Convert to png for README.md display
# Requires ImageMacick (https://imagemagick.org/script/download.php)
echo Converting to PNG...
convert \
  -density 250 \
  $name.pdf \
    -background White \
    -flatten \
    -quality 100 \
  $name.png

echo ✨  Done
