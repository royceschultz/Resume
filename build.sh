# Requires MacTeX (http://www.tug.org/mactex/)
pdflatex resume.tex
rm resume.log
rm resume.out
rm resume.aux

# Get git branch for custom naming scheme.
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
if [ $branch = "master" ]; then
    branch=""
else
    branch="_${branch}"
fi
name="Schultz_Resume${branch}.pdf"

cp resume.pdf $name

# Requires ImageMacick (https://imagemagick.org/script/download.php)
convert \
  -density 250 \
  resume.pdf \
    -background White \
    -flatten \
    -quality 100 \
  resume.png
